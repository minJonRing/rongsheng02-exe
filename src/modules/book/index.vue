<template>
    <div :class="['book', show ? 'active' : '']">
        <div class="page" @click.stop="handleClick">
            <div class="bg">
                <div class="a"></div>
                <div class="a"></div>
                <div class="b"></div>
                <div class="b"></div>
            </div>
            <div v-for="(item, index) in word" :key="index"
                :class="['p', item.type === 'file' ? 'file' : '', getClass(item, index)]">
                <div v-if="item.head" class="head">
                    <div class="no">{{ item.head.no || head.no }}</div>
                    <div class="cn">{{ item.head.cn || head.cn }}</div>
                    <div class="en">{{ item.head.en || head.en }}</div>
                </div>
                <div v-if="item.title" class="title">
                    {{ item.title }}
                </div>
                <div class="word">
                    <template v-for="(i, j) in item.data" :key="j">
                        <div v-if="i.type === 1" :class="['cn', i.wrap ? 'wrap' : '']">{{ i.data }}</div>
                        <div v-if="i.type === 2" :class="['en', i.wrap ? 'wrap' : '']">{{ i.data }}</div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        head: {
            type: Object,
            default: () => ({
                no: 1,
                cn: '中文',
                en: 'english'
            })
        },
        word: {
            type: Object,
            default: () => ([])
        },
        show: {
            type: Boolean,
            default: false
        },
        index: {
            type: Number,
            default: 0
        },
    },
    data() {
        return {
            in: -1,
            out: -1,
            active: -1,
        }
    },
    watch: {
        index(data) {
            this.active = data;
        },
        active(data, old) {
            if (data >= 0) {
                this.out = old;
                setTimeout(() => {
                    this.in = data
                    this.out = -1
                }, 610);
            }
        },
    },
    mounted() {
        this.active = this.index
    },
    methods: {
        getClass(item, index) {
            return `${item.head ? '' : 'other'} ${index === this.in ? 'animaIn' : ''} ${index === this.out ? 'animaOut' : ''}`
        },
    }
}
</script>

<style lang="scss" scoped>
.book {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-left: 22px;
    // background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transform: matrix(1, 0, 0, 1, 0, 50);
    transition-duration: 600ms;

    &.active {
        opacity: 1;
        pointer-events: auto;
        transform: matrix(1, 0, 0, 1, 0, 0);
    }

    .page {
        position: absolute;
        height: 722px;
        width: 360px;



        .bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            .a {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: linear-gradient(0, rgba(193, 46, 26, .68), rgba(193, 46, 26, .2));
                --path: 95% 0, 100% 5%, 100% 100%, 0 100%, 0 0;
                clip-path: polygon(var(--path));
                transform: matrix(1, 0, 0, 1, -22, -22);
            }

            .b {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: linear-gradient(0, rgba(193, 46, 26, .68), rgba(193, 46, 26, .2));
                --path: 90% 0, 100% 10%, 100% 100%, 0 100%, 0 0;
                clip-path: polygon(var(--path));
            }
        }

        .p {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(0, rgba(193, 46, 26, .68), rgba(193, 46, 26, .2));
            --path: 95% 0, 100% 5%, 100% 100%, 0 100%, 0 0;
            clip-path: polygon(var(--path));
            padding: 0 32px 0 10px;
            transform-origin: 0 100%;
            transform: rotate(2deg);
            opacity: 0;
            transition-duration: 600ms;

            &.other {
                padding: 60px 32px 60px 10px;
            }

            &.file {
                .title {
                    position: absolute;
                    width: 100%;
                    top: 0;
                    left: 0;
                    color: #fff;
                    text-align: center;
                    font-weight: bold;
                    padding-top: 13px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                }

                .word {
                    color: #fff;
                    padding: 8px 0;

                    .cn {
                        font-size: 12px;
                        line-height: 22px;
                        text-indent: 24px;

                        &.wrap {
                            text-indent: 0;
                        }
                    }
                }
            }

            .head {
                position: relative;
                width: 100%;
                height: 108px;
                border-bottom: 1px #fff solid;
                color: #fff;
                text-align: center;
                font-weight: bold;
                padding: 30px 0 10px;

                .no {
                    position: absolute;
                    top: 18px;
                    padding: 0 5px;
                    font-size: 42px;
                    line-height: 1;
                }

                .cn {
                    font-size: 34px;
                    line-height: 1.5;

                }

                .en {
                    font-size: 12px;
                    font-weight: 100;
                    word-break: break-all;
                    word-wrap: break-word;
                }
            }

            .word {
                color: #fff;
                padding: 8px 0;

                .cn {
                    font-size: 16px;
                    line-height: 26px;
                    text-indent: 32px;
                    // padding: 8px 0;
                    font-weight: bold;

                    &.wrap {
                        text-indent: 0;
                    }
                }

                .en {
                    font-size: 14px;
                    text-indent: 28px;
                    line-height: 22px;
                    word-break: break-all;
                    word-wrap: break-word;
                    font-weight: bold;

                    &.wrap {
                        text-indent: 0;
                    }
                }
            }

            &.animaIn {
                // animation: animain 600ms ease-out forwards;
                opacity: 1;
                transform: rotate(0);
            }

            &.animaOut {
                // animation: animaOut 1000ms ease-in;
                opacity: 0;
                transform: rotate(-2deg);
            }
        }

    }
}
</style>