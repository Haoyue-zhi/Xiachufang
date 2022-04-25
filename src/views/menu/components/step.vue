<template>
  <van-cell-group :border="false">
    <van-cell title-class="title" title="做法" :border="false"/>
    <van-cell title-class="title" :title="'步骤' + (index + 1)" v-for="(item,index) in items" :key="item">
      <template #label>
        <upload></upload>
        <van-field
            v-model="item.explain"
            rows="2"
            autosize
            type="textarea"
            placeholder="添加步骤说明"
        />
      </template>
    </van-cell>
    <van-cell :border="false">
      <span class="add" @click="add">再增加一步</span>
    </van-cell>
    <van-cell title-class="title" :border="false" title="小贴士"/>
    <van-field
        v-model="tips"
        rows="3"
        autosize
        type="textarea"
        placeholder="这道菜还有哪些需要注意的细节和小技巧？"
    />
    <van-cell title="烹饪时长"/>
    <div class="time">
      <div class="swipe">
        <div class="tag">15分钟左右</div>
        <div class="tag">15~30分钟</div>
        <div class="tag">30~60分钟</div>
        <div class="tag">1小时以上</div>
      </div>
    </div>
    <van-cell title="烹饪难度"/>
    <div class="difficulty">
      <div class="swipe">
        <div class="tag">零厨艺</div>
        <div class="tag">容易做</div>
        <div class="tag">有点挑战</div>
        <div class="tag">压力略大</div>
      </div>
    </div>
    
    <div class="release">
      发布这个菜谱
    </div>
  </van-cell-group>
</template>

<script setup>
import {ref, reactive} from 'vue'
import upload from './uploader.vue'

const items = reactive([
  {
    explain: ''
  }
])

function add() {
  const obj = {
    explain: ''
  }
  items.push(obj)
}

const tips = ref('')

</script>

<style scoped lang="scss">
@import '@/assets/scss/color';

.van-cell {

  :deep(.title) {
    font-size: 18px;
    font-weight: bold;
  }

  .add {
    font-size: 14px;
    color: $theme-color;
  }
}

.van-uploader {
  :deep(.van-uploader__wrapper) {
    .van-image, .van-uploader__upload {
      width: 350px;
      height: 279px;
      border-radius: 10px;
    }
  }
}

.time, .difficulty {
  width: 100%;
  display: flex;
  overflow-x: auto;

  .swipe {
    display: flex;

    .tag {
      display: flex;
      justify-content: center;
      align-items: center;
      white-space: nowrap;
      height: 54px;
      padding: 0 12px;
      border-radius: 3px;
      margin-right: 8px;
      font-size: 16px;
      background-color: #f3f3f3;

      &:nth-child(1) {
        margin-left: 20px;
      }
    }
  }
}

.release {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 100%;
  font-size: 17px;
  font-weight: bold;
  color: #fff;
  background-color: $theme-color;
  margin-top: 20px;
}

</style>