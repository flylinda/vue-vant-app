function debounce (func, wait) {
  let timeout // 定时器变量
  return function (event) {
    clearTimeout(timeout) // 每次触发时先清除上一次的定时器,然后重新计时
    timeout = setTimeout(() => {
      func.call(this, event)
    }, wait) // 指定 xx ms 后触发真正想进行的操作 handler
  }
}

export { debounce }
