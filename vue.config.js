
const IS_PROV = ['production'].includes(process.env.NODE_ENV)

console.log(IS_PROV, '环境')

module.expotrs = {
    lintOnsave: true,
    devServer: {
        open: true,
        proxy: {
            '/': {
                target: process.env.VUE_APP_URL,  // 请求接口地址
                changeOrigin: true,  // 跨域
                pathRewrite: {
                    '/':""
                }
            }
        }
    }
}