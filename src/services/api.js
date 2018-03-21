/* eslint-disable no-restricted-globals */
import qs from 'qs'
import {isEmpty} from 'lodash'
import Toast from 'react-native-simple-toast'
import {readStorage} from 'shared/utils/storage'
import config from 'config'
import {get, post} from '../utils/http'

const googleLocationQueryUrl = params =>
  `https://maps.googleapis.com/maps/api/geocode/json?${qs.stringify({
    key: config.geocodeKey,
    language: 'iw',
    ...params,
  })}`

const httpOptions = () => ({
  baseURL: config.apiBaseUrl,
  responseType: 'json',
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export const Xapi = async (url, {body, query, method} = {}, isFullUrl) => {
  try {
    const token = await readStorage('token')

    const options = {
      method: method || (body ? 'POST' : 'GET'),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      responseType: 'json',
      credentials: 'include',
    }

    if (body) {
      options.body = JSON.stringify(body)
    }

    const search = query ? `?${qs.stringify(query)}` : ''
    const urlWithouQuery = isFullUrl ? url : `${config.apiBaseUrl}/${url}`
    const fullUrl = `${urlWithouQuery}/${search}`
    const res = await fetch(fullUrl, options)
    if (!res.ok) {
      // todo: add res.text() or evenn res.json() if exist
      throw new Error(`HTTP Error ${res.status}. ${res.statusText || ''} for ${url}`)
    }

    try {
      const json = await res.json()
      return json
    } catch (e) {
      // we know response succeeded so it means no response from server
      // todo: check of type and length instead of error
      return undefined
    }
  } catch (err) {
    // Toast.show(err, Toast.SHORT)
    throw err
  }
}

export const fetchLocationAddress = async ({latitude, longitude}) => {
  let address = {}
  const {results} = await get(
    googleLocationQueryUrl({
      latlng: `${latitude}, ${longitude}`,
      result_type: 'street_address|route',
    }),
    {responseType: 'json'},
  )
  if (results.length) {
    address = results[0].formatted_address.split(',')
    const city = address[1]
    const route = address[0].split(' ')
    const house = parseInt(route[route.length - 1], 10)
    const street = address[0].replace(house, '')
    return {address: {city, street, house: isNaN(house) ? '' : house}, latitude, longitude}
  }
  throw Error('NotFoundAddress')
}

export const fetchLocationLatLng = async address => {
  const {city, street, house} = address
  if (isEmpty(city) || isEmpty(street) || isEmpty(house || '')) {
    throw new Error('emptyRequiredField')
  }
  const {results} = await get(googleLocationQueryUrl({address: `${city} ${street} ${house}`}), {responseType: 'json'})
  if (results.length) {
    const {lat, lng} = results[0].geometry.location
    return {address, latitude: lat, longitude: lng}
  }
  throw Error('NotFoundLatLng')
}

/* eslint-disable max-len */
const sampleTokns = {
  none:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZm9vZHkucm9ja3MvYXBpL3YxIiwiaWF0IjoxNTE1MjE1MDUwLCJleHAiOjE1NDY3NTEwNDgsImF1ZCI6ImZvb2R5LnJvY2tzL21vYmlsZSIsInN1YiI6ImRldmljZUlkMTIzNCJ9.Qk4PRUJ6ZcYbHZkSxg215yEf0i78xmXhDduFvZPBhqg',
  fbAndEmail:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZm9vZHkucm9ja3MvYXBpL3YxIiwiaWF0IjoxNTE1MjE1MDUwLCJleHAiOjE1NDY3NTEwNDgsImF1ZCI6ImZvb2R5LnJvY2tzL21vYmlsZSIsInN1YiI6ImRldmljZUlkMTIzNCIsImZiIjoiMTIzNDUiLCJlbWFpbCI6ImJlZUBleGFtcGxlLmNvbSJ9.n_3H_n16zDmdKkE-Y29nQAV6sdJUmQMUFr1nUN4wfeg',
  email:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZm9vZHkucm9ja3MvYXBpL3YxIiwiaWF0IjoxNTE1MjE1MDUwLCJleHAiOjE1NDY3NTEwNDgsImF1ZCI6ImZvb2R5LnJvY2tzL21vYmlsZSIsInN1YiI6ImRldmljZUlkMTIzNCIsImVtYWlsIjoiYmVlQGV4YW1wbGUuY29tIn0.5xD0P1x6lPTS1ATlV6ee_cXmtoUHItGfo_BLxv7K6k0',
  fb:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZm9vZHkucm9ja3MvYXBpL3YxIiwiaWF0IjoxNTE1MjE1MDUwLCJleHAiOjE1NDY3NTEwNDgsImF1ZCI6ImZvb2R5LnJvY2tzL21vYmlsZSIsInN1YiI6ImRldmljZUlkMTIzNCIsImZiIjoiMTIzNDUifQ.4WqE8jpZtlfl2wKdqkKnfz81foZeOYatgA76qz7HwlI',
}
/* eslint-enable */

// TODO: create initial server?

// export const registerInitialization = async (
//   initInfo, // delay({token: sampleTokns.none})
// ) => api('deviceInitializations', {body: initInfo}).then(() => ({token: sampleTokns.none}))

const api = async (url, {body, params} = {}) => {
  const options = httpOptions()
  return body ? post(url, body, options) : get(url, options, params)
}

export const registerInitialization = async (
  initInfo, // delay({token: sampleTokns.none})
) => ({token: sampleTokns.none})

export const fetchDeliveries = activeAddress => api('deliveries', {body: activeAddress})

export const fetchDelivery = id => api(`deliveries/${id}`)

export const fetchRestaurantMenu = async id => {
  const menu = await api(`restaurants/${id}/menu`)
  return {id, menu}
}

export const placeOrder = order => api('order', {body: order})

export const sendOrderPayment = paymentResult => api('order/payment', {body: paymentResult})

export const activities = () => api('activities')

export const sendCode = phone => api('phoneVerification/sendCode', {body: {phone}})

export const verifyCode = (code, phone) => api('phoneVerification/verifyCode', {body: {code, phone}})
