<template>
  <img alt="Vue logo" src="@/assets/img/logo.png" />
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>
  <van-button type="primary">主要按钮</van-button>
  <p>{{ this.datalist }}</p>
</template>

<script>
import { list } from '../api/index'
import { onMounted, ref, getCurrentInstance } from 'vue'

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

    // 方式二
    const { proxy } = getCurrentInstance()
    function test() {
      proxy.$axios({
        url: `/getlist`,
        method: 'get'
      }).then(({ data }) => {
        datalist.value = data.array.join(' ')
        console.log(data.array.join(' '));
      })
    }

    onMounted(() => {
      test()
      // getlist()
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
