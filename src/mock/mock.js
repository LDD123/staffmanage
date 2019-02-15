// 引入mockjs
import Mock from 'mockjs'
Mock.setup({
  timeout: 200 // 设置延迟响应，模拟向后端请求数据
})
var data = Mock.mock({
  loginFlag: 'success'
})
// 使用mockjs模拟数据
Mock.mock(/\/api\/login/, 'post', function (req) {
  console.log('req=>', req)
  return data
})
