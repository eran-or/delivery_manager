import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import AppRouter from './routers/AppRouter'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const store = configureStore();

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'))
registerServiceWorker()
