const tencentcloud = require("tencentcloud-sdk-nodejs-sms"); // 引入腾讯短信SDK
const Code = require("../model/Code"); // 引入Code

const SmsClient = tencentcloud.sms.v20210111.Client;
const clientConfig = {
  credential: {
    secretId: "AKIDoa7NNAG1VTaRwDvzUxi8ID1atvkvZyc0",
    secretKey: "H8izDSZXNxHC0aBVUkDSTE1bvUebIj0I",
  },
  region: "ap-guangzhou",
  profile: {
    httpProfile: {
      endpoint: "sms.tencentcloudapi.com",
    },
  },
};
const client = new SmsClient(clientConfig);

class SmsService {
  // 生成验证码
  createCode() {
    return Math.random().toFixed(6).slice(-6);
  }

  // 发送短信
  async ssendSms(user_code, phone) {
    return await client.SendSms({
      PhoneNumberSet: [phone], // 接收短信的手机号
      SmsSdkAppId: "1400409842",
      SignName: "lxx个人开发",
      TemplateId: "686231",
      TemplateParamSet: [user_code], // 验证码
    });
  }

  // 保存验证码
  async saveCode(user_code, phone) {
    const newCode = new Code({ code: user_code, phone: phone });
    return await newCode.save();
  }

  // 获取验证码
  async getCode(_id) {
    return await Code.findOne({ _id});
  }

  // 删除验证码
  async removeCode(_id){
    return await Code.deleteOne({ _id});
  }

}

module.exports = new SmsService();
