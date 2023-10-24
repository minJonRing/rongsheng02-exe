<template>
    <div class="background">
        <img class="img-1" :src="Img1" />
        <img class="img-2" :src="Img2" />
        <img class="img-3" :src="Img3" />
        <img class="img-3-2" :src="Img3" />
        <img class="img-4" :src="Img4" />
        <div class="imgs">
            <img class="img-5" :src="Img5" />
            <img class="img-6" :src="Img6" />
            <img class="img-7" :src="Img7" />
            <img class="img-8" :src="Img8" />
        </div>
        <img class="img-9" :src="Img9" />
        <img class="bird" :src="Bird" />
        <!-- rect -->
        <Rect class="r1" />
        <Rect class="r2" />
        <Rect2 class="r3" />
        <Rect2 class="r4" />
    </div>
</template>

<script>
import Img1 from '@/assets/background/mini/1.png'
import Img2 from '@/assets/background/mini/2.png'
import Img3 from '@/assets/background/mini/3.png'
import Img4 from '@/assets/background/mini/4.png'
import Img5 from '@/assets/background/mini/5.png'
import Img6 from '@/assets/background/mini/6.png'
import Img7 from '@/assets/background/mini/7.png'
import Img8 from '@/assets/background/mini/8.png'
import Img9 from '@/assets/background/mini/9.png'
import Bird from '@/assets/background/mini/bird.png'

import Rect from './rect.vue'
import Rect2 from './rect2.vue'
export default {
    components: {
        Rect,
        Rect2
    },
    data() {
        return {
            Img1,
            Img2,
            Img3,
            Img4,
            Img5,
            Img6,
            Img7,
            Img8,
            Img9,
            Bird,

        }
    }
}
</script>

<style lang="scss" scoped>
.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 11128px;
    height: 100%;
    background-color: rgba(193, 46, 26, .02);
    overflow: hidden;

    img {
        position: absolute;
    }

    .img-1 {
        top: -10px;
        left: -14px;
    }

    .img-2 {
        bottom: -117px;
        left: -9px;
        z-index: 2;
    }

    .img-3 {
        bottom: -130px;
        left: -20px;
    }

    .img-3-2 {
        bottom: -117px;
        left: 5950px;
        transform-origin: center center;
        transform: matrix(-1, 0, 0, 1, 0, 0);
        z-index: 2;
    }

    .img-4 {
        top: -25px;
        left: 1430px;
    }

    .imgs {
        position: absolute;
        top: 698px;
        left: 0;
        font-size: 0;

        img {
            position: relative;
            display: inline-block;
        }
    }

    .img-9 {
        top: -15px;
        right: 0;
        z-index: 3;
    }

    .bird {
        top: 973px;
        left: 6057px;
    }

    .r1 {
        left: 3606px;
        bottom: -25px;
    }

    .r2 {
        left: 5711px;
        bottom: -25px;
    }

    .r3 {
        left: 5088px;
        top: -175px;
    }

    .r4 {
        left: 7200px;
        top: -25px;
    }
}
</style>