<template>
    <div id="login">
        <div class="login-box clear">
            <div class="logo fl">
                <img src="../../assets/img/login/login_logo.png" alt="">
                <p>官&nbsp;网&nbsp;后&nbsp;台&nbsp;管&nbsp;理&nbsp;平&nbsp;台</p>
            </div>
            <div class="input-box fr">
                <ul>
                    <li class="clear">
                        <span class="fl">用户登录</span>
                        <strong class="fr">密码错误，请重新输入</strong>
                    </li>
                    <li><input type="text" placeholder="请输入用户名"></li>
                    <li><input type="text" placeholder="请输入密码"></li>
                    <li class="clear">
                        <div class="fl">
                            <strong></strong><span>下次自动登录</span>
                        </div>
                        <a class="fr">忘记密码?</a>
                    </li>
                    <li><button type="button">登&nbsp;&nbsp;&nbsp;录</button></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style lang="scss" scoped>
    #login{
        height: calc(100%);
        min-height: 376px;
        position: relative;
        background-color: #2e95ee;
        .login-box{
            position: absolute;
            left: 0;
            right: 0;
            top: calc(50% - 188px);
            width: 884px;
            margin: auto;
            .logo{
                padding-top: 94px;
                img{
                    vertical-align: top;
                    margin-bottom: 40px;
                }
                p{
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    width: 327px;
                    color: #fff;
                    font-size: 24px;
                    background-color: #9fcff7;
                    border-radius: 10px;
                }
            }
            .input-box{
                background:#fff url('../../assets/img/login/input_box_blur.png') no-repeat center;
                width: 317px;
                height: 306px;
                border: 1px solid #1c84f9;
                padding: 34px;
                ul{
                    padding: 16px 0;
                    li:nth-child(1){
                        height: 40px;
                        line-height: 40px;
                        span{
                            font-size: 18px;
                        }
                        strong{
                            font-size: 12px;
                            font-weight: normal;
                            color: #f95e08;
                        }
                    }
                    li:nth-child(4){
                        height: 60px;
                        line-height: 60px;
                        font-size: 14px;
                        a{
                            font-size: 14px;
                            color: #6898d6;
                            cursor: pointer;
                        }
                    }
                    input{
                        height: 43px;
                        width: 275px;
                        border: 1px solid #e4e4e4;
                        margin-top: 20px;
                        padding-left: 40px;
                        transition: all .2s;
                    }
                    input:focus{
                        border: 1px solid #6898d6;
                    }
                    button{
                        width: 315px;
                        height: 44px;
                        background-color: #6898d6;
                        color: #fff;
                        border-radius: 2px;
                        font-size: 18px;
                    }
                }
            }
        }
    }
</style>
