<template>
    <van-tabbar active-color="#2D2D2D" inactive-color="#2D2D2D" v-model="active" safe-area-inset-bottom placeholder route>
      <van-tabbar-item replace to="/home">
        首页
        <template #icon="props">
          <van-icon :name="props.active ? 'wap-home' : 'wap-home-o'"/>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/store">
        商店
        <template #icon="props">
          <van-icon :name="props.active ? 'shop' : 'shop-o'"/>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/collect">
        收藏
        <template #icon="props">
          <van-icon :name="props.active ? 'like' : 'like-o'"/>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/mine">
        我
        <template #icon="props">
          <van-icon name="contact" v-show="!props.active"/>
          <img class="contact" v-show="props.active" src="@/assets/img/contact.png">
        </template>
      </van-tabbar-item>
    </van-tabbar>
</template>

<script setup>
import {ref} from 'vue'

const active = ref(0);
</script>

<style lang="scss" scoped>
.contact {
  width: 22px;
  height: 22px;
}
</style>