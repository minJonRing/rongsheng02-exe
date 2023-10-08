<template>
    <div :class="['file', show ? 'active' : '']" @click="handleEmit">
        <div class="page" @click.stop="handleClick">
            <div class="bg">
                <div class="a"></div>
                <div class="a"></div>
                <div class="a"></div>
                <div class="a"></div>
                <div class="a"></div>
            </div>
            <div v-for="(item, index) in word" :key="index" :class="['p', getClass(index)]">
                <div v-if="item.head" class="head">
                    {{ item.head }}
                </div>
                <div class="word">
                    <template v-for="(i, j) in item.data" :key="j">
                        <div :class="['cn', i.wrap ? 'wrap' : '']">{{ i }}</div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
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
            console.log(data)
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
        getClass(index) {
            return `${index ? 'other' : ''} ${index === this.in ? 'animaIn' : ''} ${index === this.out ? 'animaOut' : ''}`
        },
    }
}
</script>

<style lang="scss" scoped>
.file {
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
                background-color: rgba(193, 46, 26, .3);
            }
        }

        .p {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(193, 46, 26, .3);
            padding: 45px 20px 0;
            transform: matrix(1, 0, 0, 1, 20, 0);
            opacity: 0;
            transition-duration: 600ms;

            .head {
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

            &.animaIn {
                // animation: animain 600ms ease-out forwards;
                opacity: 1;
                transform: matrix(1, 0, 0, 1, 0, 0);
            }

            &.animaOut {
                // animation: animaOut 1000ms ease-in;
                opacity: 0;
                transform: matrix(1, 0, 0, 1, -20, 0);
            }
        }

    }
}
</style>