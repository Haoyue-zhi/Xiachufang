const gulp = require('gulp')
const sftp = require('@foxtail/gulp-sftp-up4')

const up = () => {
    return gulp.src(['koa-app/**/*', '!koa-app/node_modules/**'], {nodir: true})
        .pipe(sftp({
            host: '42.192.195.156',
            user: 'ubuntu',
            pass: 'Weilai.10000',
            remotePath: '/home/ubuntu/koa-app'
        }))
}

exports.default = up