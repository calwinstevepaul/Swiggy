import React, { Component } from 'react'
import {authApi} from '../../apiCall'
import InfoRestaurant from './InfoRestaurant'


export class AddPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {           
            restaurantInfo:[],
            currentUser:[]   
        }
    }
    componentDidMount(){
        this.getRestaurant()
        this.currentUserInfo()
    }
    getRestaurant=()=>{
        authApi.post("/getdata/restaurant",{}).then(res=>{
            this.setState({
                restaurantInfo:res.data
            })
        })
    }

    currentUserInfo=()=>{
        authApi.post("/getdata/currentUser",{}).then(res=>{
            this.setState({
                currentUser:res.data[0]
            })
        })
    }
   

    render() {
       
        return (
            <div className="moderators">
                <div className="moderators-inner-2"> 
                    <table>
                        <tr>
                            <th>
                                RESTAURANTS 
                            </th>
                            <th>
                                FOOD
                            </th>
                            <th>
                                INGREDIENTS
                            </th>
                            <th>
                                PRICE
                            </th>
                            <th>
                                CATEGORY
                            </th>
                            <th>
                                ADD TO CART
                            </th>
                        </tr>
                        {this.state.restaurantInfo.map(data=>{
                            return <InfoRestaurant currentUser={this.state.currentUser} data={data}/>
                        })}
                        


                    </table>                    
                </div>

            </div>
              
        )
    }
}

export default AddPost
