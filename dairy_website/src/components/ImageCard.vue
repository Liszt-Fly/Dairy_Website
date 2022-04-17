<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <div>{{ image.title }}</div>
                <el-tag class="tag">{{ image?.location }}</el-tag>
                <el-tag class="tag" type="danger">{{ image?.category }}</el-tag>
            </div>
        </template>
        <el-image :src="image.url" class="image" :preview-src-list="[image.url]"></el-image>
    </el-card>
</template>

<script lang="ts" setup>import { Image } from '@/db';

defineProps({
    image: Object as () => Image
})
</script>

<style lang="scss" scoped>
.box-card {
    height: 400px;
    margin: 20px;

    .tag {
        margin-right: 20px;
    }

    .image {
        height: 300px;
    }
}
</style>