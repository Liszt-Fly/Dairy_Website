<script setup lang="ts">import { onMounted, ref } from 'vue';

import { useRoute, useRouter } from 'vue-router';

let route = useRoute();
let router = useRouter()
onMounted(() => {
  window.addEventListener('hashchange', () => {

    var currentPath = window.location.hash.slice(1); // 获取输入的路由
    if (route.path !== currentPath) {

      router.push(currentPath); // 动态跳转
    }
  }, false);
});
</script>

<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
