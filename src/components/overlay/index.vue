<template>
  <teleport to="body" :disabled="!show">
    <van-overlay :show="show">
      <icon-svg name="icon-clear" class="clear" @click="$emit('isShow')"></icon-svg>
      <div class="info">
        <img :src="info.userAvatar">
        <span>分享的人是厨房里的天使</span>
      </div>
      <div class="btn">
        <div class="item">
          <img src="@/assets/img/menu.png">
          <span>传菜谱</span>
        </div>
        <div class="item">
          <img src="@/assets/img/works.png">
          <span>传作品</span>
        </div>
        <div class="item">
          <img src="@/assets/img/video.png">
          <span>传视频</span>
        </div>
      </div>
    </van-overlay>
  </teleport>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from "vuex";

const props = defineProps(['show'])
const emit = defineEmits(['isShow'])

const store = useStore()

// 用户信息
const info = computed(() => store.state.info)
</script>

<style scoped lang="scss">
.clear {
  position: absolute;
  left: 20px;
  top: 20px;
  width: 26px;
  height: 26px;
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 227px;
  width: 100%;

  img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    object-fit: cover;
  }

  span {
    margin-top: 14px;
    color: #a9a9a9;
    font-size: 16px;
    letter-spacing: 0.02em;
  }
}
.btn {
  position: absolute;
  top: 565px;
  width: 100%;
  display: flex;
  justify-content: center;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      object-fit: cover;
    }

    span {
      margin-top: 8px;
      font-size: 14px;
      letter-spacing: 0.01em;
      color: #a9a9a9;
    }
  }
}
</style>