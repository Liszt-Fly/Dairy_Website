<template>
    <el-button class="back" @click="goBack">Back</el-button>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
let router = useRouter()
const goBack = () => {
    router.push("/main")
}
</script>
<style lang="scss">
.back {
    position: fixed;
    bottom: 0;
    left: 5px;
    height: 50px;
    width: 50px;

}
</style>