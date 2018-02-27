<template>
    <div class="header">
        <div class="commonWidth clear">
            <img src="../../assets/img/logo.png" alt="" class="fl">
            <ul class="fr">
                <li class="fl" @click="href('/mrray/home')"><h1>首页</h1><h2>Home</h2></li>
                <li class="fl">
                    <h1>产品服务</h1>
                    <h2>Products</h2>
                    <div class="secondNav">
                        <p @click="href('/mrray/sensitive')">敏感数据与免泄露</p>
                        <p @click="href('/mrray/watermark')">数字水印系统</p>
                        <p @click="href('/mrray/rayShield')">RayShield</p>
                        <p @click="href('/mrray/dataSecurity')">大数据安全网关</p>
                        <p @click="href('/mrray/dataAssets')">数据资产防护</p>
                    </div>
                </li>
                <li class="fl"><h1>关于我们</h1><h2>About&nbsp;Us</h2></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "containerHeader",
        methods: {
            href (arg) {
                this.$router.push({ path: arg })
            }
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
                    overflow: hidden;
                    height:240px;
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
                    p:nth-child(1){
                        background: url('../../assets/img/products/sensitive.png') no-repeat 22px center;
                    }
                    p:nth-child(2){
                        background: url('../../assets/img/products/watermark.png') no-repeat 22px center;
                    }
                    p:nth-child(3){
                        background: url('../../assets/img/products/rayShield.png') no-repeat 22px center;
                    }
                    p:nth-child(4){
                        background: url('../../assets/img/products/bigDateSecurityGateway.png') no-repeat 22px center;
                    }
                    p:nth-child(5){
                        background: url('../../assets/img/products/dataAssetsProtective.png') no-repeat 22px center;
                    }
                    p:nth-child(1).current,p:nth-child(1):hover{
                        background: url('../../assets/img/products/sensitive_hover.png') no-repeat 22px center;
                    }
                    p:nth-child(2).current,p:nth-child(2):hover{
                        background: url('../../assets/img/products/watermark_hover.png') no-repeat 22px center;
                    }
                    p:nth-child(3).current,p:nth-child(3):hover{
                        background: url('../../assets/img/products/rayShield_hover.png') no-repeat 22px center;
                    }
                    p:nth-child(4).current,p:nth-child(4):hover{
                        background: url('../../assets/img/products/bigDateSecurityGateway_hover.png') no-repeat 22px center;
                    }
                    p:nth-child(5).current,p:nth-child(5):hover{
                        background: url('../../assets/img/products/dataAssetsProtective_hover.png') no-repeat 22px center;
                    }
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
