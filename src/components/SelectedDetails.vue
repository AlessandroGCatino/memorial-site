<template>
    <div class="content-container">
        <div class=" top-images">
            <div class="col-12">
                <figure id="artistImage" ref="artistImage">
                    <img :src="`${store.apiBase}storage/${store.infos[store.selected.section].exhibitions[store.selected.exhibition].artists[store.selected.artist].coverImage}`" @load="scrollToImage" alt="" class="img-fluid">
                </figure>
            </div>
        </div>
        <div class=" description">
            <div class="col-12">
                <h6><b>{{ store.infos[store.selected.section].exhibitions[store.selected.exhibition].artists[store.selected.artist].artistName }}</b></h6>
                <h6><b>{{ store.infos[store.selected.section].exhibitions[store.selected.exhibition].expositionDates }}</b></h6>
                <p class="artistDesc">{{ store.infos[store.selected.section].exhibitions[store.selected.exhibition].artists[store.selected.artist].artistDesc }}</p>
            </div>
        </div>
        
        <div class="" v-for="element in store.infos[store.selected.section].exhibitions[store.selected.exhibition].artists[store.selected.artist].articles" :key="element.id">
            <div class="col-12 text-center">
                <figure>
                    <img :src="`${store.apiBase}storage/${element.operaPicture}`" alt="" class="w-100">
                </figure>
            </div>
            <div class="col-12 description">
                <h6><b>{{ element.operaName }}</b>, <b>{{ store.infos[store.selected.section].exhibitions[store.selected.exhibition].artists[store.selected.artist].artistName }}</b></h6>
                <h6><b>{{ element.operaYear }}</b></h6>
                <p class="artistDesc"><i>{{ element.operaMaterial }}</i></p>
                <p class="artistDesc">{{ element.operaDescription }}</p>
            </div>
            <div class="col-12 extra-imgs" v-if="element.pictures">
                <div class="d-flex flex-wrap">
                    <figure v-for="items in element.pictures" :key="items.singlePicture" class="col-6">
                        <img :src="`${store.apiBase}storage/${items.singlePicture}`" alt="" class="w-100">
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

// description in Times


.extra-imgs{
    
    padding-bottom: 15px;

    &>div{
        display: flex;
        justify-content: space-between;
        gap: 15px;

    }
    figure{
        width: calc(100%/2 - 7.5px);
        img{
            width: 100%;
        }
    }
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