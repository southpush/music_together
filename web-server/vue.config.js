const path = require('path')

// vue.config.js
module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'stylus',
            patterns: [
                path.resolve(__dirname, './src/styles/common.styl'),
            ]
        }
    },
    devServer: {
        host: '127.0.0.1',
        port: 8080,
        https: false,
        // 跨域
        proxy: {
            '/local': {
                target: 'http://127.0.0.1:5000',
                changeOrigin: true,
                pathRewrite: {
                    // 将 '/test' 这个url 替换成 target
                    '^/local': ''
                }
            }
        }
    }
}
