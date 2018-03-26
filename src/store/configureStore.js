import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import ordersReducer from '../reducers/orders'
import deliveriesReducer from '../reducers/deliveries'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  //Store cretion
  const store = createStore(
    combineReducers({
      orders: ordersReducer,
      deliveries: deliveriesReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  )
  return store
}