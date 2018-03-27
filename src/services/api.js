//import {get, post} from './http'

export const fetchRestaurantList = () => {
  return Promise.resolve({
    restaurants:[{value:1, label:"לולה", id:"g123"}, {value:2, label:"משהו", id:"d33"},{value:3, label:"Kepasa", id:"R231"}]
  })
}

export const fetchCurrencies = () => {
  return Promise.resolve({
    currencies:[]
  })
}