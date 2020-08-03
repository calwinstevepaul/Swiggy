import React, { Component } from 'react'
import Navbar from './Comp/Navbar'
import './Home.css'
import Cart from './Comp/Cart'
import Info from './Comp/Info'
import OrderStatus from './Comp/OrderStatus'
 


export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             page:1
        }
    }
    changePage=(value)=>{
        this.setState({
            page:value
        })
    }
   
    renderSwitch(param) {
        switch(param) {
          case 1:return <Info/>
          case 2:return <Cart/> 
          case 3:return <OrderStatus/>
          default:return <Info/>
        }
    }
    
   
    render() {
        return (
            <div className="home">
                <Navbar changePage={this.changePage} {...this.props}/>  
                <div className="body">
                    {this.renderSwitch(this.state.page)}
                </div>                            
            </div>
        )
    }
}

export default Home
