<template>
  <div>
    <van-nav-bar :title="route.query.plan === '1' ? '编辑收货地址' : '添加收货地址' " @click-left="onClickLeft" @click-right="onDel" fixed placeholder
                 :border="false">
      <template #left>
        <van-icon name="arrow-left" size="25" color="#000"/>
      </template>
      <template #right v-if="route.query.plan === '1' ? true : false">
        <span style="color: #E86F58;font-size: 18px;">删除</span>
      </template>
    </van-nav-bar>
    <van-address-edit
        :area-list="areaList"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
    />
  </div>
</template>

<script setup>
import {ref,onMounted} from 'vue';
import {useRouter, useRoute} from "vue-router";
import {Toast} from 'vant';
import {areaList} from '@vant/area-data';

const router = useRouter();
const route = useRoute();

const searchResult = ref([]);

function onSave(){
  Toast('save')
}

function onDel() {
  Toast('delete')
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