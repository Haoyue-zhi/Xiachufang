const { port } = require('./config')
const app = require('./app')

app.listen(port, () => {
    console.log(`koa app listening at http://localhost:${port}`)
})