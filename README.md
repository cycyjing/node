# node
node demos 2019/08/09-2019/08/22

# Node.js

require(): 记得写后缀名

module.exports/exports: 都可以导出，不过两个不能同时使用。若同时使用，module.exports会覆盖exports。exports优势在于可以写多个对象，最后会合并为一个输出

## 轮询机制

回调顺序

1. setInterval() / setTimeout()
2. 普通方法回调，Promise方法里是同步，.then()方法内是异步
3. process.nextTick(callback,[args])
4. setImmediate()

## 模块化

### fs 文件读写 

fs.readFile(path,[option],callback)

fs.writeFile(path,data,[option],callback)

fs.Stats: 对象 关于文件的信息		.stat(path,callback(err,state))

fs.access(): 性质（是否存在/可读/可写）

fs.mkdir()

fs.rmdir()

fs.open()

### global 全局变量 

不用引用就可以使用

__dirname: 执行这个变量的文件夹所在的绝对位置

__filename: 执行这个变量的文件所在的绝对位置

exports

module

require

process

console：.time() .timeEnd()

buffer

### path 路径操作 

path.join(): 

path.resolve(): 补充绝对路径

path.extname(): 查看后缀名

path.basename(): 

### process 进程 

process.argv: 查询到软件安装绝对路径，及所在文件的绝对路径

process.env: 当前用户环境对象，也可以向环境中添加属性，用delete.~可以删除

process.exit(): 0是正常退出，1是异常退出

process.memoryUsage(): 和上面方法匹配使用

process.emitWarning(string)

process.on(event,callback)

process.nextTick(callback,[args]): 进入下一个轮询

process.kill(pid,[signal]): pid进程ID，这个方法是杀死进程

process.platform

### querystring

.parse(str, [sep, eq, options])：URL 查询字符串 `str` 解析为键值对的集合

.stringify(obj,[str,eq,option])：通过迭代对象的自身属性从给定的 `obj` 生成 URL 查询字符串

### event

给同一个对象最多绑定10个事件，超过报错，防止内存溢出。如果想要改变，setMaxListeners()

addListener() / removeListener() / removeAllListener

on() /off()

.prependListener(): 在所有事件最前端

```js
const EmitEvent = require('events')
//继承
class A extends EmitEvent {
  constructor(name, age) {
    super()
    this.name = name
    this.age = age
  }
  //定义前后触发的接口，名字要一致
  growUp() {
    setInterval(() => {
      this.age = this.age + 1
      // 定义何时触发
      this.emit('growUp', this.age)
    }, 1000)
  }
}
const a = new A('rain', 100)
// 定义何时监听
a.addListener('growUp', (age) => {
  console.log(`${a.name} is ${age}`)
})
a.growUp()
// 定义何时移除监听
```

### V8引擎

### vm 虚拟机

### zlib 压缩 

### 基础模块

- net 知道就可以，现在用http多

用户安装/保存文件，视频/音乐文档用的多

TCP, IPC服务器

- dns：.resolve6(hostname, [option],callback)
- domain 已经全部废弃
- tls 安全传输

### http

```js
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
```



### http2

### https

### 调试器 debugger 知道即可

### assert

异常 测试

.assert/ok(value,[message]): value/bool

.equal(actual,expect,[message]): 相当于`==`

.deepEqual(actual,expect,[message]): 相当于`==`，会对结构进行比较，不会比较原型链

.strictEqual(actual,expect,[message]): 相当于`===`，

.deepStrictEqual(actual,expect,[message]): 

.isError(value): 有错误就把这个错误抛除去

.fail(message): 永远会出错，直接抛错误信息

.throws(fn,[error,message]): 

.doesNotThrow(): 

### Buffer

.alloc() 

.allocUnsafe()

.from()

.fill()

.isBuffer(obj)

.poolSize

.compare(buf1,buf2)

.concat()

### stream 流

1. 控制台输出

   process.stdin.on('data/readable')

   process.stdin.read()

   process.stdout.write()

2. 在fs中，createReadStream/createWriteStream

   rs.pipe(ws)

   ```js
   const fs = require('fs')
   const rs = fs.createReadStream('./readfs.text')
   rs.on('open',()=>{
     console.log('open')
   })
   rs.on('data',(data)=>{
     console.log(data)
   })
   //ws 没有open end，有finish
   rs.on('end',()=>{
     console.log('end')
   })
   rs.on('close',()=>{
     console.log('close')
   })
   rs.on('error',()=>{
     console.log('error')
   })
   ```

3. Transform 转换流

   使用crypto

### crypto 加密

.pbkdf2(password,salt,)

.privateDecrypto()

.publicDecrypto()


