<template>
    <div class="mg-sidebar">

        <div class="content">

            <div v-if="store.dataReady" v-for="(artists, index) in store.infos[store.selected.section]?.exhibitions[store.selected.exhibition]?.artists" :key="artists.id">
                <figure class="w-100">
                    <a>
                        <img :src="`${store.apiBase}storage/${artists.coverImage}`" @click="changeCurrentArtist(index)" alt="">
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
    data () {
        return {
            store
        }
    },
    methods: {
        changeCurrentArtist(artist) {
            store.selected.artist = artist;
            console.log("Section: ", store.selected.section)
            console.log("Exhibition: ", store.selected.exhibition)
            console.log("Artist: ", store.selected.artist)

        },
        
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
        
            .scrollable{
                overflow: auto;
                height: calc(100% - 63px);
            }

            .top-content{
                padding: 15px 0;
                border-bottom: 1px solid black;

            }

            .sections{
                border-bottom: 1px solid black;
                padding-top: 15px;
                padding-bottom: 20px;
            }
        }
    
    }
    
</style>