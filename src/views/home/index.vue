<template>
  <!-- 导航栏 -->
  <navbar></navbar>
  <!-- 主要内容 -->
  <div class="content">

    <van-tabs v-model:active="active" swipeable line-width="20px" color="#E86F58">
      <van-tab title="关注">
        <follow></follow>
      </van-tab>
      <van-tab title="推荐">
        <recommend :imageList="menuList" @onRefresh="getList"></recommend>
      </van-tab>
      <van-tab title="分类">
        <sort></sort>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script setup>
import navbar from './components/navbar.vue'
import sort from './components/sort.vue'
import recommend from './components/recommend.vue'
import follow from './components/follow.vue'
import {ref} from 'vue'
import {list} from '@/api/home'

const active = ref(1);

getList()

const menuList = ref([])

async function getList() {
  const res = await list({}, 0, 1)
  if (res.code && res.code === '00000') {
    menuList.value = res.data.list.map(item => {
      item.recipeImage = item.recipeImage + '?x-image-process=image/resize,m_lfit,h_360,w_540,limit_0'
      return item
    })
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";

.van-tabs {
  :deep(.van-tabs__nav--line ) {
    padding-left: 80px;
    padding-right: 80px;
  }
}
</style>
