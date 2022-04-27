<script setup lang="ts">
import Typed from 'typed.js'
import { onMounted } from 'vue';
import { init } from 'echarts'
import { colorArray, FatData, CarboData, ProteinData, Carbo_option, Fat_option, protein_option } from '../db';
import BackButton from "@/components/BackButton.vue"
const option = [protein_option, Fat_option, Carbo_option]
function initChart() {
    document.querySelectorAll(".main").forEach((item, i) => {
        init(item as HTMLElement).setOption(option[i])
    })
}
function typeEffect() {
    var options = {
        strings: [` In this section, 40 different brands of ultra-pasteurized whole milk are selected and ranked according to their protein, fat, carbohydrate and calcium content. Only the top 15 are shown in the ranking. The brand name is followed by the country to which the brand belongs.
The milk sources and production locations of the 40 milk brands include New Zealand, Australia, Germany, France, Netherlands, Switzerland, Ireland, Belgium, Austria, Poland, Portugal, and Spain. These places belong to the world's "Golden Milk Belt" at 40-50 degrees south latitude. These brands include Mengniu, Yili, Ranchétté, Dutch Cow, Arla, Weidendorf, Devondale, Sunsides, So Natural, Meadow Fresh, Anchor, Emmii, Olderburg, The Land, MUH, OMU, SUKI MLEKOVITA, Hochwald, Globemilk, Avonmore, Sternenfair, Lacheer, Flevomel, NEPEAN RIVER, SalzburgMilch, LVLINB, WDOM, Valio and Vega.`],
        typeSpeed: 10
    }
    var typed = new Typed(".intro", options)
}
onMounted(() => {
    initChart()
    typeEffect()



})
</script>

<template>
    <div class='rank'>

        <h2>🥇 Ranks</h2>

        <el-divider></el-divider>
        <div class="intro">

        </div>
        <!--* 1-->
        <el-container>
            <el-aside width=" 60vw" class="aside">
                <div id="protein_main" class="main">
                </div>
            </el-aside>
            <el-main>
                <el-table :data="ProteinData">
                    <el-table-column prop="brand" label="MilkBrand"></el-table-column>
                    <el-table-column prop="value" label="Protein (mg/100ml)"></el-table-column>
                </el-table>
            </el-main>
        </el-container>
        <el-divider></el-divider>
        <el-container>
            <el-aside width=" 60vw" class="aside">
                <div id="fat_main" class="main">
                </div>
            </el-aside>
            <el-main>
                <el-table :data="FatData">
                    <el-table-column prop="brand" label="MilkBrand"></el-table-column>
                    <el-table-column prop="value" label="Fat (mg/100ml)"></el-table-column>
                </el-table>
            </el-main>
        </el-container>
        <el-divider></el-divider>
        <el-container>
            <el-aside width=" 60vw" class="aside">
                <div id="Carbo_main" class="main">
                </div>
            </el-aside>
            <el-main>
                <el-table :data="CarboData">
                    <el-table-column prop="brand" label="MilkBrand"></el-table-column>
                    <el-table-column prop="value" label="Carbohydrate (mg/100ml)"></el-table-column>
                </el-table>
            </el-main>
            <BackButton></BackButton>
        </el-container>

    </div>

</template>

<style lang="scss">
.rank {
    color: #666;

    .intro {
        padding: 15px;
        border: solid 1px #ddd;
    }

    .aside {
        display: flex;
        justify-content: center;
        align-items: center
    }

    .typed-cursor {
        display: none;
    }

    .main {
        width: 60vw;
        height: 500px;
    }

    h2 {
        text-align: center;

    }
}

.back {

    position: fixed;
    top: 0;
    left: 5px;
    height: 50px;
    width: 50px;

}
</style>