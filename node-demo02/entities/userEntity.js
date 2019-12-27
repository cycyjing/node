const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    // validate: (arg) => {
    //   if (!arg === 'ly') {
    //     return true
    //   } else {
    //     return false
    //   }
    // } 
    // set(arg) {
    //   return arg + '111'
    // }
  },
  password: {
    trim: true,
    type: String,
    required: true,
    // validate: (arg) => {
    //   console.log('entity', 5)
    //   return true
    // },
    // set(arg) {
    //   console.log('set', 6)
    //   return arg
    // }
  },
  avatar: {
    trim: true,
    type: String,
    default: 'ly'
  },
  email: {
    trim: true,
    type: String,
    required: true
  },
  date: Date.UTC(),
  //第一种方法需要在user写引入的属性，第二种需要分别在两个类中分别引用对方
  // articles: [{
  //   title: String,
  //   content: String,
  // }]
}, {
  timestamps: true
})
// //function里面的this是它调用者
// userSchema.methods.updateUser = async function (a, b) {
//   return userModel.update(a, b).exec()
// }
// //箭头函数里面的this是它所在的域
// userSchema.query.findByUsername = async (a) => {
//   console.log('a', a)
//   return userModel.find({ username: 'aa' })
// }
// //可以异步
// userSchema.pre('save', () => {
//   console.log(1)
//   next()
// })
// userSchema.pre('find', () => {
//   console.log(2)
//   next()
// })
// userSchema.post('save', () => {
//   console.log(3)
// })
// userSchema.post('find', () => {
//   console.log(4)
//   next()
// })

const userModel = mongoose.model('User', userSchema)
module.exports = userModel
