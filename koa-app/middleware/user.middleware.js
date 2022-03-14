const {
  userPhoneEmpty,
  userCodeEmpty,
  userPasEmpty,
  userCodeError,
  userPasError,
  userUnregistered,
} = require("../constant/err.type");
const { getUserInfo } = require("../service/user.service");
const { getCode } = require("../service/sms.service");

// 手机号为空
const smsValidator = async (ctx, next) => {
  const { phone } = ctx.request.body;
  if (!phone) {
    console.error("手机号为空！", ctx.request.body);
    ctx.app.emit("error", userPhoneEmpty, ctx);
    return;
  }
  await next();
};
// 手机号或验证码为空
const codeValidator = async (ctx, next) => {
  const { user_code } = ctx.request.body;
  if (!user_code) {
    console.error("验证码为空！", ctx.request.body);
    ctx.app.emit("error", userCodeEmpty, ctx);
    return;
  }
  await next();
};
// 手机号或密码为空
const userValidator = async (ctx, next) => {
  const { phone, password } = ctx.request.body;
  if (!phone || !password) {
    console.error("手机号或密码为空！", ctx.request.body);
    ctx.app.emit("error", userPasEmpty, ctx);
    return;
  }
  await next();
};
// 验证码错误
const codeError = async (ctx, next) => {
  const { _id, user_code } = ctx.request.body;
  const { code } = await getCode(_id);
  if (code !== user_code) {
    console.error("验证码错误！", ctx.request.body);
    ctx.app.emit("error", userCodeError, ctx);
    return;
  }
  await next();
};
// 密码错误
const pasError = async (ctx, next) => {
  const { phone, password } = ctx.request.body;
  const userInfo = await getUserInfo(phone);
  if (userInfo.password !== password) {
    console.error("密码错误！", ctx.request.body);
    ctx.app.emit("error", userPasError, ctx);
    return;
  }
  await next();
};
// 用户不存在
const unregistered = async (ctx, next) => {
  const { phone, password } = ctx.request.body;
  const userInfo = await getUserInfo(phone);
  if (!userInfo) {
    console.error("用户不存在！", ctx.request.body);
    ctx.app.emit("error", userUnregistered, ctx);
    return;
  }
  await next();
};

module.exports = {
  smsValidator,
  codeValidator,
  userValidator,
  codeError,
  pasError,
  unregistered,
};
