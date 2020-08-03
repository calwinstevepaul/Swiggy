import React, { Component } from 'react'
import InputBox from '../ReuseComp/InputBox'
import {authApi} from '../../apiCall'
import swal from 'sweetalert'


export class AddFood extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             foodName:"",
             ingredients:"",
             price:"",
             category:""
        }
    }
    eventHandle=(e)=>{
        let value = e.target.value
       
        this.setState({
            [e.target.name]: value
        })
    }
    
    submit=()=>{
        authApi.post("/update/food",{
            foodName:this.state.foodName,
            ingredients:this.state.ingredients,
            price:this.state.price,
            category:this.state.category
        }).then((res)=>{
            swal({icon:"success",text:"Food Added !!"})     
        })
    }
    
    render() {
        return (
            <div className="moderators">
                <div className="moderators-inner">
                    <strong>
                        <h3>Create a food category</h3>
                    </strong>
                    <div className="text-field">
                        <label>Food Name : </label>
                        <InputBox  placeholder="Food Name" name="foodName" type="text" value={this.state.foodName} onChange={this.eventHandle} />
                    </div>

                    <div className="text-field">
                        <label>Ingredients : </label>
                        <InputBox  placeholder="Ingredients" name="ingredients" type="text" value={this.state.ingredients} onChange={this.eventHandle} />
                    </div>
                    <div className="text-field">
                        <label>Price : </label>
                        <InputBox  placeholder="Price" name="price" type="number"  value={this.state.price} onChange={this.eventHandle} />
                    </div>
                    <div className="text-field">
                        <label>Category : </label>
                        <select className="inputbox-1" name="category" onChange={(e)=>this.eventHandle(e)}>
                            <option value="">Choose</option>
                            <option value="italian">italian</option>
                            <option value="chinese">chinese</option>
                            <option value="south indian">south indian</option>
                            <option value="north indian">north indian</option>
                        </select>
                    </div>
                    <button onClick={()=>this.submit()} className="button">Add Food</button>
                </div>
            </div>
        )
    }
}

export default AddFood
