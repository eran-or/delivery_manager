import { handleActions } from 'redux-actions'
import Immutable from 'seamless-immutable'
import {setRestaurants} from '../actions/restaurants'

const defaultState = Immutable({});

export default handleActions({
  //[setRestaurants]: (state, { payload: {restaurants} }) => state.merge({...restaurants})
  [setRestaurants]: (state, { payload: {restaurants} }) => Object.values(Object.assign({},state,restaurants))
}, defaultState);