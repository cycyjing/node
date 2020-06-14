const express = require('express')
const app = express()
const bodyParser = require('body-parser')
/** params */
// app.get('/:id', (req, res) => {
//   console.log(req.params)
//   console.log('get method')
//   res.send('hello world')
// })

/** Static files: http://localhost:8081/public/yang.png */
// app.use('/public', express.static('public'))
// app.get('/', (req, res) => {
//   res.send('Static静态')
// })

/** GET method */
// app.get('/index.html', (req, res) => {
//   res.sendFile(__dirname + "/index.html")
// })
// app.get('/process-get', (req, res) => {
//   const response = { firstname: req.query.firstname, lastname: req.query.lastname }
//   console.log(response)
//   res.end(JSON.stringify(response))
// })

/** POST Method */
// app.use(bodyParser.urlencoded({ extended: false }))
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})
app.post('/process-post', urlencodedParser, (req, res) => {
  const response = { firstname: req.body.firstname, lastname: req.body.lastname }
    console.log(response)
    res.end(JSON.stringify(response))
})






const server = app.listen(8081, () => {
  const host = server.address().address
  const port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})