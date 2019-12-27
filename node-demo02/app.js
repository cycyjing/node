const koa = require('koa')
const koaRouter = require('koa-router')
const koaBodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')
const app = new koa()
const router = new koaRouter()

const homeRouter = require('./routers/home')()
const userRouter = require('./routers/user')()

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log('CONNECT FAIL')
    return
  }
  console.log('CONNECT SUCCESS')
})

app.use(koaBodyParser())
app.use(homeRouter.routes())
app.use(userRouter.routes())
app.use(router.allowedMethods())
app.listen(3000, () => {
  console.log('SERVER START')
})