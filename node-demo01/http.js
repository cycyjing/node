const http = require('http')
const fs = require('fs')
http.createServer((req, res) => {
  //缺点比下面慢
  res.write('<h1>dfdfd</h1>')
  res.write('<h1>dfdfd</h1>')
  res.write('<h1>dfdfd</h1>')
  res.end()
  //速度快 缺点极好服务器内存和资源
  // const rs = fs.createReadStream('./index.html')
  // rs.pipe(res)
}).listen(3000)