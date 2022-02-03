<template>
  <div class="statusbar" ref="statusbar">
    <div class="statusbar2" ref="statusbar"></div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'

const statusbar = ref(null)

onMounted(() => {
  if (window.plus) {
    plusReady();
  } else {
    document.addEventListener('plusready', plusReady, false);
  }
})

function plusReady() {
  // 获取系统状态栏高度
  var lh = plus.navigator.getStatusbarHeight();
  // 设置系统状态栏高度
  statusbar.value.style.height = lh / 39 + 'rem'
}
</script>

<style scoped lang="scss">
.statusbar {
  height: 44px;
  width: 100%;
}

.statusbar2 {
  height: 44px;
  position: fixed;
  width: 100%;
}
</style>