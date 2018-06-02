import {apiurl} from './config'

const fetchData = (url = '', method = 'GET', data = {}) => {
  const headers = new Headers
  const token = localStorage.getItem('admin-token')
  if (token) headers.append('Authorization', token)

  const option = {
    headers,
    method,
    mode: 'cors'
  }

  let requestBody = Object.keys(data).map(key => {
    return key + '=' + encodeURIComponent(data[key])
  }).filter(i => i).join('&')

  if (method === 'POST') {
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
    option.body = requestBody
  } else {
    url += '?' + requestBody
  }

  return fetch(apiurl + url, option)
    .then(data => data.json())
    .then(json => {
      if ('error' in json && json.error === 'Unauthorized') {
        localStorage.removeItem('admin-token')
      }
      return json
    })
    .catch(err => {
      return {
        status: 'error',
        error: 'response_error',
        msg: 'Internal Server Error',
      }
    })
}

export const getLocations = () => fetchData('/locations')

export const getOrders = () => fetchData('/orders')

export const acceptOrder = order => fetchData('/sms/send', 'POST', {code: order.code, tel: order.tel})