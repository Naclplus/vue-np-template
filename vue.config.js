const path = require('path')

const env = process.env.NODE_ENV

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '' : '/',
  productionSourceMap: env === 'development' ? false : true,
  css: {
    sourceMap: env === 'development' ? true : false,
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://leancloud.cn/1.1',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      },
    }
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  },
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/variables.less'),
      ],
    })
}