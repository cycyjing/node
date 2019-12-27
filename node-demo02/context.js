const http = require('http')
const koa = require('koa')
const a=require('./emit.js')
const app = new koa()

app.use(a)
app.use(async (ctx, next) => {
  if (ctx.cookies.get('a')) {
    console.log('cookie', ctx.cookies.get('a'))
  } else {
    ctx.cookies.set('a','aadasd')
    console.log('set','setcookies' )
  }
  await next()
})
app.use(async (ctx, next) => {
console.log('ctx.url', ctx.url)
console.log('ctx.originUrl', ctx.originalUrl)
console.log('ctx.origin', ctx.origin)
console.log('ctx.href', ctx.href)
console.log('ctx.path', ctx.path)
console.log('ctx.query', ctx.query)
console.log('ctx.queryString', ctx.querystring)
console.log('ctx.host', ctx.host)
console.log('ctx.hostname', ctx.hostname)
})


app.on('eventname',(data)=>{
 console.log(data) 
})
app.listen(3000, () => {
  console.log('SERVER OPEN')
})
