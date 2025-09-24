<template>
  <VPTeamPage>
    <!-- 标题 -->
    <div class="0 relative mt-20 flex justify-center">
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
    <div class="flex justify-center min-h-screen">
      <div
        class="flex flex-col xl:flex-row min-h-screen p-2 gap-6 w-[80%] max-w-7xl"
      >
        <!-- 左侧 -->

        <CountrySelector @select-country="handleCountrySelect" />

        <!-- 右侧 -->

        <MapChart :mapName="selectedCountry" />
      </div>
    </div>
  </VPTeamPage>
</template>

<script setup>
import { VPTeamPage } from "vitepress/theme";
import { ref } from "vue";
import MapChart from "./MapChart.vue";
import CountrySelector from "./CountrySelector.vue";

const selectedCountry = ref("china");

const handleCountrySelect = (country) => {
  selectedCountry.value = country;
};
</script>

<style scoped>
</style>