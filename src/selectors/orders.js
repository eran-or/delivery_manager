export default (orders)=>{
  return orders.map(order=>order.deliveryAddress)
}