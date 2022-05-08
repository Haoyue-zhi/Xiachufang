<template>
  <div class="menu">
    <!-- 导航栏 -->
    <van-nav-bar @click-left="back" :title="title" fixed placeholder :border="false">
      <template #left>
        <icon-svg name="icon-clear" class="clear"></icon-svg>
      </template>
      <template #right v-if="!isShow">
        <span @click="next" :style="{color: menuTit ? '#E86F58' : '#D1D1D1','font-size':'18px' }">下一步</span>
      </template>
    </van-nav-bar>
    <!-- 上传封面 -->
    <transition name="van-fade">
      <cover-upload v-if="isShow"></cover-upload>
    </transition>
    <!-- 标题 -->
    <div class="title van-hairline--bottom">
      <van-field
          id="van-field-1-input"
          v-model="menuTit"
          rows="1"
          input-align="center"
          autosize
          type="textarea"
          placeholder="添加菜谱名称"
      />
    </div>
    <van-cell-group :border="false" v-if="!isShow">
      <van-cell class="tips" :border="false">
        <template #title>
          <span class="custom-title">提示</span>
          <div class="tag"></div>
        </template>
        <template #label>
          <p>1.好的标题是吸引厨友关注的第一步</p>
          <p>2.在标题中描述菜谱的特点，会吸引更多用户点击。如<br/>
            「不用捏的饭团」、「不焯水不放油的红烧肉」</p>
        </template>
      </van-cell>
    </van-cell-group>
    <!-- 用料 -->
    <transition name="van-fade">
      <materials v-if="isShow" @setStory="setStory"></materials>
    </transition>
    <!-- 步骤 -->
    <transition name="van-fade">
      <step v-if="isShow" @setTips="setTips" @setSort="setSort" @issue="issue"></step>
    </transition>
  </div>
</template>

<script setup>
import {onMounted, ref, reactive} from 'vue'
import {useStore} from '@/store'
import {useRouter} from "vue-router";
import {Toast, Dialog} from 'vant';
import coverUpload from './components/uploader.vue'
import materials from './components/materials.vue'
import step from './components/step.vue'

const router = useRouter();
const store = useStore()

function back() {
  router.back()
}

const uploadData = reactive({
  recipeName:'', // 菜谱名称
  recipeDescribe:'', // 菜谱描述
  recipeTips:'', // 小贴士
  recipeTime:'', // 烹饪时间
  recipeDifficulty:'', // 烹饪难度
  recipeLable:'', // 分类标签，多个标签以英文逗号隔开
  recipeImage:'', // 菜谱封面
  materialDosage:[], // 剂量，原料数组
  materialIngredients:[], // 名称，原料数组
  practiceMedia:[], // 图片，步骤数组
  practiceText:[], // 描述，步骤数组
})


// 页面标题
const title = ref('菜谱名称')
// 菜谱标题
const menuTit = ref('')

const isShow = ref(false)

function next() {
  if (menuTit.value) {
    title.value = '创建菜谱'
    uploadData.recipeName = menuTit.value // 设置菜谱名称
    isShow.value = true
  }
}

// 设置故事
function setStory(value){
  uploadData.recipeDescribe = value
  console.log(value)
}

// 设置小贴士
function setTips(value){
  uploadData.recipeTips = value
}

// 设置分类
function setSort(title){
  uploadData.recipeLable = title
}

function issue(){
  console.log(uploadData)
}

</script>

<style scoped lang="scss">
@import "@/assets/scss/color";

.menu {
  .clear {
    width: 26px;
    height: 26px;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 84px;
    width: 350px;
    margin: 0 auto;

    :deep(#van-field-1-input) {
      align-items: center;
      font-size: 28px;
      font-weight: bold;
      line-height: 37px;
    }

  }

  .tips {
    margin-top: 19px;

    .custom-title {
      font-size: 16px;
    }

    .tag {
      background-color: $theme-color;
      width: 20px;
      height: 3px;
      border-radius: 1px;
    }
  }


}
</style>