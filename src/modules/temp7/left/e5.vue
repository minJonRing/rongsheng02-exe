<template>
    <div class="e5">
        <div class="nox">
            <div v-for="i in 20" :key="i"></div>
        </div>
        <div class="nox">
            <div v-for="i in 16" :key="i"></div>
        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    mounted() {

    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.e5 {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 133px;

    .nox {
        display: flex;
        align-items: center;
        width: 258px;
        height: 18px;
        border-radius: 9px;
        padding-left: 12px;
        background-image: linear-gradient(90deg, rgba(253, 181, 2, .48), rgba(253, 181, 2, 0) 80%);

        div {
            width: 7px;
            height: 9px;
            border-radius: 2px;
            background-color: #FDA772;
            box-shadow: 0 0 2px #FDA772;

            &~div {
                margin-left: 1.5px;
            }
        }
    }
}
</style>