<template>
    <div class="footer">
        <div class="commonWidth clear">
            <ul class="fl">
                <li>迅鳐成都科技有限公司</li>
                <li>公司网址：www.mrray.cn</li>
                <li>公司电话：028—87827621</li>
                <li>数据哨兵研发办公地址：四川省成都市郫都区菁蓉镇大禹东路66号3栋10楼</li>
                <li>区块链研发办公地址：四川省成都市高新区菁蓉国际广场1栋A区3楼</li>
                <li>服务咨询邮箱：Service@MrRay.cn</li>
                <li>简历投递邮箱：hr@mrray.cn</li>
                <li>Copyright&nbsp;&copy;&nbsp;2015-2035&nbsp;迅鳐成都科技有限公司&nbsp;版权所有&nbsp;蜀ICP备16007868号</li>
            </ul>
            <div class="fr">
                <img src="../../assets/img/QrCode.png" alt="">
                <h1>扫码关注迅鳐公众号</h1>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "containerFooter"
    }
</script>

<style lang="scss" scoped>
    .footer {
        background-color: #333333;
        color: #fff;
        font-size: 12px;
        padding: 15px 0;
        li {
            line-height: 30px;
        }
        div div {
            text-align: center;
            margin-top: 32px;
            h1 {
                font-size: 12px;
                height: 50px;
                line-height: 50px;
            }
            img {
                vertical-align: top;
            }
        }
    }
</style>
