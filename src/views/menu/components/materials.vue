<template>
  <van-cell-group :border="false">
    <van-field
        v-model="story"
        rows="3"
        autosize
        type="textarea"
        placeholder="输入这道美食背后的故事"
    />
    <van-cell title="用料"/>
  </van-cell-group>
  <van-swipe-cell>
    <van-cell :border="false" title="单元格" value="内容"/>
    <template #right>
      <van-button square type="danger" text="删除"/>
    </template>
  </van-swipe-cell>

</template>

<script setup>
import {onMounted, ref} from 'vue'

const story = ref('')
</script>

<style scoped lang="scss">

</style>