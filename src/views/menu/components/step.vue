<template>
  <van-cell-group :border="false">
    <van-cell title-class="title" title="做法" :border="false"/>
    <van-swipe-cell ref="itemRefs" v-for="(item,index) in items" :key="item" :name="index" @open="openSwipeCell(index)">
      <van-cell title-class="title" :title="'步骤' + (index + 1)" :border="false"/>
      <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
        <upload></upload>
        <van-field
            v-model="item.explain"
            rows="2"
            autosize
            type="textarea"
            placeholder="添加步骤说明"
        />
      </div>
      <template #right>
        <van-button square type="danger" text="删除" @click="del(index)" style="height: 100%"/>
      </template>
    </van-swipe-cell>
    <van-cell :border="false">
      <span class="add" @click="add">再增加一步</span>
    </van-cell>
    <van-cell title-class="title" :border="false" title="小贴士"/>
    <van-field
        v-model="tips"
        rows="3"
        autosize
        type="textarea"
        placeholder="这道菜还有哪些需要注意的细节和小技巧?"
        @update:model-value="setTips"
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
    <van-cell is-link title-class="title" :border="false" title="推荐至分类" @click="showPopup" style="margin-top: 30px;"
              :value="sortItem"/>
    <!-- 发布按钮 -->
    <div class="release" @click="emit('issue')">
      发布这个菜谱
    </div>
    <van-popup v-model:show="show" position="left" style="height:100%;width: 100%;">
      <van-nav-bar title="选择分类" @click-left="showPopup" :border="false" :fixed="true" placeholder
                   style="height: 47px;">
        <template #left>
          <span style="color: #E86F58;font-size: 18px;">取消</span>
        </template>
      </van-nav-bar>
      <van-cell v-for="item in sortItems" :key="item" :clickable="true" @click="setSort(item.title)">
        {{ item.title }}
      </van-cell>
    </van-popup>
  </van-cell-group>
</template>

<script setup>
import {ref, reactive} from 'vue'
import upload from './uploader.vue'
import sort from '@/assets/json/sort.json'

const emit = defineEmits(['setTips', 'setSort', 'issue'])

function setTips(value) {
  emit('setTips', value)
}

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

const itemRefs = ref([])

// 关闭其他cell
function openSwipeCell(index) {
  const otherRow = itemRefs.value.filter((item) => {
    return item !== itemRefs.value[index]
  })
  otherRow.forEach(item => item.close())
}

// 删除cell
function del(key) {
  new Promise((resolve, reject) => {
    itemRefs.value[key].close()
    setTimeout(() => resolve("done"), 200);
  }).then(result => {
    if (items.length > 1) {
      items.splice(key, 1)
    }
  })
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

const sortItems = ref([])
const sortItem = ref('')
concatSort()

// 设置分类选项
function concatSort() {
  sort.forEach(item => {
    sortItems.value = sortItems.value.concat(item.subject)
  })
}

// 选择类别
function setSort(title) {
  emit('setSort', title)
  sortItem.value = title
  showPopup()
}

const show = ref(false);

// 控制分类弹窗开关
function showPopup() {
  show.value = !show.value;
};

</script>

<style scoped lang="scss">
@import '@/assets/scss/color';

.van-swipe-cell {

}

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