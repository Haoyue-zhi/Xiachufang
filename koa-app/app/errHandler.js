module.exports = (err, ctx) => {
    let status;
    switch (err.code) {
        case '999999':
            status = 500
            break
        default:
            status = 200
    }
    ctx.status = status
    ctx.body = err
}