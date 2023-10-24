<template>
    <div class="module">
        <Background />
        <div class="layout">
            <Temp7 :active="active" />
            <div class="other">
                <div :class="['translate', move ? 'move' : '']">
                    <div style="width: 210px;" />
                    <Temp1 :active="active" />
                    <Temp2 :active="active" />
                    <Temp3 :active="active" />
                    <Temp4 :active="active" />
                    <Temp5 :active="active" />
                    <Temp6 :active="active" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Background from './background/index.vue'
import Temp1 from './temp1/index.vue'
import Temp2 from './temp2/index.vue'
import Temp3 from './temp3/index.vue'
import Temp4 from './temp4/index.vue'
import Temp5 from './temp5/index.vue'
import Temp6 from './temp6/index.vue'
import Temp7 from './temp7/index.vue'
export default {
    props: {
        active: {
            type: Boolean,
            default: false
        },
        move: {
            type: Boolean,
            default: false
        },
    },
    components: {
        Background,
        Temp1,
        Temp2,
        Temp3,
        Temp4,
        Temp5,
        Temp6,
        Temp7,
    }
}
</script>

<style lang="scss" scoped>
.module {
    position: relative;
    width: 100%;
    height: 100%;

    .layout {
        position: absolute;
        // width: 11128px;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 99;

        .temp7 {
            position: relative;
            z-index: 9;
        }

        .other {
            position: absolute;
            width: calc(100% - 2470px);
            height: 100%;
            left: 2470px;
            top: 0;
            overflow: hidden;
            display: flex;

            .translate {
                display: flex;
                transition-duration: 2000ms;

                &.move {
                    // transform: matrix(1, 0, 0, 1, -970, 0);
                    margin-left: -1100px
                }
            }
        }
    }
}
</style>