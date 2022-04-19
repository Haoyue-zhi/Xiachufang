<template>
  <div class="nav">
    <icon-svg name="icon-clear" class="clear" @click="router.back()"></icon-svg>
    <icon-svg class="bell" name="icon-bell"></icon-svg>
<!--    <overlay :show="show"  @isShow="show = false"></overlay>-->
  </div>
</template>

<script setup>
import overlay from '@/components/overlay/index.vue'
import {ref} from "vue";
import {useStore} from "vuex";
import {useRouter, useRoute} from "vue-router";

const router = useRouter();
const route = useRoute();
const store = useStore();

const show = ref(false)

</script>

<style scoped lang="scss">
.nav {


}
</style>