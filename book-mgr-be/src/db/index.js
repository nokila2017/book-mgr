const mongoose = require('mongoose');

//给那个数据库的哪个集合添加什么格式的文档

const UserSchema = new mongoose.Schema({
    nickname:String,
    password:String,
    age:Number,
})

const UserModal=mongoose.model('User',UserSchema);

const connect=()=>{
    //连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');

    //数据库被打开时，做一些操作
    mongoose.connection.on('open',()=>{
        console.log('连接成功');

        const user=new UserModal({
            nickname:'小明',
            password:'123456',
            age:12,
        });
        user.save();
    });
};

connect();