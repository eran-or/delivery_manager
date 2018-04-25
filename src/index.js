import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux/store'
import AppRouter from 'routers/AppRouter'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {ON_QUEUE, FINISH_QUEUE} from 'redux/action-types'
import {fetchOrders} from 'redux/actions/orders'
import {fetchDeliveries} from 'redux/actions/deliveries'
import {fetchRestaurants} from 'redux/actions/restaurants'

const store = configureStore()

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

const fetchOnLoadData = () => ({
  type:ON_QUEUE,
  payload:{
    actions:[fetchDeliveries, fetchRestaurants, fetchOrders],
    success: () => {
      //console.log("success")
      ReactDOM.render(app, document.getElementById('root'))
      registerServiceWorker()
      return {
        type:FINISH_QUEUE
      }
    }
  }
})
store.dispatch(fetchOnLoadData())