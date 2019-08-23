import axios from 'axios'
import { getToken, setCookie } from '@/utils/cookie'
import { router } from '@/router'
import storage from '@/utils/storage'
import { Toast } from 'vant'

let catchQueue = {}

const service = axios.create({
  withCredentials: true,
})

/**
 * 在service外重新包装一层，缓存用户传参，用于401以后的补发请求
 * @param {*} params 用户传入的参数
 */
const request = params => {
  catchQueue[params.url] = params
  return service(params)
}

// request拦截器
service.interceptors.request.use(config => {
  config.headers.tk = getToken()
  config.headers.devicetype = 'web'
  return config
}, error => { Promise.reject(error) })

// respone拦截器
service.interceptors.response.use(response => {
  const { config: { url } } = response
  delete catchQueue[url]
  // 临时添加 后台报错提示
  if (response.data) {
    if (response.data && !response.data.isSuccess && response.data.resultMsg) {
      Toast.fail({
        message: response.data.resultMsg,
        icon: 'https://img.yzcdn.cn/vant/logo.png',
      })
    }
  }
  return response.data // 直接返回response.data，如果判断isSuccess字段，部分不支持的接口会卡住，判断可以通过其他插件函数来处理
}, async error => {
  const { status, config: { url } } = error.response
  switch (status) { // 其他情况补充处理
    case 500:
      delete catchQueue[url]
      Toast.fail({
        message: '后台服务报错，操作失败',
        icon: 'https://img.yzcdn.cn/vant/logo.png',
      })
      break
    case 400:
      delete catchQueue[url]
      Toast.fail({
        message: '当前请求出现错误',
        icon: 'https://img.yzcdn.cn/vant/logo.png',
      })
      break
    case 401:
      router.push('login')
      break
    case 403:
      delete catchQueue[url]
      Toast.fail({
        message: '请求的资源不允许访问',
        icon: 'https://img.yzcdn.cn/vant/logo.png',
      })
      logout()
      break
    case 404:
      delete catchQueue[url]
      Toast.fail({
        message: '请求的内容不存在',
        icon: 'https://img.yzcdn.cn/vant/logo.png',
      })
      break
  }
}
)

function logout () {
  storage.del('token')
  setCookie('token', '', -1)
}

export default request
