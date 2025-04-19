<template>
  <VPTeamPage>
    <!-- 标题 -->
    <div class="0 relative mt-2 flex justify-center">
      <h1 class="text-5xl font-bold">🪙 Travel 🤏</h1>
      <span
        class="absolute bottom-1/3 left-1/2 -translate-x-1/2 bg-gradient-to-b from-black/20 to-black/10 bg-clip-text text-6xl tracking-wider text-transparent opacity-60 dark:from-white/20 dark:to-white/10"
        >Travel</span
      >
    </div>

    <p class="mt-2 text-center text-black/50 dark:text-slate-500">
      世界这么大，我想去看看
    </p>

    <!-- 主体 -->
    <div>
      <CountrySelector @select-country="currentCountry = $event" />
      <MapChart :country="currentCountry" />
    </div>
  </VPTeamPage>
</template>

<script setup>
import { VPTeamPage } from "vitepress/theme";
import { ref } from 'vue'
import CountrySelector from './CountrySelector.vue'
import MapChart from './MapChart.vue'

const currentCountry = ref('china') // 默认展示中国地图
</script>

<style scoped>
</style>