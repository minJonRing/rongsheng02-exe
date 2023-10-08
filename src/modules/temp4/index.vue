<template>
    <div class="temp4">
        <Title cn="党群荣誉" en="PARTY AND GROUP HONOR" />
        <div class="box">
            <div class="relative">
                <div v-for="(item, index) in files" :key="index" :class="['img-box', getClass(index)]"
                    :style="{ 'transition-delay': `${index % 6 * 70}ms` }">
                    <img :src="item" alt="">
                </div>
            </div>
        </div>
        <Book :head="{
            no: 4,
            cn: '党群荣誉',
            en: 'PARTY AND GROUP HONOR'
        }" :word="word" :show="showWordA4" :index="wordIndex" />

    </div>
</template>

<script>
import Title from '../components/title/index.vue'
import Book from '../book/index.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    components: {
        Title,
        Book,

    },
    data() {
        return {
            files: [],
            listLen: [],
            in: -1,
            out: -1,
            index: -1,
            // text
            word: [
                {
                    type: 'word',
                    head: {
                        no: 4,
                        cn: '党群荣誉',
                        en: 'PARTY AND GROUP HONOR'
                    },
                    data: [
                        { type: 1, data: '在上级部门的指导下，荣盛各党群组织积极开展工作，有效发挥党群组织在服务职工群众、助推企业发展中的作用,得到了集团内外的认可,先后荣获全国模范职工之家、杭州市先进基层党组织、杭州市先进女职工组织、杭州市五四红旗团委等荣誉' },
                        { type: 2, data: "Under the quidance of superior departments,Rongsheng's Party-masses organizations do the work actively, effectively playing the role of Party-masses organizations in serving the employees and boosting the development of the company. lt has won a great praise of both inside and outside the group, successively getting the honors of National Model of Worker's Home, Hangzhou Advanced Grass-root Party Organization, Hangzhou Advanced Female Worker Organization,Hangzhou May Fourth Red-banner Youth League Committee, etc" },
                    ]
                },
            ],
            wordLen: 0,
            wordIndex: 0
        }
    },
    watch: {
        // 元素切换
        switchElement4(data) {
            if (data > this.listLen) {
                this.setData({ type: 'switchElement4', active: 0 })
            } else if (data < 0) {
                this.setData({ type: 'switchElement4', active: this.listLen })
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
                }, 1000);
            } else {
                this.in = -1
                this.out = -1
            }
        },
        // 文档切换
        switchWordA4(data) {
            console.log(data)
            if (data > this.wordLen) {
                this.setData({ type: 'switchWordA4', active: 0 })
            } else if (data < 0) {
                this.setData({ type: 'switchWordA4', active: this.wordLen })
            } else {
                this.wordIndex = data
            }
        },
    },
    computed: {
        ...mapGetters(['switchElement4', 'showWordA4', 'switchWordA4'])
    },
    created() {
        this.wordLen = this.word.length - 1;
        const files = import.meta.globEager('@/assets/temp4/*.png', { as: "url" })
        this.files = Object.values(files)
        this.listLen = Math.ceil(this.files.length / 6) - 1
        this.index = this.switchElement4
    },
    methods: {
        ...mapActions({ setData: 'system/setData' }),
        getClass(index) {
            const active = Math.floor(index / 6)
            return `img-box-${index % 6 + 1} ${active === this.in ? 'animaIn' : ''} ${active === this.out ? 'animaOut' : ''}`
        },
    }
}
</script>

<style lang="scss" scoped>
.temp4 {
    position: relative;
    height: 100%;
    padding-top: 227px;

    .box {
        padding-top: 46px;
        padding-left: 105px;

        .relative {
            position: relative;
            width: 830px;

            .img-box {
                position: absolute;
                border: 6px #C12E1A solid;
                width: 315px;
                height: 230px;
                opacity: 0;
                transform: matrix(1, 0, 0, 1, 200, 0);
                transition-duration: 600ms;
                // transition-timing-function: 

                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                &.img-box-2 {
                    top: 120px;
                    left: 295px;
                }

                &.img-box-3 {
                    top: 280px;
                    left: 110px;
                }

                &.img-box-4 {
                    top: 400px;
                    left: 405px;
                }

                &.img-box-5 {
                    top: 560px;
                    left: 220px;
                }

                &.img-box-6 {
                    top: 680px;
                    left: 515px;
                }

                &.animaIn {
                    // animation: animain 600ms ease-out forwards;
                    opacity: 1;
                    transform: matrix(1, 0, 0, 1, 0, 0);
                }

                &.animaOut {
                    // animation: animaOut 1000ms ease-in;
                    opacity: 0;
                    transform: matrix(1, 0, 0, 1, -200, 0);
                }

                @keyframes animain {
                    0% {
                        opacity: 0;
                        transform: matrix(1, 0, 0, 1, 200, 0);
                    }

                    90% {
                        opacity: 1;
                        transform: matrix(1, 0, 0, 1, 0, 0);
                    }

                    100% {
                        opacity: 1;
                        transform: matrix(1, 0, 0, 1, 0, 0);
                    }
                }

                @keyframes animaOut {
                    0% {
                        opacity: 1;
                        transform: matrix(1, 0, 0, 1, 0, 0);
                    }

                    90% {
                        opacity: 0;
                        transform: matrix(1, 0, 0, 1, -200, 0);
                    }

                    100% {
                        opacity: 0;
                        transform: matrix(1, 0, 0, 1, -200, 0);
                    }
                }
            }
        }

    }
}
</style>