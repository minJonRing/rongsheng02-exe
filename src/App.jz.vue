<template>
  <div class="app">
    <div class="jz-box">
      <div class="jz-handle">
        <img :src="jz" alt="">
      </div>
      <div class="jz-scale" :style="{ width: jzw + 'px' }">
        <div class="position">
          <div :class="['video', showReg('m1') ? 'active' : '']"></div>
          <div :class="['main', showReg('m2') ? 'active' : '']">
            123
          </div>
          <div class="bbb">
            <div>
              <div v-for="(item, index) in list[0]" :key="index" @click="handleClick(item)">{{ item.type + '/' +
                item.active }}
              </div>
            </div>
            <div>
              <div v-for="(item, index) in list[1]" :key="index" @click="handleClick(item)">{{ item.label }}
              </div>
            </div>
            <div>
              <div v-for="(item, index) in list[2]" :key="index" @click="handleClick(item)">{{ item.type + '/' +
                item.active }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="jz-handle">
        <img :src="jz" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import jz from '@/assets/jz.png'
import { mapGetters, mapActions } from 'vuex'
if (CSS.paintWorklet) {
  CSS.paintWorklet.addModule('src/assets/CSSHoudini.js')
}
export default {
  mounted() {
    console.log(window.electronAPI)
    // 监听进程推送信息
    window.electronAPI?.onUpdate((e, v) => {
      console.log(v)
    })
  },
  components: {
    ModuleA,
    ModuleB,
    ModuleC
  },
  data() {
    return {
      jz,
      list: [
        [
          { type: 0, active: 'm1' },
          { type: 0, active: 'm2' },
          { type: 1, active: 1 },
          { type: 1, active: 2 },
        ],
        [

          { type: 2, active: 'mb1', label: '首页' },
          { type: 2, active: 'mb2-1', label: '石化聚酯首页' },
          { type: 2, active: 'mb2-2', label: '炼化舟山' },
          { type: 2, active: 'mb2-3', label: '芳请宁波' },
          { type: 2, active: 'mb2-4-1', label: 'PTA首页' },
          { type: 2, active: 'mb2-4-2', label: 'PTA大连' },
          { type: 2, active: 'mb2-4-3', label: 'PTA浙江' },
          { type: 2, active: 'mb2-4-4', label: 'PTA海南' },
          { type: 2, active: 'mb2-5', label: '聚酯' },
          { type: 2, active: 'mb3-1', label: '房地产首页' },
          { type: 2, active: 'mb3-2', label: '房地产宁波' },
          { type: 2, active: 'mb3-3', label: '房地产舟山' },
          { type: 2, active: 'mb3-4', label: '房地产温州' },
          { type: 2, active: 'mb3-5', label: '房地产杭州' },
          { type: 2, active: 'mb4', label: '金融' },
        ],
        [
          { type: 3, active: 1 },
          { type: 3, active: 2 },
          { type: 3, active: 3 },
          { type: 3, active: 4 },
          { type: 3, active: 5 },
        ]



      ]
    }
  },
  computed: {
    ...mapGetters(['active'])
  },
  methods: {
    ...mapActions({ setActive: 'System/setActive' }),
    handleSet() {
      window.electronAPI.set(Math.floor(Math.random() * 10) + '')
    },
    async handleOpen() {
      // const value = await window.electronAPI.open()
      window.electronAPI.open().then(res => {
        console.log(res)
      })
      // console.log(value)
    },
    showReg(rule) {
      const reg = new RegExp(rule)
      return reg.test(this.active)
    },
    handleClick(item) {
      this.setActive(item)
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  position: relative;
  width: 13056px;
  height: 1944px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-image: url('@/assets/app-bg.png');
  background-size: cover;

  .jz-box {
    position: absolute;
    height: 2500px;
    display: flex;
    align-items: center;
    transform: matrix(0.75, 0, 0, 0.75, 0, 0);

    .jz-handle {
      height: 100%;

      img {
        display: block;
        height: 100%;
      }
    }

    .jz-scale {

      display: flex;
      align-items: center;
      overflow: hidden;
      padding: 100px 50px;
      background: url('@/assets/jz-bg.png');
      background-size: auto 100%;
      transition-duration: 1000ms;

      .position {
        position: relative;
        width: 13056px;
        height: 1944px;
        overflow: hidden;

        .main {
          position: absolute;
          width: 13056px;
          height: 1944px;
          display: flex;
          align-items: flex-start;
          background-image: url('@/assets/bg.png');
          background-size: cover;
          overflow: hidden;
          opacity: 0;
          transform: matrix(1, 0, 0, 1, 0, 50);
          transition-duration: 600ms;

          &.active {
            opacity: 1;
            transform: matrix(1, 0, 0, 1, 0, 0);
          }
        }

        .video {
          position: absolute;
          width: 13056px;
          height: 1944px;
          overflow: hidden;
          background-color: #000;
          opacity: 0;
          z-index: 2;
          transform: matrix(1, 0, 0, 1, 0, 50);
          transition-duration: 600ms;
          pointer-events: none;

          &.active {
            opacity: 1;
            transform: matrix(1, 0, 0, 1, 0, 0);
          }
        }

        .bbb {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          top: 0;
          left: 0;
          z-index: 99;
          color: #fff;
          font-size: 60px;

          &>div {
            display: flex;

            div {
              padding: 20px;
            }
          }
        }
      }
    }

  }





  .anime {
    width: 200px;
    height: 200px;
    background-color: deepskyblue;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
}
</style>
