import {get, post} from './http'

export const fetchRestaurantList = () => {
  return Promise.resolve({
    restaurants:[{value:1, label:"לולה", id:"g123"}, {value:2, label:"משהו", id:"R231"},{value:3, label:"טוב משהו", id:"lddd2"}]
  })
}

const fetchCurrencies = () => {
  return Promise.resolve({
    currencies:[]
  })
}