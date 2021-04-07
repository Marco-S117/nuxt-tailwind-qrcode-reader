<template>
  <transition name="notify" mode="out-in" appear>
    <div v-if="!!notification" :class="(type)" class="notify">
      <span class="block">{{ notification }}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AppNotification',

  data () {
    return {
      type: null,
      notification: null
    }
  },

  mounted () {
    this.$nuxt.$on('show-notification', (notification) => {
      this.type = notification.type
      this.notification = notification.msg
      setTimeout(() => {
        this.type = null
        this.notification = null
      }, 4000)
    })
  }
}
</script>

<style>
.notify-enter-active,
.notify-leave-active {
  transition: all 0.4s ease-in-out;
}

.notify-enter,
.notify-leave-to {
  opacity: 0;
  transform: translate(50%, 20px) !important;
}

.notify {
  width: 100%;
  max-width: 350px;
  color: #fff;
  text-align: center;
  padding: 4px 6px;
  border-radius: 8px;
  position: absolute;
  bottom: 100px;
  right: 50%;
  transform: translateX(50%);
}

.notify.error {
  background-color: rgb(220, 38, 38);
}

.notify.warning {
  background-color: rgb(220, 202, 38);
}

.notify.success {
  background-color: rgb(44, 220, 38);
}
</style>
