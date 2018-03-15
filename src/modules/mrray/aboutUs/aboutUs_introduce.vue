<template>
    <div id="aboutUS-introduce">
        <div class="banner clear">
            <div class="commonWidth clear">
                <div class="banner_left fl">
                    <header>
                        <button type="button" :class="{current : bannerLeftIntroduceNav}" @click="toggleBannerLeftContent()">公司简介</button><button type="button" :class="{current : bannerLeftCultureNav}" @click="toggleBannerLeftContent()">企业文化</button>
                    </header>
                    <transition name="banner_left_introduce">
                        <div class="banner_left_introduce" v-show="bannerLeftIntroduceNav">
                            <p>迅鳐成都科技有限公司（简称‘迅鳐科技’）成立于2015年，由国内首位网络安全长江学者领头创办，是国内第一批大数据安全基础设施制造商与服务商，直接服务于国家信息中心重点筹建的政务数据支撑平台，具有国家级数据资源安全视角。</p>
                            <p>迅鳐科技依托大数据产业，交叉于信息安全，致力于价值数据市场基础规则设计、制定、建设，以提供高水平、定制化数据安全产品、解决方案为中心，服务于政务及企业数据开发、共享健康发展、决策可行性验证。</p>
                        </div>
                    </transition>
                    <transition name="banner_left_culture">
                        <div class="banner_left_culture" v-show="bannerLeftCultureNav">
                            <h1>企业宗旨：打造具备自主知识产权的数据安全产品，为客户提供高质量数据安全解决方案，构建安全。可控、可信的大数据生态环境。</h1>
                            <h1>企业使命：数据安全为己任，客户利益至上，企业成长与股东收益双赢，激发员工潜力，实现个人价值。</h1>
                            <h1>企业理念：创新、高效、与时俱进、价值观引领。</h1>
                            <h1>企业愿景：建设成世界一流水平的大数据安全服务提供商。</h1>
                        </div>
                    </transition>
                </div>
                <div class="banner_right fr"></div>
            </div>
        </div>
        <div class="eventList">
            <div class="commonWidth">
                <header>
                    <h1>迅鳐大事件</h1>
                    <h2>MrRay&nbsp;Events</h2>
                </header>
            </div>
            <div class="timeAxis">
                <div class="commonWidth">
                    <ul class="clear" v-bind:style="{width : timeAxisWidth}" ref="timeAxis">
                        <li class="fl" v-for="(i,index) in eventsList" v-bind:class="{current : currentYear === i.year}" @click="timeAxisMove(i.year,index)">{{i.year}}</li>
                    </ul>
                </div>
            </div>
            <div class="detailEvent">
                <ul class="commonWidth">
                    <li v-for="i in currentEventsList"><strong>{{i.month}}</strong><span>{{i.event}}</span></li>
                </ul>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from '~/common/components/footer'

    export default {
        name: "about-us_introduce",
        components: {Footer},
        data() {
            return{
                eventsList : [
                    {
                        year : 2015,
                        events : [
                            {
                                month : '10月',
                                event : '2015年10月9号迅鳐成都科技有限公司成立。'
                            },
                            {
                                month : '12月',
                                event : '2015年12月与电子科大、成都优易数据有限公司联合申报《大数据安全与共享四川省实验室》。'
                            }
                        ]
                    },
                    {
                        year : 2016,
                        events : [
                            {
                                month : '4月',
                                event : '2016年4月参加工信部《大数据产业峰会》，参与起草大数据安全流通行业标准。'
                            },
                            {
                                month : '6月',
                                event : '2016年6月24号举行大数据哨兵系列产品发布会。'
                            },
                            {
                                month : '4月',
                                event : '2016年10月大数据标记与溯源系统接入中国电建集团成都勘测设计研究院业务系统。'
                            }
                        ]
                    },
                    {
                        year : 2017,
                        events : [
                            {
                                month : '3月',
                                event : '2017年3月迅鳐科技区块链研究中心成立。'
                            },
                            {
                                month : '5月',
                                event : '2017年5月与积微物联联合发布国内首款“在线钢铁物流区块链应用平台”。'
                            },
                            {
                                month : '7月',
                                event : '2017年7月与电子科大、积微物联联合发布西南地区首个区块链研究所。'
                            },
                            {
                                month : '9月',
                                event : '2017年9月纳入国家信息安全中心安全事业部。'
                            }
                        ]
                    },
                    {
                        year : 2018,
                        events : []
                    },
                    {
                        year : 2019,
                        events : []
                    },
                    {
                        year : 2020,
                        events : []
                    },
                    {
                        year : 2021,
                        events : []
                    }
                ],
                index : 0,// 根据不同的索引值需改不同的计算属性
                step : 0, // 移动几步
                bannerLeftIntroduceNav: true,
                bannerLeftCultureNav: false
            }
        },
        computed:{
            timeAxisWidth() {
                return 1200+280*(this.eventsList.length-5)+'px'
            },
            currentEventsList() {
                return this.eventsList[this.index].events;
            },
            currentYear() {
                return this.eventsList[this.index].year;
            }
        },
        methods: {
            timeAxisMove(target,index) {
                let beforeCurrent = this.currentYear;
                this.index = index;
                if(this.eventsList.length > 5){
                    let distance = 280,// 移动一次的距离
                        isMove = false,// 是否移动
                        first = this.eventsList[0].year,
                        last = this.eventsList[this.eventsList.length-1].year,
                        totalStep = this.eventsList.length-5;
                    if(!isMove){
                        isMove = true;
                        if(target > beforeCurrent && this.step < totalStep){// 可以向左移动
                            if(totalStep-this.step < 2){
                                this.step += target <= first+2 ? 0 : 1;
                            }else{
                                target > first+2 && (this.step += beforeCurrent <= first+2 ? target-(first+2) : target-beforeCurrent);
                            }
                        }else if(target < beforeCurrent && this.step > 0){// 可以向右移动
                            if(this.step < 2){
                                this.step -= target >= last-2 ? 0 : 1;
                            }else{
                                target < last-2 && (this.step -= beforeCurrent >= last-2 ? last-2-target : beforeCurrent-target);
                            }
                        }
                        $(this.$refs.timeAxis).animate({left : -this.step*distance+'px'},500,function () {isMove = false;});
                    }
                }
            },
            toggleBannerLeftContent() {
                this.bannerLeftIntroduceNav = !this.bannerLeftIntroduceNav;
                this.bannerLeftCultureNav = !this.bannerLeftCultureNav;
            }
        }
    }
</script>

<style lang="scss" scoped>
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
    #aboutUS-introduce{
        .banner{
            height:430px;
            background: url('../../../assets/img/aboutUs/introduce/banner.png') no-repeat center;
            >div{
                padding-top: 95px;
                .banner_right{
                    width:415px;
                    height:250px;
                    background: url('../../../assets/img/aboutUs/introduce/banner_computer.png') no-repeat center;
                    animation-name: zoomInRight;
                    animation-duration: 1s;
                }
                .banner_left{
                    height:210px;
                    width:728px;
                    color: #fff;
                    background-color: rgba(46,149,238,.9);
                    padding:20px;
                    animation-name: zoomInLeft;
                    animation-duration: 1s;
                    position: relative;
                    header{
                        height:50px;
                        line-height: 50px;
                        button{
                            width:100px;
                            height:30px;
                            line-height: 30px;
                            border-radius: 30px;
                            border:1px solid #fff;
                            background-color: transparent;
                            color: #fff;
                            margin-right: 20px;
                            cursor: pointer;
                            transition: all .2s;
                        }
                        button.current, button:hover{
                            background-color: #fff;
                            color: #2e95ee;
                        }
                    }
                    div{
                        position: absolute;
                        width:728px;
                        p{
                            font-size: 14px;
                            line-height: 25px;
                            text-indent: 2em;
                            text-align: justify;
                        }
                        h1{
                            font-size: 14px;
                            line-height: 25px;
                            text-align: justify;
                        }
                    }
                    .banner_left_introduce-enter-active{
                        transform-origin: 100% 50%;
                        animation: rotateCubeRightIn .6s both ease-in;
                    }
                    .banner_left_introduce-leave-active{
                        transform-origin: 100% 50%;
                        animation: rotateCubeLeftOut .6s both ease-in;
                    }
                    .banner_left_culture-enter-active{
                        transform-origin: 0 50%;
                        animation: rotateCubeLeftIn .6s both ease-in;
                    }
                    .banner_left_culture-leave-active{
                        transform-origin: 0 50%;
                        animation: rotateCubeRightOut .6s both ease-in;
                    }
                }
            }
        }
        .eventList{
            margin-bottom: 60px;
            header{
                width:149px;
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
            .timeAxis{
                font-size: 14px;
                background: url('../../../assets/img/aboutUs/introduce/timeAxis.png') no-repeat center;
                div{
                    overflow: hidden;
                    height:160px;
                    position: relative;
                    ul{
                        position: absolute;
                        top:0;
                        left: 0;
                        li{
                            width:80px;
                            height:80px;
                            background-color: #bed7ed;
                            border-radius: 50%;
                            line-height: 80px;
                            text-align: center;
                            color: #fff;
                            margin:40px 200px 40px 0;
                            cursor: pointer;
                            font-size: 18px;
                        }
                        li:last-child{
                            margin-right: 0;
                        }
                        li:hover, li.current{
                            background-color: #3096ee;
                        }
                    }
                }
            }
            .detailEvent{
                background-color: #fcfcfc;
                line-height: 50px;
                padding:10px 0;
                strong{
                    display: inline-block;
                    height:30px;
                    line-height: 30px;
                    vertical-align: top;
                    width: 60px;
                    text-align: center;
                    color: #fff;
                    background-color: #2e95ee;
                    font-size: 14px;
                    margin-right: 20px;
                    font-weight: normal;
                    margin-top: 10px;
                }
            }
        }
    }
</style>
