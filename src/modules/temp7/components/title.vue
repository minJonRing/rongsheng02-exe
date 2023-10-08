<template>
    <div class="title-7">
        <div class="svg">
            <TitleSvg />
            <TitleSvg class="inversion" />
        </div>
        <div class="r"></div>
        <div class="label">荣盛数字党建</div>
    </div>
</template>

<script>
import TitleSvg from './title.svg.vue'
export default {
    components: {
        TitleSvg
    }
}
</script>

<style lang="scss" scoped>
.title-7 {
    position: relative;
    height: 276px;

    .svg {
        .inversion {
            transform: matrix(-1, 0, 0, 1, 0, 0);
        }

    }

    .r {
        position: absolute;
        width: 1267px;
        height: 21px;
        background-color: #E3B178;
        top: 237px;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0 0 10px #E3B178;
    }

    .label {
        position: absolute;
        width: 100%;
        font-size: 73px;
        color: #FDB502;
        left: 0;
        top: 0;
        text-align: center;
        letter-spacing: 80px;
        line-height: 1;
        padding-top: 80px;
        text-indent: 80px;
    }
}
</style>