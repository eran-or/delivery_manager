export const setOrders = (orders) => ({
  type: 'SET_ORDERS',
  orders
})
export const fetchOrders = () => {
  return (dispatch, getState) => {
    return Promise.resolve({
      orders:[
        {
          id:'o123',
          deviceInfo: {},
          phoneNumber: '0544308350',
          requestedDeliveryId: 'o123',
          orderItems: ['fried chicken', 'steak'],
          address: {
            address: 'יצחק בן צבי 2, באר שבע'
          },
          restaurantId: 'R123', // - TBD
          payment: {}, // - TBD
          createdAt: new Date(),
          comment: 'comment string',
          currency: 'NIS',
          totalPrice: 210,
        },
        {
          id:'o124',
          deviceInfo: {},
          phoneNumber: '0544308350',
          requestedDeliveryId: 'o123',
          orderItems: ['fried chicken', 'steak'],
          address: {
            address: 'הרצל 97, באר שבע'
          },
          restaurantId: 'R231', // - TBD
          payment: {}, // - TBD
          createdAt: new Date(),
          comment: 'comment string',
          currency: 'NIS',
          totalPrice: 210,
        },
        {
          id:'o125',
          deviceInfo: {},
          phoneNumber: '0544308350',
          requestedDeliveryId: 'o123',
          orderItems: ['fried chicken', 'steak'],
          address: {
            address: 'הרצל 21, באר שבע'
          },
          restaurantId: 'R123', // - TBD
          payment: {}, // - TBD
          createdAt: new Date(),
          comment: 'comment string',
          currency: 'NIS',
          totalPrice: 210,
        }
      ]
    }).then(data=>dispatch(setOrders(data.orders)))
  }
}