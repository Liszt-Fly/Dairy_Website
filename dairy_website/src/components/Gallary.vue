<script setup lang="ts">
const list = [
    { src: "@/assets/bg1.png", }
]

</script>

<template>
    <div class="gallary-container">
        <img src="../assets/bg1.jpg" />
        <img src="../assets/source1.jpg" />
    </div>
</template>

<style scoped lang="scss" >
.gallary-container {
    width: 100%;
    padding: 10px;

    img {
        margin-right: 20px;
    }
}
</style>
