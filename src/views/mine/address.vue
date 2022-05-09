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
        @select="onDefault"
    />
  </div>
</template>

<script setup>
import {ref, onMounted, reactive} from 'vue';
import {useRouter, useRoute} from "vue-router";
import {Toast} from 'vant';
import {showAddress,addAddress} from '@/api/mine'

const router = useRouter();
const route = useRoute();


init()
const chosenAddressId = ref('');
const list = ref([])

// 初始化
async function init() {
  const res = await showAddress()
  if (res.code && res.code === '00000') {
    list.value = []
    res.data.forEach((item, index) => {
      let AddressList = {}
      AddressList.id = item.id
      AddressList.name = item.addressName
      AddressList.tel = item.addressPhone
      AddressList.address = item.addressSuper.replace(/,/g, '') + item.addressDetail
      AddressList.isDefault = item.addressDefault
      list.value.push(AddressList)
      if (item.addressDefault === 1) {
        chosenAddressId.value = item.id
      }
    })
  }
}

// 新增地址
function onAdd() {
  router.push({path: '/mine/setting/editAddress', query: {plan: '0'}})
}

// 修改地址
function onEdit(item, index) {
  router.push({path: '/mine/setting/editAddress', query: {plan: '1', ID: item.id}})
}

// 设置默认
async function onDefault(item) {
  const res = await addAddress(item.id)
  if (res.code && res.code === '00000') {
    init()
    console.log(res)
  }
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