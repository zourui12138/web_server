<template>
    <div class="commonWidth documents">
        <header class="header">
            <h1>相关文档</h1>
            <h2>Related&nbsp;Documents</h2>
        </header>
        <section>
            <a v-for="i in documentsList">{{i}}</a>
        </section>
    </div>
</template>

<script>
    export default {
        name: "product_documents",
        props: ['documentsList']
    }
</script>

<style lang="scss" scoped>
    .documents{
        section{
            margin-top:20px;
            margin-bottom:60px;
            background-color: #fcfcfc;
            padding:20px;
            a{
                color: #3096ee;
                text-decoration: none;
                padding-left: 20px;
                height:20px;
                line-height: 20px;
                background: url('../../../../assets/img/products/download.png') no-repeat 0 center;
                margin-right: 20px;
                cursor: pointer;
            }
        }
    }
</style>
