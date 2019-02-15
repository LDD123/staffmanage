// 引入mockjs
import Mock from 'mockjs'
Mock.setup({
  timeout: 200 // 设置延迟响应，模拟向后端请求数据
})
function loginProcess (flag, clientId) {
  let token = ''
  let ctime = ''
  // 登陆成功返回时间戳以及token
  if (flag) {
    token = /\w{16}/
    ctime = (new Date()).getTime()
  }
  return Mock.mock({
    loginFlag: flag,
    token: token,
    ctime: ctime,
    clientId: clientId
  })
}
// 使用mockjs模拟数据
Mock.mock(/\/api\/login/, 'post', function (req) {
  console.log('req=>', req)
  let params = JSON.parse(req.body)
  let clientId = ''
  if (req) {
    clientId = /\w{32}/
  }
  if (params.user === 'admin' && params.password === 'admin') {
    return loginProcess(true, clientId)
  } else {
    return loginProcess(false, clientId)
  }
})
