<template>
    <div class="mid-num">
        <div class="bg">
            <img :src="Yh" />
        </div>
        <div class="box">
            <div class="label">党员总数</div>
            <div class="num">
                <div id="party-member">1453</div>
                <span>人</span>
            </div>
        </div>
    </div>
</template>

<script>
import { CountUp } from 'countup.js'
import Yh from '@/assets/temp7/yh.png'
export default {
    data() {
        return {
            Yh
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.init()
        })
    },
    methods: {
        init() {
            let demo = new CountUp('party-member', 1453);
            if (!demo.error) {
                demo.start();
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.mid-num {
    position: absolute;
    top: 400px;
    left: 860px;

    .bg {
        width: 630px;

        img {
            display: block;
            width: 100%;
        }
    }

    .box {
        position: absolute;
        width: 630px;
        height: 100%;
        top: 0;
        left: 0;

        .label {
            font-size: 52px;
            color: #FDB502;
        }

        .num {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            align-items: center;
            font-size: 160px;
            color: #FDB502;
            line-height: 1;

            span {
                font-size: 120px;
            }
        }

    }
}
</style>