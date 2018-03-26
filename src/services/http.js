import axios from 'axios'
import {get as getProp} from 'lodash'

class ResponseError extends Error {
  constructor(response, err) {
    super(getProp(response, 'data.message') || getProp(response, 'statusText') || 'Unknown error', err)
    this.errorStatck = getProp(response, 'data.stack')
  }
}

const api = (fn, args) =>
  fn.apply(axios, args).then(res => res.data, res => Promise.reject(new ResponseError(res.response)))

export function get(...rest) {
  return api(axios.get, rest)
}

export function post(...rest) {
  return api(axios.post, rest)
}

export function put(...rest) {
  return api(axios.put, rest)
}

export function httpDelete(...rest) {
  return api(axios.delete, rest)
}

export const delay = (data, millisecs = 500) =>
  new Promise(resolve => setTimeout(() => resolve(typeof data === 'function' ? data() : data), millisecs))
