<template>
  <div>
    {{route.params.id}}
  </div>
</template>

<script setup>
import {useRouter, useRoute} from 'vue-router'

const router = useRouter();
const route = useRoute();
</script>

<style scoped lang="scss">

</style>