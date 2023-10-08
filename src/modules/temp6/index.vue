<template>
    <div :class="['temp6', active ? 'active' : '']">
        <div class="head">
            <div class="title">社会责任</div>
            <div class="sub">SOCIAL RESPONSIBILITY</div>
        </div>
        <div class="box">
            <div class="relative">
                <Rect class="r r1" :width="148" :height="128" />
                <Rect class="r r2" :width="478" :height="413">
                    <RectImg class="r-img" :width="390" :height="337" :img="Img4" />
                </Rect>
                <Rect class="r r3" :width="106" :height="92" />
                <Rect class="r r4" :width="84" :height="72" />
                <Rect class="r r5" :width="74" :height="64" />
                <Rect class="r r6" :width="342" :height="296" />
                <Rect class="r r7" :width="342" :height="296" />
                <Rect class="r r8" :width="216" :height="188" />
                <Rect class="r r9" :width="216" :height="188" />
                <Rect class="r r10" :width="476" :height="414" />
                <Rect class="r r11" :width="674" :height="582" />
                <Rect class="r r12" :width="342" :height="294">
                    <RectImg class="r-img" :width="254" :height="218" :img="Img1" />
                </Rect>
                <Rect class="r r13" :width="358" :height="312">
                    <RectImg class="r-img" :width="358" :height="312" :img="Img2" />
                </Rect>

                <RectImg class="img img-1" :width="570" :height="496" :img="Img3" />
                <RectImg class="img img-2" :width="358" :height="312" :img="Img5" />
                <RectImg class="img img-3" :width="192" :height="166" :img="Img6" />
                <RectImg class="img img-4" :width="264" :height="228" :img="Img7" />
            </div>
        </div>
        <Book :head="{
            no: 6,
            cn: '社会责任',
            en: 'SOCIAL RESPONSIBILITY'
        }" :word="word" :show="showWordA6" :index="wordIndex" />

    </div>
</template>

<script>
import Rect from './components/rect.vue'
import RectImg from './components/rect.img.vue'
import Book from '../book/index.vue'
import Img1 from '@/assets/temp6/1.png'
import Img2 from '@/assets/temp6/2.png'
import Img3 from '@/assets/temp6/3.png'
import Img4 from '@/assets/temp6/4.png'
import Img5 from '@/assets/temp6/5.png'
import Img6 from '@/assets/temp6/6.png'
import Img7 from '@/assets/temp6/7.png'
import { mapActions, mapGetters } from 'vuex'
export default {
    props: {
        active: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Rect,
        RectImg,
        Book,
    },
    data() {
        return {
            Img1,
            Img2,
            Img3,
            Img4,
            Img5,
            Img6,
            Img7,
            // text
            word: [
                {
                    type: 'word',
                    head: {
                        no: 6,
                        cn: '社会责任',
                        en: 'SOCIAL RESPONSIBILITY'
                    },
                    data: [
                        { type: 1, data: '在企业发展过程中，荣盛逐渐体会到，社会对企业的关注已经从单纯的产品，逐步扩展到环境保护、知识产权和企业社会责任。特别是作为上市公司，荣盛认为，企业快速发展的同时，应该“取之于社会，用之于社会”，勇于承担社会责任。多年来，荣盛在对员工、客户、股东、行业、政府、环境以及公益等方面不断强化责任建设，成立至今，荣盛在公益事业方面捐助的资金累计已经突破 3 亿元。其中荣盛在教育和健康关爱方面的投入是最为执着的。' },
                        { type: 2, data: "In the process of Rongsheng development, it has been aware that environmental protection, intellectual property and social responsibility of enterprises have gradually drawn a great attention by the society, not only pure products any more. Rongsheng believes that with fast development, enterprises should use what is taken from the society in the interests of the society, and undertake social responsibility.For years, the group has strengthened responsibility of staff, customers, shareholders, industry, government, environment, public benefits, etc.,. Since founded, Rongsheng has donated more than 300 million RMB for the public services, of which" },
                    ]
                },
                {
                    type: 'word',
                    data: [
                        { type: 2, wrap: true, data: "Rongsheng's  investment in education and health care is the most persistent" },
                    ]
                },
            ],
            wordLen: 0,
            wordIndex: 0,
        }
    },
    computed: {
        ...mapGetters(['showWordA6', 'switchWordA6'])
    },
    watch: {
        // 文档切换
        switchWordA6(data) {
            if (data > this.wordLen) {
                this.setData({ type: 'switchWordA6', active: 0 })
            } else if (data < 0) {
                this.setData({ type: 'switchWordA6', active: this.wordLen })
            } else {
                this.wordIndex = data
            }
        },
    },
    created() {
        this.wordLen = this.word.length - 1
    },
    methods: {
        ...mapActions({ setData: 'system/setData' })
    }
}
</script>

<style lang="scss" scoped>
.temp6 {
    position: relative;

    .head {
        position: relative;
        height: 373px;

        .title {
            position: absolute;
            text-align: center;
            color: #C12E1A;
            font-size: 140px;
            font-weight: bold;
            line-height: 1;
            top: 96px;
            left: 240PX;
            width: 560px;
        }

        .sub {
            position: absolute;
            text-align: center;
            color: #C12E1A;
            font-size: 40px;
            // letter-spacing: 4px;
            width: 560px;
            top: 260px;
            left: 240PX;
            font-weight: bold;
        }
    }

    .box {
        padding: 0 240px;

        .relative {
            position: relative;
            width: 1714px;

            .r {
                opacity: 0;
                transform: matrix(.2, 0, 0, .2, 0, 0);
                transition-timing-function: cubic-bezier(0, 1.01, .52, 1.47);
                transition-duration: 500ms;
            }

            .r1 {
                top: 42px;
                left: 122px;
                transition-delay: 100ms;
            }

            .r2 {
                top: 205px;
                left: 150px;
                transition-delay: 130ms;

                .r-img {
                    position: absolute;
                    top: 37px;
                    left: 44px;
                }
            }

            .r3 {
                top: 250px;
                left: 522px;
                transition-delay: 160ms;
            }

            .r4 {
                top: 696px;
                left: 365px;
                transition-delay: 190ms;
            }

            .r5 {
                top: 824px;
                left: 1224px;
                transition-delay: 220ms;
            }

            .r6 {
                top: 374px;
                left: 610px;
                transition-delay: 250ms;
            }

            .r7 {
                top: 212px;
                left: 890px;
                transition-delay: 280ms;
            }

            .r8 {
                top: -2px;
                left: 1258px;
                transition-delay: 310ms;
            }

            .r9 {
                top: 566px;
                left: 1258px;
                transition-delay: 340ms;
            }

            .r10 {
                top: 570px;
                left: 756px;
                transition-delay: 370ms;
            }

            .r11 {
                top: 212px;
                left: 1020px;
                transition-delay: 410ms;
            }

            .r12 {
                top: -110px;
                left: 890px;
                transition-delay: 440ms;

                .r-img {
                    position: absolute;
                    top: 37px;
                    left: 44px;
                }
            }

            .r13 {
                top: 40px;
                left: 600px;
                transition-delay: 470ms;

                .r-img {
                    position: absolute;
                    top: 0;
                    left: 0;
                }
            }

            .img {
                opacity: 0;
                transform: matrix(.2, 0, 0, .2, 0, 0);
                transition-timing-function: cubic-bezier(0, 1.01, .52, 1.47);
                transition-duration: 500ms;
            }

            .img-1 {
                position: absolute;
                top: 130px;
                left: 1090px;
                transition-delay: 210ms;
            }

            .img-2 {
                position: absolute;
                top: 522px;
                left: 882px;
                transition-delay: 270ms;
            }

            .img-3 {
                position: absolute;
                top: 660px;
                left: 60px;
                transition-delay: 310ms;
            }

            .img-4 {
                position: absolute;
                top: 774px;
                left: 476px;
                transition-delay: 240ms;
            }
        }
    }

    &.active {
        .box {
            .relative {
                .r {
                    opacity: 1;
                    transform: matrix(1, 0, 0, 1, 0, 0);
                }

                .img {
                    opacity: 1;
                    transform: matrix(1, 0, 0, 1, 0, 0);
                }
            }
        }
    }
}
</style>