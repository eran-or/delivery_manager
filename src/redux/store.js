import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import ordersReducer from 'redux/reducers/orders'
import deliveriesReducer from 'redux/reducers/deliveries'
import restaurantsReducer from 'redux/reducers/restaurants'
import api from 'redux/middlewares/api'
import queue from 'redux/middlewares/queue'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  //Store cretion
  const store = createStore(
    combineReducers({
      orders: ordersReducer,
      deliveries: deliveriesReducer,
      restaurants: restaurantsReducer
    }),
    composeEnhancers(applyMiddleware(thunk,api,queue))
  )
  return store
}