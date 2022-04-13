<template>
  <div class="nav">
    <div class="location">
      <icon-svg class="vector" name="icon-vector"></icon-svg>
      <div>{{address}}</div>
    </div>
    <van-search placeholder="搜索商品" background="#ffffff"/>
    <icon-svg class="cart" name="icon-cart"></icon-svg>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useStore} from "vuex";
import {useRouter, useRoute} from "vue-router";

const props = defineProps(['address'])

const router = useRouter();
const route = useRoute();
const store = useStore();


</script>

<style scoped lang="scss">
.nav {

  .van-search {
    position: absolute;
    left: 56px;
    width: 281px;
  }

  .location {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 12px;
    font-size: 10px;
    transform: scale(0.8);

    .vector {
      width: 13px;
      height: 13px;
      transform: rotate(45deg);
    }
  }

  .cart {
    position: absolute;
    right: 15px;
    width: 20px;
    height: 20px;
  }
}
</style>