const jwt = require('jsonwebtoken')
const {secret} = require('../config')
const {TokenExpiredError, JsonWebTokenError} = require('../code')

async function checkToken(ctx, next) {
    if (ctx.url === ('/api/users/login' || '/api/users/register')) {
        await next()
    } else {
        let {authorization} = ctx.request.header
        let token = authorization.replace('Bearer ', '')
        if (token) {
            try {
                const decoded = jwt.verify(token, secret);
            } catch (err) {
                switch (err.name) {
                    case 'TokenExpiredError':
                        ctx.app.emit('error', TokenExpiredError, ctx)
                        break
                    case 'JsonWebTokenError':
                        console.log('Token无效')
                        ctx.app.emit('error', JsonWebTokenError, ctx)
                        break
                }
            }
            await next()
        }
    }
}

module.exports = checkToken