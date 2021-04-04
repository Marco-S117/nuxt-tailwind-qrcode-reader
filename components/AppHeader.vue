<template>
  <header class="sticky top-0 h-16 px-4 bg-gray-900 text-red-600 flex items-center justify-center rounded-b-lg">
    <router-link :to="{ name: 'index' }">
      <h1 class="text-2xl">Nuxt QrCode Reader</h1>
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style>
</style>
