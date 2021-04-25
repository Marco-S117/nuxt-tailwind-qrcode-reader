<template>
  <transition name="drawer" mode="out-in">
    <div v-show="isOpen" class="fixed top-0 left-3xl z-10 max-w-3xl w-full h-full">
      <aside class="w-full h-full">
        <div class="w-full h-full px-4 py-20 bg-gradient-to-bl from-gray-800 via-gray-600 to-gray-800 opacity-80"></div>
        <div class="absolute top-0 left-0 w-full h-full py-16 px-4">
          <div class="mt-6">
            <h4 class="text-gray-300 text-md uppercase tracking-wider mb-4">{{ $t('words.lang') }}</h4>
            <div class="flex items-ceneter">
              <cta
                @click="$i18n.setLocale(lang.code)"
                v-for="(lang, index) in $i18n.locales"
                :key="index"
                :label="lang.code"
                :isBtn="true"
                :squared="true"
                :secondary="lang.code !== $i18n.locale"
                :class="{ 'ml-2': index > 0 }"
              />
            </div>
          </div>
          <div class="mt-6">
            <h4 class="text-gray-300 text-md uppercase tracking-wider mb-4">{{ $t('words.credits') }}</h4>
            <div
              v-for="(item, index) in links"
              :key="index"
              class="flex items-center mt-2"
            >
              <cta
                :to="item.link"
                :target="'_blank'"
                :squared="true"
                :icon="item.icon"
                class="mr-4"
              />
              <h4 class="text-gray-200 text-xs uppercase tracking-wider">{{ item.name }}</h4>
            </div>
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
      isOpen: false,
      links: [
        {
          name: 'Autore',
          icon: 'User',
          link: 'https://www.marcopolino.dev/'
        },
        {
          name: 'GitHub',
          icon: 'Github',
          link: 'https://github.com/Marco-S117/nuxt-tailwind-qrcode-reader'
        }
      ]
    }
  },
  mounted () {
    this.$nuxt.$on('toggle-drawer', () => { this.isOpen = !this.isOpen })
  }
}
</script>
