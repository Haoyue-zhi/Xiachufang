<template>
  <div>
    <van-icon name="arrow-left" @click="back" size="25"/>
    <p class="title">密码登录</p>
    <div class="content">
      <van-field class="tel" v-model="value" placeholder="输入手机号" type="tel" :formatter="formatter" center maxlength="13"
                 label-width="80" clearable :border="false">
        <template #label>
          <van-field
              v-model="fieldValue"
              is-link
              readonly
              input-align="left"
              arrow-direction="down"
              @click="show = true"
          />
        </template>
      </van-field>
      <van-field class="pas" v-model="password" type="password" placeholder="输入密码" :border="false"/>
      <van-button type="default" :disabled="password.length < 6 "
                  :color=" password.length < 6 ? '#EEEEEE' : '#E86F58'"
                  @click="collect">
        登录
      </van-button>
    </div>
    <van-popup :show="show" round position="bottom">
      <van-cascader
          v-model="cascaderValue"
          title="国家/地区"
          active-color="#E86F58"
          :options="options"
          @close="show = false"
          @finish="onFinish"
      >
        <template #option="{ option,selected}">
          <div class="option">
            <div>{{ option.text }}</div>
            <div>{{ option.value }}</div>
          </div>
        </template>
      </van-cascader>
    </van-popup>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useStore} from '@/store'
import {useRouter, useRoute} from 'vue-router'
import {setToken} from "@/utils/auth";
import {login} from '@/api/mine/index'

const router = useRouter()
const route = useRoute()
const store = useStore()

const value = ref(''); // 手机号码
const password = ref(''); // 密码
const show = ref(false); //菜单显示
const fieldValue = ref('+86');
const cascaderValue = ref('+86');
// 选项列表，children 代表子选项，支持多级嵌套
const options = [
  {
    text: '中国大陆',
    value: '+86',
  },
  {
    text: '中国台湾',
    value: '+886',
  },
  {
    text: '中国香港',
    value: '+852',
  },
  {
    text: '中国澳门',
    value: '+853',
  },
];
// 全部选项选择完毕后，会触发 finish 事件
const onFinish = ({selectedOptions}) => {
  show.value = false;
  fieldValue.value = selectedOptions.map((option) => option.value).join('/');
};

// 登录
async function collect() {
  let data = {
    'phone': fieldValue.value + value.value.replace(/\s/g, ''),
    'password': password.value
  }
  const res = await login(data)
  if (res.code && res.code === '00000') {
    setToken(res.data.token)
    store.setSkeleton(true)
    router.replace('/mine')
  }
}

// 格式化
function formatter(value) {
  const tel = value.replace(/\D/g, '')
  const {length} = tel
  if (length <= 3) {
    return tel;
  } else if (length <= 7) {
    return tel.replace(/(\d{3})(\d{0,4})/, '$1 $2');
  } else {
    return tel.replace(/(\d{3})(\d{4})/, '$1 $2 ');
  }
}

// 回退
function back() {
  router.back()
}
</script>

<style scoped lang="scss">
.van-icon {
  position: absolute;
  left: 13px;
  top: 10px;
}

.title {
  position: absolute;
  left: 28px;
  top: 100px;
  font-size: 27px;
}

.content {
  position: absolute;
  left: 35px;
  top: 196px;

  .tel, .pas {
    width: 330px;
    border-bottom: 1px solid #E5E5E3;
  }

  .van-field {
    padding: 12px 0;
    font-size: 22px;
  }

  .van-button {
    margin-top: 8px;
    width: 330px;
    height: 50.5px;
    border-radius: 10px;
    font-size: 17px;
    font-weight: bold;
  }
}

.option {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>