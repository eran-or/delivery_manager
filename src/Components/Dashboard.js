
import React from 'react'
//import Header from './Header'
//import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import OrdersMap from './GoogleMap'

const Dashboard = (props) => {
  return (
    <div>
      <div className="dashboardTop">
        <div className="card mb-4 box-shadow">
          <div className="card-body"></div>
        </div>
      </div>
      <OrdersMap lat={40.714232} lng={-73.9612889} className="dashboardMap" />
    </div>
  );
}
  export default connect()(Dashboard)