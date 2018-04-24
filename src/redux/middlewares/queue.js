import {ON_QUEUE} from '../action-types'

export default ({ dispatch }) => next => action => {
  if (action.type !== ON_QUEUE) {
    return next(action)
  }
  let counter = 0
  const {actions, success} = action.payload
  actions.forEach((action,i) => {
    dispatch(action()).then((data)=>{
      counter = ++i
      if(actions.length === counter){
        //console.log(data)
        dispatch(success())
      }

    })
  })
}