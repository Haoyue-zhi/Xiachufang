module.exports = (err, ctx) => {
    let status = 500
    switch (err.code) {
        case '000001':
            status = 400
            break
        case '000002':
            status = 409
            break
        default:
            status
    }
    ctx.status = status
    ctx.body = err
}