<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<script setup>
import {createApp, computed, ref} from 'vue';
import {useRouter, useRoute} from "vue-router";
import {Toast} from 'vant';

const app = createApp();
app.use(Toast);

const router = useRouter()
const route = useRoute()

// 双击返回桌面
const nowRoute = computed(() => route.path)
const first = ref(null)

function back() {
  plus.key.addEventListener("backbutton", function () {
    if (['/store', '/collect', '/mine'].includes(nowRoute.value)) {
      router.replace('/home')
    } else if (nowRoute.value === '/home') {
      if (!first.value) {
        first.value = new Date().getTime();
        Toast({message: '再按一次退出应用', duration: 1000});
        setTimeout(function () {
          first.value = null;
        }, 1000);
      } else {
        if (new Date().getTime() - first.value < 1500) {
          plus.runtime.quit();
        }
      }
    } else {
      router.back();
    }

  })
}

if (window.plus) {
  back()
} else {
  document.addEventListener('plusready', back, false)
}

</script>