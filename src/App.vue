<template>
    <div id="container">
        <Header></Header>
        <VuePerfectScrollbar v-scroll class="container-scrollbar">
            <router-view/>
        </VuePerfectScrollbar>
        <div class="consult">
            <h1><img src="./assets/img/consult.png" alt=""/>咨询&建议</h1>
            <ul>
                <li class="clear"><p>咨询电话<br>请拨打：<span>028-87827621</span></p></li>
                <li class="clear"><p>在线咨询<br>QQ联系：<span @click="openQQ()">点击沟通</span></p></li>
                <li class="clear"><p><span @click="toggleMessageBoard()">意见反馈</span><br>我们最需要的是您的建议</p></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import Header from '~/common/components/header'

    export default {
        name: 'App',
        components: {Header, VuePerfectScrollbar},
        methods: {
            openQQ() {
                window.location.href = 'tencent://message/?uin=2326375710&Site=在线QQ&amp;Menu=yes';
            }
        }
    }
</script>

<style lang="scss">
    html {
        height: 100%;
    }
    body {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        /*字体抗锯齿,使用后字体看起来会更清晰舒服*/
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
        height: calc(100%);
        min-width: 1200px;
    }
    ul, ol, p, h1, h2, h3, h4, h5, h6, button, input {
        margin: 0;
        padding: 0;
        list-style: none;
        outline: none;
    }
    h1, h2, h3, h4, h5, h6 {
        font-size: 16px;
        font-weight: normal;
    }
    input, button {
        outline: none;
        border: none;
    }
    .fl {
        float: left;
    }
    .fr {
        float: right;
    }
    .clear:after {
        content: '';
        display: block;
        clear: both;
    }
    .commonWidth{
        width: 1200px;
        margin: auto;
    }
    .el-scrollbar__wrap {
        overflow-x: auto;
    }
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
    #container{
        height: calc(100%);
        /*.container-scrollbar*/
        .container-scrollbar {
            height: calc(100% - 81px);
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
                    background: url('./assets/img/phone.png') no-repeat 20px center;
                }
                li:nth-child(2){
                    background: url('./assets/img/QQ.png') no-repeat 20px center;
                }
                li:nth-child(3){
                    background: url('./assets/img/suggestion.png') no-repeat 20px center;
                }
            }
        }
        .consult:hover ul{
            left:-250px;
            border-left:2px solid #2e95ee;
            border-right:2px solid #2e95ee;
        }
    }
</style>
