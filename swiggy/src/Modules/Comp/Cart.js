import React, { Component } from 'react'
import {authApi} from '../../apiCall'
import CartItems from './CartItems'
import swal from 'sweetalert'


export class Cart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             cartItems:[]
        }
    }
    componentDidMount(){
        this.getCartItems()
    }
    getCartItems=()=>{
        authApi.post("/getdata/cart",{}).then(res=>{
            this.setState({
                cartItems:res.data
            })
        })
    }

    submit=async (foodId,restaurantId,cartId)=>{
       
        try{

            await authApi.post("/update/order",{
                foodId:foodId,
                restaurantId:restaurantId
            })
            await authApi.post("/update/removefromcart",{
                id:cartId
            })
            swal({icon:"success",text:"Ordered Your Food !!"})   
            this.getCartItems()
        }
        catch(e){
            swal({icon:"error",text:"Your Food is not Ordered"})   

        }

        
    }
    
    render() {
        return (
            <div className="info">
                <div className="info-inner"> 
                    <table>
                        <tr>
                            <th>
                                RESTAURANTS 
                            </th>
                            <th>
                                FOOD
                            </th>                               
                            <th>
                                PRICE
                            </th>
                            
                            <th>
                                REMOVE FROM CART
                            </th>
                        </tr>

                        {this.state.cartItems.map(data=>{
                            return <CartItems data={data} getCartItems={this.getCartItems}/>
                        })}
                        
                        


                    </table>  
                    <div className="cart-btn">
                        <button onClick={()=>{
                             if(this.state.cartItems.length === 0){
                                swal({icon:"error",text:"Your cart is empty"})   
                            }
                            else{
                                
                                this.state.cartItems.map((data)=>this.submit(data.food.id,data.food.user.id,data.id))
                            }
                            }} 
                            className="button">Order</button>
                    </div>
                    
                </div>

            </div>
        )
    }
}

export default Cart
