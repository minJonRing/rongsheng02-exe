<template>
    <div class="temp7">
        <div class="relative">
            <div class="bg-7">
                <img class="brid b-1" :src="Brid" />
                <img class="brid b-2" :src="Brid" />
                <img class="brid b-3" :src="Brid" />
                <img class="brid b-4" :src="Brid" />
                <img class="brid b-5" :src="Brid" />
                <img class="brid b-6" :src="Brid" />
            </div>
            <div class="head">
                <Title />
            </div>
            <div class="box">
                <div class="relative">
                    <div class="menu">
                        <div class="m">基层党建</div>
                        <div class="m">干部情况</div>
                        <div class="m">组织生活</div>
                        <div class="m">教育管理</div>
                        <div class="m">先锋示范</div>
                    </div>
                    <div class="base">
                        <div class="title">党组织基本情况</div>
                        <div class="list">
                            <div class="item">党委：<span>5</span>个</div>
                            <div class="item">党支书：<span>2</span>个</div>
                            <div class="item">党支部：<span>62</span>个</div>
                            <div class="item">党员：<span>1453</span>个</div>
                        </div>
                    </div>
                    <MidNum />
                    <div class="l-r">
                        <div class="left">
                            <div class="ic ic-1">
                                <div class="title">年龄结构</div>
                                <div class="content">
                                    <div class="l">
                                        <div v-for="i in 20" :key="i"></div>
                                        <span>85%</span>
                                    </div>
                                    <div class="l">
                                        <div v-for="i in 20" :key="i"></div>
                                        <span>15%</span>
                                    </div>
                                    <div class="l">
                                        <div v-for="i in 20" :key="i"></div>
                                        <span>70%</span>
                                    </div>
                                    <div class="l">
                                        <div v-for="i in 20" :key="i"></div>
                                        <span>45%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="ic ic-2">
                                    <div class="title">****</div>
                                    <E1 />
                                </div>
                                <div class="ic ic-3">
                                    <div style="height:63px"></div>
                                    <E2 />
                                    <div class="i i1">150</div>
                                    <div class="i i2">130</div>
                                    <div class="i i3">100</div>
                                </div>
                            </div>
                            <div class="flex" style="margin-top:20px">
                                <div class="ic-o" style="width:198px">
                                    <div class="title">行业结构</div>
                                    <E3 />
                                </div>
                                <div class="ic-o" style="width:198px">
                                    <div class="title">学历结构</div>
                                    <E4 />
                                </div>
                                <div class="ic-o" style="width:318px">
                                    <div class="title" style="margin-left:40px">性别结构</div>
                                    <E5 />
                                </div>
                            </div>
                            <div class="flex" style="margin-top:20px">
                                <div class="ic-t" style="width:288px">
                                    <div class="title">微信答题排行榜</div>
                                    <E6 />
                                </div>
                                <div class="ic-t" style="width:505px">
                                    <E7 />
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="o">
                                <div class="rc">
                                    <div class="title">****</div>
                                    <R1 />
                                </div>
                                <div class="rc">
                                    <div class="title">年龄结构</div>
                                    <R2 />
                                </div>
                            </div>
                            <div class="t">
                                <div class="rc-t rc-t-1" style="height:165px">
                                    <div class="title">党员政治生日</div>
                                    <R3 />
                                </div>
                                <div class="rc-t rc-t-2" style="height:165px">
                                    <R4 />
                                </div>
                                <div class="rc-t rc-t-3" style="height:240px">
                                    <div class="title">****</div>
                                    <R5 />
                                </div>
                                <div class="rc-o">
                                    <div class="title">党员组织活动</div>
                                    <R6 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Title from './components/title.vue'
import Brid from '@/assets/temp7/brid.png'
// echart
import E1 from './left/e1.vue'
import E2 from './left/e2.vue'
import E3 from './left/e3.vue'
import E4 from './left/e4.vue'
import E5 from './left/e5.vue'
import E6 from './left/e6.vue'
import E7 from './left/e7.vue'

import R1 from './right/r1.vue'
import R2 from './right/r2.vue'
import R3 from './right/r3.vue'
import R4 from './right/r4.vue'
import R5 from './right/r5.vue'
import R6 from './right/r6.vue'

import MidNum from './mid.vue'

export default {
    components: {
        Title,
        // left
        E1,
        E2,
        E3,
        E4,
        E5,
        E6,
        E7,
        R1,
        R2,
        R3,
        R4,
        R5,
        R6,
        MidNum
    },
    data() {
        return {
            Brid
        }
    }
}
</script>

<style lang="scss" scoped>
.temp7 {
    width: 2790px;
    padding-left: 325px;

    .relative {
        position: relative;

        .bg-7 {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 9;
            pointer-events: none;

            .brid {
                position: absolute;

                &.b-1 {
                    top: 143px;
                    right: 190px;
                }

                &.b-2 {
                    top: 237px;
                    right: 370px;
                }

                &.b-3 {
                    top: 370px;
                    right: 210px;
                    transform: matrix(0.8, 0, 0, 0.8, 0, 0);
                }

                &.b-4 {
                    top: 643px;
                    right: 1012px;
                }

                &.b-5 {
                    top: 787px;
                    right: 916px;
                    transform: matrix(0.9, 0, 0, 0.9, 0, 0);
                }

                &.b-6 {
                    top: 821px;
                    right: 740px;
                    transform: matrix(0.8, 0, 0, 0.8, 0, 0);
                }
            }
        }

        .head {
            position: relative;
            height: 276px;
            padding: 0 65px;
            z-index: 1;
        }

        .box {
            position: relative;
            width: 2465px;
            height: 1236px;
            padding: 0 97px;
            z-index: 3;

            .relative {
                .menu {
                    display: flex;
                    justify-content: center;

                    .m {
                        font-family: '思源黑体 CN';
                        font-size: 52px;
                        line-height: 62px;
                        background-image: linear-gradient(0, rgba(243, 149, 24, .48), rgba(243, 149, 24, 0) 80%);
                        color: #E9B57A;
                        padding: 0 18px 8px;
                        margin: 0 28px;
                    }
                }

                .base {
                    position: absolute;
                    width: 1447px;
                    top: 70px;
                    left: 50%;
                    transform: translateX(-50%);
                    color: #E9B57A;
                    font-size: 33px;
                    letter-spacing: 3px;
                    line-height: 1;
                    padding-top: 50px;
                    height: 250px;

                    .title {
                        padding: 14px 0;
                    }

                    .list {
                        display: flex;
                        flex-wrap: wrap;

                        .item {
                            padding: 14px 0;
                            width: 33%;

                            span {
                                color: #FDB502;
                            }
                        }
                    }
                }

                .l-r {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                }

                .left {
                    .ic {
                        width: 310px;
                        height: 272px;
                        border-radius: 20px;
                        background-color: rgba(255, 171, 117, .2);
                        overflow: hidden;

                        &~.ic {
                            margin-left: 20px;
                        }

                        &.ic-1 {
                            margin-bottom: 20px;

                            .title {
                                font-size: 23px;
                                color: #E9B57A;
                                line-height: 1;
                                padding: 20px 24px;
                            }

                            .content {
                                display: flex;
                                justify-content: center;

                                .l {
                                    margin: 0 15px;

                                    div {
                                        width: 24px;
                                        height: 4px;
                                        background-color: #F2843C;

                                        &~div {
                                            margin-top: 4px;
                                        }
                                    }

                                    span {
                                        display: block;
                                        padding-top: 18px;
                                        color: #fff;
                                        font-size: 13px;
                                        text-align: center;
                                    }
                                }
                            }
                        }

                        &.ic-2 {
                            .title {
                                font-size: 23px;
                                color: #E9B57A;
                                line-height: 1;
                                padding: 20px 24px;
                            }
                        }

                        &.ic-3 {
                            position: relative;

                            .i {
                                position: absolute;
                                color: #fff;
                                font-size: 13px;

                                &::before {
                                    content: "";
                                    position: absolute;
                                    width: 4px;
                                    height: 4px;
                                    border-radius: 50%;
                                    background-color: #2ABBFF;
                                    top: 120%;
                                    left: 50%;
                                    transform: translate(-50%);
                                }

                                &.i1 {
                                    top: 54px;
                                    left: 60px;
                                }

                                &.i2 {
                                    top: 80px;
                                    left: 183px;
                                }

                                &.i3 {
                                    top: 130px;
                                    left: 280px;
                                }
                            }
                        }
                    }

                    .ic-o {
                        height: 174px;
                        border-radius: 20px;
                        background-color: rgba(255, 171, 117, .2);
                        overflow: hidden;

                        .title {
                            font-size: 23px;
                            color: #E9B57A;
                            line-height: 1;
                            padding: 12px 12px 6px;
                        }

                        &~.ic-o {
                            margin-left: 20px;
                        }
                    }

                    .ic-t {
                        height: 216px;
                        border-radius: 20px;
                        background-color: rgba(255, 171, 117, .2);
                        overflow: hidden;

                        .title {
                            font-size: 23px;
                            color: #E9B57A;
                            line-height: 1;
                            padding: 12px 12px 6px;
                        }

                        &~.ic-t {
                            margin-left: 20px;
                        }
                    }
                }

                .right {
                    display: flex;
                    align-items: flex-end;

                    .o {
                        .rc {
                            width: 334px;
                            height: 312px;
                            border-radius: 20px;
                            background-color: rgba(255, 171, 117, .2);
                            overflow: hidden;

                            &~.rc {
                                margin-top: 20px;
                            }

                            .title {
                                font-size: 23px;
                                color: #E9B57A;
                                line-height: 1;
                                padding: 20px 24px;
                            }
                        }
                    }

                    .t {
                        margin-left: 20px;

                        .rc-t {
                            width: 336px;
                            border-radius: 20px;
                            background-color: rgba(255, 171, 117, .2);
                            overflow: hidden;

                            &~.rc-t {
                                margin-top: 20px;
                            }

                            .title {
                                font-size: 23px;
                                color: #E9B57A;
                                line-height: 1;
                                padding: 20px 24px;
                            }

                            &.rc-t-1 {
                                .title {
                                    font-size: 12px;
                                    padding: 20px 24px 12px;
                                }
                            }
                        }

                        .rc-o {
                            margin-top: 20px;
                            padding-bottom: 15px;

                            .title {
                                font-size: 23px;
                                color: #E9B57A;
                                line-height: 1;
                                padding: 14px 26px;
                            }
                        }
                    }
                }
            }
        }
    }

}
</style>