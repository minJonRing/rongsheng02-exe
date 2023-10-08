<template>
    <div class="rect-bg">
        <div class="r" v-for="(item, index) in list" :key="index" :style="{ height: item + 'px' }"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                30,
                64,
                44,
                40,
                54,
                120,
                88,
                45,
                97,
                77,
                62,
                93,
                66,
                186,
                133,
                148,
                160,
                120,
                100,
                135,
                164,
                71,
                86,
                //  
                155,
                128,
                295,
                242,
                185,
                214,
                290,
                265,
                240,
                336,
                118,
                166,
                216,
                266,
                335,
                82,
                160,
                215,
                98,
                71,
                145,
                210,
                100,
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.rect-bg {
    position: absolute;
    transform-origin: center center;
    display: flex;
    align-items: flex-start;

    .r {
        width: 20px;
        background-image: linear-gradient(180deg, rgba(165, 37, 36, .3), rgba(165, 37, 36, .05));

        &~.r {
            margin-left: 10px;
        }
    }

}
</style>