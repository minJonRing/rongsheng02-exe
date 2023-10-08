<template>
    <div class="module">
        <Background />
        <div class="layout">
            <Temp1 :active="active" />
            <div style="width: 210px;" />
            <Temp2 :active="active" />
            <Temp3 :active="active" />
            <Temp4 :active="active" />
            <Temp5 :active="active" />
            <Temp6 :active="active" />
            <Temp7 :active="active" />
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
        }
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
    width: 11128px;
    height: 100%;

    .layout {
        position: absolute;
        width: 11128px;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        z-index: 99;
    }
}
</style>