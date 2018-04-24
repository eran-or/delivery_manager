import {API, SET_ORDERS} from '../action-types'

export const setOrders = (orders) => ({
  type: SET_ORDERS,
  orders
})

export const fetchOrders = () => ({
  type: API,
  payload: {
    url: 'api/orders.json',
    success: (orders) => setOrders(orders),
    label: 'orders'
  }
})
