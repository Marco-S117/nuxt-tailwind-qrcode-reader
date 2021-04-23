<template>
  <button
    @click="onClick"
    :class="{ 'active': active }"
    class="bottom-nav-item transition duration-300"
  >
    <component :is="iconSvg" class="transition duration-300" />
  </button>
</template>

<script>
export default {
  name: 'BottomNavItem',
  props: {
    to: { type: Object },
    icon: { type: String, required: true },
    active: { type: Boolean, default: false }
  },
  computed: {
    iconSvg () {
      return require('@/components/icons/' + this.icon).default
    }
  },
  methods: {
    onClick () {
      if (this.to) this.$router.push(this.to)
      this.$emit('on-click')
    }
  }
}
</script>

<style scoped>
.bottom-nav-item {
  width: 33%;
  height: 100%;
  position: relative;
}

.bottom-nav-item svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.9);
  width: 32px;
  height: 32px;
}

.bottom-nav-item.active {
  background-color: rgba(220, 38, 38, 0.1);
}

.bottom-nav-item.active svg {
  transform: translate(-50%, -50%) scale(1.05);
  fill: rgba(220, 38, 38, 1);
}
</style>
