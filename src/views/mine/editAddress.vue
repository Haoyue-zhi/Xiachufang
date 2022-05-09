<template>
  <div>
    <van-nav-bar :title="route.query.plan !== '0' ? '编辑收货地址' : '添加收货地址' " @click-left="back" @click-right="onDel" fixed
                 placeholder
                 :border="false">
      <template #left>
        <van-icon name="arrow-left" size="25" color="#000"/>
      </template>
      <template #right v-if="route.query.plan !== '0' ? true : false">
        <span style="color: #E86F58;font-size: 18px;">删除</span>
      </template>
    </van-nav-bar>
    <van-address-edit
        :area-list="areaList"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        :address-info="{
        name: info.addressName,
        tel: info.addressPhone,
        areaCode:'110101',
        addressDetail: info.addressDetail
        }"
        @save="onSave"
    />
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {useRouter, useRoute} from "vue-router";
import {Toast} from 'vant';
import {areaList} from '@vant/area-data';
import {addAddress, showAddress, delAddress} from '@/api/mine';

const router = useRouter();
const route = useRoute();

init()

const info = ref({})

// 初始化
async function init() {
  if (route.query.ID) {
    const res = await showAddress(route.query.ID)
    if (res.code && res.code === '00000') {
      info.value = res.data
    }
  }
}

// 保存
async function onSave(content) {
  const data = {
    id: route.query.ID,
    addressName: content.name,
    addressPhone: content.tel,
    addressSuper: content.province + ',' + content.city + ',' + content.county,
    addressDetail: content.addressDetail
  }
  const res = await addAddress('', data)
  if (res.code && res.code === '00000') {
    route.query.plan === '0' ? Toast('添加成功') : Toast('修改成功')
    back()
  }
}

// 删除
async function onDel() {
  const res = await delAddress(route.query.ID)
  if (res.code && res.code === '00000') {
    Toast('删除成功')
    back()
  }
}

function back() {
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