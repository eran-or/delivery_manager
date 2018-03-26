import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchOrders } from '../actions/orders'

const Orders = (props) => {
  console.log(props)
  const {orders} = props
    return (
      <div>
        <ul>
          {orders.map((o,k) => {
            return (
              <li key={k}>
                <div><Link to="">{o.deliveryAddress}</Link></div>
                <div><Link to="">{o.createdAt}</Link></div>
              </li>
            )
          })}
        </ul>
      </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    orders: dispatch(fetchOrders())
  }
}
export default connect(null, mapDispatchToProps)(Orders)