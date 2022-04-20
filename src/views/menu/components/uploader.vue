<template>
  <van-uploader v-model="fileList" :preview-full-image="false" :show-upload="fileList.length !==1 ">
    <div class="van-uploader__upload">
      <p class="one">+菜谱封面</p>
      <p class="two">诱人的封面是吸引厨友的关键</p>
    </div>
  </van-uploader>
</template>

<script setup>
import {onMounted, ref} from 'vue'

const fileList = ref([]);
</script>

<style scoped lang="scss">
.van-uploader {

  :deep(.van-uploader__wrapper) {
    .van-image, .van-uploader__upload {
      width: 390px;
      height: 292px;
    }

    .van-uploader__upload {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #95958f;
      background-color: #fafaf8;

      .one {
        font-size: 14px;
      }

      .two {
        font-size: 15px;
      }
    }

    .van-uploader__preview-delete {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      width: 30px;
      top: 20px;
      right: 20px;
      border-radius: 50%;

      .van-uploader__preview-delete-icon {
        position: static;
        transform: none;
      }
    }
  }

}
</style>