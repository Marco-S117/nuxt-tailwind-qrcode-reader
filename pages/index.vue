<template>
  <div>
    <h1 class="sticky top-16 pt-4 bg-white text-3xl text-center uppercase text-red-600 tracking-wider">{{ $t('pages.index.title') }}</h1>
    <h2 class="ticky top-28 pb-4 bg-white text-lg text-center tracking-wider mb-12">{{ $t('pages.index.subtitle') }}</h2>
    <div class="t-content flex items-center justify-center">
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
            <div v-else-if="isErrored || !!scannedUrl" class="result">
              <cta
                v-if="isErrored"
                @click="reloadScanner()"
                :label="$i18n.messages[$i18n.locale].words.reload"
                :isBtn="true"
              />
              <cta
                v-if="!!scannedUrl"
                @click="scanAgain"
                :label="$i18n.messages[$i18n.locale].words.again"
                :isBtn="true"
                :secondary="true"
              />
              <cta
                v-if="!!scannedUrl"
                :label="$i18n.messages[$i18n.locale].words.open"
                :to="scannedUrl"
              />
          </div>
          </transition>
        </qrcode-stream>
      </div>
    </div>
  </div>
</template>

<script>
import { setCookie } from '@/utils/cookies/ManageCookies'
export default {
  name: 'HomePage',
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
    setCookie,
    async onScannerInit (promise) {
      this.isLoading = true
      try {
        const { capabilities } = await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.errorMsg = this.$t('qrErrors.notAllowed')
        } else if (error.name === 'NotFoundError') {
          this.errorMsg = this.$t('qrErrors.notFound')
        } else if (error.name === 'NotSupportedError') {
          this.errorMsg = this.$t('qrErrors.notSupported')
        } else if (error.name === 'NotReadableError') {
          this.errorMsg = this.$t('qrErrors.notReadable')
        } else if (error.name === 'OverconstrainedError') {
          this.errorMsg = this.$t('qrErrors.overConstrained')
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.errorMsg = this.$t('qrErrors.streamApiNotSupported')
        }
        this.isErrored = true
        this.$nuxt.$emit('show-notification', { msg: this.errorMsg, type: 'error' })
      } finally {
        this.isLoading = false
      }
    },
    onScannerDecode (url) {
      if (url) {
        this.setCookie(new Date().getTime(), url, 7)
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
      ctx.strokeStyle = '#dc2626'
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
  },
  watch: {
    isLoading (value) {
      value ? this.$nuxt.$loading.start() : this.$nuxt.$loading.finish()
    }
  }
}
</script>

<style scoped>
.scanner-container {
  width: 44vh;
  height: 44vh;
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
