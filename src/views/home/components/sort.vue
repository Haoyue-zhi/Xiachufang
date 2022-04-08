<template>
  <div class="main">

    <div class="sort-item">
      <div class="sort-title">
        时令食材
      </div>
      <div class="sort-icon">
        <img-color v-for="item in 2" :key="item"></img-color>
      </div>
    </div>

  </div>
</template>

<script setup>
import imgColor from '@/components/img-color/index.vue'

</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  .sort-item {
    width: 350px;
    .sort-title {
      font-size: 19px;
      margin-bottom: 18px;
    }

    .sort-icon {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 10px;
      margin-bottom: 36px;
    }
  }
}
</style>