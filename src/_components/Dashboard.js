import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrdersMap from './GoogleMap'
import { fetchOrders } from '../actions/actions'

class Dashboard extends Component {
  render() {
    const {orders} = this.props
    console.log(orders)
    return (
      <div className="container d-flex justify-content-center flex-column align-items-center">
        <div className="dashboardTop row align-items-center">
          <div className="card mb-4 box-shadow">
            <div className="card-body"></div>
          </div>
          <div className="card mb-4 box-shadow">
            <div className="card-body"></div>
          </div>
          <div className="card mb-4 box-shadow">
            <div className="card-body"></div>
          </div>
        </div>
        <OrdersMap lat={31.252973} lng={34.791462} className="dashboardMap" addresses={[]} />
      </div>
    );
  }
}

const mapDispatchToProps = (state) => { 
  orders: fetchOrders()
}
export default connect(null,mapDispatchToProps)(Dashboard)