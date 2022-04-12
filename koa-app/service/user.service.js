const jwt = require("jsonwebtoken"); // 引入jwt
const {secret} = require("../config"); // 生成token的key
const User = require("../model/User"); // 引入User

class UserService {
    // 生成Token
    createToken(userInfo) {
        return jwt.sign({userInfo}, secret, {expiresIn: '2d'})
    }

    // 查询用户信息
    async getUserInfo(phone) {
        return await User.findOne({phone});
    }

    // 注册
    async signUp(phone) {
        const newInfo = new User({
            phone: phone,
            password: "",
        });
        return await newInfo.save();
        ;
    }

    // 更新密码
    async updatePas(phone, password) {
        return await User.updateOne({phone}, {password})
    }
}

module.exports = new UserService();
