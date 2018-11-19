<template>
  <div id="app">
    <div class="container">
      <div
        v-if="!result"
        class="container__intro"
      >
        <h2 class="container__title">Welcome<br>Scan QR Code</h2>
        <QRCodeIcon class="container__placeholder"/>
      </div>
      <iframe
        v-show="result"
        ref="iframe"
        class="container__iframe"
        frameborder="0"
        :src="result"
        @load="handleIframLoaded"
      />
    </div>
    <template name="slide">
      <div
        v-if="active"
        class="toolbar"
      >
        <QRFile @decode="handleDecode"/>
      </div>
    </template>
  </div>
</template>

<script>
import QRFile from '@/components/QRFile'
import QRCodeIcon from '@/components/QRCodeIcon'

export default {
  name: 'app',
  components: {
    QRFile,
    QRCodeIcon
  },
  data: () => ({
    result: null,
    active: true
  }),
  created () {
    this.handleScroll()
  },
  methods: {
    handleIframLoaded () {
      console.log('loaded')
      const iframe = this.$refs.iframe
      const content = iframe.contentDocument || iframe.contentWindow.document
      content.body.style.transform = 'translate3d(0,0,0)'
      content.body.style.webkitTransform = 'translate3d(0,0,0)'
      console.log(content)
    },
    handleScroll () {
      let scrollTop = window.scrollTop
      window.addEventListener('scroll', () => {
        if (!this.result) return
        let currentScrollTop = window.scrollTop
        if (currentScrollTop > scrollTop) {
          this.active = true
        } else {
          this.active = false
        }
        scrollTop = currentScrollTop
      })
    },
    handleDecode (result) {
      this.result = result
    }//,
    // setResponseIframeOnIOS (event) {
    //   const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    //   if (iOS) {
    //     event.currentTarget.parentNode.style.webkitOverflowScrolling = 'touch'
    //     event.currentTarget.parentNode.style.overflowY = 'scroll'
    //   }
    // }
  }
}
</script>

<style lang="scss">
@import './styles/reset';
@import './styles/common';

.container {
  -webkit-overflow-scrolling: touch;
  overflow: auto;
  height: calc(100vh - 70px);

  &__intro {
    padding: 50px 0 0;
    text-align: center;
  }

  &__placeholder {
    margin: 80px auto 0;
  }

  &__iframe {
    width: 100%;
    height: 100%;
    // min-height: 100vh;
  }
}

.toolbar {
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: 10px;
  height: 50px;
  font-size: 0;
  text-align: center;

  &.fade-enter-active,
  &.fade-leave-active {
    transition: opacity .5s, transform 0.5s;
  }
  &.fade-enter,
  &.fade-leave-to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
}

.btn-scan {
  display: inline-block;
  vertical-align: top;
  border-radius: 25px;
  width: 100px;
  height: 50px;
  color: #fff;
  background: #333;
  font-size: 20px;
  font-weight: 700;
  line-height: 50px;
  text-transform: uppercase;
  cursor: pointer;
}
.btn-scan__text {
  display: inline-block;
  vertical-align: top;
}
.btn-scan__input {
  display: none;
}
</style>
