const koaRouter = require('koa-router')
const userRouter = require('./user')()
//可以避免重复加载，所以写在方法中而不是对象中
module.exports = () => {
  const router = new koaRouter()
  router.get('/home', async (ctx, next) => {
    ctx.body = '<h1>home</h1>'
  })
  // router.param('id',async (id,ctx,next)=>{
  //   console.log('id', id)
  //   await next()
  // })
  // router.get('/a/:id', async (ctx, next) => {
  //   console.log('a', ctx.params.id)
  // })
  // router.get('/b/:id', async (ctx, next) => {
  //   console.log('b', ctx.params.id)
  // })
  // router.use('/home', userRouter.routes(), userRouter.allowedMethods())
  return router
}
