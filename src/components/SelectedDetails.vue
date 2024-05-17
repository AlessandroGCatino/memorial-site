<template>
    <div class="content-container">
        <div class="top-images">
            <figure id="artistImage" ref="artistImage">
                <img :src="`${store.apiBase}storage/${store.infos[store.selected.section].exhibitions[store.selected.exhibition].artists[store.selected.artist].coverImage}`" alt="" class="">
            </figure>
        </div>
        <div class="description">
            <h6><b>{{ store.infos[store.selected.section].exhibitions[store.selected.exhibition].artists[store.selected.artist].artistName }}</b></h6>
            <h6><b>{{ store.infos[store.selected.section].exhibitions[store.selected.exhibition].expositionDates }}</b></h6>
            <p class="artistDesc">{{ store.infos[store.selected.section].exhibitions[store.selected.exhibition].artists[store.selected.artist].artistDesc }}</p>
        </div>
        
        <div v-for="element in store.infos[store.selected.section].exhibitions[store.selected.exhibition].artists[store.selected.artist].articles" :key="element.id">
            <figure class="text-center">
                <img :src="`${store.apiBase}storage/${element.operaPicture}`" alt="" class="">
            </figure>
            <div class="description">
                <h6><b>{{ element.operaName }}</b>, <b>{{ store.infos[store.selected.section].exhibitions[store.selected.exhibition].artists[store.selected.artist].artistName }}</b></h6>
                <h6><b>{{ element.operaYear }}</b></h6>
                <p class="artistDesc"><i>{{ element.operaMaterial }}</i></p>
                <p class="artistDesc">{{ element.operaDescription }}</p>
            </div>
            <div v-if="element.pictures" class="extra-imgs">
                <figure v-for="items in element.pictures">
                    <img :src="`${store.apiBase}storage/${items.singlePicture}`" alt="" class="">
                </figure>

            </div>

        </div>
    </div>
</template>

<script>
import { store } from '../store';

export default {
    name: "SelectedDetails",
    props: [
        'artist'
    ],
    data () {
        return {
            store,
        }
    },
    methods:{
        
    },
    mounted () {
        
    },
}
</script>

<style lang="scss" scoped>


.extra-imgs{
    display: flex;
    padding-bottom: 15px;
    gap: 15px;
    figure{
        width: calc(100%/2 - 15px);
        img{
            width: 100%;
        }
    }
    border-bottom: 1px solid black;
    margin-bottom: 15px;
}

.descriptions{
    padding-top: 13px;
}

.artistDesc{
    margin-top: 20px;
}

.content-container{
    height: calc(100% - 75px);
    .top-images{

        figure{
            width: 100%;
            img{
                width: 100%;
            }
        }
    }
    .bot-images{
        border-bottom: none;
        border-top: 1px solid black;
    }
    .description{
        padding-top: 13px;
    }
    .bot-description{
        padding-top: 0;
    }
}

</style>