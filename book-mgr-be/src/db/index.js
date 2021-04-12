require('./Shemas/user');
require('./Shemas/InviteCode');
const mongoose = require('mongoose');

//给那个数据库的哪个集合添加什么格式的文档


const connect=()=>{
    return new Promise((resolve)=>{    
        //连接数据库
        mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');
        //数据库被打开时，做一些操作
        mongoose.connection.on('open',()=>{
            console.log('连接数据库成功');

            resolve();
        });
    });

};

module.exports={
    connect,
};