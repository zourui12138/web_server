<template>
    <div id="home">
        <div class="banner">
            <ul>
                <li v-show="bannerShow[0]">
                    <div class="commonWidth clear">
                        <div class="fl banner_left"></div>
                        <div class="fr banner_right"></div>
                    </div>
                </li>
                <li v-show="bannerShow[1]">
                    <div class="commonWidth clear">
                        <div class="fl banner_left"></div>
                        <div class="fr banner_right"></div>
                    </div>
                </li>
                <li v-show="bannerShow[2]">
                    <div class="commonWidth clear">
                        <div class="fl banner_left"></div>
                        <div class="fr banner_right"></div>
                    </div>
                </li>
            </ul>
            <ol class="clear">
                <li class="fl" :class="{current : bannerShow[0]}" @click="toggleBanner(0)"></li>
                <li class="fl" :class="{current : bannerShow[1]}" @click="toggleBanner(1)"></li>
                <li class="fl" :class="{current : bannerShow[2]}" @click="toggleBanner(2)"></li>
            </ol>
        </div>
        <div class="product-service">
            <div class="product-service-bg"></div>
            <div class="product-service-list commonWidth">
                <header class="header">
                    <h1>产品服务</h1>
                    <h2>Product&nbsp;Service</h2>
                </header>
                <section>
                    <ul class="clear">
                        <li :class="{current: currentProductService === 'sensitive'}" @mouseover="toggleProductService('sensitive')" class="fl">
                            <div></div>
                            <h1>敏感数据与免泄漏系统</h1>
                            <h3></h3>
                            <h2>敏感信息自动识别，信息分级、分类管理，机器深度学习，自动检索敏感信息增量，保护企业隐私，实现数据全局追踪</h2>
                            <button type="button">查看详情</button>
                        </li>
                        <li :class="{current: currentProductService === 'watermark'}" @mouseover="toggleProductService('watermark')" class="fl">
                            <div></div>
                            <h1>数字水印系统</h1>
                            <h3></h3>
                            <h2>支持多样化数据类型，跟踪数据流通轨迹，数字化标记，具备数据源可追溯性。</h2>
                            <button type="button">查看详情</button>
                        </li>
                        <li :class="{current: currentProductService === 'RayShield'}" @mouseover="toggleProductService('RayShield')" class="fl">
                            <div></div>
                            <h1>RayShield</h1>
                            <h3></h3>
                            <h2>实现文件加密保护；安全流通基础上；进行权限细分；权限可控（授予、回收等特性）。</h2>
                            <button type="button">查看详情</button>
                        </li>
                        <li :class="{current: currentProductService === 'dataSecurity'}" @mouseover="toggleProductService('dataSecurity')" class="fl">
                            <div></div>
                            <h1>大数据安全网关</h1>
                            <h3></h3>
                            <h2>平台包含安全平台用户管理系统、认证授权管控系统、安全访问审计系统、敏感信息防护系统四大模块，针对Hadoop平台网络安全、服务器安全、应用安全、数据安全构建综合性共享生态。</h2>
                            <button type="button">查看详情</button>
                        </li>
                        <li :class="{current: currentProductService === 'dataAssets'}" @mouseover="toggleProductService('dataAssets')" class="fl">
                            <div></div>
                            <h1>数据资产防护系统</h1>
                            <h3></h3>
                            <h2>系统从访问身份、权限范围、预置策略多维度进行审计，综合评估用户行为、潜在风险，实现数据可读、可编辑、风险预知、危险拦截，保障数据存储与访问安全。</h2>
                            <button type="button">查看详情</button>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
        <div class="solution">
            <div class="commonWidth">
                <header class="header">
                    <h1>解决方案</h1>
                    <h2>Solution</h2>
                </header>
            </div>
            <section>
                <ul class="clear commonWidth">
                    <li class="fl">
                        <div>
                            <img src="../../assets/img/home/solution_icon1.png" alt="">
                            <h1></h1>
                            <h2>政务数据服务体系</h2>
                            <p>提供政务数据共享与服务，以大数据计算为核心，通过对数据采集、存储、加工，服务政务，提高政府精准治理能力和决策力。</p>
                            <button type="button">查看详情</button>
                        </div>
                    </li>
                    <li class="fl">
                        <div>
                            <img src="../../assets/img/home/solution_icon2.png" alt="">
                            <h1></h1>
                            <h2>数据安全生命周期</h2>
                            <p>融合数据生产、数据流通、数据使用、数据销毁，构建数据安全体系：数据源保护，数据流通追踪定位，数据合规使用，数据增值服务，结束生命。</p>
                            <button type="button">查看详情</button>
                        </div>
                    </li>
                    <li class="fl">
                        <div>
                            <img src="../../assets/img/home/solution_icon3.png" alt="">
                            <h1></h1>
                            <h2>大数据安全生态</h2>
                            <p>建立安全合规技术体系，数据共享生态，保护大数据权属性、保密性、完整性、可用性、可追溯及敏感度管理， 实现大数据“可管、可控、可信”。</p>
                            <button type="button">查看详情</button>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
        <div class="dividingLine"></div>
        <div class="partners commonWidth">
            <header class="header">
                <h1>合作伙伴</h1>
                <h2>Cooperation&nbsp;Partner</h2>
            </header>
            <ul class="clear">
                <li class="fl"></li>
                <li class="fl"></li>
                <li class="fl"></li>
                <li class="fl"></li>
                <li class="fl"></li>
                <li class="fl"></li>
                <li class="fl"></li>
                <li class="fl"></li>
            </ul>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from '~/common/components/footer'

    export default {
        name: "home",
        components: {Footer},
        data() {
            return{
                currentProductService : 'RayShield',
                timer: null,
                bannerShow: [true,false,false]
            }
        },
        methods: {
            toggleProductService (arg) {this.currentProductService = arg;},
            bannerSlider() {
                let me = this;
                this.timer = setInterval(function () {
                    let index = me.bannerShow.indexOf(true) === me.bannerShow.length-1 ? 0 : me.bannerShow.indexOf(true)+1;
                    me.bannerShow = [false,false,false];
                    me.bannerShow[index] = true;
                },6000);
            },
            toggleBanner(index) {
                this.timer && clearInterval(this.timer);
                this.bannerShow = [false,false,false];
                this.bannerShow[index] = true;
                this.bannerSlider();
            }
        },
        mounted() {
            this.bannerSlider();
            this.getNewsData();
        },
        beforeRouteLeave (to, from, next) {
            this.timer && clearInterval(this.timer);
            next();
        }
    }
</script>

<style lang="scss" scoped>
    #home {
        /*.header*/
        .header{
            width:149px;
            text-align: right;
            padding-right: 69px;
            padding-top: 35px;
            h1{
                font-size: 18px;
                height:28px;
                line-height: 28px;
            }
            h2{
                font-size: 14px;
                height:22px;
                line-height: 22px;
                border-bottom: 2px solid #2e95ee;
                padding-bottom: 6px;
            }
        }
        /*.banner*/
        .banner{
            position: relative;
            .banner_left, .banner_right{
                height: 400px;
                width: 600px;
                -webkit-animation: bannerFlyIn 1.5s;
                animation: bannerFlyIn 1.5s;
            }
            ul{
                width:calc(100%);
                height:400px;
                position: relative;
                li{
                    width:100%;
                    position: absolute;
                    top:0;
                }
                li:nth-child(1){
                    background: url('../../assets/img/home/banner_one.png') no-repeat center;
                }
                li:nth-child(1) .banner_left{
                    background: url('../../assets/img/home/banner_left_one.png') no-repeat center;
                }
                li:nth-child(1) .banner_right{
                    background: url('../../assets/img/home/banner_right_one.png') no-repeat center;
                }
                li:nth-child(2){
                    background: url('../../assets/img/home/banner_two.png') no-repeat center;
                }
                li:nth-child(2) .banner_left{
                    background: url('../../assets/img/home/banner_left_two.png') no-repeat center;
                }
                li:nth-child(2) .banner_right{
                    background: url('../../assets/img/home/banner_right_two.png') no-repeat center;
                }
                li:nth-child(3){
                    background: url('../../assets/img/home/banner_three.png') no-repeat center;
                }
                li:nth-child(3) .banner_left{
                    background: url('../../assets/img/home/banner_left_three.png') no-repeat center;
                }
                li:nth-child(3) .banner_right{
                    background: url('../../assets/img/home/banner_right_three.png') no-repeat center;
                }
            }
            ol{
                position: absolute;
                top:360px;
                left:0;
                right:0;
                width:360px;
                margin:auto;
                li{
                    width:100px;
                    height:5px;
                    background-color: #eee;
                    margin:5px 10px 0 10px;
                    cursor: pointer;
                    transition: all .2s;
                    border-radius: 4px;
                }
                li:hover, li.current{
                    margin-top: 0;
                    height:10px;
                    background-color: #2e95ee;
                }
            }
        }
        /*.productService*/
        .product-service{
            position: relative;
            .product-service-bg{
                position: absolute;
                left:0;
                right:0;
                height:300px;
                top:213px;
                background-color: #eee;
                z-index: 1;
            }
            .product-service-list{
                position: relative;
                z-index: 100;
                .header{
                    margin-bottom: 40px;
                    background: url('../../assets/img/home/header_product_service.png') no-repeat right 39px;
                }
                section{
                    height:460px;
                    li{
                        width:160px;
                        height:300px;
                        text-align: center;
                        padding:0 20px;
                        border-radius: 4px;
                        cursor: pointer;
                        margin-top: 80px;
                        margin-bottom: 80px;
                        transition: all .2s;
                        div{
                            margin-top: 85px;
                            height:64px;
                            transition: all .2s;
                        }
                        h1{
                            height:60px;
                            line-height: 60px;
                            margin-bottom: 4px;
                            font-size: 16px;
                        }
                        h2{
                            line-height: 18px;
                            height:90px;
                            font-size: 14px;
                            text-align: justify;
                            opacity: 0;
                            margin-top: 40px;
                            visibility: hidden;
                            transition: all .2s;
                            color: #3096ee;
                            text-indent: 2em;
                            transition-property: visibility;
                        }
                        h3{
                            width:40px;
                            height:2px;
                            background-color: #7c848e;
                            margin:auto;
                            transition: all .2s;
                        }
                        button{
                            visibility: hidden;
                            opacity: 0;
                            height:32px;
                            width:116px;
                            border:2px solid #3096ee;
                            color: #3096ee;
                            background-color: #fff;
                            cursor: pointer;
                            margin-top: 10px;
                        }
                    }
                    li:nth-child(1) div{
                        background: url('../../assets/img/home/sensitive_.png') no-repeat center;
                    }
                    li:nth-child(2) div{
                        background: url('../../assets/img/home/watermark_.png') no-repeat center;
                    }
                    li:nth-child(3) div{
                        background: url('../../assets/img/home/rayshield_.png') no-repeat center;
                    }
                    li:nth-child(4) div{
                        background: url('../../assets/img/home/bigData_.png') no-repeat center;
                    }
                    li:nth-child(5) div{
                        background: url('../../assets/img/home/dataAssets_.png') no-repeat center;
                    }
                    li.current{
                        padding:0 50px;
                        height:456px;
                        width:296px;
                        margin-top: 0;
                        margin-bottom: 0;
                        background-color: #fff;
                        border:2px solid #23a2f5;
                        box-shadow: 0 0 10px #23a2f5;
                    }
                    li.current h1{
                        color: #23a2f5;
                    }
                    li.current h2{
                        opacity: 1;
                        visibility: visible;
                    }
                    li.current h3{
                        width:200px;
                        background-color: #3096ee;
                    }
                    li.current button{
                        visibility: visible;
                        opacity: 1;
                    }
                    li:nth-child(1).current div{
                        background: url('../../assets/img/home/sensitive.png') no-repeat center;
                    }
                    li:nth-child(2).current div{
                        background: url('../../assets/img/home/watermark.png') no-repeat center;
                    }
                    li:nth-child(3).current div{
                        background: url('../../assets/img/home/rayshield.png') no-repeat center;
                    }
                    li:nth-child(4).current div{
                        background: url('../../assets/img/home/bigData.png') no-repeat center;
                    }
                    li:nth-child(5).current div{
                        background: url('../../assets/img/home/dataAssets.png') no-repeat center;
                    }
                }
            }
        }
        /*.solution*/
        .solution{
            .header{
                margin-bottom: 40px;
                background: url('../../assets/img/home/header_solution.png') no-repeat right 39px;
            }
            section{
                background-color: #3f464d;
                li{
                    width:400px;
                    height:380px;
                    text-align: center;
                    color: #fff;
                    div{
                        height:380px;
                        cursor: pointer;
                        transition: all 1s;
                        img{
                            vertical-align: top;
                            margin-top: 100px;
                            transition: all 1s;
                        }
                        h1{
                            width:36px;
                            height:4px;
                            margin:30px auto 0;
                            background-color: #fff;
                            transition: all .8s;
                        }
                        h2{
                            font-size: 24px;
                            font-weight: bold;
                            height:80px;
                            line-height: 80px;
                        }
                        p{
                            visibility: hidden;
                            text-align: justify;
                            opacity: 0;
                            transition: all 1s;
                            padding:0 30px;
                            font-size: 14px;
                            line-height: 18px;
                        }
                        button{
                            visibility: hidden;
                            width:120px;
                            height:36px;
                            border:2px solid #fff;
                            color: #fff;
                            border-radius: 4px;
                            background-color: transparent;
                            margin-top: 24px;
                            opacity: 0;
                            transition: all 1s;
                            cursor: pointer;
                        }
                    }
                    div:hover{
                        background-color: #2e95ee;
                        opacity: .8;
                        img{
                            margin-top: 60px;
                        }
                        h1{
                            margin-top: 0;
                            height:0;
                        }
                        p{
                            visibility: visible;
                            opacity: 1;
                        }
                        button{
                            visibility: visible;
                            opacity: 1;
                        }
                    }
                }
                li:nth-child(1){
                    background: url('../../assets/img/home/solution_bg1.png') no-repeat center;
                }
                li:nth-child(2){
                    background: url('../../assets/img/home/solution_bg2.png') no-repeat center;
                }
                li:nth-child(3){
                    background: url('../../assets/img/home/solution_bg3.png') no-repeat center;
                }
            }
        }
        /*dividingLine*/
        .dividingLine{
            height:100px;
            background: url('../../assets/img/home/dividingLine.png') no-repeat center;
            margin-top: 40px;
        }
        /*partners*/
        .partners{
            margin-bottom: 40px;
            .header{
                margin-bottom: 40px;
                background: url('../../assets/img/home/header_partner.png') no-repeat right 39px;
            }
            li{
                width:300px;
                height:100px;
                cursor: pointer;
                transition: all .5s;
            }
            li:nth-child(1){
                background: url('../../assets/img/home/partner1.png') no-repeat center;
            }
            li:nth-child(2){
                background: url('../../assets/img/home/partner2.png') no-repeat center;
            }
            li:nth-child(3){
                background: url('../../assets/img/home/partner3.png') no-repeat center;
            }
            li:nth-child(4){
                background: url('../../assets/img/home/partner4.png') no-repeat center;
            }
            li:nth-child(5){
                background: url('../../assets/img/home/partner5.png') no-repeat center;
            }
            li:nth-child(6){
                background: url('../../assets/img/home/partner6.png') no-repeat center;
            }
            li:nth-child(7){
                background: url('../../assets/img/home/partner7.png') no-repeat center;
            }
            li:nth-child(8){
                background: url('../../assets/img/home/partner8.png') no-repeat center;
            }
            li:nth-child(1):hover{
                background: url('../../assets/img/home/partner1_hover.png') no-repeat center;
            }
            li:nth-child(2):hover{
                background: url('../../assets/img/home/partner2_hover.png') no-repeat center;
            }
            li:nth-child(3):hover{
                background: url('../../assets/img/home/partner3_hover.png') no-repeat center;
            }
            li:nth-child(4):hover{
                background: url('../../assets/img/home/partner4_hover.png') no-repeat center;
            }
            li:nth-child(5):hover{
                background: url('../../assets/img/home/partner5_hover.png') no-repeat center;
            }
            li:nth-child(6):hover{
                background: url('../../assets/img/home/partner6_hover.png') no-repeat center;
            }
            li:nth-child(7):hover{
                background: url('../../assets/img/home/partner7_hover.png') no-repeat center;
            }
            li:nth-child(8):hover{
                background: url('../../assets/img/home/partner8_hover.png') no-repeat center;
            }
        }
    }
</style>
