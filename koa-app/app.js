const Koa = require('koa');
const Router = require('koa-router')
const mongoose = require('mongoose')
var bodyParser = require('koa-bodyparser');


// 实例化
const app = new Koa();
const router = new Router()

app.use(bodyParser());

// 连接mongodb
const db = require('./config/keys').mongoURI
mongoose.connect(db)
    .then(()=>{
        console.log('数据库已连接...')
    })
    .catch( err =>{
        console.log(err)
    })

// 引入路由
const users = require('./routes/api/users')

// 路由
router.use('/api/users',users)

// 配置路由
app.use(router.routes()).use(router.allowedMethods());

const port = 3001;

app.listen(port, () => {
    console.log(`koa app listening at http://localhost:${port}`)
})