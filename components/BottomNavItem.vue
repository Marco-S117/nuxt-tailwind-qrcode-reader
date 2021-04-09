<template>
  <component
    v-on="$listeners"
    :is="isBtn ? 'button' : 'router-link'"
    :to="isBtn ? null : to"
    exact-active-class="active"
    class="bottom-nav-item transition duration-300"
  >
    <component :is="iconSvg" class="transition duration-300" />
  </component>
</template>

<script>
export default {
  name: 'BottomNavItem',
  props: {
    isBtn: { type: Boolean, default: false },
    to: { type: [String, Object] },
    icon: { type: String, required: true }
  },
  computed: {
    iconSvg () {
      return require('@/components/icons/' + this.icon).default
    }
  }
}
</script>

<style scoped>
.bottom-nav-item {
  width: 25%;
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
  transform: translate(-50%, -50%) scale(1.1);
  fill: rgba(220, 38, 38, 1);
}
</style>
