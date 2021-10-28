<div>

# vite-vue3-element-CLI


## 简介

[vite-vue3-element-CLI](https://gitee.com/zhang-wenhaoyue/vite-vue3-element-cli)是一个由vite2构建的vue3脚手架。

## 已装插件

- [Element Plus](https://element-plus.gitee.io/zh-CN/#/zh-CN)
- [Sass](https://cn.vitejs.dev/guide/features.html#css-pre-processors)
- [Axios](https://cn.vitejs.dev/guide/features.html#css-pre-processors)
- [Vue router](https://next.router.vuejs.org/zh/index.html)
- [Vue X](https://next.vuex.vuejs.org/zh/)
- [vite-plugin-svg-icons](https://github.com/anncwb/vite-plugin-svg-icons)

## 目录结构
```
|─── public                           # 静态资源
|─── src                              # 源代码
|    │─── api                         # 所有请求
|    |─── assets                      # 图片、全局样式等静态资源
|    |─── components                  # 全局公用组件
|    |─── icons                       # 项目所有 svg icons
|    |─── mock                        # 项目mock 模拟数据
|    |─── router                      # 路由
|    |─── store                       # 全局 store管理
|    |─── utils                       # 全局公用方法
|    |─── views                       # 所有页面
|    |─── App.vue                     # 入口页面
|    └─── main.js                     # 入口文件 加载组件 初始化等
|─── index.html                       # html模板
|─── package.json                     # package.json
└─── vite.config.js                   # vite配置

```

## 全局样式
```
|─── assets   
|    │─── index.scss 全局样式
|    └─── base.scss 基础全局样式
```
在index.scss文件中导入其他.scss文件
## icon-svg
1. 下载SVG文件
2. 将SVG文件复制到src/icons/svg文件夹中
3. 重命名SVG文件格式为 icon- * 
4. 组件模版中使用 [&lt;icon-svg name="icon-* color='#fff"&gt;&lt;/icon-svg&gt;]

参数|说明|类型|默认值|
:---:|:---:|:---:|:---:|
name|图标类名|string|—|
color|图标颜色|string|#333|

## 安装

```bash
# 克隆项目
git clone https://gitee.com/zhang-wenhaoyue/vite-vue3-element-cli.git

# 进入项目目录
cd vite-vue3-element-CLI

# 安装依赖
npm install

# 启动服务
npm run dev
```

浏览器访问 http://localhost:3000

</div>
