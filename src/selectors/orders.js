export const ordersAddress = orders => orders.map(order => order.addressInfo.address)

export const filterByRestaurants = (orders, restaurants) => {
  const arr = restaurants.map(r => r.id)
  return orders.filter(o => arr.includes(o.restaurantId))
}