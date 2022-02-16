const Router = require('koa-router')
const jwt = require('jsonwebtoken')
const {secret} = require('../config')
const checkToken = require('../middleware/checkToken')
const {userPasswordError,userNoInformation} = require('../code')

// 引入User
const User = require('../model/User')
// 实例化
const router = new Router({prefix: '/users'})

/**
 * @route GET /api/users/test
 * @desc 测试接口地址
 */
router.get('/test', async ctx => {
    ctx.status = 200
    ctx.body = {
        msg: 'Success!!!'
    }
});

/**
 * @route POST /api/users/register
 * @desc 注册接口地址
 */
router.post('/register', async ctx => {
    // 存储到数据库
    const findResult = await User.findOne({phone: ctx.request.body.phone})
    if (findResult) {
        ctx.status = 200
        ctx.body = {
            msg: '登录成功！',
            code: '000000'
        }
    } else {
        ctx.status = 200
        ctx.body = {
            msg: '未注册！',
            code: '000001'
        }
    }

});

/**
 * @route POST /api/users/login
 * @desc 登录接口地址
 */
router.post('/login', async ctx => {
    // 存储到数据库
    const findResult = await User.findOne({phone: ctx.request.body.phone})
    // 查到用户数据
    if (findResult) {
        // 密码正确
        if (findResult.password == ctx.request.body.password) {
            // 生成token
            let token = jwt.sign({phone: findResult.phone}, secret, {expiresIn: '2d'});
            ctx.status = 200
            ctx.body = {
                token: token,
                code: '000000',
                msg: '登录成功！'
            }
        } else {
            ctx.status = 400
            ctx.body = userPasswordError
        }
    } else {
        // 未查到用户数据
        ctx.status = 400
        ctx.body = userNoInformation
    }

});

/**
 * @route POST /api/users/current
 * @desc 用户信息接口地址
 */
router.get('/current', checkToken, async ctx => {
    ctx.status = 200
    console.log(ctx.request.header)
});

module.exports = router