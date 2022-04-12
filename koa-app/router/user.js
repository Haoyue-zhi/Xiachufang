const Router = require("koa-router");
const {
  test,
  sendsms,
  register,
  login,
  editPas
} = require("../controller/user.controller"); // 引入控制器
const {
  phoneValidator,
  codeValidator,
  userValidator,
  codeError,
  pasError,
  userEmpty
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
router.post("/sendSms", phoneValidator, sendsms);

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
router.post("/login", userEmpty, userValidator, pasError, login);

/**
 * @route POST /api/users/editPas
 * @desc 修改密码接口地址
 * @param {string} _id - ID
 * @param {string} user_code - 验证码
 * @param {string} password - 密码
 */
router.post("/editPas", codeValidator, codeError, editPas);


module.exports = router;
