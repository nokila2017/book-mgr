
//每个文件都是一个模块
const Koa = require('koa');
const koaBody = require('koa-body');
const {connect}=require('./db');
const registerRoutes=require('./routers');
const cors=require('@koa/cors');
const app = new Koa();

connect().then(()=>{
    app.use(cors());
    app.use(koaBody());
    registerRoutes(app);
    
    //开启一个http服务
    //接受http请求，并做处理，处理完后响应
    //通过app.use注册中间件，中间件本质上是一个函数
    //context上下文，传入的信息都在里面
    // app.use(async(context,next)=>{
    //     await next();
    // });
    // console.log(测试);
    
    app.listen(3000,()=>{
        console.log('启动成功');
    });
});

