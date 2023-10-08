<template>
    <div class="e7">
        <div class="nox nox-1">
            <span class="n">40</span>
            <div class="bar">
                <div class="bar-h"></div>
                <div class="bar-r"></div>
            </div>
        </div>
        <div class="nox nox-2">
            <span class="n">30</span>
            <div class="bar">
                <div class="bar-h"></div>
                <div class="bar-r"></div>
            </div>
        </div>
        <div class="nox nox-3">
            <span class="n">20</span>
            <div class="bar">
                <div class="bar-h"></div>
                <div class="bar-r"></div>
            </div>
        </div>
        <div class="nox nox-4">
            <span class="n">10</span>
            <div class="bar">
                <div class="bar-h"></div>
                <div class="bar-r"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {

    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.e7 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;

    .nox {
        display: flex;
        align-items: center;

        .n {
            font-size: 16px;
            color: #fff;
        }

        .bar {
            position: relative;
            width: 410px;
            height: 3px;
            border-radius: 1.5px;
            background-color: #fff;
            margin-left: 10px;

            .bar-h {
                height: 100%;
                border-radius: 1.5px;
            }

            .bar-r {
                position: absolute;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                top: -4.5px;
                transform: translateX(-50%);
            }

        }

        &.nox-1 {
            .bar-h {
                width: 210px;
                background-color: #E45A00;
            }

            .bar-r {
                background-color: #4456A4;
                left: 210px;
            }
        }

        &.nox-2 {
            .bar-h {
                width: 300px;
                background-color: #FFAB75;
            }

            .bar-r {
                background-color: #FF3E57;
                left: 300px;
            }
        }

        &.nox-3 {
            .bar-h {
                width: 385px;
                background-color: #E45A00;
            }

            .bar-r {
                background-color: #FFAB75;
                left: 385px;
            }
        }



        &.nox-4 {
            .bar-h {
                width: 100px;
                background-color: #FF3E57;
            }

            .bar-r {
                background-color: #FF3E57;
                left: 100px;
            }
        }
    }
}
</style>