import {API} from '../action-types'
import { createActions } from 'redux-actions'

export const { setRestaurants } = createActions({
  'SET_RESTAURANTS': restaurants => ({ restaurants })
})

export const fetchRestaurants = () => ({
  type: API,
  payload: {
    url: 'api/restaurants.json',
    success: (restaurants) => setRestaurants(restaurants),
    label: 'restaurants'
  }
})

