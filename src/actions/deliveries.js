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
          departureTime: function(){return new Date(this.createdAt.getTime()+3000000)},
          orders: ["o123","o124"],
          createdAt: new Date()
        },
        {
          id: "d124",
          departureTime: function(){return new Date(this.createdAt.getTime()+3000000)},
          orders: ["o125","o126"],
          createdAt: new Date()
        }

      ]
    }).then(data=>dispatch(setDeliveries(data.deliveries)))
  }
}