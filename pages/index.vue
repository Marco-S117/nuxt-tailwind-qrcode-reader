<template>
  <div>
    <div class="scanner-container border-4 border-red-600 rounded-xl">
      <qrcode-stream
        v-if="!isDestroyed"
        :track="paintTrack"
        :camera="camera"
        @init="onScannerInit"
        @decode="onScannerDecode"
      >
        <transition name="fade" mode="out-in" appear>
          <div
            v-if="isLoading"
            class="bg-white h-full w-full rounded-xl"
          >
            <qr-code class="w-full h-full opacity-80" />
          </div>
          <div v-else-if="!!scannedUrl" class="result">
            <button
              @click="scanAgain"
              class="cta secondary"
            >
              Scan Again
            </button>
            <a
              :href="scannedUrl"
              target="_blank"
              class="cta"
            >
              Open Url
            </a>
        </div>
        </transition>
      </qrcode-stream>
      <button
        v-if="isErrored"
        @click="reloadScanner()"
        class="cta mt-4 mx-auto"
      >
        Reload
      </button>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      camera: 'auto',
      isDestroyed: false,
      isLoading: false,
      isErrored: false,
      scannedUrl: null,
      errorMsg: null
    }
  },

  methods: {
    async onScannerInit (promise) {
      this.isLoading = true
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.errorMsg = 'Please grant camera access permisson'
        } else if (error.name === 'NotFoundError') {
          this.errorMsg = 'No camera found'
        } else if (error.name === 'NotSupportedError') {
          this.errorMsg = 'Secure context required (HTTPS, localhost)'
        } else if (error.name === 'NotReadableError') {
          this.errorMsg = 'Is the camera already in use?'
        } else if (error.name === 'OverconstrainedError') {
          this.errorMsg = 'Installed cameras are not suitable'
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.errorMsg = 'Device or browser not supported'
        } else {
          this.errorMsg = error.name
        }
        this.isErrored = true
        this.$nuxt.$emit('show-notification', { msg: this.errorMsg, type: 'error' })
      } finally {
        this.isLoading = false
      }
    },
    onScannerDecode (url) {
      if (url) {
        this.$nuxt.$emit('show-notification', { msg: 'Scanned successfully', type: 'success' })
        this.scannedUrl = url
        this.camera = 'off'
      }
    },
    paintTrack (location, ctx) {
      const {
        topLeftCorner,
        topRightCorner,
        bottomLeftCorner,
        bottomRightCorner
      } = location
      ctx.lineWidth = 2
      ctx.strokeStyle = '#ffa6b0'
      ctx.beginPath()
      ctx.moveTo(topLeftCorner.x, topLeftCorner.y)
      ctx.lineTo(bottomLeftCorner.x, bottomLeftCorner.y)
      ctx.lineTo(bottomRightCorner.x, bottomRightCorner.y)
      ctx.lineTo(topRightCorner.x, topRightCorner.y)
      ctx.lineTo(topLeftCorner.x, topLeftCorner.y)
      ctx.closePath()
      ctx.stroke()
    },
    reloadScanner () {
      this.isErrored = false
      this.isDestroyed = true
      this.$nextTick(() => {
        this.isDestroyed = false
      })
    },
    scanAgain () {
      this.camera = 'auto'
      this.scannedUrl = null
    }
  }
}
</script>

<style scoped>
.scanner-container {
  width: 350px;
  height: 350px;
}

>>> .qrcode-stream-camera,
>>> .qrcode-stream-overlay {
  border-radius: 0.5em;
}

.result {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(225, 225, 225, 0.8);
  border-radius: 0.5em;
}
</style>
