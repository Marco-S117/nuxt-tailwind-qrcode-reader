<template>
  <footer class="fixed bottom-0 h-16 w-full  bg-gray-900 flex items-center justify-between rounded-t-lg shadow-xl">
    <scan-button />
    <credits-button />
    <recent-button />
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
