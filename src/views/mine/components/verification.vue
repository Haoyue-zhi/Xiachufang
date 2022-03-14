<template>
  <div>
    <van-icon name="arrow-left" @click="back" size="25"/>
    <p class="change" @click="pas">密码登录</p>
    <p class="title">手机验证码登录</p>
    <div class="content">
      <van-field class="tel" v-model="phone" placeholder="输入手机号" type="tel" :formatter="formatter" center maxlength="13"
                 label-width="80" clearable :border="false">
        <template #label>
          <van-field
              v-model="areaCode"
              is-link
              readonly
              input-align="left"
              arrow-direction="down"
              @click="show = true"
          />
        </template>
      </van-field>
      <van-button type="default" :disabled="phone.length!==13 "
                  :color=" phone.length === 13 ? '#FA8C7C':'#EEEEEE'"
                  @click="collect">
        收取验证码
      </van-button>
    </div>
    <van-popup :show="show" round position="bottom">
      <van-cascader
          v-model="cascaderValue"
          title="国家/地区"
          active-color="#FA8C7C"
          :options="options"
          @close="show = false"
          @finish="onFinish"
      >
        <template #option="{ option }">
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
import {onMounted, ref} from 'vue';
import {useRouter, useRoute} from 'vue-router'
import { useStore } from 'vuex'
import {Toast} from 'vant';
import {createApp} from 'vue';
import { test } from '../../../api/mine';
const app = createApp();
app.use(Toast);

const router = useRouter()
const route = useRoute()
const store = useStore()

const phone = ref(''); // 手机号码
const show = ref(false); // 菜单显示
const areaCode = ref('+86'); // 区号
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
  areaCode.value = selectedOptions.map((option) => option.value).join('/');
};

onMounted(()=>{
  if(store.state.phone){
    phone.value = store.state.phone
  }
})

// 收取验证码
async function collect() {
  const data = await test()
  // if(store.state.timer){
  //   if(phone.value.replace(/\s/g, '') === store.state.phone){
  //     store.commit('setPhone', {areaCode:areaCode.value, phone:phone.value.replace(/\s/g, '')})
  //     router.push('/mine/checkCode')
  //   } else {
  //     Toast({message:'你获取验证码太快了，等一分钟再试试吧',duration:1000});
  //   }
  // } else {
  //   store.commit('setPhone', {areaCode:areaCode.value, phone:phone.value.replace(/\s/g, '')})
  //   router.push('/mine/checkCode')
  // }

  // const data = await register({
  //   'phone': areaCode.value + value.value.replace(/\s/g, '')
  // })
  // if (data.status == 200) {
  //   if (data.data.code == '000000') {
  //     getInfo()
  //     // 登录成功
  //     alert(data.data.msg)
  //     // 储存token
  //     localStorage.setItem('token',`Bearer ${data.data.token}`)
  //     router.replace('/mine')
  //   } else {
  //     alert(data.data.msg)
  //   }
  // }
}

// 格式化
function formatter(phone) {
  const tel = phone.replace(/\D/g, '')
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

// 跳转页面
function pas() {
  router.push('/mine/password')
}
</script>

<style scoped lang="scss">
.van-icon {
  position: absolute;
  left: 13px;
  top: 10px;
}

.change {
  position: absolute;
  right: 16px;
  top: 12px;
  font-size: 14px;
  color: #A6A6A6;
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

  .tel {
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