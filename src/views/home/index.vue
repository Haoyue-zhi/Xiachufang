<template>

</template>

<script>
import { list } from '@/api/index'
import { ref } from 'vue'

export default {
  setup() {
    const datalist = ref('')

    // 方式一 （推荐）
    async function getlist() {
      let query = {
        key: 'c4330e4026b463e89f847391c998af94'
      }
      const data = await list(query)
      datalist.value = data.data.newslist[0].content
      console.log(data.data.newslist[0]);
    }

    return { }
  }
}
</script>

<style scoped lang="scss">
$color:#42b983;
p {
  a {
    color: $color;
  }
}
</style>
