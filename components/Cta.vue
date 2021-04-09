<template>
  <component
    v-on="$listeners"
    :is="isBtn ? 'button' : 'a'"
    :href="isBtn ? null : to"
    :target="isBtn ? null : target"
    :class="{
      'bg-red-600': (primary && !secondary) ? true : false,
      'bg-gray-600': secondary,
      'small': small,
      'squared': squared,
      'disabled': disabled
    }"
    class="cta transition duration-300"
  >
    <slot v-if="!!label">{{ label }}</slot>
    <component v-if="!!icon" :is="iconSvg" class="transition duration-300" />
  </component>
</template>

<script>
export default {
  name: 'Cta',
  props: {
    isBtn: { type: Boolean, default: false },
    label: { type: String },
    to: { type: String },
    target: { type: String, default: '_blank' },
    primary: { type: Boolean, default: true },
    secondary: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    squared: { type: Boolean, default: false },
    icon: { type: String },
    disabled: { type: Boolean }
  },
  computed: {
    iconSvg () {
      return require('@/components/icons/' + this.icon).default
    }
  }
}
</script>

<style scoped>
.cta {
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-transform: uppercase;
  width: 120px;
  height: 40px;
  color: #fff;
  border-radius: 0.5em;
}

.small {
  width: 48px;
  height: 28px;
  font-size: 12px;
}

.squared {
  width: 36px;
  height: 36px;
}

.cta.disabled {
  background-color: #6e6e6e;
}
</style>
