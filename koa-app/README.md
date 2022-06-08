<div style="text-align: center">

# 下厨房APP后台

![node-current](https://img.shields.io/badge/node->=7.6.0-brightgreen)

</div>

## 已装插件

- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [koa-bodyparser](https://github.com/koajs/bodyparser)
- [koa-router](https://github.com/koajs/router)
- [mongoose](https://mongoosejs.com/)
- [nodemon](https://nodemon.io/)
- tencentcloud-sdk-nodejs-sms

## 目录结构

```
|─── app                              # 主程序
|─── config                            # 配置
|─── constant                         # 错误提示
|─── controller                       # controller文件夹
|─── middleware                       # 中间件
|─── model                            # 数据库模型
|─── router                           # 路由文件夹
|─── service                          # service文件夹
└─── main.js                          # main.js
```

## 安装

```bash
# 进入项目目录
cd koa-app

# 安装依赖
npm install

# 启动服务
npm run start
```
后台地址<http://localhost:3001>  