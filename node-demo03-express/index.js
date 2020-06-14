const express = require('express')
const app = express()
/* params */
// app.get('/:id', (req, res) => {
//   console.log(req.params)
//   console.log('get method')
//   res.send('hello world')
// })
/** Static files: http://localhost:8081/public/yang.png */
app.use('/public', express.static('public'))
app.get('/', (req, res) => {
  res.send('Static静态')
})
const server = app.listen(8081, () => {
  const host = server.address().address
  const port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})