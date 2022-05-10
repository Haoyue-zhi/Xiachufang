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

    <van-overlay :show="show">
      <div class="wrapper" @click.stop>
        <van-loading size="24px" color="#E86F58" vertical>上传中...</van-loading>
      </div>
    </van-overlay>
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
import {Toast} from 'vant';

const router = useRouter();
const store = useStore()

const show = ref(false);

// 子组件实例数据
const coverupload = ref(null)
const materials = ref(null)
const step = ref(null)

function back() {
  router.back()
}

const form = ref(new FormData())


// 页面标题
const title = ref('菜谱名称')
// 菜谱标题
const menuTit = ref('')

const isShow = ref(false)

// 下一步
function next() {
  if (menuTit.value) {
    title.value = '创建菜谱'
    form.value.append('recipeName', menuTit.value) // 设置菜谱名称
    form.value.append('utensilBrand', '临时')
    form.value.append('utensilModel', '临时')
    form.value.append('utensilType', '临时')
    isShow.value = true
  }
}

// 上传图片
function afterRead(file) {
  form.value.append('recipeImage', file.file)
}

// 设置故事
function setStory(value) {
  form.value.append('recipeDescribe', value)
}

// 设置小贴士
function setTips(value) {
  form.value.append('recipeTips', value)
}

// 设置分类
function setSort(title) {
  form.value.append('recipeLable', title)
}

// 设置用料
function setMaterials() {
  materials.value.items.forEach(item => {
    form.value.append('materialDosage', item.Ingredients)
    form.value.append('materialIngredients', item.consumption)
  })
}

// 设置步骤
function setStep() {
  step.value.items.forEach(item => {
    form.value.append('practiceMedia', item.photo)
    form.value.append('practiceText', item.explain)
  })
}

// 发布
async function issue() {
  setMaterials()
  setStep()
  form.value.append('recipeTime', step.value.timeActive.item)
  form.value.append('recipeDifficulty', step.value.diffActive.item)
  form.value.append('recipeLable', step.value.sortItem)
  show.value = true
  const res = await upload(form.value)
  if (res.code && res.code === '00000') {
    Toast('上传成功')
    show.value = false
    back()
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

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>