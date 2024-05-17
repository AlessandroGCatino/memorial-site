<template>
    <div class="container content-container">
        <div class="row top-images">
            <div class="col-12">
                <figure id="artistImage" ref="artistImage">
                    <img :src="`${store.apiBase}storage/${store.infos[store.selected.section].exhibitions[store.selected.exhibition].artists[store.selected.artist].coverImage}`" @load="scrollToImage" alt="" class="img-fluid">
                </figure>
            </div>
        </div>
        <div class="row description">
            <div class="col-12">
                <h6><b>{{ store.infos[store.selected.section].exhibitions[store.selected.exhibition].artists[store.selected.artist].artistName }}</b></h6>
                <h6><b>{{ store.infos[store.selected.section].exhibitions[store.selected.exhibition].expositionDates }}</b></h6>
                <p class="artistDesc">{{ store.infos[store.selected.section].exhibitions[store.selected.exhibition].artists[store.selected.artist].artistDesc }}</p>
            </div>
        </div>
        
        <div class="row" v-for="element in store.infos[store.selected.section].exhibitions[store.selected.exhibition].artists[store.selected.artist].articles" :key="element.id">
            <div class="col-12 text-center">
                <figure>
                    <img :src="`${store.apiBase}storage/${element.operaPicture}`" alt="" class="img-fluid">
                </figure>
            </div>
            <div class="col-12 description">
                <h6><b>{{ element.operaName }}</b>, <b>{{ store.infos[store.selected.section].exhibitions[store.selected.exhibition].artists[store.selected.artist].artistName }}</b></h6>
                <h6><b>{{ element.operaYear }}</b></h6>
                <p class="artistDesc"><i>{{ element.operaMaterial }}</i></p>
                <p class="artistDesc">{{ element.operaDescription }}</p>
            </div>
            <div class="col-12 extra-imgs" v-if="element.pictures">
                <div class="d-flex flex-wrap gap-3">
                    <figure v-for="items in element.pictures" :key="items.singlePicture" class="col-6">
                        <img :src="`${store.apiBase}storage/${items.singlePicture}`" alt="" class="img-fluid">
                    </figure>
                </div>
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
        scrollToImage(){
            this.$refs.artistImage.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
    },
    watch: {
    
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