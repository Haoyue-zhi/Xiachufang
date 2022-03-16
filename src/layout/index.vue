<template>
  <div>
    <content></content>
    <tab></tab>
  </div>
</template>

<script setup>
import tab from './components/tabbar.vue'
import content from './components/content.vue'
import { onMounted } from 'vue'

import { test } from "@/api/mine";

onMounted(() => {
  getInfo()
})

async function getInfo() {
  const res = await test()
  console.log(res);
}

</script>