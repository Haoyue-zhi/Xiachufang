const Router = require('koa-router')
const jwt = require('jsonwebtoken')
const {secret} = require('../config')
const checkToken = require('../middleware/checkToken')
const {userPasswordError, userNoInformation} = require('../code')

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
 * @desc 验证码注册/登录接口地址
 */
router.post('/register', async ctx => {
    const findResult = await User.findOne({phone: ctx.request.body.phone})
    if (findResult) {
        if (findResult.phone == ctx.request.body.phone) {
            // 生成token
            let token = jwt.sign({phone: findResult.phone}, secret, {expiresIn: '2d'});
            ctx.status = 200
            ctx.body = {
                token: token,
                code: '000000',
                msg: '登录成功！'
            }
        }
    } else {
        const newResult = new User({
            phone: ctx.request.body.phone,
            password: ''
        })
        // 存储到数据库
        newResult.save()
        ctx.status = 200
        ctx.body = {
            msg: '注册成功！',
            code: '000000'
        }
    }

});

/**
 * @route POST /api/users/login
 * @desc 密码登录接口地址
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
            // 密码错误
            ctx.app.emit('error', userPasswordError, ctx)
        }
    } else {
        // 未查到用户数据
        ctx.app.emit('error', userNoInformation, ctx)
    }

});

/**
 * @route POST /api/users/info
 * @desc 用户信息接口地址
 */
router.get('/info', checkToken, async ctx => {
    ctx.body = {
        code: '000000',
        message: '信息获取成功',
    }
});

module.exports = router