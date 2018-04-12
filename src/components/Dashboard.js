
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
  styles = {
    
    deliveriesList: {
      width: '300px',
      overflowX: 'scroll'
    },
    map: {
      width: '100%',
      height: '500px'
    },
    dirRtl:{
      direction:'rtl'
    }
  }
  getOrderById(id) {
    const { orders } = this.props
    return orders.filter(o => o.id === id)[0]
  }

  getRestaurantNameById(id) {
    const { restaurants } = this.props
    console.log(restaurants)
    return "eran"
  }

  getCurrencyFont(code) {
    const { currencies } = this.props
    return currencies.filter(c => c.code === code).font
  }

  handleSelect = (restaurants) => {
    const { orders } = this.props
    let addresses;
    if (restaurants.length > 0) {
      const fitered = filterByRestaurants(orders, restaurants)
      addresses = fitered.map(order => order.addressInfo.address)
    } else {
      addresses = ordersAddress(orders)
    }
    this.setState({ addresses })
  }

  render() {
    const { orders, deliveries, getOrderById, getCurrency, restaurants } = this.props
    const addresses = this.state.addresses || ordersAddress(orders)
    return (
      <div className="d-flex justify-content-center flex-column align-items-center">
        {/* <div className="row align-items-center">
          <div className="card mb-4 box-shadow">
            <div className="card-body"></div>
          </div>
          <div className="card mb-4 box-shadow">
            <div className="card-body"></div>
          </div>
          <div className="card mb-4 box-shadow">
            <div className="card-body"></div>
          </div>
        </div> */}
        <div className="container-fluid flex-row-reverse d-flex mt-5">

          <div style={this.styles.rightList} className="text-right">
            <h5>משלוחים</h5>
            {orders.length > 0 && deliveries.map((d, i) => (
              <div key={i} className="delivery" style={this.styles.deliveriesList}>
              {console.log(d.departureTime().toString())}
                <header>{d.departureTime().toString()}</header>
                <ul>
                  {d.orders.map(id => {
                    const o = this.getOrderById(id)
                    return (
                      <li key={id}>
                        <details style={this.styles.dirRtl}>
                          <summary>{o.addressInfo.address}</summary>
                          <ul>
                          <li>שם: {o.name}</li>
                            <li>טלפון: {o.phoneNumber}</li>
                            <li>פריטים: [{o.orderItems.join(",")}]</li>
                            <li>מסעדה: {this.getRestaurantNameById(o.restaurantId)}</li>
                            <li>זמן הגעה משוער: {o.createdAt.toString()}</li>
                            <li>זמן יציאה: {o.createdAt.toString()}</li>
                            <li>הוזמן ב: {o.createdAt.toString()}</li>
                            <li>{o.comment}</li>
                            <li>{o.totalPrice}({this.getCurrencyFont(o.currency)})</li>
                          </ul>
                        </details>
                      </li>)
                  })}
                </ul>
              </div>))
            }
          </div>
          <div className="d-flex flex-column container-fluid">
            <div className="d-flex align-items-center mb-2">
              <FaMapO size="26" onClick={() => this.setState({ listView: false })} />
              <span className="ml-2 pl-2 border-left pointer" onClick={() => this.setState({ listView: true })}>רשימה</span>
              <MultiSelect
                className="container-fluid pr-0 "
                multi={true}
                rtl={true}
                placeholder={"סנן לפי מסעדות"}
                values={restaurants}
                handleSelect={this.handleSelect} />
            </div>
            {!this.state.listView &&
              <OrdersMap lat={31.252973} lng={34.791462} style={this.styles.map} addresses={addresses} />
            }

            {
              this.state.listView &&
              <div className="text-right">
                {addresses.map((a, i) => <div key={i}>{a}</div>)}
              </div>
            }
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