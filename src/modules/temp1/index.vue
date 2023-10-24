<template>
    <div class="temp1">

        <div class="title">组织建设</div>
        <div class="sub">ORGANIZATION CONSTRUCTION</div>
        <div class="layout">
            <div class="relative">
                <div class="list">
                    <div v-for="(item, index) in list" :key="index" :class="['item', getClass(index)]"
                        :style="{ 'transition-delay': `${index % 6 * 70}ms` }">
                        <div class="img">
                            <img :src="item.data" alt="">
                        </div>
                        <div class="label">
                            <div class="icon"></div>
                            <div class="text">{{ item.title }}</div>
                        </div>
                        <div v-if="![2, 5].includes(index % 6)" class="decoration">
                            <div class="size">
                                <div class="s" v-for="i in 41" :key="i"
                                    :style="{ height: (i - 1) % 5 == 0 ? '12px' : '7px' }">
                                </div>
                            </div>
                            <div class="line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Book :head="{
            no: 1,
            cn: '组织建设',
            en: 'ORGANIZATION CONSTRUCTION'
        }" :word="word" :show="showWordA1" :index="wordIndex" />
    </div>
</template>

<script>
import Book from '../book/index.vue'
import Img1 from '@/assets/temp1/1.png'
import Img2 from '@/assets/temp1/2.png'
import Img3 from '@/assets/temp1/3.png'
import Img4 from '@/assets/temp1/4.png'
import Img5 from '@/assets/temp1/5.png'
import Img6 from '@/assets/temp1/6.png'
import Img7 from '@/assets/temp1/7.png'
import Img8 from '@/assets/temp1/8.png'
import Img9 from '@/assets/temp1/9.png'
import Img10 from '@/assets/temp1/10.png'
import Img11 from '@/assets/temp1/11.png'
import Img12 from '@/assets/temp1/12.png'
import Img13 from '@/assets/temp1/13.png'
import Img14 from '@/assets/temp1/14.png'
import Img15 from '@/assets/temp1/15.png'
import Img16 from '@/assets/temp1/16.png'
import Img17 from '@/assets/temp1/17.png'
import Img18 from '@/assets/temp1/18.png'
import Img19 from '@/assets/temp1/19.png'
import { mapActions, mapGetters } from 'vuex'
export default {
    props: {
        active: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Book
    },
    data() {
        return {
            list: [],
            listLen: 0,
            in: -1,
            out: -1,
            index: -1,
            // text
            wordIndex: 0,
            word: [
                {
                    type: 'word',
                    head: {
                        no: 1,
                        cn: '组织建设',
                        en: 'ORGANIZATION CONSTRUCTION'
                    },
                    data: [
                        { type: 1, data: '荣盛集团的党群组织随着企业的发展应运而生，印证着集团的发展壮大。' },
                        { type: 1, data: '荣盛于 1995 年 9 月成立党支部，于2003 年 6 月成立党委，是萧山较早设立党委的民营企业之一。目前，隶属益农镇党委的中共浙江荣盛控股集团委员会下设 5 个党支部，在册党员 220 余名。集团及下属子公司共有党委 5 个，党总支 2 个，支部 62 个在册党员 1400 余名，基本实现了“高层管理有党员，重要部门有党员，关键岗位有党员”的格局' },
                        { type: 2, data: 'The Party-miasses organizations of Rongsheng group came into being with the development of the company, witnessing the growth of the group.' },
                        { type: 2, data: 'Rongsheng established the Party branch in September 1995 and the Party committee in June 2003, which is one of the earliest private enterprises to establish the Party committee in Xiaoshan. At present, the CPC Zhejiang Rongsheng Holding Group Committee, the subordinate of the Party Committee of Yinong Town, has five party branches and more than 220 registered party members.Rongsheng holding group and its subsidiaries have 5 Party committees, 2 general' },
                    ]
                },
                {
                    type: 'word',
                    data: [
                        { type: 2, wrap: true, data: 'Party branches, 62 branches and more than 1400 registered party members. whether in Yinong or other places, the subsidiaries have basically realized the pattern of "Party Members in Senior Management, Important Departments and Key Positions"' },
                        { type: 1, data: '荣盛于1996年5月成立工会，2001年5月成立团委，于2007年5月成立人武部,2007年10月成立了妇女联合会，2008年12月成立科学技术协会, 2021年5月成立统战部。各群团组织以党组织为政治核心，形成了工、青、妇、武等群众组织良性互动、相得益彰的“党建带群建”的长效机制。' },
                        { type: 2, data: "Rongsheng established the Labor Union in May 1996, the Youth League Committee in May 2001, the Ministry of People's Armed Forces in May 2007, the Women's Federation in October 2007, the Science and Technology Association in December 2008 and the United Front Work Department in May 2021. With the Party organization as the political core, all mass organizations have formed a long-term mechanism of 'Party Construction Leads Mass Construction' tha tLabor Union, Youth League Committee Women's Federation, People's Armed Forces Department and other mass organizations can cooperate in an " }
                    ]
                },
                {
                    type: 'word',
                    data: [
                        { type: 2, wrap: true, data: "interactive way and bring out the best in each other." }
                    ]
                }
            ],
            wordLen: 0
        }
    },
    computed: {
        ...mapGetters(['switchElement1', 'showWordA1', 'switchWordA1'])
    },
    created() {
        this.wordLen = this.word.length - 1;
        this.list = [
            { title: '集团召开党委成立大会', data: Img1 },
            { title: '集团党委班子换届', data: Img2 },
            { title: '李水荣董事长被评为杭州市“最美人大代表”', data: Img3 },
            { title: '集团职工代表大会', data: Img4 },
            { title: '庆祝新中国成立70周年升旗仪式', data: Img5 },
            { title: '集团团委成立', data: Img6 },
            { title: '李水荣董事长入选“风云浙商”', data: Img7 },
            { title: '妇女联合会成立', data: Img8 },
            { title: '李水荣董事长登上《浙商》封面', data: Img9 },
            { title: '人武部成立', data: Img10 },
            { title: '科协成立', data: Img12 },
            { title: '李水荣董事长荣获“浙江省非公有制经济人士新时代优秀中国特色社会主义事业建设者”称号', data: Img11 },
            { title: '集团党员志愿者进行宣誓', data: Img13 },
            { title: '统战部成立', data: Img14 },
            { title: '集团党员在踊跃参加无偿献血活动', data: Img15 },
            { title: '党群组织工作联席会', data: Img16 },
            { title: '党员积极参与新冠肺炎疫情防控', data: Img17 },
            { title: '集团党员志愿者在参加义务活动，分发宣传资料', data: Img18 },
            { title: '集团党员志愿者参加交通指挥活动', data: Img19 },
            { title: '集团召开党委成立大会', data: Img1 },
            { title: '集团党委班子换届', data: Img2 },
            { title: '李水荣董事长被评为杭州市“最美人大代表”', data: Img3 },
            { title: '集团职工代表大会', data: Img4 },
            { title: '庆祝新中国成立70周年升旗仪式', data: Img5 },
        ]
        this.listLen = this.list.length / 6 - 1
    },
    watch: {
        // 显示页面
        active(data) {
            if (data) {
                this.index = this.switchElement1
            } else {
                // this.index = -1
            }
        },
        // 元素切换
        switchElement1(data) {
            if (data > this.listLen) {
                this.setData({ type: 'switchElement1', active: 0 })
            } else if (data < 0) {
                this.setData({ type: 'switchElement1', active: this.listLen })
            } else {
                this.index = data
            }
        },
        // 元素切换时
        index(data, old) {
            if (data >= 0) {
                this.out = old;
                setTimeout(() => {
                    this.in = data
                    this.out = -1
                }, 610);
            } else {
                this.in = -1
                this.out = -1
            }
        },
        // 文档切换
        switchWordA1(data) {
            if (data > this.wordLen) {
                this.setData({ type: 'switchWordA1', active: 0 })
            } else if (data < 0) {
                this.setData({ type: 'switchWordA1', active: this.wordLen })
            } else {
                this.wordIndex = data
            }
        }

    },
    mounted() {

    },
    methods: {
        ...mapActions({ setData: 'system/setData' }),
        getClass(index) {
            const active = Math.floor(index / 6)
            return `item-${index % 6 + 1} ${active === this.in ? 'animaIn' : ''} ${active === this.out ? 'animaOut' : ''}`
        },
    }
}
</script>

<style lang="scss" scoped>
.temp1 {
    position: relative;
    height: 100%;
    padding-top: 240px;

    .title {
        text-align: center;
        color: #C12E1A;
        font-size: 140px;
        font-weight: bold;
        line-height: 1;
    }

    .sub {
        text-align: center;
        color: #C12E1A;
        font-size: 40px;
        // letter-spacing: 4px;
        padding: 30px 0 35px;
        font-weight: bold;
    }

    .layout {
        padding: 0 200px;

        .relative {
            position: relative;
            width: 675px;

            .item {
                position: absolute;
                width: 274px;
                opacity: 0;
                transform: matrix(1, 0, 0, 1, 0, 200);
                transition-duration: 600ms;

                &.item-1 {
                    top: 0;
                    left: 0;
                }

                &.item-2 {
                    top: 281px;
                    left: 0;
                }

                &.item-3 {
                    top: 562px;
                    left: 0;
                }


                &.item-4 {
                    top: 70px;
                    right: 0;
                }

                &.item-5 {
                    top: 351px;
                    right: 0;
                }

                &.item-6 {
                    top: 632px;
                    right: 0;
                }

                &::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 250px;
                    height: 168px;
                    border: 2px #C12E1A solid;
                    border-radius: 30px;
                }

                .img {
                    position: relative;
                    width: 250px;
                    height: 168px;
                    border-radius: 30px;
                    overflow: hidden;
                    z-index: 2;
                    transform: matrix(1, 0, 0, 1, 24, 24);

                    img {
                        display: block;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    &::before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        border: 5px #C12E1A solid;
                        border-radius: 30px;
                    }

                }

                .label {
                    position: relative;
                    // display: flex;
                    // align-items: center;
                    margin-top: 30px;
                    padding: 0 5px;

                    .icon {
                        position: absolute;
                        flex-shrink: 0;
                        width: 18px;
                        height: 18px;
                        border-radius: 50%;
                        background-color: #C12E1A;
                        left: -20px;
                    }

                    .text {
                        flex-grow: 1;
                        // height: 18px;
                        background-image: linear-gradient(90deg, #C12E1A, rgba(188, 34, 24, 0));
                        // margin-left: 5px;
                        line-height: 14px;
                        font-size: 12px;
                        padding: 1px 5px 2px;
                        letter-spacing: 1.2px;
                        color: #fff;
                        font-weight: bold;
                    }
                }

                .decoration {
                    position: relative;
                    height: 65px;

                    &.reverse {
                        transform: matrix(-1, 0, 0, 1, 0, 0);
                    }

                    .size {
                        position: absolute;
                        top: 20px;
                        right: 0;
                        display: flex;
                        align-items: flex-end;
                        border-bottom: 1px #C12E1A solid;

                        .s {
                            width: 1px;
                            background-color: #C12E1A;

                            &~.s {
                                margin-left: 3px;
                            }
                        }
                    }

                    .line {
                        position: absolute;
                        width: 100%;
                        border-bottom: 3px #C12E1A dashed;
                        bottom: 12px;
                        left: 0;
                        transform: matrix(1, 0, 0, 0.5, 0, 0)
                    }
                }

                &.animaIn {
                    // animation: animain 600ms ease-out forwards;
                    opacity: 1;
                    transform: matrix(1, 0, 0, 1, 0, 0);
                }

                &.animaOut {
                    // animation: animaOut 1000ms ease-in;
                    opacity: 0;
                    transform: matrix(1, 0, 0, 1, 0, -200);
                }
            }
        }
    }


}
</style>