<template>
  <div>
    <h1 class="text-3xl text-center uppercase text-red-600">Recent Page</h1>
    <h2 class="text-md text-center uppercase mb-12">Lorem ipsum dolor sit amet</h2>
    <p class="t-content text-sm">
      <ul v-if="!!cookies">
        <li v-for="(cookie, index) in cookies" :key="index">
          <a :href="cookie.value">[{{ parseInt(index) + 1 }}] - {{ new Date(cookie.timestamp) }}</a>
        </li>
      </ul>
    </p>
  </div>
</template>

<script>
import { listCookies } from '@/utils/cookies/ManageCookies'

export default {
  data () {
    return {
      cookies: null
    }
  },
  mounted () {
    this.cookies = this.listCookies()
  },
  methods: {
    listCookies
  }
}
</script>

<style>

</style>
