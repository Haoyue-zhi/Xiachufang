const {
    createCode,
    ssendSms,
    saveCode,
    getCode,
    removeCode,
} = require("../service/sms.service");
const {createToken, getUserInfo, signUp, updatePas} = require("../service/user.service");

class UserController {
    // 测试
    async test(ctx, next) {
        ctx.status = 200;
        ctx.body = {
            code: "00000",
            msg: "Success!",
            data: {}
        };
    }

    /**
     * @desc 发送验证码
     * @param {string} phone - 手机号
     */
    async sendsms(ctx, next) {
        try {
            const code = createCode();
            const {phone} = ctx.request.body;
            await ssendSms(code, phone);
            ctx.status = 200;
            ctx.body = {
                code: "00000",
                msg: "验证码发送成功！",
                data: {
                    code_id: (await saveCode(code, phone))._id,
                },
            };
        } catch (err) {
            console.error("error", err);
        }
    }

    /**
     * @desc 验证码登录/注册
     * @param {string} _id - ID
     * @param {string} user_code - 验证码
     */
    async register(ctx, next) {
        const {_id} = ctx.request.body;
        const {phone} = await getCode(_id); // 从验证码表查到手机号
        const userInfo = await getUserInfo(phone);
        if (userInfo) {
            // 已注册
            const token = createToken(userInfo);
            ctx.status = 200;
            ctx.body = {
                code: "00000",
                msg: "登录成功！",
                data: {
                    token: token,
                },
            };
        } else {
            // 未注册
            await signUp(phone);
            const nextInfo = await getUserInfo(phone);
            const token = createToken(nextInfo);
            ctx.status = 201;
            ctx.body = {
                code: "00000",
                msg: "注册成功！",
                data: {
                    token: token,
                },
            };
        }
        await removeCode(_id);
    }

    /**
     * @desc 密码登录
     * @param {string} phone - 手机号
     * @param {string} password - 密码
     */
    async login(ctx, next) {
        const {phone} = ctx.request.body;
        const userInfo = await getUserInfo(phone);
        const token = createToken(userInfo);
        // 密码输入正确
        ctx.status = 200;
        ctx.body = {
            code: "00000",
            msg: "登录成功！",
            data: {
                token: token,
            },
        };
    }

    /**
     * @desc 修改密码登录
     * @param {string} user_code - 验证码
     * @param {string} password - 密码
     */
    async editPas(ctx, next) {
        const {_id, password} = ctx.request.body;
        const {phone} = await getCode(_id); // 从验证码表查到手机号
        await updatePas(phone, password)

        // 密码输入正确
        ctx.status = 200;
        ctx.body = {
            code: "00000",
            msg: "密码修改成功！",
            data: {},
        };
    }

}

module.exports = new UserController();
