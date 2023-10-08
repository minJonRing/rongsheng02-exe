<template>
    <div class="r6">
        <div class="week">
            <div class="w">S</div>
            <div class="w">M</div>
            <div class="w">T</div>
            <div class="w">W</div>
            <div class="w">T</div>
            <div class="w">F</div>
            <div class="w">S</div>
        </div>
        <div class="body">
            <div class="d" v-for="i in 30" :key="i">{{ i }}</div>
        </div>
        <div class="other">SEP / 2021</div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.r6 {
    position: relative;
    width: 100%;
    // height: 194px;

    .week {
        display: flex;
        align-items: center;
        width: 231px;
        margin: 0 auto;

        .w {
            width: 30px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            color: #fff;
            font-size: 12px;
            margin: 1.5px;
        }
    }

    .body {
        display: flex;
        flex-wrap: wrap;
        width: 231px;
        margin: 0 auto;

        .d {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            border: 0.6px #fff solid;
            color: #fff;
            font-size: 12px;
            margin: 1.5px;

            &:nth-child(19) {
                background-color: #FFAB75;
                color: #000;
            }
        }
    }

    .other {
        position: absolute;
        color: #fff;
        font-size: 15px;
        top: 171px;
        left: 214px;
    }
}
</style>