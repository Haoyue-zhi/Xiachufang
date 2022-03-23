<template>
  <div class="box">
    <h1 v-for="item in 20">首页</h1>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  setup() {

    return {}
  }
}
</script>

<style scoped lang="scss">
.box{
  overflow: auto;
  height: 100%;
  width: 100%;
}
</style>
