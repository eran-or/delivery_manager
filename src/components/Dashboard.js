
import React from 'react'
//import Header from './Header'
//import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import OrdersMap from './GoogleMap'
import selectOrdersAddress from '../selectors/orders';

 
const Dashboard = (props) => {
  const {addresses} = props
  console.log(addresses)
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
      <OrdersMap lat={31.252973} lng={34.791462} className="dashboardMap" addresses={addresses} />
    </div>
  );
}

const mapStateToProps = (state) => {
  
  return {
    addresses: selectOrdersAddress(state.orders)
  };
};
  export default connect(mapStateToProps)(Dashboard)