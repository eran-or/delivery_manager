const ordersReducerDefaultState = []

export default (state = ordersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_ORDERS':
    console.log(action.orders)
      return action.orders
    default:
      return state
  }
};