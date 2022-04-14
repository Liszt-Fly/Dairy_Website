<script setup lang="ts">import { onMounted, ref } from 'vue';

import { useRoute, useRouter } from 'vue-router';
let audio = ref<HTMLAudioElement | null>(null);
let route = useRoute();
let router = useRouter();
const play = () => {
  audio.value!.play();
  audio.value!.volume = 0.5
};
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
  <div id="app" @mouseover="play">
    <audio ref="audio" loop preload="auto">
      <source src="@/assets/bgm.mp3" />
    </audio>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
