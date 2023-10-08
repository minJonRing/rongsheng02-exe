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
                100,
                210,
                145,
                71,
                98,
                215,
                160,
                82,
                335,
                266,
                216,
                166,
                118,
                336,
                240,
                265,
                290,
                214,
                185,
                242,
                295,
                128,
                155
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
    align-items: flex-end;

    .r {
        width: 20px;
        background-image: linear-gradient(0, rgba(165, 37, 36, .3), rgba(165, 37, 36, .05));

        &~.r {
            margin-left: 10px;
        }
    }

}
</style>