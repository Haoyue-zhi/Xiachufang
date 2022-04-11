<template>
  <div class="nav">
    <icon-svg class="add" name="icon-add" @click="show = true"></icon-svg>
    <van-search placeholder="搜索菜谱、食材" background="#ffffff"/>
    <icon-svg class="bell" name="icon-bell"></icon-svg>
    <overlay :show="show"  @isShow="show = false"></overlay>
  </div>
</template>

<script setup>
import overlay from '@/components/overlay/index.vue'
import {ref} from "vue";
import {useStore} from "vuex";
import {useRouter, useRoute} from "vue-router";

const router = useRouter();
const route = useRoute();
const store = useStore();

const show = ref(false)

</script>

<style scoped lang="scss">
.nav {

  .van-search {
    position: absolute;
    left: 56px;
    right: 100px;
    width: 274px;
  }

  .add {
    position: absolute;
    left: 20px;
    width: 26px;
    height: 26px;
  }

  .bell {
    position: absolute;
    right: 20px;
    width: 22px;
    height: 22px;
  }

}
</style>