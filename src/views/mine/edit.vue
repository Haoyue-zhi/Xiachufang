<template>
  <div class="setting">
    <van-nav-bar
        title="编辑个人资料"
        @click-left="onClickLeft"
        @click-right="save"
        fixed
        placeholder
        :border="false"
    >
      <template #left>
        <van-icon name="arrow-left" size="25" color="#000"/>
      </template>
      <template #right>
        <span style="color: #E86F58;font-size: 18px;">保存</span>
      </template>
    </van-nav-bar>

    <div class="main">
      <div class="photo">
        <img :src="form.photo">
        <van-uploader :max-count="1" :after-read="afterRead" :max-size="500 * 1024" @oversize="onOversize">
          <span>点击更换头像</span>
        </van-uploader>
      </div>
      <van-cell-group :border="false">
        <van-field v-model="form.name" label="用户名" placeholder="填写用户名"/>
        <van-field v-model="form.sex" readonly is-link @click="showSex = true" label="性别"/>
        <van-field v-model="form.birthday" readonly is-link label="生日" @click="showBirth = true" placeholder="选择生日"/>
        <van-field v-model="form.vocation" readonly is-link label="职业" @click="showVocation = true"
                   placeholder="添加职业，让厨友更了解你"/>
        <van-field v-model="form.hometown" readonly is-link label="家乡" @click="showHometown = true" placeholder="选择家乡"/>
        <van-field v-model="form.residence" readonly is-link label="常居" @click="showResidence = true"
                   placeholder="选择常居地"/>
        <van-field
            v-model="form.introduce"
            rows="5"
            autosize
            label="个人简介"
            type="textarea"
            maxlength="255"
            placeholder="未填写"
            show-word-limit
        />
      </van-cell-group>
    </div>
    <!-- 性别选择 -->
    <van-popup v-model:show="showSex" round position="bottom">
      <van-picker
          :columns="sexTable"
          @cancel="showSex = false"
          @confirm="setSex"
      />
    </van-popup>
    <!-- 生日选择 -->
    <van-popup v-model:show="showBirth" round position="bottom">
      <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          :formatter="formatter"
          @confirm="setBirth"
          @cancel="showBirth=false"
      />
    </van-popup>
    <!-- 职业选择 -->
    <van-popup v-model:show="showVocation" position="right" :style="{ height: '100%',width:'100%' }">
      <van-nav-bar
          title="选择职业"
          @click-left="showVocation = false"
          :border="false"
          style="height: 47px;position: sticky;top: 0;"
      >
        <template #left>
          <span style="color: #E86F58;font-size: 18px;">取消</span>
        </template>
      </van-nav-bar>
      <van-cell v-for="item in vocation" :clickable="true" @click="setVocation">
        {{ item }}
      </van-cell>

    </van-popup>
    <!-- 选择家乡 -->
    <van-popup v-model:show="showHometown" round position="bottom">
      <van-picker
          :columns="columns"
          @cancel="showHometown = false"
          @confirm="setHometown"
      />
    </van-popup>
    <!-- 选择常居地 -->
    <van-popup v-model:show="showResidence" round position="bottom">
      <van-picker
          :columns="columns"
          @cancel="showResidence = false"
          @confirm="setResidence"
      />
    </van-popup>

  </div>
</template>

<script setup>
import city from '@/assets/city.json'
import {computed, ref, reactive} from 'vue'
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {editInfo, getInfo} from '@/api/mine'
import { Toast } from 'vant';

const router = useRouter();
const store = useStore()

// 用户信息
const info = computed({
  get() {
    return store.state.info
  },
  set(val) {
    store.commit('setInfo', val)
  }
})

// 上传文件列表
function afterRead(file){
  form.photo = file.content
}

function onOversize(file){
  Toast('文件大小不能超过 500kb');
}

// 表单信息
const form = reactive({
  photo: info.value.userAvatar,
  name: info.value.userName,
  sex: info.value.userSex,
  birthday: info.value.userBirth,
  vocation: info.value.userOccp,
  hometown: info.value.userHome,
  residence: info.value.userPermanentResidence,
  introduce: info.value.userText
})

// 性别
const showSex = ref(false)
const sexTable = ['男', '女', '其他']

function setSex(value, index) {
  form.sex = value
  showSex.value = false;
}

// 生日
const showBirth = ref(false)
const currentDate = ref(new Date(2022, 0, 1));
const minDate = ref(new Date(1900, 0, 1))
const maxDate = ref(new Date(2099, 12, 31))
const formatter = (type, val) => {
  if (type === 'year') {
    return val + '年';
  }
  if (type === 'month') {
    return val + '月';
  }
  if (type === 'day') {
    return val + '日';
  }
  return val;
};

// 格式化日期
function dateFormat(fmt, date) {
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(),        // 年
    "m+": (date.getMonth() + 1).toString(),     // 月
    "d+": date.getDate().toString(),            // 日
    "H+": date.getHours().toString(),           // 时
    "M+": date.getMinutes().toString(),         // 分
    "S+": date.getSeconds().toString()          // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    }
    ;
  }
  ;
  return fmt;
}

function setBirth(value) {
  form.birthday = dateFormat("YYYY-mm-dd", value)
  showBirth.value = false
}

// 职业
const showVocation = ref(false)
const vocation = ['学生', '政府职员', '教师', '医生', '摄影师', '律师', '会计', '翻译', '编辑', '音乐人', '演艺人', '广告人', '公司文员', 'IT/互联网', '个体商人', '全职主妇', '其它']

function setVocation(e) {
  form.vocation = e.target.innerText
  showVocation.value = false
}

// 地址
const showHometown = ref(false)
const showResidence = ref(false)
const columns = city

// 格式化地址
function cityFormat(val) {
  return val[0].text + ',' + val[0].children[0].text
}

function setHometown(value) {
  form.hometown = cityFormat(value);
  showHometown.value = false;
}

function setResidence(value) {
  form.residence = cityFormat(value);
  showResidence.value = false;
}

// 保存
async function save() {
  let data = {
    avatar:form.photo,
    username: form.name,
    sex: form.sex,
    birthday: form.birthday,
    occp: form.vocation,
    home: form.hometown,
    permanentResidence: form.residence,
    describe: form.introduce
  }
  const res = await editInfo(data)
  if (res.code && res.code === '00000') {
    getUserInfo()
  }
}

async function getUserInfo() {
  const res = await getInfo()
  if (res.code && res.code === '00000') {
    info.value = res.data
    router.back()
  }
}

function onClickLeft() {
  router.back()
}

</script>

<style scoped lang="scss">
@import "@/assets/scss/color";

.main {

  .photo {
    width: 100%;
    height: 149px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 16px;
    font-size: 12px;

    img {
      display: block;
      width: 85px;
      height: 85px;
      border-radius: 50%;
      margin-bottom: 8px;
    }
  }

}
</style>