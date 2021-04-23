<template>
  <transition name="drawer" mode="out-in">
    <div v-show="isOpen" class="fixed top-0 left-3xl z-10 max-w-3xl w-full h-full">
      <aside class="w-full h-full">
        <div class="w-full h-full px-4 py-20 bg-gradient-to-bl from-gray-800 via-gray-600 to-gray-800 opacity-80"></div>
        <div class="absolute top-0 left-0 w-full h-full py-16 px-4">
          <div v-for="(option, key) in options" :key="key" class="mt-6">
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
          <div v-for="(link, key) in links" :key="key" class="mt-6">
            <h4 class="text-gray-300 text-md uppercase tracking-wider mb-4">{{ key }}</h4>
            <div
              v-for="(item, index) in link"
              :key="index"
              class="flex items-center mt-2"
            >
              <cta
                :to="item.link"
                :target="'_blank'"
                :squared="true"
                :icon="item.icon"
                class="mr-4"
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
        camera: [
          {
            name: 'Torch',
            icon: 'Light',
            isActive: false,
            isDisabled: false
          }
        ]
      },
      links: {
        credits: [
          {
            name: 'Author',
            icon: 'User',
            link: 'https://www.marcopolino.dev/'
          },
          {
            name: 'GitHub',
            icon: 'Github',
            link: 'https://github.com/Marco-S117/nuxt-tailwind-qrcode-reader'
          }
        ]
      }
    }
  },
  mounted () {
    this.$nuxt.$on('toggle-drawer', () => { this.isOpen = !this.isOpen })
    this.$nuxt.$on('disable-option', (option, item) => {
      this.options[option].filter(o => o.name === item)[0].isDisabled = true
    })
  },
  methods: {
    toggleOption (option, name, index,) {
      if (this.options[option][index].isDisabled) {
        this.$nuxt.$emit('show-notification', { msg: name + ' not supported', type: 'warning' })
      } else {
        this.$nuxt.$emit('toggle-option', name)
        this.options[option][index].isActive = !this.options[option][index].isActive
      }
    }
  }
}
</script>

<style scoped>
</style>
