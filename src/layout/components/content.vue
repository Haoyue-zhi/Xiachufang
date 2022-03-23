<template>
  <div class="main">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"/>
      </keep-alive>
    </router-view>
  </div>
</template>

<style scoped lang="scss">
.main{
  height: calc(100vh - 50px);
}
</style>