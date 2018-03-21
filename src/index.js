import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import AppRouter from './routers/AppRouter'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { fetchOrders } from './actions/orders'

const store = configureStore();

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

store.dispatch(fetchOrders()).then(() => {
  ReactDOM.render(app, document.getElementById('root'))
  registerServiceWorker()  
})
