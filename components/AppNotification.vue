<template>
  <transition name="notify" mode="out-in" appear>
    <div
      v-if="!!notification"
      :key="notification.msg"
      :class="(notification.type)"
      class="notify"
    >
      <span class="block">{{ notification.msg }}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AppNotification',

  data () {
    return {
      notification: {}
    }
  },

  mounted () {
    this.$nuxt.$on('show-notification', (notification) => {
      this.notification = notification
      setTimeout(() => {
        this.notification = null
      }, 3500)
    })
  }
}
</script>

<style>
.notify {
  width: 100%;
  max-width: 350px;
  color: #fff;
  text-align: center;
  padding: 6px 12px;
  border-radius: 8px;
  position: absolute;
  bottom: 100px;
  right: 50%;
  transform: translateX(50%);
  z-index: 50;
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
