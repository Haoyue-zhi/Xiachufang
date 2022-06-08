# 目录结构说明

 - background-system 后台管理系统
 - usve-service 用户服务
 - mall-service 商城服务
 - reip-service 菜谱服务
 - gateway-service 网关服务

# 运行说明

所有开发项目中bootstrap.yml中profiles:active: 改为pro可以运行

上述可能运行成功，请求时使用127.0.0.1:款口号访问
端口号在application.yml中的server.port里

无法使用：127.0.0.1:8080/api/...访问，你电脑没有nacos客户端，active改为pro，你会连上服务器上的nacos，但是服务器上网关无法将请求转发到你计算机上，网络不同。同时可能会出现114.215..150:8080/api/...请求访问失败，服务器上网关转发服务时，可能会转发到你本地计算机，但是由于网络不同可能一直旋转中，也可能转发到服务器上同名服务，这个时候能够访问

# 本地运行需要条件

本地计算机安装 两个mysql数据库，nacos，sentinel
profiles:active: dev的时候，会链接本地数据库，本地nacos和本地sentinel



