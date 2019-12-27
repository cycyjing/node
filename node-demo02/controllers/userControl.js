const user = require('../dao/userDao')
exports.login = async (ctx) => {
  const a =await user.findUsers('lisi')
  console.log('a', a)
  ctx.body = `<h1>${a}</h1>` 
}
