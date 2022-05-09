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
      <Cover-upload v-if="isShow" ref="coverupload" @afterRead="afterRead"></Cover-upload>
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
      <Materials ref="materials" v-if="isShow" @setStory="setStory"></Materials>
    </transition>
    <!-- 步骤 -->
    <transition name="van-fade">
      <Step ref="step" v-if="isShow" @setTips="setTips" @setSort="setSort" @issue="issue"></Step>
    </transition>
  </div>
</template>

<script setup>
import {onMounted, ref, reactive} from 'vue'
import {useStore} from '@/store'
import {useRouter} from "vue-router";
import CoverUpload from './components/uploader.vue'
import Materials from './components/materials.vue'
import Step from './components/step.vue'
import {upload} from '@/api/menu'

const router = useRouter();
const store = useStore()

// 子组件实例数据
const coverupload = ref(null)
const materials = ref(null)
const step = ref(null)

function back() {
  router.back()
}

const uploadData = reactive({
  recipeName: '', // 菜谱名称
  recipeDescribe: '', // 菜谱故事
  recipeTips: '', // 小贴士
  recipeTime: '', // 烹饪时间
  recipeDifficulty: '', // 烹饪难度
  recipeLable: '', // 分类标签，多个标签以英文逗号隔开
  recipeImage: '', // 菜谱封面
  materialDosage: [], // 剂量，原料数组
  materialIngredients: [], // 名称，原料数组
  practiceMedia: [], // 图片，步骤数组
  practiceText: [], // 描述，步骤数组
})


// 页面标题
const title = ref('菜谱名称')
// 菜谱标题
const menuTit = ref('')

const isShow = ref(false)

// 下一步
function next() {
  if (menuTit.value) {
    title.value = '创建菜谱'
    uploadData.recipeName = menuTit.value // 设置菜谱名称
    isShow.value = true
  }
}

// 上传图片
function afterRead(file) {
  uploadData.recipeImage = file.file
}

// 设置故事
function setStory(value) {
  uploadData.recipeDescribe = value
}

// 设置小贴士
function setTips(value) {
  uploadData.recipeTips = value
}

// 设置分类
function setSort(title) {
  uploadData.recipeLable = title
}

// 设置用料
function setMaterials() {
  materials.value.items.forEach(item => {
    uploadData.materialDosage.push(item.Ingredients)
    uploadData.materialIngredients.push(item.consumption)
  })
}

// 设置步骤
function setStep() {
  step.value.items.forEach(item => {
    uploadData.practiceMedia.push(item.photo)
    uploadData.practiceText.push(item.explain)
  })
}

// 转换为formdata
function getFormData(object) {
  const formData = new FormData()
  Object.keys(object).forEach(key => {
    const value = object[key]
    if (Array.isArray(value)) {
      value.forEach((subValue, i) =>
          formData.append(key + `[${i}]`, subValue)
      )
    } else {
      formData.append(key, object[key])
    }
  })
  return formData
}


// 发布
async function issue() {
  setMaterials()
  setStep()
  uploadData.recipeTime = step.value.timeActive.item // 设置烹饪时长
  uploadData.recipeDifficulty = step.value.diffActive.item // 设置烹饪难度
  uploadData.recipeLable = step.value.sortItem // 设置分类
  const res = await upload(getFormData(uploadData))
  if (res.code && res.code === '00000') {

  }
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