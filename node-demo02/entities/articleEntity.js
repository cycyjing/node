const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ArticleSchema = new Schema({
  // 第三种只需要在关联表里引用任何可以定位主表的字段
  username: String,
  title: String,
  content: String
})
const Article = mongoose.model('Article', ArticleSchema)
module.exports = Article
