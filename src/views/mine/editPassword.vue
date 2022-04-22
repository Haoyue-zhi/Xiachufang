<template>
  <div>
    <van-icon name="arrow-left" @click="back" size="25"/>
    <p class="title">
      请输入验证码<br>
      <span class="tips">
        验证码已通过短信发送至 {{ info.userPhone.slice(0, -11) }} {{ info.userPhone.slice(-11) }}
      </span>
    </p>
    <div class="content">
      <van-field class="tel" v-model="areaCode" type="number" maxlength="6" placeholder="输入验证码">
        <template #button>
          <van-button type="primary" color="transparent" style="color:#D0D0D1;font-size:19px;"
                      :disabled="store.time === 0 ? false : true" @click="sendCode">
            <template v-if="store.time !== 0">{{ store.time }}</template>
            <template v-else>重新发送</template>
          </van-button>
        </template>
      </van-field>
      <van-field class="tel" v-model="password" type="password" placeholder="输入密码" clearable>
        <template #extra>
          <div class="tip" style="color:#D0D0D1;font-size:19px;">不少于6位</div>
        </template>
      </van-field>
      <van-button class="success" type="default" :disabled="areaCode.length !== 6 || password.length < 6"
                  :color="areaCode.length === 6 &&  password.length >= 6 ? '#E86F58' : '#EEEEEE'" @click="edit">完成
      </van-button>
    </div>
  </div>
</template>

<script setup>
import {ref, computed, onMounted} from "vue";
import {useRouter} from "vue-router";
import {useStore} from '@/store'
import {sendSms, editPas} from "@/api/mine";
import { Toast } from 'vant';

const router = useRouter();
const store = useStore();

// 用户信息
const info = computed(() => store.info)

onMounted(() => {
  sendCode()
});

// 发送验证码
async function sendCode() {
  if (!store.timer) {
    let data = {
      phone: info.value.userPhone
    }
    const res = await sendSms(data)
    if (res.code && res.code === '00000') {
      store.setTime()
      store.setCodeid(res.data.code_id)
    }
  }
}

const areaCode = ref(""); // 验证码
const password = ref(""); // 密码
// 修改密码
async function edit() {
  let data = {
    _id: store.code_id,
    user_code: areaCode.value,
    password: password.value
  }
  const res = await editPas(data)
  if (res.code && res.code === '00000') {
    Toast({ message: res.msg, duration: 1000 });
    back()
  }
}


// 回退
function back() {
  router.back();
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

  .tips {
    font-size: 12px;
    color: #b1b1b1;
  }
}

.content {
  position: absolute;
  left: 35px;
  top: 196px;

  .tel {
    width: 330px;
    border-bottom: 1px solid #e5e5e3;
  }

  .van-field {
    padding: 12px 0;
    font-size: 22px;
  }

  .success {
    margin-top: 8px;
    width: 330px;
    height: 50.5px;
    border-radius: 10px;
    font-size: 17px;
    font-weight: bold;
  }
}
</style>