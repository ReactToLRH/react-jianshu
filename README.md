# 简书

本项目是使用`React+Redux`开发。主要包括首页、文章详情页、登录页。

## 如何运行

+ 克隆代码：`https://github.com/ReactToLRH/react-jianshu.git`
+ 安装依赖：`npm install`
+ 运行：`npm run start`
+ 打包：`npm run build`

## 使用插件/模块

+ [styled-components](https://styled-components.com/)：生成的样式组件
+ [immutable](https://immutable-js.github.io/immutable-js/)：为应用开发提供了一系列基础的不可变数据结构
+ [redux-immutable](https://github.com/gajus/redux-immutable)：redux-immutable提供一个combineReducers()函数，将stroe中最外层的reducer中的state转化为immutable对象
+ [react-transition-group](https://reactcommunity.org/react-transition-group/)：动画过渡库
+ [react-loadable](https://github.com/jamiebuilds/react-loadable#readme)：组件进行异步加载处理。具体实现参考[loadable.js](./src/pages/detail/loadable.js)
