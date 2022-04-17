<script lang="ts" setup>
import ImageCard from "../components/ImageCard.vue"
import { area, category, Image, ImageDataArray } from '@/db'
//@ts-ignore
import deepclone from 'deepclone'
import BackButton from "@/components/BackButton.vue";
import { Ref, ref } from "vue";
let dataArray: Ref<Image[]> = ref(ImageDataArray)
const filter = (array: Image[], ...conditions: (string | null)[]) => {

    if (conditions.includes(null)) return array;
    let copy_array: Image[] = deepclone(array)

    conditions.forEach(condition => {

        let res = copy_array.filter(element => {
            return element.category == condition || element.location == condition
        })
        //设置当前数组为过滤之后的数组
        copy_array = res

    })
    return copy_array
}
const change = (value: string) => {
    dataArray.value = filter(ImageDataArray, value)
    console.log("change")
}
console.log(filter(ImageDataArray, category.COWBREED, area.ASIA))
let value = ref("all")
const options = [
    { label: category.COWBREED, value: category.COWBREED },
    {
        label: category.MILKBRAND, value: category.MILKBRAND
    },
    {
        label: "Both", value: null
    }
]
</script>
<template>
    <el-alert title="❎地区选择&种类选择双重选择功能修复未完成" type="error" />
    <el-alert title="❎样式美化，过于丑陋！" type="warning" />
    <el-alert title="You can click the image to rotate and zoom the picture!" type="success" />
    <h2>🎆Gallery</h2>
    <BackButton class="back"></BackButton>
    <span>Select the category</span>
    <el-select v-model="value" class="m-2" placeholder="Select" size="large" @change="change">

        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <el-divider></el-divider>

    <div class="image-container">

        <template v-for="image in dataArray" class="image">
            <ImageCard :image="image"></ImageCard>
        </template>
    </div>
</template>



<style lang="scss">
h2 {
    text-align: center;
}

.demo-tabs {
    padding: 20px;
}

.image {
    height: 200px;


}

.image-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 40px;

}

.back {

    position: fixed;
    top: 50%;
    left: 1px;
    height: 50px;
    width: 50px;

}
</style>