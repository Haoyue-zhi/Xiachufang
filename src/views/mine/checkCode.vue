<template>
  <div>
    <van-icon name="arrow-left" @click="back" size="25"/>
    <p class="title">
      请输入验证码<br>
      <span class="tips">
      验证码已通过短信发送至 {{ store.state.areaCode }} {{ phone }}
      </span>
    </p>
    <div class="content">
      <van-field class="tel" v-model="areaCode" type="number" maxlength="6" placeholder="输入验证码">
        <template #button>
          <van-button type="primary" color="transparent" style="color:#D0D0D1;font-size:19px;"
                      :disabled="store.state.time === 0 ? false : true" @click="sendCode">
            <template v-if="store.state.time !== 0">{{ store.state.time }}</template>
            <template v-else>重新发送</template>
          </van-button>
        </template>
      </van-field>
      <van-button
          class="success"
          type="default"
          :disabled="areaCode.length !== 6"
          :color="areaCode.length === 6 ? '#E86F58' : '#EEEEEE'"
          @click="login"
      >登录
      </van-button>
    </div>
  </div>
</template>

<script setup>
import {ref, computed, onMounted} from "vue";
import {useRouter, useRoute} from "vue-router";
import {useStore} from "vuex";
import {sendSms, register} from "@/api/mine";
import {setToken} from "@/utils/auth";


const router = useRouter();
const route = useRoute();
const store = useStore();

const phone = ref(
    store.state.phone.substring(0, 3) +
    "****" +
    store.state.phone.substring(7, 11)
);

onMounted(() => {
  sendCode()
});

// 发送验证码
async function sendCode() {
  if (!store.state.timer) {
    let data = {
      phone: store.state.areaCode + store.state.phone
    }
    const res = await sendSms(data)
    if (res.code && res.code === '00000') {
      store.dispatch("setTime")
      store.commit("setCodeid", res.data.code_id)
    }
  }
}

const areaCode = ref(""); // 验证码
// 登录
async function login() {
  let data = {
    _id: store.state.code_id,
    user_code: areaCode.value
  }
  const res = await register(data)
  if (res.code && res.code === '00000') {
    setToken(res.data.token)
    store.commit('clearTimer')
    router.replace('/mine')
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