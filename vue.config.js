const {defineConfig} = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: './',
    outputDir:'./dist',
    lintOnSave: false,
    configureWebpack:{
      name:"haha",
      resolve:{
          alias:{
              '@':resolve('src')
          }
      }
    },
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8080,
        https: false,
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy: { //配置跨域
            '/api': {
                target: 'http://localhost:5080', //填写请求的目标地址
                changOrigin: true, //允许跨域
                pathRewrite: {
                    '^/api': '' //请求的时候使用这个api就可以
                }
            }
        }
    }
})
