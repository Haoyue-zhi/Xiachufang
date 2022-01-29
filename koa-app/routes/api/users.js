const Router = require('koa-router')

// 引入User
const User = require('../../model/User')

// 实例化
const router = new Router()

/**
 * @route GET /api/users/test
 * @desc 测试接口地址
 * @access 接口是公开的
 */
router.get('/test', async ctx => {
    ctx.status = 200
    ctx.body = {
        msg: 'users work...'
    }
});

/**
 * @route POST /api/users/register
 * @desc 注册接口地址
 * @access 接口是公开的
 */
router.post('/register', async ctx => {
    // 存储到数据库
    const findResult = await User.findOne({phone: ctx.request.body.phone})
    if (findResult) {
        ctx.status = 500
        ctx.body = {msg: '手机号已被注册！'}
    } else {
        ctx.status = 200
        const newUser = new User({
            phone:ctx.request.body.phone,
            password:ctx.request.body.password
        })
        ctx.body = {
            data: newUser,
            msg: '注册成功！'
        }
        await newUser.save()
    }

});

module.exports = router.routes()