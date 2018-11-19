<template>
  <label class="btn-scan">
    <span class="btn-scan__text">Scan</span>
    <QrcodeCapture
      class="btn-scan__input"
      @decode="$emit('decode', $event)"
    />
  </label>
</template>

<script>
import { QrcodeCapture } from 'vue-qrcode-reader'
export default {
  name: 'QRFile',
  components: { QrcodeCapture }
}
</script>

<style lang="scss" scoped>
</style>
