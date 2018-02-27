import Vue from 'vue'
import Router from 'vue-router'
// 官网展示页面
import Mrray from '~/modules/mrray/mrray'
// 官网展示页面-首页
import Home from '~/modules/mrray/home/home'
// 官网展示页面-产品
import ProductDataAssets from '~/modules/mrray/products/product_dataAssets'
import ProductDataSecurity from '~/modules/mrray/products/product_dataSecurity'
import ProductRayShield from '~/modules/mrray/products/product_rayShield'
import ProductSensitive from '~/modules/mrray/products/product_sensitive'
import ProductWatermark from '~/modules/mrray/products/product_watermark'
// 官网展示页面-关于我们-->企业介绍
import AboutUsIntroduce from '~/modules/mrray/aboutUs/aboutUs_introduce'
// 官网展示页面-关于我们-->招贤纳士
import AboutUsJobs from '~/modules/mrray/aboutUs/aboutUs_jobs'
// 官网后台页面
import Admin from '~/modules/admin/admin'
// 官网后台页面-登录页面
import Login from '~/modules/login/login'

Vue.use(Router);
const router =  new Router({
    // 启用vue-loader HTML5 history模式的客户端端配置-->作用是当你使用 history 模式时，URL 就像正常的 url
    mode: 'history',
    routes: [
        {// 路由重定向
            path: '/',
            redirect: '/mrray/home'
        },
        {
            path: '/mrray',
            name: 'mrray',
            component: Mrray,
            children: [
                {
                    path: '/mrray/home',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/mrray/dataAssets',
                    name: 'dataAssets',
                    component: ProductDataAssets
                },
                {
                    path: '/mrray/dataSecurity',
                    name: 'dataSecurity',
                    component: ProductDataSecurity
                },
                {
                    path: '/mrray/rayShield',
                    name: 'rayShield',
                    component: ProductRayShield
                },
                {
                    path: '/mrray/sensitive',
                    name: 'sensitive',
                    component: ProductSensitive
                },
                {
                    path: '/mrray/watermark',
                    name: 'watermark',
                    component: ProductWatermark
                },
                {
                    path: '/mrray/aboutUsIntroduce',
                    name: 'aboutUsIntroduce',
                    component: AboutUsIntroduce
                },
                {
                    path: '/mrray/aboutUsJobs',
                    name: 'aboutUsJobs',
                    component: AboutUsJobs
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin
        }
    ]
});

export default router
