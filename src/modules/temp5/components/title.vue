<template>
    <div class="title-mid">
        <svg width="74" height="86" viewBox="0 0 74 86" version="1.1">
            <!-- 六边形 -->
            <polygon height="100%" width="100%" points="37,0 74,21.5 74,64.5 37,86 0,64.5 0,21.5"
                fill="rgba(193, 46, 26, .3)" />
            <polygon height="100%" width="100%" points="37,18 58,30 58,55 37,68 16,55 16,30" fill="rgba(193, 46, 26, .3)" />
        </svg>
        <div class="text">
            <div class="cn">{{ cn }}</div>
            <div class="en">{{ en }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cn: {
            type: String,
            default: '中文'
        },
        en: {
            type: String,
            default: 'endlish'
        }
    }
}
</script>

<style lang="scss" scoped>
.title-mid {
    display: flex;
    align-items: center;

    svg {
        transform-origin: center center;
        transform: rotate(30deg);
    }

    .text {
        text-align: center;
        color: #C12E1A;
        padding-left: 15px;

        .cn {
            font-size: 42px;
            font-weight: bold;
            line-height: 1;
            padding-bottom: 8px;
        }

        .en {
            font-size: 12px;
            line-height: 1;

        }
    }
}
</style>