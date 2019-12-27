const koa = require('koa')
const app = new koa()
app.use(async (ctx, next) => {
  console.log(1)
  await next()
  console.log(2)
})
app.use(async (context, next) => {
  console.log(3)
  context.body = `<h1>hello world</h1>`
  await next()
  console.log(4)
})
app.use(async (context, next) => {
  console.log(5)
  context.body = `<h1>hello world2</h1>`
})

app.listen(3000, () => {
  console.log('serve open')
})