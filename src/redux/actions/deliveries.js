import {API, SET_DELIVERIES} from '../action-types'


//const FETCH_DELIVERIES = 'FETCH_DELIVERIES'
//const ADD_DELIVERY = 'ADD_DELIVERY'
export const setDeliveries = (deliveries) => ({
  type: SET_DELIVERIES,
  deliveries
})
export const fetchDeliveries = () => ({
  type: API,
  payload:{
    url: 'api/deliveries.json',
    success:  (data)=>setDeliveries(data),
    label:'deliveries'
  }  
})