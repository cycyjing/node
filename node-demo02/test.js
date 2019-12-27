const mongoose = require('mongoose')
const userDao = require('./dao/userDao')
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log('CONNECT ERROR')
    return
  }
  console.log('CONNECT SUCCESS')
    ; (async () => {

      // const resu = await userDao.updateUser111({ password: '11' },{username:'ly'})
      // console.log('result=====', resu)
      // const a = await userDao.save({
      //   username: 'b',
      //   password: 'b',
      //   email: 'bb',
      //   "articles": [
      //     { "title": "dfdaf", content: 'sdfsdf' },
      //     { "title": "bbbb", content: 'bbbbbbbbbbbbbbbbbb' }
      //   ]
      // })
      // console.log('a=====>', a)
      const b = await userDao.find()
      console.log('b----------------', b);
    })()
})