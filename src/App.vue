<template>
  <div class="app">
    <div :class="['video', active ? '' : 'active']">
      <video ref="video" class="start" loop autoplay>
        <source :src="StartVideo" type="video/mp4">
      </video>
    </div>
    <Index :class="['index', active ? 'active' : '', move ? 'move' : '']" :active="active" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Index from './modules/index.vue'
import StartVideo from '@/assets/start.mp4'
export default {
  components: {
    Index
  },
  data() {
    return {
      StartVideo,
      move: false,
      active: false
    }
  },
  mounted() {
    // 监听进程推送信息
    window.electronAPI?.uploadValue((e, v) => {
      this.setValue(v)
    })
  },
  methods: {
    ...mapActions({ setData: 'system/setData' }),
    setValue(e) {
      const [a, b, c] = e.split('/')
      if (a === 'move') {
        if (b === '1') {
          this.move = true
        } else {
          this.move = false
        }
      } else if (a === 'video') {
        const v = this.$refs.video
        switch (b) {
          case 'start':
            const state = !this.active;
            if (state) {
              v.pause()
            } else {
              v.play()
            }
            this.active = state
            break;
          case 'play':
            if (v.paused) {
              v.play()
            } else {
              v.pause()
            }
            break;
          case 'forward':
            // v.pause();
            v.currentTime = v.currentTime + 10 > v.duration ? v.duration : v.currentTime + 10;
            break;
          case 'retreat':
            // v.pause();
            v.currentTime = v.currentTime - 10 < 0 ? 0 : v.currentTime - 10
            break;
          default:
            break;
        }
      } else {
        this.setData({ type: b, active: c })
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.app {
  position: relative;
  width: 9600px;
  height: 1512px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;



  .video {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #000;
    z-index: 99;
    opacity: 0;
    transition-duration: 600ms;

    .start {
      width: 100%;
      height: 100%;
    }

    &.active {
      opacity: 1;
    }
  }

  .index {
    transition-duration: 600ms;
    opacity: 0;

    &.active {
      opacity: 1;
    }

    &.move {
      transform: matrix(1, 0, 0, 1, -1528, 0);
    }
  }

}
</style>
