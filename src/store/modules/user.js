import storage from '@/utils/storage'
import { getUserInfo, getRole } from '@/api/user.js'
import { resolve } from 'q'

const user = {
  state: {
    token: '',
    userInfo: '',
    roleMenu: [],
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      storage.set('token', token)
    },
    SET_USER_INFO: (state, user) => {
      state.user = user
      storage.set('userInfo', user)
    },

    SET_ROLE (state, obj) {
      state.roleMenu = obj
    },
  },

  actions: {
    setUserInfo ({ commit }, token) {
      getUserInfo(token).then((response) => {
        commit('SET_USER_INFO', {
          data: response.data,
        })
      })
    },

    setAppToken ({ commit }, token) {
      commit('SET_TOKEN', token)
    },

    setRole ({ commit }, params) {
      return getRole(params).then((res) => {
        if (res !== undefined) {
          resolve(res.data.data)
          commit('SET_ROLE', transTree(res.data.data))
        }
      })
    },

  },
}

function transTree (jsonData) {
  if (jsonData && jsonData.length !== 0) {
    var result = []
    var temp = {}
    var len = jsonData.length
    for (var i = 0; i < len; i++) {
      temp[jsonData[i]['id']] = jsonData[i]
    }
    for (var j = 0; j < len; j++) {
      var currentElement = jsonData[j]
      var tempCurrentElementParent = temp[currentElement['parentId']]
      if (tempCurrentElementParent) {
        if (!tempCurrentElementParent['children']) {
          tempCurrentElementParent['children'] = []
        }
        tempCurrentElementParent['children'].push(currentElement)
      } else {
        result.push(currentElement)
      }
    }
    return result
  }
}

export default user
