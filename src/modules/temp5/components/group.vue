<template>
    <div class="group">
        <svg width="400" height="440" viewBox="0 0 400 440" version="1.1">
            <!-- 六边形 -->
            <polygon height="100%" width="100%" points="200,1.5 398.5,110 398.5,330 200,438.5 1.5,330 1.5,110"
                fill="transparent" stroke="#AE2218" stroke-width="3" />
            <polygon height="100%" width="100%" points="200,20 380,118 380,322 200,420 20,322 20,118" fill="transparent"
                stroke="#AE2218" stroke-width="5" />
            <polygon height="100%" width="100%" points="200,50 350,130 350,310 200,390 50,310 50,130" fill="transparent"
                stroke="#AE2218" stroke-width="3" />
        </svg>
        <div class="g">
            <div class="center">
                <div class="text-box"></div>
            </div>
            <div v-for="(item, index) in list" :key="index" :class="['t', `t-${index + 1}`]">
                <div v-if="item.type == 1" class="t1">
                    <img :src="item.data" alt="">
                </div>
                <div v-else class="t2">
                    <div class="text-box">
                        <p v-for="i in item.data || []" :key="i">{{ i }}</p>
                    </div>
                </div>
            </div>
        </div>
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            default: () => {
                return []
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.group {
    position: absolute;
    width: 554px;
    height: 608px;

    svg {
        position: absolute;
        top: 84px;
        left: 77px;
        animation: rotateP 60000ms linear infinite;

        @keyframes rotateP {
            0% {
                transform: rotate(0);
            }

            100% {
                transform: rotate(360deg);
            }
        }
    }

    .g {
        position: relative;
        width: 100%;
        height: 100%;
        animation: rotateP 60000ms linear infinite;

        @keyframes rotateP {
            0% {
                transform: rotate(0);
            }

            100% {
                transform: rotate(360deg);
            }
        }

        .center {
            position: absolute;
            width: 186px;
            height: 186px;
            top: 211px;
            left: 184px;
            border: 13px #ed9c9c solid;
            border-radius: 50%;
            padding: 3px;

            .text-box {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #ed9c9c;
            }
        }

        .t {
            position: absolute;
            width: 192px;
            height: 192px;
            animation: rotateC 60000ms linear infinite;

            @keyframes rotateC {
                0% {
                    transform: rotate(0);
                }

                100% {
                    transform: rotate(-360deg);
                }
            }

            .t1 {
                width: 192px;
                height: 192px;
                border: 5px #AE2218 solid;
                border-radius: 50%;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .t2 {
                width: 186px;
                height: 186px;
                margin: 3px;
                border: 13px #ed9c9c solid;
                border-radius: 50%;
                padding: 3px;

                .text-box {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background-color: #ed9c9c;

                    p {
                        text-align: center;
                        color: #fff;
                        font-size: 26px;
                        font-weight: bold;
                        line-height: 1.8;
                        letter-spacing: 2px;
                    }
                }
            }

            // 554 - 192 = 362
            &.t-1 {
                top: 0;
                left: 181px;
            }

            &.t-2 {
                top: 100px;
                left: 381px;
            }

            &.t-3 {
                top: 320px;
                left: 381px;
            }

            &.t-4 {
                bottom: 0;
                left: 181px;
            }

            &.t-5 {
                top: 320px;
                right: 381px;

            }

            &.t-6 {
                top: 100px;
                right: 381px;
            }
        }

    }
}
</style>