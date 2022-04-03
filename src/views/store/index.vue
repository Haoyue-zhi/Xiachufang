<template>
  <div class="box">
    <!-- 导航栏 -->
    <navbar :address="address"></navbar>
    <!-- 主要内容 -->
    <div class="content">
      <h1>商店</h1>
    </div>

  </div>
</template>

<script setup>
import navbar from './components/navbar.vue'
import {ref} from 'vue'
import {map} from '@/api/store'

getMap()

// 获取定位
const address = ref('')
async  function getMap(){
  const param = {
    key:'765497128df15f589daa56c0c79b35a5',
  }
  const res = await map(param)
  if(res&&res.infocode === "10000"){
    address.value = res.city
  }
}

</script>

<style scoped lang="scss">
@import "@/assets/scss/color";

</style>