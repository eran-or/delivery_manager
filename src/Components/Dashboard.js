
import React from 'react'
//import Header from './Header'
//import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import OrdersMap from './GoogleMap'

const Dashboard = (props) => {
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
      <OrdersMap lat={31.243511} lng={34.791478} className="dashboardMap" address="באר שבע" />
    </div>
  );
}
  export default connect()(Dashboard)