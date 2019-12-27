const fs = require('fs')
const a = () => {
  fs.readFile('readfs.text', 'utf8', (err, data) => {
    console.log('readdatafs', data)
    fs.writeFile('writefs.text', data, 'utf8', (erro) => {
      console.log('erro', erro)
    })
  })
}

const b = (path, options) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, options, (err, data) => {
      if (err) reject(err)
      resolve(data)

    })
  })
}
const c = (path, options, data) => {
  return new Promise((resolve, reject) => {
   
    fs.writeFile(path, data, options, (erro) => {
      reject(erro)
    })
    resolve('success')

  })

}
// c().then(data => {
//   console.log('data', data)
// })
const d = async () => {
  const read = await b('./readfs.text', 'utf8')
  const write = await c('./writea.text', 'utf8', read)
  console.log('write', write)
}
d()
