<template>
  <van-cell-group :border="false">
    <van-cell title-class="title" title="做法" :border="false"/>
    <van-cell title-class="title" :title="'步骤' + (index + 1)" v-for="(item,index) in items" :key="item">
      <template #label>
        <upload></upload>
        <van-field
            v-model="item.explain"
            rows="2"
            autosize
            type="textarea"
            placeholder="添加步骤说明"
        />
      </template>
    </van-cell>
    <van-cell>
      <span class="add" @click="add">再增加一步</span>
    </van-cell>
  </van-cell-group>
</template>

<script setup>
import {ref,reactive} from 'vue'
import upload from './uploader.vue'

const items = reactive([
  {
    explain:''
  }
])

function add(){
  const obj = {
    explain: ''
  }
  items.push(obj)
}

</script>

<style scoped lang="scss">
@import '@/assets/scss/color';

.van-cell {

  :deep(.title) {
    font-size: 18px;
    font-weight: bold;
  }

  .add {
    font-size: 14px;
    color: $theme-color;
  }
}

.van-uploader {
  :deep(.van-uploader__wrapper) {
    .van-image, .van-uploader__upload {
      width: 350px;
      height: 279px;
      border-radius: 10px;
    }
  }
}


</style>