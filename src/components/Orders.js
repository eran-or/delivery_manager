import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchOrders } from '../actions/orders'

const Orders = (props) => {
  const {orders} = props
  console.log(orders)
    return (
      <div>
          {orders.map((o,k) => {
            return (
              <div key={k}>
                <div>{o.address.address}</div>
                <div>{o.createdAt}</div>
                <div>{o.deviceInfo}</div>
                <div>{o.phoneNumber}</div>
                <div>{o.orderItems}</div>
                <div>{o.comment}</div>
                <div>{o.currency}</div>
              </div>
            )
          })}
        
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders
  }
}
export default connect(mapStateToProps)(Orders)