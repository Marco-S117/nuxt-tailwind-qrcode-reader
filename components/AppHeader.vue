<template>
  <header class="h-16 max-w-3xl mx-auto px-4 sticky top-0 bg-gray-900 text-red-600 flex items-center justify-between rounded-b-lg">
    <router-link :to="{ name: 'index' }">
      <h1 class="text-2xl">Nuxt QrCode Reader</h1>
    </router-link>
    <cta
      @click="onClick"
      :isBtn="true"
      :small="true"
      icon="Gear"
    />
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    onClick () {
      this.$nuxt.$emit('open-drawer')
    }
  }
}
</script>

<style>
</style>
