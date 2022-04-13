<template>
  <div>
    <van-nav-bar title="选择收货地址" @click-left="onClickLeft" fixed placeholder :border="false">
      <template #left>
        <van-icon name="arrow-left" size="25" color="#000"/>
      </template>
    </van-nav-bar>
    <van-address-list
        v-model="chosenAddressId"
        :list="list"
        @add="onAdd"
        @edit="onEdit"
    />
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter, useRoute} from "vue-router";
import {Toast} from 'vant';

const router = useRouter();
const route = useRoute();

const chosenAddressId = ref('1');
const list = [
  {
    id: '1',
    name: '张三',
    tel: '13000000000',
    address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
    isDefault: true,
  }
];

function onAdd() {
  router.push({ path: '/mine/setting/editAddress', query: { plan: '0' } })
}

function onEdit(item, index) {
  router.push({ path: '/mine/setting/editAddress', query: { plan: '1' } })
}

function onClickLeft() {
  router.back()
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";

:deep(.van-button--danger), :deep(.van-address-item .van-radio__icon--checked .van-icon) {
  background: $theme-color;
  border: $theme-color;
}
</style>