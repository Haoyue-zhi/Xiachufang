<template>
  <van-uploader v-model="fileList" :preview-full-image="false" :show-upload="fileList.length !==1 "/>
</template>

<script setup>
import {onMounted, ref} from 'vue'

const fileList = ref([
  {url: 'https://cdn.jsdelivr.net/npm/@vant/assets/leaf.jpeg'}
]);
</script>

<style scoped lang="scss">
.van-uploader {

  :deep(.van-uploader__wrapper) {
    .van-image, .van-uploader__upload {
      width: 390px;
      height: 292px;
    }
    .van-uploader__preview-delete{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      width: 30px;
      top: 20px;
      right: 20px;
      border-radius: 50%;

      .van-uploader__preview-delete-icon{
        position: static;
        transform: none;
      }
    }
  }

}
</style>