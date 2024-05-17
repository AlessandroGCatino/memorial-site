<template>
    <div class="mg-sidebar">

        <div class="content">

            <div v-if="store.dataReady" v-for="(artists, index) in store.infos[store.selected.section].exhibitions[store.selected.exhibition].artists" :key="artists.id">
                <figure class="w-100">
                    <a>
                        <img class="img-fluid" :src="`${store.apiBase}storage/${artists.coverImage}`" @click="changeCurrentArtist(index)" alt="">
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
    }

    span{
        cursor: pointer;
    }
    .mg-sidebar{
        height: calc(100vh - 15px);
        width: calc(100%/4);
        border-right: 1px solid black;
        
        .content{
        height: calc(100% - 150px);
        padding: 15px;
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