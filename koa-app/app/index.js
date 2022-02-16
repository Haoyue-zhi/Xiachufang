const Koa = require('koa');
const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser');
const {mongoURI} = require('../config')
const router = require('../router')
const errHandler = require('./errHandler')

// 实例化Koa
const app = new Koa();

// 允许跨域访问
app.use(async (ctx, next) => {
    ctx.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type,Authorization",
        "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS"
    })
    await next();
});

// 连接mongodb
mongoose.connect(mongoURI)
    .then(() => {
        console.log('数据库已连接...')
    })
    .catch(err => {
        console.log(err)
    })

app.use(bodyParser());

// 配置路由
app.use(router.routes()).use(router.allowedMethods());

app.on('error', errHandler)

module.exports = app