<template>
    <div class="about">
        <h3>AboutUs</h3>
        <el-divider></el-divider>
        <el-table :data="PersonInfoArray" row-class-name="bg" header-cell-class-name="header">
            <el-table-column prop="name" label="name" />
            <el-table-column prop="email" label="email" />
            <el-table-column prop="schoolname" label="schoolname" />
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
    padding: 40px;
    text-align: center;
    background-color: rgb(254, 249, 234);

    .bg {
        background-color: rgb(254, 249, 234);

    }

    .header {
        background-color: rgb(254, 249, 234) !important;

    }

    h3 {
        color: #666;
    }

    height: 100vh;
    width: 100vw;

}
</style>