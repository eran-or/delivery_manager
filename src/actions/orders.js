import moment from 'moment-twitter'

export const setOrders = (orders) => ({
  type: 'SET_ORDERS',
  orders
})
export const fetchOrders = () => {
  return (dispatch, getState) => {
    return Promise.resolve({
      orders:[
        {
          deviceInfo: 'DeviceInfo',
          phoneNumber: '0544308350',
          requestedDeliveryId: 'o123',
          orderItems: ['fried chicken', 'steak'],
          deliveryAddress: 'יצחק בן צבי 2, באר שבע',
          restaurantId: 'R123', // - TBD
          payment: {}, // - TBD
          createdAt: moment().twitter(),
          comment: 'comment string',
          currency: 'shekel',
          totalPrice: 210,
        },
        {
          deviceInfo: 'DeviceInfo',
          phoneNumber: '0544308350',
          requestedDeliveryId: 'o123',
          orderItems: ['fried chicken', 'steak'],
          deliveryAddress: 'הרצל 97, באר שבע',
          restaurantId: 'R123', // - TBD
          payment: {}, // - TBD
          createdAt: moment().twitter(),
          comment: 'comment string',
          currency: 'shekel',
          totalPrice: 210,
        }
      ]
    }).then(data=>dispatch(setOrders(data.orders)))
  }
}