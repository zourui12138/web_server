<template>
    <div class="header">
        <div class="commonWidth clear">
            <img src="../../assets/img/logo.png" alt="" class="fl">
            <ul class="fr">
                <li class="fl" :class="{current : homeNav}" @click="href('home')"><h1>首页</h1><h2>Home</h2></li>
                <li class="fl" :class="{current : productNav}">
                    <h1>产品服务</h1>
                    <h2>Products</h2>
                    <div class="product secondNav">
                        <p :class="{current : productSensitiveNav}" @click="href('sensitive')">敏感数据与免泄露</p>
                        <p :class="{current : productWatermarkNav}" @click="href('watermark')">数字水印系统</p>
                        <p :class="{current : productRayShieldNav}" @click="href('rayShield')">RayShield</p>
                        <p :class="{current : productDataSecurityNav}" @click="href('dataSecurity')">大数据安全网关</p>
                        <p :class="{current : productDataAssetsNav}" @click="href('dataAssets')">数据资产防护</p>
                    </div>
                </li>
                <li class="fl" :class="{current : aboutUsNav}">
                    <h1>关于我们</h1>
                    <h2>About&nbsp;Us</h2>
                    <div class="aboutUs secondNav">
                        <p :class="{current : aboutUsIntroduceNav}" @click="href('aboutUsIntroduce')">企业介绍</p>
                        <p :class="{current : aboutUsJobsNav}" @click="href('aboutUsJobs')">招贤纳士</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "containerHeader",
        data() {
            return{
                homeNav : false,
                productNav : false,
                productSensitiveNav : false,
                productWatermarkNav : false,
                productRayShieldNav : false,
                productDataSecurityNav : false,
                productDataAssetsNav : false,
                aboutUsNav : false,
                aboutUsIntroduceNav : false,
                aboutUsJobsNav : false
            }
        },
        methods: {
            getNavData(arg) {
                this.homeNav = false;
                this.productNav = false;
                this.productSensitiveNav = false;
                this.productWatermarkNav = false;
                this.productRayShieldNav = false;
                this.productDataSecurityNav = false;
                this.productDataAssetsNav = false;
                this.aboutUsNav = false;
                this.aboutUsIntroduceNav = false;
                this.aboutUsJobsNav = false;
                switch (arg){
                    // 首页
                    case 'home' :
                        this.homeNav = true;
                        break;
                    // 产品服务
                    case 'sensitive' :
                        this.productNav = true;
                        this.productSensitiveNav = true;
                        break;
                    case 'watermark' :
                        this.productNav = true;
                        this.productWatermarkNav = true;
                        break;
                    case 'rayShield' :
                        this.productNav = true;
                        this.productRayShieldNav = true;
                        break;
                    case 'dataSecurity' :
                        this.productNav = true;
                        this.productDataSecurityNav = true;
                        break;
                    case 'dataAssets' :
                        this.productNav = true;
                        this.productDataAssetsNav = true;
                        break;
                    // 关于我们
                    case 'aboutUsIntroduce' :
                        this.aboutUsNav = true;
                        this.aboutUsIntroduceNav = true;
                        break;
                    case 'aboutUsJobs' :
                        this.aboutUsNav = true;
                        this.aboutUsJobsNav = true;
                        break;
                }
            },
            href(arg) {
                this.getNavData(arg);
                this.$router.push({ path: '/'+arg })
            }
        },
        beforeMount() {
            this.getNavData(this.$route.name);
        }
    }
</script>

<style lang="scss" scoped>
    /*#header*/
    .header {
        border-bottom: 1px solid #d7d7d7;
        img {
            margin-top: 20px;
        }
        ul {
            background: url('../../assets/img/home/nav_border.png') no-repeat right center;
            li {
                padding: 22px 0;
                width: 123px;
                text-align: center;
                transition: color .2s;
                position: relative;
                h1 {
                    height: 20px;
                    line-height: 20px;
                    cursor: pointer;
                }
                h2 {
                    height: 16px;
                    line-height: 16px;
                    font-size: 12px;
                    cursor: pointer;
                }
                .secondNav{
                    position: absolute;
                    top:80px;
                    right:0;
                    line-height: 48px;
                    border:1px solid #d7d7d7;
                    background-color: #fff;
                    z-index: 1003;
                    box-shadow: 2px 2px 10px #aaa;
                    border-radius: 4px;
                    transition: all .1s linear;
                    width:200px;
                    display: none;
                    p{
                        padding-left: 40px;
                        color: #333;
                        cursor: pointer;
                        font-size: 16px;
                    }
                    p.current,p:hover{
                        color: #2e95ee;
                    }
                }
                .product p:nth-child(1){
                    background: url('../../assets/img/products/sensitive.png') no-repeat 22px center;
                }
                .product p:nth-child(2){
                    background: url('../../assets/img/products/watermark.png') no-repeat 22px center;
                }
                .product p:nth-child(3){
                    background: url('../../assets/img/products/rayShield.png') no-repeat 22px center;
                }
                .product p:nth-child(4){
                    background: url('../../assets/img/products/bigDateSecurityGateway.png') no-repeat 22px center;
                }
                .product p:nth-child(5){
                    background: url('../../assets/img/products/dataAssetsProtective.png') no-repeat 22px center;
                }
                .product p:nth-child(1).current,.product p:nth-child(1):hover{
                    background: url('../../assets/img/products/sensitive_hover.png') no-repeat 22px center;
                }
                .product p:nth-child(2).current,.product p:nth-child(2):hover{
                    background: url('../../assets/img/products/watermark_hover.png') no-repeat 22px center;
                }
                .product p:nth-child(3).current,.product p:nth-child(3):hover{
                    background: url('../../assets/img/products/rayShield_hover.png') no-repeat 22px center;
                }
                .product p:nth-child(4).current,.product p:nth-child(4):hover{
                    background: url('../../assets/img/products/bigDateSecurityGateway_hover.png') no-repeat 22px center;
                }
                .product p:nth-child(5).current,.product p:nth-child(5):hover{
                    background: url('../../assets/img/products/dataAssetsProtective_hover.png') no-repeat 22px center;
                }
                .aboutUs p:nth-child(1){
                    background: url('../../assets/img/aboutUs/introduce.png') no-repeat 22px center;
                }
                .aboutUs p:nth-child(2){
                    background: url('../../assets/img/aboutUs/jobs.png') no-repeat 22px center;
                }
                .aboutUs p:nth-child(1).current,.aboutUs p:nth-child(1):hover{
                    background: url('../../assets/img/aboutUs/introduce_hover.png') no-repeat 22px center;
                }
                .aboutUs p:nth-child(2).current,.aboutUs p:nth-child(2):hover{
                    background: url('../../assets/img/aboutUs/jobs_hover.png') no-repeat 22px center;
                }
            }
            li:hover{
                .secondNav{
                    display: block;
                }
                h1{
                    color: #2e95ee;
                }
                h2{
                    color: #2e95ee;
                }
            }
            li.current{
                h1{
                    color: #2e95ee;
                }
                h2{
                    color: #2e95ee;
                }
            }
        }
    }
</style>
