const jwt = require('jsonwebtoken')
const {secret} = require('../config')

async function checkToken(ctx, next) {

    if (ctx.url === ('/api/users/login' || '/api/users/register')) {
        await next()
    } else {
        let {authorization} = ctx.request.header
        let token = authorization.replace('Bearer ', '')
        if (token) {
            try {
                var decoded = jwt.verify(token, secret);
            } catch (err) {
                switch (err.name) {
                    case 'TokenExpiredError':
                        console.log('Token已过期')
                        break
                    case 'JsonWebTokenError':
                        console.log('Token无效')
                        break
                }
            }
            await next()
        }
    }
}

module.exports = checkToken