<template>
  <main class="text-gray-900 px-4 pt-6 pb-24">
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
