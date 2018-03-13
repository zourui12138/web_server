<template>
    <div id="mrray">
        <Header></Header>
        <VuePerfectScrollbar v-scroll class="container-scrollbar"><router-view/></VuePerfectScrollbar>
        <div class="consult">
            <h1><img src="../../assets/img/consult.png" alt=""/>咨询&建议</h1>
            <ul>
                <li class="clear"><p>咨询电话<br>请拨打：<span>028-87827621</span></p></li>
                <li class="clear"><p>在线咨询<br>QQ联系：<span>点击沟通</span></p></li>
                <li class="clear"><p><span>意见反馈</span><br>我们最需要的是您的建议</p></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import Header from '~/common/components/header'

    export default {
        name: 'mrray',
        components: {Header, VuePerfectScrollbar}
    }
</script>

<style lang="scss">
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
    #mrray{
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
    }
</style>
