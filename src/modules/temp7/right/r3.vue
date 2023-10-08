<template>
    <div class="r1">
        <div class="b">
            <div class="r">***</div>
            <div class="label">本月政治生日</div>
        </div>
        <div class="b">
            <div class="r">***</div>
            <div class="label">本月预备期</div>
        </div>
        <div class="b">
            <div class="r">***</div>
            <div class="label">超期一个月</div>
        </div>
        <div class="b">
            <div class="r">***</div>
            <div class="label">超期三个月</div>
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
    height: 113px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;

    .b {
        width: 50%;
        display: flex;
        align-items: center;

        .r {
            width: 75px;
            height: 30px;
            border: 1.3px #B5131A solid;
            border-radius: 50%;
            color: #E9B57A;
            text-align: center;
            line-height: 30px;
        }

        .label {
            font-size: 10px;
            color: #E9B57A;
            padding-left: 5px;
        }
    }
}
</style>