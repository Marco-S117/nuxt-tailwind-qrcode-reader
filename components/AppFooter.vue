<template>
  <footer class="h-16 w-full max-w-3xl mx-auto fixed bottom-0 z-40 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 flex items-center justify-between rounded-t-lg">
    <bottom-nav-item
      @on-click="onClickPageItem"
      :to="{ name: 'index' }"
      :active="!isOpen && $route.name === 'index'"
      icon="Camera"
    />
    <bottom-nav-item
      @on-click="onClickPageItem"
      :to="{ name: 'recent' }"
      :active="!isOpen && $route.name === 'recent'"
      icon="Time"
    />
    <bottom-nav-item
      @on-click="onClickGear"
      :icon="isOpen ? 'Close' : 'Gear'"
      :active="isOpen"
    />
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    onClickPageItem () {
      if (this.isOpen) {
        this.$nuxt.$emit('toggle-drawer')
        this.isOpen = !this.isOpen
      }
    },
    onClickGear () {
      this.$nuxt.$emit('toggle-drawer')
      this.isOpen = !this.isOpen
    }
  }
}
</script>
