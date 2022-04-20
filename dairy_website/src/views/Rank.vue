<script setup lang="ts">
import Typed from 'typed.js'
import { onMounted } from 'vue';
import { init } from 'echarts'
import { colorArray, FatData, CalciumData, CarboData } from '../db';
import BackButton from "@/components/BackButton.vue"



onMounted(() => {
    let labelOption = {
        show: true,

    }
    var myChart = init(document.getElementById('main')!)
        ;
    let myChart1 = init((document.getElementById('protein_main')!));
    let myChart2 = init((document.getElementById('fat_main')!));
    let myChart3 = init((document.getElementById('Carbo_main')!));
    let Carbo_option = {
        title: {
            text: 'Carbohydrate',
            left: 'center',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {},
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar', 'stack'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ["VDevondale", "Valio", "The Land A2", "Dutch Cow", "So Natural", "LVLINB", "Lacheer Fresh", "Lacheer high-calcium", "MUN", "Arla", "Emmi", "Erie Satine", "Ranchétté SLVA", "Ranchétté"]
        },
        series: [

            {

                type: 'bar',
                label: labelOption,
                data: [
                    {
                        value: 5.1,
                        itemStyle: {
                            color: colorArray[0]
                        }
                    }, {
                        value: 5,
                        itemStyle: {
                            color: colorArray[1]
                        }
                    }, {
                        value: 5,
                        itemStyle: {
                            color: colorArray[2]
                        }
                    }, {
                        value: 5,
                        itemStyle: {
                            color: colorArray[3]
                        }
                    }, {
                        value: 5,
                        itemStyle: {
                            color: colorArray[4]
                        }
                    }, {
                        value: 4.9,
                        itemStyle: {
                            color: colorArray[5]
                        }
                    }, {
                        value: 4.9,
                        itemStyle: {
                            color: colorArray[6]
                        }
                    }, {
                        value: 4.9,
                        itemStyle: {
                            color: colorArray[3]
                        }
                    }, {
                        value: 4.9,
                        itemStyle: {
                            color: colorArray[4]
                        }
                    }, {
                        value: 4.9,
                        itemStyle: {
                            color: colorArray[5]
                        }
                    }, {
                        value: 4.9,
                        itemStyle: {
                            color: colorArray[6]
                        }
                    }, {
                        value: 4.8,
                        itemStyle: {
                            color: colorArray[7]
                        }
                    }, {
                        value: 4.8,
                        itemStyle: {
                            color: colorArray[8]
                        }
                    }, {
                        value: 4.8,
                        itemStyle: {
                            color: colorArray[9]
                        }
                    }
                ]
            }
        ]
    };

    let Fat_option = {
        title: {
            text: 'Fat',
            left: 'center',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {},
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar', 'stack'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ["WDOM", "The Land(White)", "Meadow Fresh Walking Cow 4.0", "Sternenfair", "Erie Satine", "Dutch Cow", "Ranchétté SLVA", "Ranchétté", "Valio", "Vega", "Sunsides French", "Sunsides German", "The Land A2", "LVLINB"]
        },
        series: [

            {

                type: 'bar',
                label: labelOption,
                data: [
                    {
                        value: 5,
                        itemStyle: {
                            color: colorArray[0]
                        }
                    }, {
                        value: 4,
                        itemStyle: {
                            color: colorArray[1]
                        }
                    }, {
                        value: 4,
                        itemStyle: {
                            color: colorArray[2]
                        }
                    }, {
                        value: 3.9,
                        itemStyle: {
                            color: colorArray[3]
                        }
                    }, {
                        value: 3.8,
                        itemStyle: {
                            color: colorArray[4]
                        }
                    }, {
                        value: 3.8,
                        itemStyle: {
                            color: colorArray[5]
                        }
                    }, {
                        value: 3.6,
                        itemStyle: {
                            color: colorArray[6]
                        }
                    }, {
                        value: 3.6,
                        itemStyle: {
                            color: colorArray[3]
                        }
                    }, {
                        value: 3.6,
                        itemStyle: {
                            color: colorArray[4]
                        }
                    }, {
                        value: 3.6,
                        itemStyle: {
                            color: colorArray[5]
                        }
                    }, {
                        value: 3.6,
                        itemStyle: {
                            color: colorArray[6]
                        }
                    }, {
                        value: 3.6,
                        itemStyle: {
                            color: colorArray[7]
                        }
                    }, {
                        value: 3.6,
                        itemStyle: {
                            color: colorArray[8]
                        }
                    }, {
                        value: 3.6,
                        itemStyle: {
                            color: colorArray[9]
                        }
                    }
                ]
            }
        ]
    };

    let protein_option = {
        title: {
            text: 'Protein',
            left: 'center',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {},
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar', 'stack'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ["Erie Satine", "WDOM", "The Land(White)", "Meadow Fresh Walking Cow 4.0", "Flevomel", "Mengniu Deluxe", "Lacheer Fresh", "Lacheer dinosaur", "Lacheer German", "Globemilks", "The Land(Blue)", "Meadow Fresh", "Dutch Cow", "Sternenfair"]
        },
        series: [

            {

                type: 'bar',
                label: labelOption,
                data: [
                    {
                        value: 4,
                        itemStyle: {
                            color: colorArray[0]
                        }
                    }, {
                        value: 4,
                        itemStyle: {
                            color: colorArray[1]
                        }
                    }, {
                        value: 4,
                        itemStyle: {
                            color: colorArray[2]
                        }
                    }, {
                        value: 4,
                        itemStyle: {
                            color: colorArray[3]
                        }
                    }, {
                        value: 3.7,
                        itemStyle: {
                            color: colorArray[4]
                        }
                    }, {
                        value: 3.6,
                        itemStyle: {
                            color: colorArray[5]
                        }
                    }, {
                        value: 3.6,
                        itemStyle: {
                            color: colorArray[6]
                        }
                    }, {
                        value: 3.6,
                        itemStyle: {
                            color: colorArray[3]
                        }
                    }, {
                        value: 3.6,
                        itemStyle: {
                            color: colorArray[4]
                        }
                    }, {
                        value: 3.6,
                        itemStyle: {
                            color: colorArray[5]
                        }
                    }, {
                        value: 3.5,
                        itemStyle: {
                            color: colorArray[6]
                        }
                    }, {
                        value: 3.5,
                        itemStyle: {
                            color: colorArray[7]
                        }
                    }, {
                        value: 3.5,
                        itemStyle: {
                            color: colorArray[8]
                        }
                    }, {
                        value: 3.4,
                        itemStyle: {
                            color: colorArray[9]
                        }
                    }
                ]
            }
        ]
    };

    // 指定图表的配置项和数据
    let option = {
        title: {
            text: 'Calcium',
            left: 'center',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {},
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar', 'stack'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ["WDOM", "Meadow Fresh Walking Cow4.0", "Meadow Fresh", "Sternenfair", "Lacheer Fresh", "MUH", "Flevomel", "The Land(Blue)", "The Land(White)", "Erie Satine", "Ranchétté SLVA", "Ranchétté", "Valio", "Vega"]
        },
        series: [

            {

                type: 'bar',
                label: labelOption,
                data: [
                    {
                        value: 133,
                        itemStyle: {
                            color: colorArray[0]
                        }
                    }, {
                        value: 130,
                        itemStyle: {
                            color: colorArray[1]
                        }
                    }, {
                        value: 125,
                        itemStyle: {
                            color: colorArray[2]
                        }
                    }, {
                        value: 124,
                        itemStyle: {
                            color: colorArray[3]
                        }
                    }, {
                        value: 124,
                        itemStyle: {
                            color: colorArray[4]
                        }
                    }, {
                        value: 124,
                        itemStyle: {
                            color: colorArray[5]
                        }
                    }, {
                        value: 124,
                        itemStyle: {
                            color: colorArray[6]
                        }
                    }, {
                        value: 124,
                        itemStyle: {
                            color: colorArray[3]
                        }
                    }, {
                        value: 122,
                        itemStyle: {
                            color: colorArray[4]
                        }
                    }, {
                        value: 120,
                        itemStyle: {
                            color: colorArray[5]
                        }
                    }, {
                        value: 120,
                        itemStyle: {
                            color: colorArray[6]
                        }
                    }, {
                        value: 120,
                        itemStyle: {
                            color: colorArray[7]
                        }
                    }, {
                        value: 120,
                        itemStyle: {
                            color: colorArray[8]
                        }
                    }, {
                        value: 124,
                        itemStyle: {
                            color: colorArray[9]
                        }
                    }
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    myChart1.setOption(protein_option)
    myChart2.setOption(Fat_option)
    myChart3.setOption(Carbo_option)



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