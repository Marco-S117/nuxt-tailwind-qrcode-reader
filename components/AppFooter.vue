<template>
  <footer class="h-16 w-full max-w-3xl mx-auto fixed bottom-0 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 flex items-center justify-between rounded-t-lg">
    <bottom-nav-item
      :to="{ name: 'index' }"
      icon="Camera"
    />
    <bottom-nav-item
      :to="{ name: 'about' }"
      icon="InfoCircle"
    />
    <bottom-nav-item
      :to="{ name: 'recent' }"
      icon="Time"
    />
    <bottom-nav-item
      @click="$nuxt.$emit('open-drawer')"
      :isBtn="true"
      icon="Gear"
    />
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>
