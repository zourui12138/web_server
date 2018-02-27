<template>
    <div class="banner">
        <div class="commonWidth">
            <div class="productIntroduce">
                <h1 :style="productLogo">{{bannerTitle}}</h1>
                <p v-html="bannerContent"></p>
                <button type="button">申请试用</button>
            </div>
            <div class="bannerIcon"><img :src="bannerIcon" alt=""></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "product_banner",
        props: ['bannerIcon','bannerTitle','bannerContent','productLogo']
    }
</script>

<style lang="scss" scoped>
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
    .banner{
        height:400px;
        background: url('../../../../assets/img/products/banner.png') no-repeat center;
        .commonWidth{
            position: relative;
            .productIntroduce{
                width:600px;
                color: #fff;
                padding-top: 96px;
                animation-name: zoomInLeft;
                animation-duration: 1s;
                h1{
                    height:64px;
                    line-height: 64px;
                    padding-left: 76px;
                    font-size: 30px;
                }
                p{
                    line-height: 20px;
                    margin-top: 24px;
                    margin-bottom: 24px;
                    font-size: 14px;
                    text-align: justify;
                }
                button{
                    width:120px;
                    height:36px;
                    line-height: 36px;
                    color: #fff;
                    background-color: #3096ee;
                    cursor: pointer;
                }
            }
            .bannerIcon{
                position: absolute;
                top:0;
                right:0;
                animation-name: zoomInRight;
                animation-duration: 1s;
            }
        }
    }
</style>
