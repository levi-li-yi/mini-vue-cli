# mini-vue-cli
mini-vue-cli
/*
      cross-env 区分平台差异
      --open 打开浏览器
      --progress 显示进度
      --colors 区分颜色
      --config 需要运行的配置目录，默认webpack.config.js
      NODE_ENV 当前的环境变量
  */

* 依赖资源及用途
  npm install css-loader style-loader postcss-loader url-loader babel-loader  @babel/preset-env @babel/core sass-loader node-sass responsive-loader vue-loader eslint-loader mini-css-extract-plugin autoprefixer VueLoaderPlugin @moohng/postcss-px2vw -D

  css-loader style-loader 用于处理css
  postcss-loader 可以使用
  autoprefixer 通过postcss给浏览器不支持的css加前缀
  @moohng/postcss-px2vw 处理移动端适配，使用px转vw 不支持的转rem
  sass-loader node-sass 处理sass scss文件，因为我用的是这个，less换成less-loader即可
  vue-loader 处理vue文件
  mini-css-extract-plugin 提取项目中的css到一个单独的文件
  babel-loader @babel/preset-env @babel/core 处理js兼容
  url-loader responsive-loader 处理图片，小于一定大小转成base64
  eslint-loader eslint-config-standard eslint-plugin-vue 对js vue进行语法检查，采用eslint-config-standard规范，不想要的可以忽略