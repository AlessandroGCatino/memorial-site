<template>
    <div :class="!isDisplayed ? 'd-none d-lg-flex':''" class="mg-sidebar">

        <div class="content">
            <div v-if="store.dataReady" v-for="(artists, index) in store.infos[store.selected.section]?.exhibitions[store.selected.exhibition]?.artists" :key="artists.id">
                <figure class="w-100">
                    <a>
                        <img :src="`${store.apiBase}storage/${artists.coverImage}`" @click="handleArticleClick(index)" alt="">
                    </a>
                </figure>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';

export default {
    name: "MidColumn",
    props: {
        isDisplayed: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            store,
            show: false
        }
    },
    methods: {
        changeCurrentArtist(artist) {
            store.selected.artist = artist;
            // console.log("Section: ", store.selected.section)
            // console.log("Exhibition: ", store.selected.exhibition)
            // console.log("Artist: ", store.selected.artist)

        },
        handleArticleClick(index) {
            this.changeCurrentArtist(index);
            this.$emit('changeToContent');
        }
        
    },
}
</script>

<style lang="scss" scoped>

    figure{
        margin-bottom: 15px;
        cursor: pointer;
        aspect-ratio: 1/1;
        overflow: hidden;
        img{
            width: 100%;
            aspect-ratio: 1/1;
            object-fit: cover;
            object-position: 50% 50%;
        }
    }

    span{
        cursor: pointer;
    }
    .mg-sidebar{
        height: calc(100vh);
        width: calc(100%/4);
        border-right: 1px solid black;
        padding-top: 15px;
        
        .content{
        height: calc(100% - 150px);
        padding: 0 15px;
        overflow: auto;

        }
    
    }
    @media (max-width: 768px) { /* Modifica: le regole CSS all'interno di questa media query verranno applicate solo per schermi con larghezza massima di 768px (ad es. dispositivi mobili) */
        .mg-sidebar{
            height: calc(100vh - 15px);
            width: 100%;
            border-right: none;
            .content{
                height: calc(100% - 115px);
            }
        }
    }
    
</style>