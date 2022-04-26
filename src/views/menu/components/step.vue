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
        <div class="tag" :class="{choose: timeActive.key === index}" v-for="(item,index) in times" :key="item"
             @click="chooseTime(index,item)">
          {{ item }}
        </div>
      </div>
    </div>
    <van-cell title="烹饪难度"/>
    <div class="difficulty">
      <div class="swipe">
        <div class="tag" :class="{choose: diffActive.key === index}" v-for="(item,index) in difficulty" :key="item"
             @click="chooseDifficult(index,item)">
          {{ item }}
        </div>
      </div>
    </div>
    <van-cell is-link title-class="title" :border="false" title="推荐至分类" @click="showPopup" style="margin-top: 30px;"/>
    <div class="release">
      发布这个菜谱
    </div>
    <van-popup v-model:show="show" position="left" style="height:100%;width: 100%;">
      <van-nav-bar title="选择分类" @click-left="show = false" :border="false" :fixed="true" placeholder
                   style="height: 47px;">
        <template #left>
          <span style="color: #E86F58;font-size: 18px;">取消</span>
        </template>
      </van-nav-bar>
    </van-popup>
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

// 新增步骤
function add() {
  const obj = {
    explain: ''
  }
  items.push(obj)
}

// 小贴士
const tips = ref('')

const times = reactive([
  '15分钟左右',
  '15~30分钟',
  '30~60分钟',
  '1小时以上'
])

const timeActive = ref({key: null, item: null});

function chooseTime(key, item) {
  timeActive.value.key = key
  timeActive.value.item = item
  console.log(timeActive.value)
}

const difficulty = reactive([
  '零厨艺',
  '容易做',
  '有点挑战',
  '压力略大'
])

const diffActive = ref({key: null, item: null});

function chooseDifficult(key, item) {
  diffActive.value.key = key
  diffActive.value.item = item
  console.log(diffActive.value)
}

const show = ref(false);
const showPopup = () => {
  show.value = true;
};
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

    .choose {
      background-color: $theme-color;
      color: #ffffff;
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