// Orders Reducer
const ordersReducerDefaultState = [];

export default (state = ordersReducerDefaultState, action) => {
  switch (action.type) {
    case 'WATCH_ORDER':
    return state
    default:
      return state;
  }
};