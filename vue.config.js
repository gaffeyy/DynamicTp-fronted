const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  assetsDir:'static',
  parallel:false,
  publicPath:'/',
  transpileDependencies: true,
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "1.14.1.82:8088",
  //       //允许跨域请求
  //       changeOrigin: true,
  //       pathRewrite:{
  //         '^/api':'',
  //       }
  //     }
  //   }
  // },
})
