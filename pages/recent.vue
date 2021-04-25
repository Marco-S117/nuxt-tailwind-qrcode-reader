<template>
  <div>
    <h1 class="sticky top-16 pt-4 bg-white text-3xl text-center uppercase text-red-600 tracking-wider">{{ $t('pages.recent.title') }}</h1>
    <h2 class="sticky top-28 pb-4 bg-white text-lg text-center tracking-wider mb-12 shadow-lg">{{ $t('pages.recent.subtitle') }}</h2>
    <div class="t-content text-sm px-4">
      <transition name="fade" mode="out-in" appear>
        <div v-show="!!(cookies && cookies.length)" class="relative">
          <transition-group name="list-item" mode="out-in" tag="div" appear>
            <div
              v-for="(cookie, index) in cookies"
              :key="'item' + index"
              :class="{ 'mt-4': index > 0 }"
              class="flex items-center justify-between"
            >
              <div class="flex items-center">
                <div class="w-2 h-2 bg-red-600 rounded-full mr-4"></div>
                <span>{{ new Date(cookie.timestamp).toLocaleString() }}</span>
              </div>
              <div class="flex items-center">
                <cta
                  @click="onDelete(cookie.timestamp)"
                  :isBtn="true"
                  :squared="true"
                  :small="true"
                  :secondary="true"
                  icon="Delete"
                />
                <cta
                  :to="cookie.value"
                  :squared="true"
                  :small="true"
                  icon="ExternalLink"
                  class="ml-2"
                />
              </div>
            </div>
          </transition-group>
        </div>
      </transition>
      <transition name="fade" mode="out-in" appear>
        <div v-show="!cookies.length" class="text-center w-full text-gray-600 pt-10">
          <sad-emoji class="mx-auto" />
          <h3 class="text-2xl tracking-wider mt-4 mb-2">{{ $t('pages.recent.emptyStateTitle') }}</h3>
          <p class="mb-4">{{ $t('pages.recent.emptyStateMessage') }}.</p>
          <cta
            @click="$router.push({ name: 'index' })"
            :isBtn="true"
            :small="true"
            :label="$i18n.messages[$i18n.locale].pages.recent.emptyStateCtaLabel"
            class="mx-auto"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { listCookies, deleteCookie } from '@/utils/cookies/ManageCookies'
import SadEmoji from '~/components/icons/SadEmoji.vue'
export default {
  components: { SadEmoji },
  name: 'RecentPage',
  data () {
    return {
      cookies: this.listCookies()
    }
  },
  methods: {
    listCookies,
    deleteCookie,
    onDelete (cookie) {
      this.deleteCookie(cookie)
      this.cookies = this.listCookies()
      this.$nuxt.$emit('show-notification', { msg: this.$t('notification.itemDeleted'), type: 'success' })
    }
  }
}
</script>
