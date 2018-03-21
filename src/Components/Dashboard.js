
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
      <OrdersMap lat={31.252973} lng={34.791462} className="dashboardMap" addresses={["יצחק בן צבי 2, באר שבע", "חיים יחיל 18, באר שבע", "הרצל 97, באר שבע"]} />
    </div>
  );
}
  export default connect()(Dashboard)