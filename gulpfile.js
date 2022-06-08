const gulp = require('gulp')
const sftp = require('@foxtail/gulp-sftp-up4')

const up = () => {
    return gulp.src(['koa-app/**/*', '!koa-app/node_modules/**'], {nodir: true})
        .pipe(sftp({
            host: '0.0.0.0', // 服务器地址
            user: 'name', // 服务器用户名
            pass: 'pass', // 服务器密码
            remotePath: '/home/ubuntu/koa-app' // 服务器目录
        }))
}

exports.default = up