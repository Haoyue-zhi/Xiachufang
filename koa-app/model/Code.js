const mongoose = require('mongoose')
const { Schema } = mongoose
// 实例化数据模版
const codeSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

module.exports = Code = mongoose.model('Code',codeSchema)