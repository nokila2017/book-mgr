
//每个文件都是一个模块
const Koa = require('koa');

const app = new Koa();
//开启一个http服务
//接受http请求，并做处理，处理完后响应
//通过app.use注册中间件，中间件本质上是一个函数
//context上下文，传入的信息都在里面
app.use(async(context,next)=>{
    await next();
});


app.listen(3000,()=>{
    console.log('启动成功');
});
console.log(1111);