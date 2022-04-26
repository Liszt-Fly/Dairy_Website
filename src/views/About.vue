<template>
    <div class="about">
        <h3>AboutUs</h3>
        <el-divider></el-divider>
        <el-table :data="PersonInfoArray">
            <el-table-column prop="name" label="name" />
            <el-table-column prop="email" label="email" />
            <el-table-column prop="schoolname" label="schoolname" width="180" />
        </el-table>
        <BackButton></BackButton>
    </div>
</template>

<script lang="ts" setup>
import { PersonInfoArray } from "../db"
import BackButton from "../components/BackButton.vue"
</script>

<style lang="scss">
.about {
    text-align: center;

    h3 {
        color: #666;
    }

    height: 100vh;
    width: 100vw;
}
</style>