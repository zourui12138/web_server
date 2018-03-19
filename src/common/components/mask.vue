<template>
    <transition name="mask">
        <div class="mask" v-show="maskUI"></div>
    </transition>
</template>

<script>
    export default {
        name: "mask",
        props: ['maskUI']
    }
</script>

<style lang="scss" scoped>
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
</style>
