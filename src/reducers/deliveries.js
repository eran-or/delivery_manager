const deliveriesReducerDefaultState = []

export default (state = deliveriesReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_DELIVERIES':
      return action.deliveries
    default:
      return state
  }
}