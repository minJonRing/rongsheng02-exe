<template>
    <div class="r1">
        <div class="box">
            <div class="content">
                <div class="r" v-for="i in [43, 58, 77, 91, 68, 82, 78, 62, 61, 82, 63, 72]" :key="i">
                    <div class="c" :style="{ height: i + 'px' }"></div>
                </div>
            </div>
            <div class="axis">
                <div class="n" v-for="i in 12" :key="i">{{ i }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.r1 {
    position: relative;
    width: 100%;
    height: 177px;
    padding: 0 44px;

    .box {
        position: relative;
        border-left: 1px #FFAB75 solid;
        border-bottom: 1px #FFAB75 solid;
        padding: 18px 0 7px 7px;

        .content {
            display: flex;

            .r {
                position: relative;
                width: 13px;
                height: 98px;
                background-color: #AB5D2B;

                &~.r {
                    margin-left: 6px;

                }

                .c {
                    position: absolute;
                    background-color: #FFAB75;
                    width: 100%;
                    bottom: 0;
                    left: 0;
                }
            }
        }

        .axis {
            position: absolute;
            width: 100%;
            bottom: -20px;
            display: flex;

            .n {
                position: relative;
                font-size: 12px;
                color: #fff;
                width: 13px;
                text-align: center;

                &~.n {
                    margin-left: 6px;
                }

                &::before {
                    content: "";
                    position: absolute;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background-color: #FFAB75;
                    top: -6.5px;
                    left: 50%;
                    transform: translate(-50%);
                }
            }
        }
    }

}
</style>