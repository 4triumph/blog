<template>
  <Layout>


    <template #doc-footer-before>
      <UpdateTime></UpdateTime>
    </template>

     <Live2dWidget />
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import UpdateTime from './UpdateTime.vue'

const { Layout } = DefaultTheme
</script>


