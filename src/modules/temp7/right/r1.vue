<template>
    <div class="r1">
        <div class="r r1"></div>
        <div class="r r2"></div>
        <div class="r r3"></div>
        <div class="r r4"></div>
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
    height: 249px;

    .r {
        position: absolute;
        border-radius: 50%;

        &::before {
            content: "";
            position: absolute;
            background-color: #fff;
            left: 50%;
            bottom: 50%;
            transform-origin: 50% 100%;
        }

        &.r1 {
            top: 28px;
            left: 50px;
            width: 126px;
            height: 126px;
            background-color: #FDA772;
            z-index: 3;

            &::before {
                width: 1.3px;
                height: 96px;
                transform: rotate(-45deg);
            }
        }

        &.r2 {
            top: 27px;
            left: 153px;
            width: 96px;
            height: 96px;
            background-color: #F2843C;
            z-index: 2;

            &::before {
                width: 1.3px;
                height: 96px;
                transform: rotate(45deg);
            }
        }

        &.r3 {
            top: 105px;
            left: 159px;
            width: 78px;
            height: 78px;
            background-color: #E45A00;
            z-index: 1;

            &::before {
                width: 1.3px;
                height: 70px;
                transform: rotate(135deg);
            }
        }

        &.r4 {
            top: 122px;
            left: 91px;
            width: 86px;
            height: 86px;
            background-color: #AB5D2B;

            &::before {
                width: 1.3px;
                height: 80px;
                transform: rotate(-135deg);
            }
        }
    }
}
</style>