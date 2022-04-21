<script setup lang="ts">
import { createRouter, useRouter } from "vue-router";
import { onMounted, ref } from "vue";

const router = useRouter();
onMounted(() => { });

const goto = () => {
    router.push("/main");

};
</script>

<template>
    <div class="splash-page">
        <video ref="video" autoplay muted preload="auto">
            <source type="video/mp4"
                src="https://mikes.oss-cn-beijing.aliyuncs.com/uPic/pexels-joshua-woroniecki-9357489 (1).mp4" />
        </video>

        <div class="content">
            <h1>Dairy Map Website</h1>
            <div class="subtitle">
                <strong>Wine, poetry or virtue, as you wish</strong>
            </div>
            <div class="button" @click="goto">Visit</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@font-face {
    font-family: "title";
    src: url(../assets/Pacifico-Regular.ttf);
}

.splash-page {
    width: 100vw;
    height: 100vh;
    position: relative;

    video {
        position: absolute;
        width: 100vw;
        height: 100vh;
        object-fit: fill;
    }

    .content {
        background-color: rgba(0, 0, 0, 0.2);
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ddd;
        user-select: none;
        flex-direction: column;

        h1 {
            margin-bottom: 30px;
        }

        .subtitle {
            font-family: "title";
            margin-bottom: 50px;
        }

        .button {
            border: solid 1px #ddd;
            padding: 10px 20px;
            border-radius: 10px;
            cursor: pointer;
        }
    }
}

/* This used to work for the parent element of button divs */
/* But it does not work with newer browsers, the below doesn't hide the play button parent div */

*::-webkit-media-controls-panel {
    display: none !important;
    -webkit-appearance: none;
}

/* Old shadow dom for play button */

*::-webkit-media-controls-play-button {
    display: none !important;
    -webkit-appearance: none;
}

/* New shadow dom for play button */

/* This one works! */

*::-webkit-media-controls-start-playback-button {
    display: none !important;
    -webkit-appearance: none;
}
</style>
