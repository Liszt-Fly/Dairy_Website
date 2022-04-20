<script setup lang="ts">
import Typed from 'typed.js'
import { onMounted } from 'vue';
import { init } from 'echarts'
import { colorArray, FatData, CalciumData, CarboData, ProteinData, Carbo_option, Fat_option, protein_option, calcium_option } from '../db';
import BackButton from "@/components/BackButton.vue"
const option = [calcium_option, protein_option, Fat_option, Carbo_option]
function initChart() {
    document.querySelectorAll(".main").forEach((item, i) => {
        init(item as HTMLElement).setOption(option[i])
    })
}
function typeEffect() {
    var options = {
        strings: [` The milk sources and producing areas of 40 pure milk include New Zealand, Australia, Germany, France, the
            Netherlands, Switzerland, Ireland, Belgium, Austria, Poland, Portugal, Spain, etc.These places belong to
            the
world's "golden milk source belt" at 40-50 degrees south latitude. They are all ultra-high temperature
            sterilized milk(i.e.constant temperature milk).They can be stored hermetically at room temperature for
            8 - 12
            months.All non organic whole milk.\nThese brands include: Mengniu, Erie, Ranchétté, Dutch Cow, Arla, Weidendorf,Devondale, Sunsides, So Natural, Meadow Fresh,Anchor, Emmii, Olderburg, The Land, MUH, OMU, SUKI, MLEKOVITA, Hochwald, Globemilk, Avonmore, Sternenfair, Lacheer, Flevomel, NEPEAN RIVER, SalzburgMilch, LVLINB, WDOM, Valio and Vega. Comparing the nutritional value (calcium, protein, fat and carbohydrate) of 40 pure milk, only the top 15 are displayed.`],
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
                <div id="main" class="main">
                </div>
            </el-aside>
            <el-main>
                <el-table :data="CalciumData">
                    <el-table-column prop="brand" label="MilkBrand"></el-table-column>
                    <el-table-column prop="value" label="Calcium (mg/100ml)"></el-table-column>
                </el-table>
            </el-main>
        </el-container>

        <el-divider></el-divider>
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