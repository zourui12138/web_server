<template>
    <div id="mrray">
        <Header></Header>
        <VuePerfectScrollbar v-scroll class="container-scrollbar"><router-view/></VuePerfectScrollbar>
        <div class="consult">
            <h1><img src="../../assets/img/consult.png" alt=""/>咨询&建议</h1>
            <ul>
                <li class="clear"><p>咨询电话<br>请拨打：<span>028-87827621</span></p></li>
                <li class="clear"><p>在线咨询<br>QQ联系：<span @click="openQQ()">点击沟通</span></p></li>
                <li class="clear"><p><span @click="toggleMessageBoard()">意见反馈</span><br>我们最需要的是您的建议</p></li>
            </ul>
        </div>
        <transition name="mask">
            <div class="mask" v-show="maskUI"></div>
        </transition>
        <transition name="messageBoard">
            <div class="messageBoard" v-show="messageBoardUI">
                <header>
                    <div class="clear"><strong class="fr" @click="toggleMessageBoard()"></strong></div>
                    <h1>请给我们留言</h1>
                </header>
                <section>
                    <ul>
                        <li class="clear">
                            <span class="fl">产品：</span>
                            <div class="fl dropDown">
                                <h1 @click="toggleDropDown('')">{{messageBoardMsg.product}}</h1>
                                <transition name="dropDownItem">
                                    <div class="dropDownItem" v-show="dropDownUI">
                                        <p :class="{current : messageBoardMsg.product === '敏感数据与免泄露系统'}" @click="toggleDropDown('敏感数据与免泄露系统')">敏感数据与免泄露系统</p>
                                        <p :class="{current : messageBoardMsg.product === '数字水印系统'}" @click="toggleDropDown('数字水印系统')">数字水印系统</p>
                                        <p :class="{current : messageBoardMsg.product === '迅鳐数盾（Rayshield）'}" @click="toggleDropDown('迅鳐数盾（Rayshield）')">迅鳐数盾（Rayshield）</p>
                                        <p :class="{current : messageBoardMsg.product === '大数据安全监控平台'}" @click="toggleDropDown('大数据安全监控平台')">大数据安全监控平台</p>
                                        <p :class="{current : messageBoardMsg.product === '大数据安全监控平台'}" @click="toggleDropDown('大数据安全监控平台')">数据资产防护系统</p>
                                    </div>
                                </transition>
                            </div>
                        </li>
                        <li class="clear"><span class="fl">姓名：</span><input type="text" placeholder="请输入姓名"></li>
                        <li class="clear"><span class="fl">公司：</span><input type="text" placeholder="请输入公司"></li>
                        <li class="clear"><span class="fl">邮箱：</span><input type="text" placeholder="请输入邮箱"></li>
                        <li class="clear"><span class="fl">电话：</span><input type="text" placeholder="请输入电话"></li>
                        <li class="clear"><span class="fl">留言：</span><textarea placeholder="请输入您的留言"></textarea></li>
                    </ul>
                </section>
                <footer>
                    <div class="clear">
                        <s class="fl">留言不能为空</s>
                        <button class="fr" type="button">提交</button>
                    </div>
                </footer>
            </div>
        </transition>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import Header from '~/common/components/header'

    export default {
        name: 'mrray',
        components: {Header, VuePerfectScrollbar},
        data() {
            return{
                maskUI: false,
                messageBoardUI: false,
                dropDownUI: false,
                messageBoardMsg: {
                    product: '敏感数据与免泄露系统'
                }
            }
        },
        methods: {
            openQQ() {
                window.location.href = 'tencent://message/?uin=2326375710&Site=在线QQ&amp;Menu=yes';
            },
            toggleDropDown(arg) {
                console.log(arg);
                arg && (this.messageBoardMsg.product = arg);
                this.dropDownUI = !this.dropDownUI;
            },
            toggleMessageBoard() {
                this.maskUI = !this.maskUI;
                this.messageBoardUI = !this.messageBoardUI;
            }
        }
    }
</script>

<style lang="scss">
    @-webkit-keyframes bannerFlyIn {
        0% {
            opacity: 0;
            -webkit-transform: translateY(40px);
            transform: translateY(40px);
        }
        100% {
            opacity: 1;
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
    }
    @keyframes bannerFlyIn {
        0% {
            opacity: 0;
            -webkit-transform: translateY(40px);
            transform: translateY(40px);
        }
        100% {
            opacity: 1;
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
    }

    @keyframes zoomInLeft {
        from {
            opacity: 0;
            transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
        }

        60% {
            opacity: 1;
            transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
        }
    }
    @keyframes zoomInRight {
        from {
            opacity: 0;
            transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
        }

        60% {
            opacity: 1;
            transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
        }
    }

    @-webkit-keyframes sliderIn {
        0% {
            height: 0;
        }
        100% {
            height: 200px;
        }
    }
    @keyframes sliderIn {
        0% {
            height: 0;
        }
        100% {
            height: 200px;
        }
    }
    @-webkit-keyframes sliderOut {
        0% {
            height: 200px;
        }
        100% {
            height: 0;
        }
    }
    @keyframes sliderOut {
        0% {
            height: 200px;
        }
        100% {
            height: 0;
        }
    }

    @-webkit-keyframes flyIn {
        0% {
            opacity: 0;
            -webkit-transform: translateY(-40px);
            transform: translateY(-40px);
        }
        100% {
            opacity: 1;
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
    }
    @keyframes flyIn {
        0% {
            opacity: 0;
            -webkit-transform: translateY(-40px);
            transform: translateY(-40px);
        }
        100% {
            opacity: 1;
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
    }
    @-webkit-keyframes flyOut {
        0% {
            opacity: 1;
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            -webkit-transform: translateY(-40px);
            transform: translateY(-40px);
        }
    }
    @keyframes flyOut {
        0% {
            opacity: 1;
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            -webkit-transform: translateY(-40px);
            transform: translateY(-40px);
        }
    }

    @-webkit-keyframes fadeOut {
        0% {
            opacity: .5;
        }
        100% {
            opacity: 0;
        }
    }
    @keyframes fadeOut {
        0% {
            opacity: .5;
        }
        100% {
            opacity: 0;
        }
    }
    @-webkit-keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: .5;
        }
    }
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: .5;
        }
    }

    @keyframes rotateCubeLeftOut {
        50% { animation-timing-function: ease-out;  transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); }
        100% { opacity: .3; transform: translateX(-100%) rotateY(-90deg); }
    }
    @keyframes rotateCubeLeftIn {
        0% { opacity: .3; transform: translateX(100%) rotateY(90deg); }
        50% { animation-timing-function: ease-out;  transform: translateX(50%) translateZ(-200px) rotateY(45deg); }
    }

    @keyframes rotateCubeRightOut {
        50% { animation-timing-function: ease-out; transform: translateX(50%) translateZ(-200px) rotateY(45deg); }
        100% { opacity: .3; transform: translateX(100%) rotateY(90deg); }
    }
    @keyframes rotateCubeRightIn {
        0% { opacity: .3; transform: translateX(-100%) rotateY(-90deg); }
        50% { animation-timing-function: ease-out; transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); }
    }

    @keyframes moveLeft {
        to { transform: translateZ(-450px) translateX(-450px); }
    }
    @keyframes moveRight {
        to { transform: translateZ(-450px) translateX(450px); }
    }
    @keyframes moveCenter {
        to { transform: translateZ(0) translateX(0); }
    }

    @keyframes bounceIn {
        0% {
            transform: scale(0.9);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
    #mrray{
        height: calc(100%);
        /*.container-scrollbar*/
        .container-scrollbar {
            height: calc(100% - 81px);
        }
        /*模糊层*/
        .mask{
            position: fixed;
            top:0;
            bottom:0;
            left:0;
            right:0;
            background-color: #000;
            opacity: .5;
            z-index: 1003;
        }
        .mask-enter-active{
            -webkit-animation: fadeIn .3s;
            animation: fadeIn .3s;
        }
        .mask-leave-active{
            -webkit-animation: fadeOut .3s;
            animation: fadeOut .3s;
        }
        /*consult*/
        .consult{
            position: fixed;
            right:34px;
            bottom:100px;
            z-index: 1002;
            background-color: #fff;
            h1{
                width:26px;
                height:200px;
                background-color: #2e95ee;
                color: #fff;
                padding:0 22px;
                text-align: center;
                line-height: 26px;
                cursor: pointer;
                img{
                    vertical-align: top;
                    margin-bottom: 14px;
                    margin-top: 20px;
                }
            }
            ul{
                position: absolute;
                top:-48px;
                left:0;
                right:70px;
                border-top:2px solid #2e95ee;
                border-bottom:2px solid #2e95ee;
                background-color: #fff;
                padding-top: 25px;
                box-shadow: 0 0 20px #2e95ee;
                border-top-left-radius: 6px;
                border-top-right-radius: 6px;
                border-bottom-left-radius: 6px;
                overflow: hidden;
                transition: all .2s;
                li{
                    margin-bottom: 25px;
                    padding-left: 64px;
                    height:48px;
                    width:184px;
                    overflow: hidden;
                    p{
                        line-height: 24px;
                        color: #333;
                        font-size: 14px;
                        span{
                            color: #2e95ee;
                            cursor: pointer;
                        }
                    }
                }
                li:nth-child(1){
                    background: url('../../assets/img/phone.png') no-repeat 20px center;
                }
                li:nth-child(2){
                    background: url('../../assets/img/QQ.png') no-repeat 20px center;
                }
                li:nth-child(3){
                    background: url('../../assets/img/suggestion.png') no-repeat 20px center;
                }
            }
        }
        .consult:hover ul{
            left:-250px;
            border-left:2px solid #2e95ee;
            border-right:2px solid #2e95ee;
        }
        /*留言板*/
        .messageBoard{
            position: fixed;
            top:20%;
            left:0;
            right:0;
            z-index: 1004;
            margin:auto;
            width:448px;
            border:1px solid #2e95ee;
            background-color: #fff;
            color: #333;
            font-size: 14px;
            box-shadow: 0 0 10px #2e95ee;
            border-radius: 4px;
            padding: 0 30px;
            header{
                strong{
                    width:16px;
                    height:16px;
                    margin: 20px 0;
                    background: url('../../assets/img/close.png') no-repeat center;
                    cursor: pointer;
                }
                h1{
                    color: #2e95ee;
                    font-size: 18px;
                    height:20px;
                    line-height: 20px;
                    margin-bottom: 24px;
                }
            }
            section{
                ul{
                    li{
                        margin-bottom: 10px;
                        span{
                            width:48px;
                            line-height: 40px;
                        }
                        input{
                            width:390px;
                            height:38px;
                            border:1px solid #ccc;
                            background-color: #fcfcfc;
                            padding-left: 8px;
                            border-radius: 4px;
                            font-size: 14px;
                        }
                        textarea{
                            width:382px;
                            height:120px;
                            line-height: 30px;
                            border:1px solid #ccc;
                            background-color: #fcfcfc;
                            padding:0 8px;
                            border-radius: 4px;
                            resize: none;
                            font-size: 14px;
                            outline: none;
                            vertical-align: top;
                        }
                        input:focus,textarea:focus{
                            border-color: rgba(82,168,236,.8);
                            box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6);
                        }
                        .dropDown{
                            width:190px;
                            padding-left: 8px;
                            background-color: #fcfcfc;
                            height:38px;
                            border:1px solid #ccc;
                            border-radius: 4px;
                            position: relative;
                            line-height: 40px;
                            h1{
                                font-size: 14px;
                                cursor: pointer;
                                background: url('../../assets/img/dropDown.png') no-repeat 170px center;
                            }
                            .dropDownItem{
                                position: absolute;
                                left:-1px;
                                top:39px;
                                height:200px;
                                background-color: #fcfcfc;
                                border:1px solid #ccc;
                                width:198px;
                                border-radius: 4px;
                                overflow: hidden;
                                p{
                                    padding-left: 8px;
                                    cursor: pointer;
                                    transition: all .2s;
                                }
                                p:hover,p.current{
                                    background-color: #2e95ee;
                                    color: #fff;
                                }
                            }
                            .dropDownItem-enter-active{
                                -webkit-animation: sliderIn .1s;
                                animation: sliderIn .1s;
                            }
                            .dropDownItem-leave-active{
                                -webkit-animation: sliderOut .1s;
                                animation: sliderOut .1s;
                            }
                        }
                    }
                }
            }
            footer{
                height: 40px;
                line-height: 40px;
                margin-bottom: 20px;
                button{
                    width:100px;
                    height:36px;
                    background-color: #2e95ee;
                    color: #fff;
                    border-radius: 4px;
                    cursor: pointer;
                    margin-top: 2px;
                }
                s{
                    color: #ff7a22;
                    text-decoration: none;
                }
            }
        }
        .messageBoard-enter-active{
            -webkit-animation: flyIn .3s;
            animation: flyIn .3s;
        }
        .messageBoard-leave-active{
            -webkit-animation: flyOut .3s;
            animation: flyOut .3s;
        }
    }
</style>
