import moment from 'moment-twitter'

export const fetchDeliveries = () => {
  return (dispatch, getState) => {
    return Promise.resolve({
      deliveries: [
        {
          id: "d123",
          firstDeliveryAddress: "יצחק בן צבי 2, באר שבע",
          firstRestaurantAdded: "מאמא טאקו",
          timeToJoin: 20,
          orders: ["o123"],
          createdAt: moment().twitter()
        },
        {
            id: "d124",
            firstDeliveryAddress: "יצחק בן צבי 2, באר שבע",
            firstRestaurantAdded: "מאמא טאקו",
            timeToJoin: 20,
            orders: ["o124"],
            createdAt: moment().twitter()
        },
        {
            id: "d125",
            firstDeliveryAddress: "יצחק בן צבי 2, באר שבע",
            firstRestaurantAdded: "מאמא טאקו",
            timeToJoin: 20,
            orders: ["o125"],
            createdAt: moment().twitter()
        }
      ]
    })
  }
}