<template>
    <div class="r1">
        <div class="b">
            <svg width="90" height="90" viewBox="0 0 90 90" version="1.1">
                <defs>
                    <linearGradient id="linearColorR1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#FF3E57" :stop-opacity="1" />
                        <stop offset="60%" style="stop-color:#FFB979" :stop-opacity="1" />
                        <stop offset="100%" style="stop-color:#D9D9D9" :stop-opacity="1" />
                    </linearGradient>
                </defs>
                <circle cx="45" cy="45" r="43.7" stroke="url(#linearColorR1)" stroke-width="2.6" fill="transparent" />
                <circle class="c2" cx="45" cy="45" r="39.5" stroke="url(#linearColorR1)" stroke-width="1.2"
                    fill="transparent" />

                <circle class="c2" cx="45" cy="45" r="36" stroke="#D9D9D9" stroke-width="0.6" fill="transparent" />
            </svg>
            <div class="label">60%</div>
        </div>
        <div class="b">
            <svg width="90" height="90" viewBox="0 0 90 90" version="1.1">
                <defs>
                    <linearGradient id="linearColorR2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <!-- <stop offset="0%" style="stop-color:#FF3E57" :stop-opacity="1" /> -->
                        <stop offset="60%" style="stop-color:#FFB979" :stop-opacity="1" />
                        <stop offset="100%" style="stop-color:#D9D9D9" :stop-opacity="1" />
                    </linearGradient>
                </defs>
                <circle cx="45" cy="45" r="43.7" stroke="url(#linearColorR2)" stroke-width="2.6" fill="transparent" />
                <circle class="c2" cx="45" cy="45" r="39.5" stroke="url(#linearColorR2)" stroke-width="1.2"
                    fill="transparent" />

                <circle class="c2" cx="45" cy="45" r="36" stroke="#D9D9D9" stroke-width="0.6" fill="transparent" />
            </svg>
            <div class="label">55%</div>
        </div>
        <div class="b">
            <svg width="90" height="90" viewBox="0 0 90 90" version="1.1">
                <defs>
                    <linearGradient id="linearColorR3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <!-- <stop offset="0%" style="stop-color:#FF3E57" :stop-opacity="1" /> -->
                        <stop offset="40%" style="stop-color:#D9D9D9" :stop-opacity="1" />
                        <stop offset="100%" style="stop-color:#FFB979" :stop-opacity="1" />

                    </linearGradient>
                </defs>
                <circle cx="45" cy="45" r="43.7" stroke="url(#linearColorR3)" stroke-width="2.6" fill="transparent" />
                <circle class="c2" cx="45" cy="45" r="39.5" stroke="url(#linearColorR3)" stroke-width="1.2"
                    fill="transparent" />

                <circle class="c2" cx="45" cy="45" r="36" stroke="#D9D9D9" stroke-width="0.6" fill="transparent" />
            </svg>
            <div class="label">80%</div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.r1 {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .b {
        position: relative;
        width: 90px;
        height: 90px;

        svg {
            .c2 {
                transform-origin: center center;
                transform: rotate(60deg)
            }
        }

        .label {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            text-align: center;
            line-height: 90px;
            font-size: 22px;
            color: #FFAB75;
            font-weight: bold;
        }
    }
}
</style>