import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment-twitter'


class Orders extends Component {

  render() {
    console.log(moment().twitterShort())
    const orders = [{address:"abba ahimeir 109/12", time:moment().twitterShort()}]
    return (
      <div>
        <ul>
          {orders.map((o,k) => {
            return (
              <li key={k}>
                <div><Link to="">{o.address}</Link></div>
                <div><Link to="">{o.time}</Link></div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

}


export default connect()(Orders)