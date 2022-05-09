<template>
  <van-cell-group :border="false">
    <van-field
        v-model="story"
        rows="3"
        autosize
        type="textarea"
        placeholder="输入这道美食背后的故事"
        @update:model-value="setStory"
    />
    <van-cell title-class="title" title="用料"/>
    <!-- 滑动单元格 -->
    <van-swipe-cell ref="itemRefs" v-for="(item,index) in items" :key="item" :name="index" @open="openSwipeCell(index)">
      <div class="van-hairline--bottom" style="display: flex;">
        <van-field
            v-model="item.Ingredients"
            rows="1"
            autosize
            type="textarea"
            placeholder="食材：如鸡蛋"
            :border="false"
        />
        <van-field
            v-model="item.consumption"
            rows="1"
            autosize
            type="textarea"
            placeholder="用量：如1只"
            :border="false"
        />
      </div>
      <template #right>
        <van-button square type="danger" text="删除" @click="del(index)" style="height: 100%"/>
      </template>
    </van-swipe-cell>
    <!-- 新增一行 -->
    <van-cell>
      <span class="add" @click="add">再增加一行</span>
    </van-cell>
  </van-cell-group>
</template>

<script setup>
import {onMounted, reactive, ref} from 'vue'

const emit = defineEmits(['setStory'])

const story = ref('')

function setStory(value){
  emit('setStory',value)
}

const items = reactive([
  {
    Ingredients: '',
    consumption: ''
  },
])

// 添加用料
function add() {
  const obj = {
    Ingredients: '',
    consumption: ''
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

defineExpose({
  items
})
</script>

<style scoped lang="scss">
@import '@/assets/scss/color';

.van-cell-group {
  margin-bottom: 65px;

  :deep(.van-cell) {
    .title {
      font-size: 18px;
      font-weight: bold;
    }

    .add {
      font-size: 14px;
      color: $theme-color;
    }
  }
}
</style>
