export const filteredDeliveriesByRestaurants = (deliveries, orders, restaurants=[]) => {
  const Rmap = restaurants.reduce((a,r)=>{a[r.id]=r; return a},{})
  const orderIds = orders.reduce((a,o)=>{Rmap[o.restaurantId]&&(a[o.id]=o,a.length?a.length++:a.length=1); return a},{})
  if(orderIds.length>0){
    return deliveries.filter(d=>d.orders.filter(id=>orderIds[id]).length>0)
  }
  return deliveries

//Another way but the first is much more faster
//const orderIds = orders.filter(o => restaurants.map(r => r.id).includes(o.restaurantId)).map(o=>o.id)  
//if(orderIds.length>0){
  // return deliveries.filter(d=> d.orders.filter(id=> orderIds.includes(id)).length>0)
//}
//return deliveries 

} 
