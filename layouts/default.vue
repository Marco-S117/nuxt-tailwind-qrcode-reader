<template>
  <div ref="app" class="fixed w-full h-full overflow-y-auto overflow-x-hidden bg-gray-400 text-gray-100">
    <div class="w-full min-h-full h-auto max-w-3xl mx-auto bg-white">
      <app-header />
      <app-drawer />
      <app-main />
      <app-footer />
      <app-notification />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultTemplate',
  watch: {
    $route (to, from) {
      setTimeout(() => {
        this.$refs.app.scrollTo(0, 0)
      }, 300)
    }
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
