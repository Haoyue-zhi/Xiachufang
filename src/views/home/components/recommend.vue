<template>
  <van-pull-refresh v-model="loading" @refresh="onRefresh">

    <div class="test">

      <div class="title">
        为你推荐
      </div>
      <div class="column">
        <div class="item" v-for="(item,index) in imageList" :key="item" @click="choose(index)">
          <img class="photo" v-lazy="item.recipeImage">
          <div class="item-title">
            {{ item.recipeName.slice(0,11) }}
          </div>
          <div class="author">
            <img :src="item.userAvatar">
            <span>{{ item.userName }}</span>
          </div>
        </div>
      </div>

    </div>

  </van-pull-refresh>
</template>

<script setup>
import { ref } from 'vue'
import {useRouter, useRoute} from 'vue-router'

const router = useRouter();
const route = useRoute();

const props = defineProps(['imageList'])
// 下拉刷新
const loading = ref(false);
const onRefresh = () => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};

function choose(index){
  router.push(`/menulist/${props.imageList[index].id}`)
  // props.imageList[index].id
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";
.van-pull-refresh {
  min-height: calc(100vh - 164px);

  .test {
    min-height: calc(100vh - 164px);

    .title {
      font-size: 19px;
      font-weight: bold;
      padding-top: 19px;
      padding-left: 19px;
      padding-bottom: 25px;
    }

    .column {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;

      .item {
        width: 181px;
        height: 256px;
        margin: 0 5px 32px 5px;

        .photo {
          display: block;
          width: 181px;
          height: 181px;
          object-fit: cover;
          border-radius: 11px;
        }

        .item-title {
          font-size: 14px;
          font-weight: bold;
          padding: 8px 14px 3px 14px;
          padding-left: 14px;
          white-space: nowrap;
        }

        .author {
          display: flex;
          align-items: center;
          padding-top: 8px;
          padding-left: 10px;

          img {
            width: 19px;
            height: 19px;
            object-fit: cover;
            border-radius: 50%;
          }

          span {
            padding-left: 4px;
            font-size: 11px;
            color: #c3c3c3;
          }
        }
      }
    }
  }
}
</style>