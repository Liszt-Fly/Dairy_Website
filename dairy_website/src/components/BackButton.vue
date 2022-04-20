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
</style>