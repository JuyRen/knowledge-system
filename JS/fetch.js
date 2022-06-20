const abortController = new AbortController()

const signal = abortController.signal

fetch('https://www.baidu.com', {
  signal
})

setTimeout(() => {
  abortController.abort()
}, 1000)


signal.onabort = () => {
  console.log('fetch 取消了')
}
