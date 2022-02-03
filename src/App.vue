<template>
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition">
          <component :is="Component" />
      </transition>
    </router-view>
</template>

<script setup>
import {useRoute} from 'vue-router'
const route = useRoute()
</script>