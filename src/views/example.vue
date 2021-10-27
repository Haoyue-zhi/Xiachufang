<template>
  <img alt="Vue logo" src="@/assets/img/logo.png" />
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <el-button type="primary"><icon-svg name="icon-up" color='#fff'></icon-svg>主要按钮</el-button>
  <p>{{ this.datalist.content }}</p>
</template>

<script>
// import axiso from 'axios'
import { list } from '../api/index'

export default {
  data() {
    return {
      datalist: ''
    }
  },
  created() {
    // this.getlist()
    // this.test()
  },
  methods: {
    // 方式一 （推荐）
    async getlist() {
      let query = {
        key: 'c4330e4026b463e89f847391c998af94'
      }
      const data = await list(query)
      this.datalist = data.data.newslist[0]
      console.log(data.data.newslist[0]);
    },
    // 方式二
    test() {
      this.$axios({
        url: '',
        method: 'get',
        params: {
          key: 'c4330e4026b463e89f847391c998af94'
        }
      }).then(res => {
        console.log(res);
      })
    }
  }
}
</script>

<style scoped lang="scss">
p {
  a {
    color: $color;
  }
}
</style>
