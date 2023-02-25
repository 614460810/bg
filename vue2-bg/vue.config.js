const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 自动运行
  devServer:{
    open:true,
    host:'localhost'
  }
})
