export const setDeliveries = (deliveries) => ({
  type: 'SET_DELIVERIES',
  deliveries
})
export const fetchDeliveries = () => {
  
  return (dispatch, getState) => {
    return Promise.resolve({
      deliveries: [
        {
          id: "d123",
          firstDeliveryAddress: {
            address: "יצחק בן צבי 2, באר שבע"
          },
          firstRestaurantAdded: "מאמא טאקו",
          timeToJoin: 20,
          orders: ["o123"],
          createdAt: new Date()
        },
        {
            id: "d124",
            firstDeliveryAddress: {
              address:'הרצל 97, באר שבע'
            },
            firstRestaurantAdded: "מאמא טאקו",
            timeToJoin: 20,
            orders: ["o124"],
            createdAt: new Date()
        },
        {
            id: "d125",
            firstDeliveryAddress: {
              address: 'הרצל 21, באר שבע'
            },
            firstRestaurantAdded: "מאמא טאקו",
            timeToJoin: 20,
            orders: ["o125"],
            createdAt: new Date()
        }
      ]
    }).then(data=>dispatch(setDeliveries(data.deliveries)))
  }
}