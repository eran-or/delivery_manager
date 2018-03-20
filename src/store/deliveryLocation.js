import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import deliveriesReducer from '../reducers/deliveries';
import ordersReducer from '../reducers/orders';
//import filtersReducer from '../reducers/filters';
//import stateRecovery from '../middlewares/stateRecovery';
export default () => {
  //Store cretion
  const store = createStore(
    combineReducers({
      deliveries: deliveriesReducer,
      locations: ordersReducer
    }),
    compose(
      applyMiddleware(
        //stateRecovery
      ),(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );
  return store;
};