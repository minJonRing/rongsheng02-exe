<template>
    <!-- 图标 -->
    <svg :width="width" :height="height" :viewBox="viewBox" version="1.1">
        <g>
            <clipPath :id="id">
                <polygon :points="points" />
            </clipPath>
        </g>
        <image :clip-path="`url(#${id})`" :height="height" :xlink:href="img" />
        <polygon height="100%" width="100%" :points="pointsBorder" fill="transparent" stroke="#AE2218" stroke-width="15" />
    </svg>
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
        },
        img: {
            type: String,
            default: ''
        }
    },
    computed: {
        id() {
            return 'mask' + Math.random()
        },
        viewBox() {
            return `0 0 ${this.width} ${this.height}`
        },
        points() {
            const midH = this.height / 2;
            const w4 = this.width / 4
            return `0,${midH} ${w4},0 ${w4 * 3},0 ${this.width},${midH} ${w4 * 3},${this.height} ${w4},${this.height}`
        },
        pointsBorder() {
            const midH = this.height / 2;
            const w4 = this.width / 4
            return `7.5,${midH} ${w4},7.5 ${w4 * 3},7.5 ${this.width - 7.5},${midH} ${w4 * 3},${this.height - 7.5} ${w4},${this.height - 7.5}`
        }
    }
}
</script>

<style></style>