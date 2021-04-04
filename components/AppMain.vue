<template>
  <main class="flex items-center justify-center px-4 text-gray-900">
    <nuxt />
  </main>
</template>

<script>
export default {
  name: 'AppMain',
  methods: {
    beforeEnter (e) {
      console.log(e, 'before enter')
    },
    beforeLeave (e) {
      console.log(e, 'before leave')
    }
  }
}
</script>

<style>
main {
  height: calc(100% - 64px - 64px);
}
</style>
