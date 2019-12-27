module.exports = async function a(ctx, next) {
  ctx.app.emit('eventname', 'canshu')
  next()
}
