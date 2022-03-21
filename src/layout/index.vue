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

import { getInfo } from "@/api/mine";

onMounted(() => {
  // getUserInfo()
})

async function getUserInfo() {
  const res = await getInfo()
  console.log(res);
}

</script>