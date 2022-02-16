const mongoose = require('mongoose')
const { Schema } = mongoose
// 实例化数据模版
const userSchema = new Schema({
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('User',userSchema)