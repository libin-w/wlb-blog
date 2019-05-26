# egg-vue-webpack-boilerplate

基于 Egg + Vue + Webpack3/Webpack2 多页面和单页面服务端客户端渲染同构工程骨架项目.

## 版本

- Egg 版本： ^2.x.x
- Node 版本: Node ^8.x.x+,  Node 6.x.x 版本请见 [Egg 1.0 + Node6分支](https://github.com/hubcarl/egg-vue-webpack-boilerplate/tree/node6)
- Webpack 版本: ^3.8.1, 对应 `easywebpack-vue` 版本为 ^3.5.0
- Vue 版本: ^2.5.0

## 文档

- http://hubcarl.github.io/easywebpack/vue/rule
- https://zhuanlan.zhihu.com/easywebpack


 

## 依赖

- [easywebpack](https://github.com/hubcarl/easywebpack) ^3.5.2
- [easywebpack-vue](https://github.com/hubcarl/easywebpack) ^3.5.0
- [egg-view-vue-ssr](https://github.com/hubcarl/egg-view-vue-ssr) ^3.0.2
- [egg-webpack](https://github.com/hubcarl/egg-webpack) ^3.2.6
- [egg-webpack-vue](https://github.com/hubcarl/egg-webpack-vue) ^2.0.0


## 使用

#### 3.1 安装cli(非必需)

```bash
npm install easywebpack-cli -g
```

^3.5.0 开始， `easywebpack-cli` 已内置 `devDependencies` 中, 无需安装。如果你需要在命令行使用 `easy` 命令, 可以单独全局安装。

#### 3.2 安装依赖

```bash
npm install
npm start
```


#### 3.3 启动应用

```bash
npm start
```

应用访问: http://127.0.0.1:7001

![npm start启动](https://github.com/hubcarl/egg-vue-webpack-boilerplate/blob/feature/green/spa/docs/images/webpack-build.png)


#### 3.4 项目构建

```bash
// 直接运行(编译文件全部在内存里面,本地开发使用)
npm start

// 编译文件到磁盘打包使用(发布测试环境)
npm run build:dev 或者 easywebpack build dev

// 编译文件到磁盘打包使用(发布正式环境)
npm run build 或者 easywebpack build prod

```
