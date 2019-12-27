const a = Buffer.alloc(5, 'dfsdfs')
// a.fill('a')
console.log('alloc', a)

const b = Buffer.allocUnsafe(10)
console.log('unsafe', b)

// let d = [1, 3, 4, 6, 2, 9]
let d =new Uint32Array(10)
d[1]=10
d[2]=20
d[3]=30
const c = Buffer.from(d, 0, 2)
console.log('from', c)
d[1] = 1
console.log('from', c)

console.log('isBuffer', Buffer.isBuffer(a))

console.log('poolSize', Buffer.poolSize)

console.log('compare', Buffer.compare(a,b))
console.log('compare', Buffer.compare(a,a))

console.log('concat', Buffer.concat([a,b,d],5))