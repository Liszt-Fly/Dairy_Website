<script setup lang="ts">

</script>

<template>
    <div id="Main">
        <div class="navbar">
            <router-link to="/">
                <i class="bi bi-fan"></i>
            </router-link>
            <router-link to="/map">Maps</router-link>
            <router-link to="/rank">Rankings</router-link>
            <router-link to="/technology">Technologies</router-link>
            <router-link to="/news">News</router-link>
            <router-link to="/gallery">Gallery</router-link>
            <router-link to="/about" class="about-us">ABOUTUS</router-link>
        </div>
        <div class="main">
            <div class="left">
                <div class="whitespace">
                    <img src="../assets/Image2.png" />
                </div>
                <div class="title">One Website help you understand more about milk.</div>
                <small>This website provides the latest news about milk, explains the latest milk technology and also
                    shows the distribution of milk sources and famous milk brands around the world on a map.</small>
            </div>


        </div>
    </div>
</template>

<style scoped lang="scss">
#Main {
    display: flex;
    background-color: rgb(254, 249, 234);
    flex-direction: column;
    height: 100vh;
    width: 100vw;
}

.navbar {
    color: #ddd;
    display: flex;
    height: 10vh;
    width: 100vw;
    margin-left: 20px;
    flex-direction: column;

    align-items: center;

    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    .about-us {
        border: solid 1px rgb(146, 145, 145);
        margin-left: auto;
        padding: 10px;
        border-radius: 8px;

    }

    a {
        color: #666;
        display: block;

        margin-right: 30px;
        text-decoration: none;
        border-bottom: none;
        border-color: transparent;
        transition: 1s;

        &:hover {
            border-bottom: 1px solid transparent;
            border-color: #666;
            border-width: 2px;
            background-color: aquamarine
        }
    }
}

.main {
    display: flex;
    width: 100vw;
    height: 90vh;

    div {
        &:nth-child(1) {
            flex: 1;
            display: flex;
            flex-direction: column;

            padding: 40px;

            .whitespace {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 40%;

                }
            }

            .title {
                flex: 0.5;
                font-size: 2.5rem;
                font-weight: 600;
                color: rgb(75, 75, 75);
                text-align: center
            }

            small {
                flex: 0.4;
                font-style: italic;
                text-align: center
            }
        }


    }
}
</style>
