<template>
  <main class="text-gray-900">
    <nuxt class="px-4 pt-6 pb-24" />
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
