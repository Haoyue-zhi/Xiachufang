<template>

  <van-button type="primary">主要按钮</van-button>
  <van-button type="success">成功按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>

  <p>{{ this.datalist }}</p>

</template>

<script>
import { list } from '@/api/index'
import { onMounted, ref } from 'vue'

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

    onMounted(() => {
      getlist()
    })

    return { datalist }
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
