<template>
    <div class="content-container">
        <div class="top-images ">
            <figure>
                <img :src="topRImg" alt="">
            </figure>
            <figure>
                <img :src="topLImg" alt="">
            </figure>
        </div>
        <div class="description">
            <h6 class="d-inline">{{ title }}</h6> , <h6 class="d-inline">{{ artist }}</h6>
            <h6>{{ year }}</h6>
            <p class="pt-3 ">
                {{ desc }}
            </p>
        </div>
        <div v-if="botLImg && botRImg" class="top-images bot-images">
            <figure v-if="botLImg">
                <img :src="botLImg" alt="">
            </figure>
            <figure v-if="botRImg">
                <img :src="botRImg" alt="">
            </figure>
        </div>
        <div class="description bot-description">
            <p class="pt-3 ">
                {{ secondDesc }}
            </p>
        </div>
    </div>
</template>

<script>
import { store } from '../store';

export default {
    name: "SelectedDetails",
    props: {
        topRImg: String,
        topLImg: String,
        title: String,
        artist: String,
        year: Number,
        desc: String,
        botLImg: String,
        botRImg: String,
        secondDesc: String
    },
    data () {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>



.content-container{
    height: 100%;
    .top-images{
        padding-top: 15px;
        display: flex;
        justify-content: space-between;
        gap: 15px;

        border-bottom: 1px solid black;
        figure{
            background-color: lightgrey;
            width: calc(100%/2 - 15px);
            aspect-ratio: 1/1;
        }
    }
    .bot-images{
        border-bottom: none;
        border-top: 1px solid black;
    }
    .description{
        padding-top: 15px;
    }
    .bot-description{
        padding-top: 0;
    }
}

</style>