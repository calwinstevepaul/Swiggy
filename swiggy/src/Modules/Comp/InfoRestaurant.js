import React, { Component } from 'react'
import {authApi} from '../../apiCall'
import swal from 'sweetalert'


export class InfoRestaurant extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isFood:false
        }
    }
    changeIsFood=()=>{
        this.setState({
            isFood:!this.state.isFood
        })
    }

    addToCart=(id)=>{
        authApi.post("/update/addtocart",{
            foodId:id
        }).then(res=>{
            swal({icon:"success",text:"Added in cart!"})   
        })
    }
    
    render() {
        return (
            <>
                <tr onClick={()=>this.changeIsFood()}>
                    <td className="restaurantName">
                        <strong>
                            {this.props.data.name} {this.state.isFood?<i class="fas fa-caret-up"></i> : <i class="fas fa-caret-down"></i>}
                        </strong>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

                </tr>
                {
                    this.state.isFood
                    ?
                        this.props.data.food.map(food=>{
                            return(
                            <tr>
                                <td>

                                </td>
                                <td>
                                    <strong>
                                        {food.foodName}
                                    </strong>
                                </td>
                                <td>
                                    {food.ingredients}
                                </td>
                                <td>
                                    <strong>
                                        Rs. {food.price}/-
                                    </strong>
                                </td>
                                <td>
                                    {food.category}
                                </td>
                                <td>
                                    <button className="button" onClick={()=>this.addToCart(food.id)}>
                                        Add to Cart
                                    </button>
                                </td>
                            </tr>
                            )
                        })
                    :
                        <></>
                }

            </>
        )
    }
}

export default InfoRestaurant
