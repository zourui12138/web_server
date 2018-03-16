import Vue from 'vue'
import Router from 'vue-router'

// 官网展示页面-首页
import Home from '~/modules/home/home'
// 官网展示页面-产品
import ProductDataAssets from '~/modules/products/product_dataAssets'
import ProductDataSecurity from '~/modules/products/product_dataSecurity'
import ProductRayShield from '~/modules/products/product_rayShield'
import ProductSensitive from '~/modules/products/product_sensitive'
import ProductWatermark from '~/modules/products/product_watermark'
// 官网展示页面-关于我们-->企业介绍
import AboutUsIntroduce from '~/modules/aboutUs/aboutUs_introduce'
// 官网展示页面-关于我们-->招贤纳士
import AboutUsJobs from '~/modules/aboutUs/aboutUs_jobs'
// 官网后台页面-登录页面
import Login from '~/modules/login/login'

Vue.use(Router);

const router =  new Router({
    // 启用vue-loader HTML5 history模式的客户端端配置-->作用是当你使用 history 模式时，URL 就像正常的 url
    mode: 'history',
    routes: [
        {// 路由重定向
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/dataAssets',
            name: 'dataAssets',
            component: ProductDataAssets
        },
        {
            path: '/dataSecurity',
            name: 'dataSecurity',
            component: ProductDataSecurity
        },
        {
            path: '/rayShield',
            name: 'rayShield',
            component: ProductRayShield
        },
        {
            path: '/sensitive',
            name: 'sensitive',
            component: ProductSensitive
        },
        {
            path: '/watermark',
            name: 'watermark',
            component: ProductWatermark
        },
        {
            path: '/aboutUsIntroduce',
            name: 'aboutUsIntroduce',
            component: AboutUsIntroduce
        },
        {
            path: '/aboutUsJobs',
            name: 'aboutUsJobs',
            component: AboutUsJobs
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
});

export default router
