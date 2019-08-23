function setCookie (name, value) {
  var Days = 30
  var exp = new Date()
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 30)
  document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
}

function getCookie (name) {
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  var arr = document.cookie.match(reg)

  if (arr) { return unescape(arr[2]) } else { return null }
}

function getToken () {
  return getCookie('token')
}

export { setCookie, getCookie, getToken }
