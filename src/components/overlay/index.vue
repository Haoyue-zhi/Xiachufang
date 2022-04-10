<template>
  <teleport to="body" :disabled="!show">
    <van-overlay :show="show" @click="$emit('isShow')"/>
  </teleport>
</template>

<script setup>

const props = defineProps(['show'])
const emit = defineEmits(['isShow'])

</script>

<style scoped lang="scss">

</style>