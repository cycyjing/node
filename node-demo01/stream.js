const fs = require('fs')
const rs = fs.createReadStream('./readfs.text')
rs.on('open',()=>{
  console.log('open')
})
rs.on('data',(data)=>{
  console.log(data)
})
rs.on('end',()=>{
  console.log('end')
})
rs.on('close',()=>{
  console.log('close')
})
rs.on('error',()=>{
  console.log('error')
})

const ws=fs.createWriteStream('ws.text')
rs.pipe(ws)