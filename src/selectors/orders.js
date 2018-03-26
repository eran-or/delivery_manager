export const ordersAddress = (orders)=>{
  return orders.map(order=>order.address.address)
}