<template>
  <van-cell-group :border="false">
    <van-field
      v-model="story"
      rows="3"
      autosize
      type="textarea"
      placeholder="输入这道美食背后的故事"
    />
    <van-cell title-class="title" title="用料" />
    <!-- 滑动单元格 -->
    <van-swipe-cell v-for="item in items" :key="item">
      <div style="display: flex">
        <van-field
          v-model="item.Ingredients"
          rows="1"
          autosize
          type="textarea"
          placeholder="食材：如鸡蛋"
        />
        <van-field
          v-model="message"
          rows="1"
          autosize
          type="textarea"
          placeholder="用量：如1只"
        />
      </div>
      <template #right>
        <van-button square type="danger" text="删除" style="height: 100%" />
      </template>
    </van-swipe-cell>
    <!-- 新增一行 -->
    <van-cell>
      <span @click="add">再增加一行</span>
    </van-cell>
  </van-cell-group>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'

const story = ref('')
const message = ref('')

const items = reactive([
  {
    Ingredients: '',
    consumption: '',
  }
])

function add() {
  console.log(items[0].item)
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/color';
.van-cell-group {
  :deep(.van-cell) {
    .title {
      font-size: 18px;
      font-weight: 500;
    }
    span {
      font-size: 14px;
      color: $theme-color;
    }
  }
}
</style>
