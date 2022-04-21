<template>
  <div class="nav">
    <icon-svg v-show="info" class="add" name="icon-add" @click="show = true"></icon-svg>
    <div v-show="!info" class="title">我</div>
    <van-search v-show="info" placeholder="搜索我的菜谱" background="#ffffff"/>
    <icon-svg v-show="info" class="adduser" name="icon-adduser"></icon-svg>
    <icon-svg v-show="info" class="set" name="icon-set" @click="router.push('/mine/setting')"></icon-svg>
    <overlay :show="show" @isShow="show = false"></overlay>
  </div>
</template>

<script setup>
import overlay from '@/components/overlay/index.vue'
import {ref, computed} from "vue";
import {useStore} from '@/store'
import {useRouter, useRoute} from "vue-router";

const router = useRouter();
const route = useRoute();
const store = useStore();

const show = ref(false)

const info = computed(() => Object.keys(store.info).length !== 0)

</script>

<style scoped lang="scss">
.nav {

  .title {
    font-size: 17px;
  }

  .van-search {
    position: absolute;
    left: 56px;
    right: 100px;
    width: 234px;
  }

  .add {
    position: absolute;
    left: 20px;
    width: 26px;
    height: 26px;
  }

  .adduser {
    position: absolute;
    right: 60px;
    width: 20px;
    height: 20px;
  }

  .set {
    position: absolute;
    right: 20px;
    width: 20px;
    height: 20px;
  }
}
</style>