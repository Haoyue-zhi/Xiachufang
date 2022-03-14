const jwt = require("jsonwebtoken");
const { secret } = require("../config");
const {
  tokenExpiredError,
  jsonWebTokenError,
} = require("../constant/err.type");

async function checkToken(ctx, next) {
  let { authorization } = ctx.request.header;
  let token = authorization.replace("Bearer ", "");
  if (token) {
    try {
      const decoded = jwt.verify(token, secret);
      if (!decoded) {
        return;
      }
    } catch (err) {
      switch (err.name) {
        case "TokenExpiredError":
          console.error("Token已过期！", err);
          ctx.app.emit("error", tokenExpiredError, ctx);
          break;
        case "JsonWebTokenError":
          console.error("Token无效！", err);
          ctx.app.emit("error", jsonWebTokenError, ctx);
          break;
      }
    }
    await next();
  }
}

module.exports = checkToken;
