<template>
    <div class="temp3">
        <Title cn="建设阵地" en="POSITION CONSTRUCTION" />
        <div class="box">
            <div class="relative">
                <div class="img-box img-box-1">
                    <img :src="Img1" alt="">
                </div>
                <div class="img-box img-box-2">
                    <img :src="Img2" alt="">
                </div>
                <div class="img-box img-box-3">
                    <img :src="Img3" alt="">
                </div>
                <div class="img-box round">
                    <img :src="Img4" alt="">
                </div>
                <div class="img-box img-box-5">
                    <img :src="Img5" alt="">
                </div>
                <div class="img-box img-box-6">
                    <img :src="Img6" alt="">
                </div>
                <div class="img-code">
                    <img :src="Code" alt="">
                </div>
                <div class="label label-1">
                    <p>集团板报</p>
                    <span></span>
                </div>
                <div class="label label-2">
                    <span></span>
                </div>
                <div class="label label-3">
                    <p>浙江省第八届优秀企业报</p>
                    <p>（2019年6月）</p>
                    <span></span>
                </div>
            </div>
        </div>
        <Book :head="{
            no: 3,
            cn: '建设阵地',
            en: 'POSITION CONSTRUCTION'
        }" :word="word" :show="showWordA3" :index="wordIndex" />

    </div>
</template>

<script>
import Title from '../components/title/index.vue'
import Book from '../book/index.vue'
import Img1 from '@/assets/temp3/1.png'
import Img2 from '@/assets/temp3/2.png'
import Img3 from '@/assets/temp3/3.png'
import Img4 from '@/assets/temp3/4.png'
import Img5 from '@/assets/temp3/5.png'
import Img6 from '@/assets/temp3/6.png'
import Code from '@/assets/temp3/code.png'
import { mapActions, mapGetters } from 'vuex'
export default {
    components: {
        Title,
        Book
    },
    data() {
        return {
            Img1,
            Img2,
            Img3,
            Img4,
            Img5,
            Img6,
            Code,
            // text
            word: [
                [
                    { type: 1, data: '近年来,荣盛以“加强沟通，促进和谐”作为工作理念，全方位构筑企业的宣传阵地。目前，已建立了荣盛内网、外网、微信公众号党建网、《荣盛报》《科协通讯》等宣传阵地并积极与外界媒体合作，展示荣盛的发展成果，传达荣盛的文化理念' },
                    { type: 2, data: "In recent years, Rongsheng group persists in its work concept of “Strengthen Communication,Promote Harmony”,and overall establishes enterprise propaganda fields. At present, the group has established propaganda fields, such as Rongsheng intranetand outer net, WeChat official account, Party building network, Rongsheng News, magazine of Science and Technology Communication, etc, and meanwhile takes active part in cooperating with external media to show its development achievements and convey Rongsheng's culture concept" },
                ],
            ],
            wordLen: 0,
            wordIndex: 0
        }
    },
    computed: {
        ...mapGetters(['showWordA3', 'switchWordA3'])
    },
    watch: {
        // 文档切换
        switchWordA3(data) {
            if (data > this.wordLen) {
                this.setData({ type: 'switchWordA3', active: 0 })
            } else if (data < 0) {
                this.setData({ type: 'switchWordA3', active: this.wordLen })
            } else {
                this.wordIndex = data
            }
        }

    },
    created() {
        this.wordLen = this.word.length - 1;
    },
    methods: {
        ...mapActions({ setData: 'system/setData' })
    }
}
</script>

<style lang="scss" scoped>
.temp3 {
    position: relative;
    height: 100%;
    padding-top: 385px;

    .box {
        position: relative;
        padding: 0 95px;

        .relative {
            position: relative;
            width: 778px;

            .img-box {
                position: absolute;
                border: 3px #C12E1A solid;
                width: 342px;
                height: 188px;

                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                &.img-box-1 {
                    top: 60px;
                    left: 300px;
                }

                &.img-box-2 {
                    top: 165px;
                    left: 150px;
                }

                &.img-box-3 {
                    top: 330px;
                    left: 0px;
                }


            }

            .round {
                position: absolute;
                width: 168px;
                height: 168px;
                border-radius: 50%;
                top: 320px;
                left: 602px;
                overflow: hidden;
                z-index: 2;
                border-width: 5px;
                border: 5px #C12E1A solid;
            }

            .img-box-5 {
                position: absolute;
                top: 460px;
                left: 435px;
                width: 242px;
                height: 168px;
                border-width: 5px;
                border: 5px #C12E1A solid;
            }

            .img-box-6 {
                position: absolute;
                top: 563px;
                left: 267px;
                width: 272px;
                height: 204px;
                border-width: 5px;
                border: 5px #C12E1A solid;
            }

            .img-code {
                position: absolute;
                width: 118px;
                height: 118px;
                top: 608px;
                left: 84px;
                border: 4px #C12E1A solid;

                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            // 
            .label {
                position: absolute;
                border-bottom: 1px #B21919 solid;
                padding: 6px 0;

                p {
                    font-size: 16px;
                    color: #BC2218;
                    line-height: 1.1;

                    text-align: center;
                    font-weight: bold;
                }

                span {
                    position: absolute;
                    width: 22px;
                    height: 22px;
                    top: calc(100% + 13px);


                    &::before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        border: 1px #B21919 solid;
                    }

                    &::after {
                        content: "";
                        position: absolute;
                        top: 7px;
                        left: 7px;
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background-color: #B21919;
                    }
                }


                &::before {
                    content: "";
                    position: absolute;
                    width: 35px;
                    height: 1px;
                    bottom: -1px;
                    background-color: #B21919;

                }

                &.label-1 {
                    top: 368px;
                    left: 492px;
                    width: 110px;

                    &::before {

                        right: 100%;
                        transform-origin: 100% 0;
                        // transform: ;
                        transform: rotate(-45deg);
                    }

                    span {
                        left: -35px;
                    }
                }

                &.label-2 {
                    top: 544px;
                    left: 677px;
                    width: 18px;

                    &::before {
                        left: 100%;
                        transform-origin: 0 0;
                        // transform: ;
                        transform: rotate(45deg);
                    }

                    span {
                        right: -35px;
                    }
                }

                &.label-3 {
                    top: 657px;
                    left: 539px;
                    width: 200px;

                    &::before {
                        left: 100%;
                        transform-origin: 0 0;
                        // transform: ;
                        transform: rotate(45deg);
                    }

                    span {
                        right: -35px;
                    }
                }
            }
        }
    }
}
</style>