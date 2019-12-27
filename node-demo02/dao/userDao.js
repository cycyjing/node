const userModel = require('../entities/userEntity')
const articleModel = require('../entities/articleEntity')
class UserDao {
  constructor() {
    this.user = userModel
  }
  // async save(params) {
  //   return new this.user(params).save()
  // }
  async save(params) {
    const articles = params.articles.map((item) => {
      return {
        username: params.username,
        title: item.title,
        content: item.content
      }
    })
    articleModel.insertMany(articles)
    this.user.insertMany({
      username: params.username,
      password: params.password,
      email: params.email
    })
  }
  async find() {
    return this.user.aggregate([{
      $lookup: {
        from: 'articles',
        localField: 'username',
        foreignField: 'username',
        as: 'items'
      }
    },
    // { $match: { username: 'a' } },
    // { $project: { password: -1 } }
    ])
  }









  async findUsers() {
    return this.user.find().exec()
  }
  // 添加三种方式
  async createUsers(params) {
    this.user.create(params)
  }
  async saveUser(params) {
    return new this.user(params).save()
  }
  async insertMany(params) {
    this.user.insertMany(params)
  }
  //删除多种方式
  async deleteUser(params) {
    return this.user.findOneAndDelete(params).exec()
  }

  // async updateUser(condition, doc) {
  //   return this.user.update(condition, { $set: doc }).exec()
  //   // return this.user.updateMany(condition, doc).exec()
  //   // return this.user.updateOne(condition, doc).exec()
  //   // return this.user.findOneAndUpdate(condition, doc).exec()
  //   // const newUser = await this.user.find(condition).exec()
  //   // console.log('newUser', newUser)
  //   // return new userEntity(Object.assign(newUser[0], doc)).save()
  // }
  async updateUser111(a, b) {
    const u = new this.user()
    const resu = await u.updateUser(a, b)
    return resu
  }
  async findByUsername(a) {
    return this.user.find().findByUsername(a)
  }

}



module.exports = exports = new UserDao()
