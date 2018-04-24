
import {ON_LOAD} from 'redux/action-types'

export const fetchOnLOadData = ()=>({
  type: ON_LOAD
})
// export const apiRequest = (method, url, body, onSuccess, onError) => ({
//   type: API_REQUEST,
//   payload: body,
//   meta: { method, url, onSuccess, onError }
// });