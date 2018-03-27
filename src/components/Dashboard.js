
import React, { Component } from 'react'
//import Header from './Header'
//import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import OrdersMap from './GoogleMap'
import { ordersAddress, filterByRestaurants } from '../selectors/orders'
import { fetchRestaurantList } from '../services/api'
import FaMapO from 'react-icons/lib/fa/map-o'
import MultiSelect from './MultiSelect'

class Dashboard extends Component {

  state = {}
  getOrderById(id) {
    const {orders} = this.props 
    return orders.filter(o=>o.id===id)[0]
  }

  getRestaurantNameById(id){
    const {restaurants} = this.props 
    return "eran"
  }

  getCurrencyFont(code){
    const {currencies} = this.props
    return currencies.filter(c=>c.code===code).font
  }

  handleSelect = (restaurants) => {
    const {orders} = this.props
    let addresses;
    if(restaurants.length>0){
    const fitered = filterByRestaurants(orders, restaurants)
    addresses = fitered.map(order=>order.address.address)
    }else{
      addresses = ordersAddress(orders)
    }
    this.setState({addresses})
  }

  render() {
    const { orders, deliveries, getOrderById, getCurrency, restaurants } = this.props
    const addresses = this.state.addresses || ordersAddress(orders)
    return (
      <div className="d-flex justify-content-center flex-column align-items-center">
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
        <div className="container-fluid flex-row d-flex">
          <div className="dashboard-right-list">
            {orders.length>0&&deliveries.map((d, i) => (
              <details key={i} className="delivery">
                <summary>{d.firstRestaurantAdded}</summary>
                <ul>
                  {d.orders.map(id => {
                    const o = this.getOrderById(id)
                    return (
                      <li key={id}>
                        <details>
                          <summary>{o.address.address}</summary>
                          <ul>
                            <li> {o.phoneNumber} </li>
                            <li> {o.orderItems}</li>
                            <li>{this.getRestaurantNameById(o.restaurantId)}</li>
                            <li>{o.createdAt.toString()}</li>
                            <li>{o.comment}</li>
                            
                            <li>{o.totalPrice}({this.getCurrencyFont(o.currency)})</li>
                          </ul>
                        </details>
                      </li>)
                  })}
                </ul>
              </details>))
            }
          </div>
          <div className="d-flex justify-content-between flex-column">
            <div className="d-flex align-items-center">
              <FaMapO size="26" />
              <MultiSelect 
                className="container-fluid pr-0 "  
                multi={true} 
                rtl={true}
                placeholder={"סנן לפי מסעדות"} 
                values={restaurants} 
                handleSelect={this.handleSelect} />
            </div>
            <OrdersMap lat={31.252973} lng={34.791462} className="dashboard-map" addresses={addresses} />
          </div>

          <div className="right-side"></div>
        </div>
      </div>//end container
    );
  }
}

const mapStateToProps = (state) => {
  return {
    deliveries: state.deliveries,
    orders: state.orders,
    restaurants: fetchRestaurantList(),
    currencies: []
  }
}

export default connect(mapStateToProps)(Dashboard)