<template>
  <div class="country-selector">
    <el-button
      v-for="country in countries"
      :key="country.value"
      @click="$emit('select-country', country.value)"
      type="primary"
      plain
    >
      {{ country.label }}
    </el-button>
  </div>
</template>

<script setup>
const countries = [
  { label: '中国', value: 'china' },
  { label: '世界', value: 'world' },
  { label: '日本', value: 'japan' },
]
</script>

<style scoped>
.country-selector {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
