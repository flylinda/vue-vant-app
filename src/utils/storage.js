// 本地存储只能在 Vuex 中使用
const storage = {
  get (key) {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (err) {
      return null
    }
  },
  set (key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value))
      return true
    } catch (err) {
      return false
    }
  },
  del (key) {
    localStorage.removeItem(key)
  },
}

export default storage
