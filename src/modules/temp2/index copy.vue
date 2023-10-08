<template>
    <div class="temp2">
        <Title cn="党群组织" en="PARTY ORGANZATION" />
        <div class="box">
            <div class="relative">
                <div class="size t">
                    <div class="s" v-for="i in 41" :key="i" :style="{ height: (i - 1) % 5 == 0 ? '12px' : '7px' }"></div>
                </div>
                <div class="content">
                    <div class="left">
                        <div class="cn">荣盛控股集团党委</div>
                        <div class="en">PARTY COMMITTEE OF RONGSHENG HOLDING GROUP</div>
                    </div>
                    <div class="mid">
                        <div class="item" v-for="item in midLabel" :key="item.en">
                            <div class="cn">
                                <span v-for="i in item.cn" :key="i">{{ i }}</span>
                            </div>
                            <div class="en">{{ item.en }}</div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="cn">党群工作部</div>
                        <div class="en">PARTY MASSES WORK DEPARTMENT</div>
                    </div>
                </div>
                <div class="size b">
                    <div class="s" v-for="i in 41" :key="i" :style="{ height: (i - 1) % 5 == 0 ? '12px' : '7px' }"></div>
                </div>
            </div>
        </div>
        <Book :head="{
            no: 2,
            cn: '党群组织',
            en: 'PARTY ORGANZATION'
        }" :word="word" :show="showWordA2" :index="wordIndex" />
        <!--  -->
        <File :word="wordFile" :show="showWordB2" :index="wordFileIndex" />
    </div>
</template>

<script>
import Title from '../components/title/index.vue'
import Book from '../book/index.vue'
import File from '../book/file.vue'
import { wordFile } from './file'
import { mapActions, mapGetters } from 'vuex'
export default {
    components: {
        Title,
        Book,
        File
    },
    data() {
        return {
            midLabel: [
                { cn: '工 会', en: 'LABOUR UNION' },
                { cn: '团 委', en: 'YOUTH COMMITTEE' },
                { cn: '妇 联', en: 'WOMEN’S FEDERATION' },
                { cn: '人武部', en: 'MINISTRY OF MANPOWER' },
                { cn: '统战部', en: 'UNITED FRONT DEPARTMENT' },
                { cn: '科 协', en: 'SCIENTIFIC ASSOCIATION' },
            ],
            // text
            word: [
                [
                    { type: 1, data: '在党建带群建的工作中，荣盛摸索出了一套具有一定特色的“四共一体”工作模式即坚持以党组织为核心，通过整合工、青、妇、武等群团组织，构建“组织共建、工作共谋、资源共享、宣教共鸣”的党群共建工作机制，积极打造党群工作齐抓共管、作用互补相互监督、共同发展的工作新局面。' },
                    { type: 2, data: "Under the leading of Party construction,Rongsheng has explored a set of 'Four in One' working model adhering to the Party organization as the core and building a working mechanism of'Organization Co-construction, Work Co-planning，Resource Sharing, Propaganda and Education Resonance' through the integration of mass organizations such as Labor Union, Youth League Committee, Women's Federation, People's Armed Forces Department, so as to actively create a new situation of joint management, complementary roles, mutual supervision and common development." },
                ]
            ],
            wordLen: 0,
            wordIndex: 0,
            // file
            wordFile,
            wordFileLen: 0,
            wordFileIndex: 0
        }
    },
    computed: {
        ...mapGetters(['showWordA2', 'switchWordA2', 'showWordB2', 'switchWordB2'])
    },
    watch: {
        showWordA2(data) {
            if (data) {
                this.setData({ type: 'showWordB2', active: '0' })
            }
        },
        showWordB2(data) {
            if (data) {
                this.setData({ type: 'showWordA2', active: '0' })
            }
        },
        // 文档切换
        switchWordA2(data) {
            if (data > this.wordLen) {
                this.setData({ type: 'switchWordA2', active: 0 })
            } else if (data < 0) {
                this.setData({ type: 'switchWordA2', active: this.wordLen })
            } else {
                this.wordIndex = data
            }
        },
        // 文档切换
        switchWordB2(data) {
            if (data > this.wordFileLen) {
                this.setData({ type: 'switchWordB2', active: 0 })
            } else if (data < 0) {
                this.setData({ type: 'switchWordB2', active: this.wordFileLen })
            } else {
                this.wordFileIndex = data
            }
        }
    },
    created() {
        this.wordLen = this.word.length - 1;
        this.wordFileLen = this.wordFile.length - 1;
    },
    methods: {
        ...mapActions({ setData: 'system/setData' })
    }
}
</script>

<style lang="scss" scoped>
.temp2 {
    position: relative;
    height: 100%;
    padding-top: 215px;

    .box {
        padding: 75px 160px 0;

        .relative {
            position: relative;


            .size {
                position: relative;
                width: 361px;
                margin: 0 auto;
                display: flex;
                justify-content: center;


                &.t {
                    align-items: flex-start;
                    border-top: 1px #C12E1A solid;
                    padding-bottom: 30px;
                }

                &.b {
                    align-items: flex-end;
                    border-bottom: 1px #C12E1A solid;
                    padding-top: 30px;
                }

                .s {
                    width: 1px;
                    background-color: #C12E1A;

                    &~.s {
                        margin-left: 8px;
                    }
                }
            }

            .content {
                position: relative;
                display: flex;

                .left {
                    position: relative;
                    display: flex;
                    align-items: center;
                    width: 50px;
                    background-color: #C12E1A;
                    border-radius: 10px;
                    font-size: 32px;
                    color: #fff;
                    text-align: center;
                    line-height: 1.2;

                    .en {
                        position: absolute;
                        top: calc(50% - 7px);
                        left: -260px;
                        width: 480px;
                        font-size: 18px;
                        color: #C12E1A;
                        line-height: 1;
                        transform: rotate(90deg);
                        font-weight: bold;
                    }
                }

                .right {
                    position: relative;
                    display: flex;
                    align-items: center;
                    width: 50px;
                    background-color: #C12E1A;
                    border-radius: 10px;
                    font-size: 32px;
                    color: #fff;
                    text-align: center;
                    line-height: 1.2;

                    .en {
                        position: absolute;
                        top: calc(50% - 7px);
                        right: -260px;
                        width: 480px;
                        font-size: 18px;
                        color: #C12E1A;
                        line-height: 1;
                        transform: rotate(90deg);
                        font-weight: bold;
                    }
                }

                .mid {
                    padding: 0 80px;

                    .item {
                        position: relative;
                        width: 256px;
                        height: 64px;
                        text-align: center;
                        border: 1px #C12E1A solid;
                        color: #C12E1A;
                        border-radius: 14px;
                        line-height: 1;

                        .cn {
                            display: flex;
                            justify-content: center;
                            font-size: 30px;
                            font-weight: bold;
                            padding: 5px 0 6px;

                            span {
                                width: 34px;
                            }
                        }

                        &~.item {
                            margin-top: 68px;
                        }

                        &::before {
                            content: "";
                            position: absolute;
                            top: 50%;
                            left: -42px;
                            width: 32px;
                            height: 132px;
                            border-top: 1px #C12E1A dashed;
                            border-left: 1px #C12E1A dashed;
                        }

                        &::after {
                            content: "";
                            position: absolute;
                            top: 50%;
                            right: -42px;
                            width: 32px;
                            height: 132px;
                            border-top: 1px #C12E1A dashed;
                            border-right: 1px #C12E1A dashed;
                        }

                        &:last-child {
                            &::before {
                                border-left: none;
                            }

                            &::after {
                                border-right: none;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>