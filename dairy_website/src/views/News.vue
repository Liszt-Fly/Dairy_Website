<script setup lang="ts">
import NewsBlock from "../components/NewsBlock.vue";
import { newsarray } from '../db'

const goBack = () => {
    console.log("123")
}
</script>


<template>
    <div class="news">
        <el-alert title=" 🧨 You can Click the title to read the news in detail" type="success" />
        <h2>🎉 news</h2>
        <el-divider />
        <template v-for="n in newsarray">
            <NewsBlock :datasource="n"></NewsBlock>
        </template>
    </div>
</template>


<style scoped lang="scss">
.news {
    padding: 10px;
    background-color: #F5F5F5;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: rgb(74, 73, 73);


    h2 {
        text-align: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    }
}
</style>