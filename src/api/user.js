import request from '@/utils/request'

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
