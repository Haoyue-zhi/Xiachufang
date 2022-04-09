<template>
  <div class="empty" v-if="true">
    <div class="title">因厨友而好玩</div>
    <div class="subtitle">
      开始关注厨友，这个页面就会很快消失，这里会看<br/>到她们发布的美食作品和菜谱。
    </div>
    <button>去看看值得关注的厨友</button>
  </div>

  <div class="full" v-else>
    123abc
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
@import "@/assets/scss/color";

.empty {
  text-align: center;

  .title {
    font-size: 28px;
    margin-top: 155px;
    margin-bottom: 37px;
  }

  .subtitle {
    font-size: 14px;
    font-weight: normal;
    text-align: center;
    letter-spacing: 0.12em;
    margin-bottom: 41px;
  }

  button{
    color: $theme-color;
    font-size: 16px;
    font-weight: bold;
    background: none;
    border: none;
  }
}
</style>