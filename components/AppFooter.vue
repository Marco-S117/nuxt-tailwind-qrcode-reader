<template>
  <footer class="h-16 w-full max-w-3xl mx-auto fixed bottom-0 bg-gray-900 flex items-center justify-between rounded-t-lg shadow-xl">
    <nuxt-link :to="{ name: 'index' }" exact-active-class="active" class="route">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
      </svg>
    </nuxt-link>
    <nuxt-link :to="{ name: 'about' }" exact-active-class="active" class="route">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
      </svg>
    </nuxt-link>
    <nuxt-link :to="{ name: 'recent' }" exact-active-class="active" class="route">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
      </svg>
    </nuxt-link>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style>
.route {
  width: 33%;
  height: 100%;
  position: relative;
  transition: all 0.4s ease-in-out;
}

.route svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.9);
  width: 32px;
  height: 32px;
  transition: all 0.4s ease-in-out;
}

.route.active {
  background-color: rgba(220, 38, 38, 0.1);
}

.route.active svg {
  transform: translate(-50%, -50%) scale(1.1);
  fill: rgba(220, 38, 38, 1);

}
</style>
