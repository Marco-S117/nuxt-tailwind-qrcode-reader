<template>
  <transition name="drawer" mode="out-in">
    <div v-if="isOpen" class="fixed top-0 right-0 z-50 w-full h-full">
      <aside @click.self="isOpen = false" class="w-full h-full">
        <div class="content ml-auto w-80 h-full px-4 bg-gradient-to-b from-gray-900 via-gray-700 to-gray-900">
          <div class="h-16 mx-auto flex items-center justify-end">
            <cta
              @click="isOpen = false"
              :isBtn="true"
              :small="true"
              icon="Close"
            />
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, incidunt saepe, unde aut illum quae dolor, dolore officia hic atque nobis. Assumenda, rem accusamus. Temporibus laboriosam illum tenetur nemo similique?
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
      isOpen: false
    }
  },
  mounted () {
    this.$nuxt.$on('open-drawer', () => { this.isOpen = true })
  }
}
</script>

<style scoped>
aside {
  background-color: rgba(110, 110, 110, 0.4);
}
</style>
