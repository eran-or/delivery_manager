
import React, { Component } from 'react'
//import Header from './Header'
//import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import OrdersMap from './GoogleMap'
import { filteredDeliveriesByRestaurants } from 'selectors/deliveries'
import { selectOneFromOrders } from 'selectors/orders'
import FaMapO from 'react-icons/lib/fa/map-o'
import MultiSelect from './MultiSelect'

class Dashboard extends Component {

  state = {
    // filters:{
    //   restaurants:true
    // }
  }
  styles = {
    
    deliveriesList: {
      width: '300px',
      overflowX: 'scroll'
    },
    map: {
      width: '100%',
      height: '500px'
    },
    rtl:{
      direction:'rtl'
    }
  }
  getOrderById(id) {
    const { orders } = this.props
    return orders.filter(o => o.id === id)[0]
  }

  getRestaurantNameById(id) {
    const { restaurants } = this.props
    return restaurants.filter(r=>r.id===id)[0].label
  }

  getCurrencyFont(code) {
    const { currencies } = this.props
    return currencies.filter(c => c.code === code).font
  }

  handleSelect = (restaurants) => {
    const { orders, deliveries } = this.props
   // console.log(restaurants)
    const filteredDeliveries = filteredDeliveriesByRestaurants(deliveries ,orders, restaurants)
    const orderIds = filteredDeliveries.reduce((a,d)=> a.concat(d.orders),[])
    const addresses = orderIds.map(id => selectOneFromOrders(id, orders))
    console.log(addresses)
    this.setState({ addresses,deliveries:filteredDeliveries })
  }

  // handleFiltersChange=(e)=>{
  //   const name = e.target.name,
  //   checked = e.target.checked
  //   this.setState(prevState=>({
  //     filters:{...prevState.filters,[name]:checked}
  //   }))
  // }

  componentWillMount(){
    this.handleSelect()
  }

  render() {
    const { getOrderById, getCurrency, restaurants } = this.props
    const {deliveries} = this.state
    const addresses = this.state.addresses
    return (
      <div className="d-flex justify-content-center flex-column align-items-center pt-5">
          {/* <div className="mb-3 d-flex" style={this.styles.rtl}> סנן לפי:
            <div className="pr-2"><input className="ml-1" type="checkbox" name="restaurants" checked={filters.restaurants} onChange={this.handleFiltersChange}/>מסעדות</div>
          </div> */}
        <div className="container-fluid flex-row-reverse d-flex">
          <div style={this.styles.rightList} className="text-right">
            <h5>משלוחים</h5>
            {deliveries.length > 0 && deliveries.map((d, i) => (
              <div key={i} className="delivery" style={this.styles.deliveriesList}>
                <header style={this.styles.rtl}>זמן יציאה: {new Date(d.departureTime).toLocaleTimeString()}</header>
                <ul>
                  {d.orders.map(id => {
                    const o = this.getOrderById(id)
                    return (
                      <li key={id}>
                        <details style={this.styles.rtl}>
                          <summary>{o.addressInfo.address}</summary>
                          <ul>
                          <li>שם: {o.name}</li>
                            <li>טלפון: {o.phoneNumber}</li>
                            <li>פריטים: [{o.orderItems.join(",")}]</li>
                            <li>מסעדה: {this.getRestaurantNameById(o.restaurantId)}</li>
                            <li>זמן הגעה משוער: {new Date(new Date(o.createdAt).getTime()+10000000).toLocaleTimeString()}</li>
                            <li>הוזמן ב: {new Date(o.createdAt).toLocaleTimeString()}</li>
                            <li>{o.comment}</li>
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
              
                className="container-fluid p-0 ml-4 mb-1"
                multi={true}
                rtl={true}
                placeholder={"סנן לפי מסעדות"}
                values={restaurants}
                handleSelect={this.handleSelect} />
            </div>
            {/*GoogleMap*/}
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
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps)(Dashboard)