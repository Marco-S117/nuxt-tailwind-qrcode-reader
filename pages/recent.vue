<template>
  <div>
    <h1 class="sticky top-16 pt-4 bg-white text-3xl text-center uppercase text-red-600">Latest</h1>
    <h2 class="sticky top-28 pb-4 bg-white text-xl border-b-2 border-red-600 text-md text-center italic mb-12">Recently scanned</h2>
    <div class="t-content text-sm">
      <div v-if="!!(cookies && cookies.length)">
        <div
          v-for="(cookie, index) in cookies"
          :key="index"
          :class="{ 'mb-8': index < (cookies.length - 1) }"
          class="flex items-center justify-between"
        >
          <div class="flex items-center">
            <div class="w-2 h-2 bg-red-600 rounded-full mr-4"></div>
            <span>{{ new Date(cookie.timestamp).toLocaleString() }}</span>
          </div>
          <cta
            label="Open"
            :to="cookie.value"
            :small="true"
          />
        </div>
      </div>
      <span v-else>No recent scanned</span>
    </div>
  </div>
</template>

<script>
import { listCookies } from '@/utils/cookies/ManageCookies'
export default {
  name: 'RecentPage',
  data () {
    return {
      cookies: this.listCookies()
    }
  },
  methods: {
    listCookies
  }
}
</script>
