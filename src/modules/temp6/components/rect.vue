<template>
    <div class="rect" :style="{ width: width + 'px', height: height + 'px' }">
        <svg class="bg" :width="width" :height="height" :viewBox="viewBox" version="1.1">
            <!-- 六边形 -->
            <polygon height="100%" width="100%" :points="points" fill="rgba(193, 46, 26, .3)" />
        </svg>
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        width: {
            type: Number,
            default: 0
        },
        height: {
            type: Number,
            default: 0
        }
    },
    computed: {
        viewBox() {
            return `0 0 ${this.width} ${this.height}`
        },
        points() {
            const midH = this.height / 2;
            const w4 = this.width / 4
            return `0,${midH} ${w4},0 ${w4 * 3},0 ${this.width},${midH} ${w4 * 3},${this.height} ${w4},${this.height}`
        }
    }
}
</script>

<style lang="scss" scoped>
.rect {
    position: absolute;
}
</style>