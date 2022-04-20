<script lang="ts" setup>
import L from 'leaflet'
import { onMounted } from 'vue';
import { data } from "../db"
import BackButton from "../components/BackButton.vue"
onMounted(() => {
    //以北京为中心
    var mymap = L.map("map").setView([19.1451, 51.9194], 3)

    L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
        {
            maxZoom: 18,
            attribution:
                'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
        }
    ).addTo(mymap)




    data.forEach(e => {
        let marker = L.marker(e.location).addTo(mymap)
        marker.bindPopup(e.content)

    })
})
</script>

<template>
    <div class="map-view" id="map"></div>
    <back-button></back-button>
</template>

<style scoped >
#map {
    height: 100vh;
}

.back {

    position: fixed;
    top: 50%;
    left: 5px;
    height: 50px;
    width: 50px;
    z-index: 999;

}
</style>