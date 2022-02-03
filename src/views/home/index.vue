<template>
  <div>
    <h1 v-for="item in 20">首页</h1>
  </div>
</template>

<script>
import {ref} from 'vue'
import {list} from '../../api/index'

export default {
  setup() {

    // 方式一 （推荐）
    async function getlist() {
      let data = {
        key: 'c4330e4026b463e89f847391c998af94'
      }
      const a = await list(data)
      console.log(a)
    }


    return {}
  }
}
</script>

<style scoped lang="scss">

</style>
