<template>
    <div class="banner">
        <div class="commonWidth">
            <div class="productIntroduce">
                <h1 :style="productLogo">{{bannerTitle}}</h1>
                <p v-html="bannerContent"></p>
                <button type="button" @click="openMessageBoard">申请试用</button>
            </div>
            <div class="bannerIcon"><img :src="bannerIcon" alt=""></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "product_banner",
        props: ['bannerIcon','bannerTitle','bannerContent','productLogo'],
        methods: {
            openMessageBoard() {
                // 主动触发upup方法，'hehe'为向父组件传递的数据
                // this.$emit('watchMessageBoard','hehe');
                this.$emit('watchMessageBoard');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .banner{
        height:400px;
        background: url('../../../assets/img/products/banner.png') no-repeat center;
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
