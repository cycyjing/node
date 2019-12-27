const koaRouter = require('koa-router')
const {login} = require('../controllers/userControl')
//可以避免重复加载，所以写在方法中而不是对象中
module.exports = () => {
  const router = new koaRouter()
  // router.prefix('/a')
  router.get('/user', login)
  // .post('/user', async (ctx, next) => {
  //   ctx.body = ctx.request.body
  //   console.log(ctx.request.body)
  // })
  return router
}
