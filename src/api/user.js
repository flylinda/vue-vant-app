import request from '@/utils/request'
require('../view/mock/mock.js')

export function getList (params) {
  return request({
    url: '/api/mock/orderlist',
    method: 'get',
    params,
  })
}

export function getHelp (params) {
  return request({
    url: '/api/mock/help',
    method: 'get',
    params,
  })
}

export function getUserInfo (data) {
  return request({
    url: '/trustee/api/v1/auth/login/password',
    method: 'post',
    data,
  })
}

export function getConfigs (params) {
  return request({
    url: `/trustee/api/v1/selections/configs`,
    method: 'get',
    params,
  })
}
