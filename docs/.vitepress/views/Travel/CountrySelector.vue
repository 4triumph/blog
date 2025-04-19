<template>
  <div class="w-52 bg-white dark:bg-gray-50 rounded-xl shadow-xl p-4 flex flex-col gap-4">
    <h2 class="text-lg font-semibold text-gray-700 mb-2">选择国家</h2>
    <button
      v-for="country in countries"
      :key="country.value"
      @click="$emit('select-country', country.value)"
      class="w-full text-lg rounded-xl border border-sky-500 
         text-sky-600 bg-white
         hover:text-white
         hover:bg-gradient-to-r hover:from-violet-400 hover:to-sky-400
         dark:hover:from-sky-600 dark:hover:to-violet-700
         transition duration-300 shadow-sm shadow-blue-500/50 hover:shadow-md py-2"
    >
      {{ country.label }}
    </button>
  </div>
</template>

<script setup>
const countries = [
  { label: "中国", value: "china" },
  { label: "世界", value: "world" },
  { label: "日本", value: "japan" },
];
</script>
