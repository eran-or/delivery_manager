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
          name:'Eran',
          phoneNumber: '0544308350',
          orderItems: ['fried chicken', 'steak'],
          addressInfo: {
            address: 'יצחק בן צבי 2, באר שבע'
          },
          restaurantId: 'R123',
          paymentInfo: {
            CurrencyCode: 'NIS',
            totalPrice: 210
          },
          createdAt: new Date(),
          comment: 'comment string',
        },
        {
          id:'o124',
          deviceInfo: {},
          name:'Eran',
          phoneNumber: '0544308350',
          orderItems: ['fried chicken', 'steak'],
          addressInfo: {
            address: 'יצחק בן צבי 2, באר שבע'
          },
          restaurantId: 'R123',
          paymentInfo: {
            CurrencyCode: 'NIS',
            totalPrice: 210
          },
          createdAt: new Date(),
          comment: 'comment string',
        },
        {
          id:'o125',
          deviceInfo: {},
          name:'Eran',
          phoneNumber: '0544308350',
          orderItems: ['fried chicken', 'steak'],
          addressInfo: {
            address: 'הרצל 97, באר שבע'
          },
          restaurantId: 'R124',
          paymentInfo: {
            CurrencyCode: 'NIS',
            totalPrice: 210
          },
          createdAt: new Date(),
          comment: 'comment string',
        },
        {
          id:'o126',
          deviceInfo: {},
          name:'Eran',
          phoneNumber: '0544308350',
          orderItems: ['fried chicken', 'steak'],
          addressInfo: {
            address: 'הרצל 21, באר שבע'
          },
          restaurantId: 'R125',
          paymentInfo: {
            CurrencyCode: 'NIS',
            totalPrice: 210
          },
          createdAt: new Date(),
          comment: 'comment string',
        }
        
      ]
    }).then(data=>dispatch(setOrders(data.orders)))
  }
}