<template>
  <transition name="drawer" mode="out-in">
    <div v-if="isOpen" class="fixed top-0 right-0 z-40 w-full h-full">
      <aside @click.self="isOpen = false" class="w-full h-full">
        <div class="content mr-auto w-9/12 sm:w-2/5 h-full px-4 bg-gradient-to-bl from-gray-700 via-gray-800 to-gray-900">
          <div class="h-16 mx-auto mb-8 flex items-center justify-between">
            <h3 class="text-2xl text-red-600">Settings</h3>
          </div>
          <div
            v-for="(option, key) in options"
            :key="key"
          >
            <h4 class="text-gray-300 text-md uppercase tracking-wider mb-4">{{ key }}</h4>
            <div
              v-for="(item, index) in option"
              :key="index"
              class="flex items-center mt-2"
            >
              <cta
                ref="icons"
                @click="toggleOption(key, item.name, index)"
                :isBtn="true"
                :icon="item.icon"
                :squared="true"
                class="mr-4"
                :secondary="!item.isActive"
                :disabled="item.isDisabled"
              />
              <h4 class="text-gray-200 text-xs uppercase tracking-wider">{{ item.name }}</h4>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ApprDrawer',
  data () {
    return {
      isOpen: false,
      options: {
        scan: [
          {
            name: 'Flashlight',
            icon: 'Light',
            isActive: false,
            isDisabled: false
          },
          {
            name: 'Rear Camera',
            icon: 'ChangeCamera',
            isActive: true,
            isDisabled: false
          }
        ]
      }
    }
  },
  mounted () {
    this.$nuxt.$on('open-drawer', () => { this.isOpen = true })
    this.$nuxt.$on('disable-option', (option, item) => {
      this.options[option].filter(o => o.name === item)[0].isDisabled = true
    })
  },
  methods: {
    toggleOption (option, name, index,) {
      if (this.options[option][index].isDisabled) {
        this.$nuxt.$emit('show-notification', { msg: name + ' not supported', type: 'warning' })
      }
      this.$nuxt.$emit('toggle-option', name)
      this.options[option][index].isActive = !this.options[option][index].isActive
    }
  }
}
</script>

<style scoped>
aside {
  background-color: rgba(110, 110, 110, 0.4);
}
</style>
