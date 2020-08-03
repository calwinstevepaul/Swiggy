import React, { Component } from 'react'

export class OrderStatusList extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.food.user.name}</td>
                <td>{this.props.data.food.foodName}</td>
                <td>Rs {this.props.data.food.price} /-</td>
                <td>{this.props.data.isPrepared ? <div className="selected"><i class="fas fa-check"></i></div> : "Pending..."}</td>
                <td>{this.props.data.isDelivered ? <div className="selected"><i class="fas fa-check"></i></div> : "Pending..."}</td>

            </tr>
        )
    }
}

export default OrderStatusList
