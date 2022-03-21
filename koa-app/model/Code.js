const mongoose = require("mongoose");
const { Schema } = mongoose;
// 实例化数据模版
const codeSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      index: { expireAfterSeconds: 600 }
    },
  }
);

module.exports = Code = mongoose.model("Code", codeSchema);
