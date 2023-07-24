# [chatgpt-demo](https://github.com/anse-app/chatgpt-demo) 使用[netfily](https://github.com/anse-app/chatgpt-demo/issues/427) 部署失败 ——解决方法

> 源问题 https://github.com/anse-app/chatgpt-demo/issues/427

[![Netlify Status](https://api.netlify.com/api/v1/badges/917a5ca8-9384-4218-8d1f-59db5ed86821/deploy-status)](https://app.netlify.com/sites/eloquent-kitsune-15bea2/deploys) 

### 准备工作

1. fork 项目到自己的仓库
2. 注册一个netfily账号 

## 开始部署

1. 点击Add new Site 选择 Import an existing project

   ![1689845322086.png](https://img.zzzsleep.icu/public/64b8fe477a4e6.png)

2. 选择Deploy with GitHub

   ![1689845346319.png](https://img.zzzsleep.icu/public/64b8fe5e98e4b.png)

3. 进行权限校验，可以选择全部的仓库也可以选择only one

4. 选择要部署的项目[chatgpt-demo](https://github.com/anse-app/chatgpt-demo) 

   ![1689845367127.png](https://img.zzzsleep.icu/public/64b8fe73155b2.png) 

5. 不用配置环境变量，直接`Deploy chatgpt-demo`

6. 等站点构建完成

7. ---

   直接访问站点

   ![1689845382166.png](https://img.zzzsleep.icu/public/64b8fe826e18c.png) 

8. 进入`netfily`站点配置

   ![1689845406379.png](https://img.zzzsleep.icu/public/64b8fe9ac7c04.png)

9. 进入环境配置

   ![1689845422392.png](https://img.zzzsleep.icu/public/64b8feaa789db.png)

10. 选择导入.env文件，将内容直接写入

    ![1689845443821.png](https://img.zzzsleep.icu/public/64b8febfeff95.png)

11. 导入完毕，import  variables

12. 前往站点的Deploys，重新构建项目

    ![1689845462063.png](https://img.zzzsleep.icu/public/64b8fed2b430f.png)

13. 等待构建完成，就可以正常访问了

    ![1689845494539.png](https://img.zzzsleep.icu/public/64b8fef2a4597.png)









![free.jpg](https://s2.loli.net/2022/01/19/ATuIaMf1BcjUXby.jpg)