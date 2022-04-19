<template>
  <div class="works">
    <!-- 导航栏 -->
    <van-nav-bar @click-left="back" @click-right="release" fixed placeholder :border="false">
      <template #left>
        <icon-svg name="icon-clear" class="clear"></icon-svg>
      </template>
      <template #right>
        <span style="color: #E86F58;font-size: 18px;">发布</span>
      </template>
    </van-nav-bar>
    <!-- 主要内容 -->
    <van-uploader v-model="fileList" multiple :preview-full-image="false" :deletable="false" :max-count="9"
                  ref="uploader" accept="image/*" @click-preview="del">
      <div class="van-uploader__upload">
        <icon-svg name="icon-add" class="add" color="#CDCDCD"></icon-svg>
      </div>
    </van-uploader>
    <van-cell-group :border="false">
      <van-field v-model="message" type="textarea" :autosize="{ minHeight: 120 }" placeholder="分享你的下厨心得、生活点滴..."/>
      <div class="van-hairline--bottom hr"></div>
    </van-cell-group>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {Toast, Dialog} from 'vant';

const router = useRouter();
const store = useStore()

function back() {
  if (fileList.value.length > 0 || message.value) {
    Dialog.confirm({
      message: '退出后编辑的内容将丢失',
      confirmButtonText: '取消',
      cancelButtonText: '退出',
      confirmButtonColor: '#3478F6',
      cancelButtonColor: '#3478F6'
    })
        .then(() => {
        })
        .catch(() => {
          router.back()
        });
  } else {
    router.back()
  }
}

// 发布
function release() {

}

// 上传文件列表
const fileList = ref([])

// 删除图片
function del(file, detail) {
  Dialog.confirm({
    message: '确认删除图片？',
    confirmButtonText: '取消',
    cancelButtonText: '删除',
    confirmButtonColor: '#3478F6',
    cancelButtonColor: 'red'
  })
      .then(() => {
      })
      .catch(() => {
        if (fileList.value.length === 1) {
          Toast('至少保留一张图片')
        } else {
          fileList.value.splice(detail.inedx)
        }
      });
}

const uploader = ref(null)

function upload() {
  uploader.value.chooseFile()
}

const message = ref()

onMounted(() => {
  upload()
})
</script>

<style scoped lang="scss">
.works {
  .clear {
    width: 26px;
    height: 26px;
  }

  .van-uploader {
    width: 100%;
    overflow-x: auto;
    padding-top: 11px;

    :deep(.van-uploader__wrapper) {
      flex-wrap: nowrap;
      padding-left: 20px;

      .van-uploader__preview-image,
      .van-uploader__upload {
        width: 90px;
        height: 90px;
        border-radius: 9px;
      }

      .van-uploader__upload {
        background: #ffffff;
        border: 2.5px dashed #CDCDCD;
        cursor: pointer;
      }
    }
  }

  .hr {
    background: none;
    border: none;
    width: 350px;
    margin: 0 auto;
  }
}

</style>