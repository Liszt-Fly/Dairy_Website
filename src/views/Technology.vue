<template>
    <h3>🔭Technologies</h3>
    <div class="technology">
        <div class="core">
            <el-carousel :interval="4000" type="card" height="500px">
                <el-carousel-item v-for="item in TechnologyInformationArray">
                    <h2>{{ item.title }}</h2>
                    <el-divider></el-divider>

                    <el-image class="image" :src="item.image" :preview-src-list="[item.image]"></el-image>
                    <el-divider></el-divider>
                    <div>{{ item.content }}</div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
    <back-button></back-button>
</template>

<script lang="ts" setup>
import TechnologyCard from "../components/TechnologyCard.vue"
import { TechnologyInformationArray } from "../db"
import BackButton from "../components/BackButton.vue"
</script>

<style lang="scss" scoped>
h3 {
    text-align: center;
}

.technology {
    display: flex;
    width: 100vw;
    height: 80vh;
    flex-direction: column;
    justify-content: center;
    text-align: center;

}

.el-carousel__item h2 {
    color: #475669;
    font-size: 1.5rem;
    opacity: 0.75;

    margin: 0;
    text-align: center;

}

.el-carousel__item {
    text-align: center;
    color: #666;
    background-color: #d3dce6;
}

.back {

    position: fixed;
    top: 0;
    left: 1px;
    height: 50px;
    width: 50px;

}
</style>