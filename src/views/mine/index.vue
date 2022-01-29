<template>
  <div class="header">
    <icon-svg class="add" name="icon-add"></icon-svg>
    <div class="title">我</div>
    <icon-svg class="set" name="icon-set"></icon-svg>
  </div>
  <div class="content">
    <div class="tips">开始准备好好吃饭</div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
@import "@/assets/scss/color";

.header {
  color: $font-dark;

  .add{
    position: absolute;
    left: 20px;
    top: 21px;
    width: 22px;
    height: 22px;
  }

  .title {
    position: absolute;
    left: 178px;
    top: 18px;
    font-size: 17px;
  }

  .set{
    position: absolute;
    left: 342px;
    top: 17px;
    width: 28px;
    height: 26px;
    transform: rotate(30deg);
  }


}

.content {
  .tips {
    position: absolute;
    width: 232px;
    height: 28px;
    left: 20px;
    top: 144px;
    font-weight: bold;
    font-size: 26.5px;
    color: $font-dark;
  }
}
</style>