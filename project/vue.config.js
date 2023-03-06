const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'./',
  // 关闭语法检查
  lintOnSave:false
})
