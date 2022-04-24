<script setup lang="ts">
import { defineProps } from 'vue'
import { news } from "../db"
let props = defineProps({
    datasource: {
        type: Object as () => news
    }
})
console.log(props)
</script>


<template>
    <el-card class="newsblock">

        <a :href="datasource.link">{{ datasource!.title }}</a>
        <el-divider></el-divider>
        <small>{{ datasource!.subtitle }}</small>

    </el-card>
</template>


<style scoped lang="scss">
.newsblock {
    border: solid 1px #ddd;
    color: #666;
    margin: 0 60px 0 60px;
    padding: 10px;
    margin-bottom: 20px;


    a {
        display: block;
        font-size: 1.7rem;
        color: #666;
        text-decoration: none;
    }

    small {
        font-style: italic;
    }
}
</style>