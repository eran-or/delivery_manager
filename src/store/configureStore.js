import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ordersReducer from '../reducers/orders'

export default () => {
  //Store cretion
  const store = createStore(
    combineReducers({
      orders: ordersReducer
    }),
    compose(
      applyMiddleware(
        //stateRecovery
      ),(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  )
  return store
}