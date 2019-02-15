// 引入mockjs
import Mock from 'mockjs'
Mock.setup({
  timeout: 200 // 设置延迟响应，模拟向后端请求数据
})
function loginProcess (flag) {
  return Mock.mock({
    loginFlag: flag
  })
}
// 使用mockjs模拟数据
Mock.mock(/\/api\/login/, 'post', function (req) {
  console.log('req=>', req)
  let params = JSON.parse(req.body)
  if (params.user === 'admin' && params.password === 'admin') {
    return loginProcess(true)
  } else {
    return loginProcess(false)
  }
})
