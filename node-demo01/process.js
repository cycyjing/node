console.log('argv', process.argv)
// console.log('env', process.env) 
console.log('memory', process.memoryUsage())
process.emitWarning('here have an error')
process.on('warning', (err) => {
  console.log('err', err)
})
process.nextTick(()=>{
console.log('tick')
},'dfd','ddsdfasdf') 