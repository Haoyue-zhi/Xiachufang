const Router = require("koa-router");
const {
  test,
  sendSms,
  register,
  login
} = require("../controller/user.controller"); // 引入控制器
const {
  smsValidator,
  codeValidator,
  userValidator,
  codeError,
  pasError
} = require("../middleware/user.middleware"); // 错误处理
const router = new Router({ prefix: "/users" }); // 实例化

/**
 * @route GET /api/users/test
 * @desc 测试接口地址
 */
router.get("/test", test);

/**
 * @route POST /api/users/sendSms
 * @desc 发送验证码
 * @param {string} phone - 手机号
 */
router.post("/sendSms", smsValidator, sendSms);

/**
 * @route POST /api/users/register
 * @desc 验证码注册/登录接口地址
 * @param {string} _id - ID
 * @param {string} user_code - 验证码
 */
router.post("/register", codeValidator, codeError, register);

/**
 * @route POST /api/users/login
 * @desc 密码登录接口地址
 * @param {string} phone - 手机号
 * @param {string} password - 密码
 */
router.post("/login", userValidator, pasError, login);

/**
 * @route POST /api/users/info
 * @desc 用户信息接口地址
 */
// router.get("/info", checkToken);

module.exports = router;
