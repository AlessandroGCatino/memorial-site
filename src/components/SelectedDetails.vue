<template>
    <div class="content-container">
        <!-- <div class=" top-images">
            <div class="col-12">
                <figure id="artistImage" ref="artistImage">
                    <img v-if="store.infos[store.selected.section].exhibitions[store.selected.exhibition].artists[store.selected.artist].coverImage" :src="`${store.apiBase}storage/${store.infos[store.selected.section].exhibitions[store.selected.exhibition].artists[store.selected.artist].coverImage}`" @load="scrollToImage" alt="" class="img-fluid">
                </figure>
            </div>
        </div> -->
        <div>
            <div class="col-12">
                <h6 class="mb-2"><b>{{ store.infos[store.selected.section].exhibitions[store.selected.exhibition].artists[store.selected.artist]?.artistName }}</b></h6>
                <h6><b>{{ store.infos[store.selected.section].exhibitions[store.selected.exhibition].expositionDates }}</b></h6>
                <p class="artistDesc">{{ store.infos[store.selected.section].exhibitions[store.selected.exhibition].artists[store.selected.artist]?.artistDesc }}</p>
            </div>
        </div>
        
        <div>
            <div class="col-12 text-center">
                <figure>
                    <img v-if="store.infos[store.selected.section].exhibitions[store.selected.exhibition].artists[store.selected.artist]?.articles[store.selected.article]?.operaPicture" :src="`${store.apiBase}storage/${store.infos[store.selected.section].exhibitions[store.selected.exhibition].artists[store.selected.artist]?.articles[store.selected.article]?.operaPicture}`" alt="" class="w-100">
                </figure>
            </div>
            <div class="col-12 description">
                <h6 v-if="store.infos[store.selected.section].exhibitions[store.selected.exhibition].artists[store.selected.artist]?.articles[store.selected.article]?.operaName && store.infos[store.selected.section].exhibitions[store.selected.exhibition]?.artists[store.selected.artist]?.artistName" class="mb-3"><b>{{ store.infos[store.selected.section].exhibitions[store.selected.exhibition].artists[store.selected.artist]?.articles[store.selected.article]?.operaName }}</b>, <b>{{ store.infos[store.selected.section].exhibitions[store.selected.exhibition]?.artists[store.selected.artist]?.artistName }}</b></h6>
                <h6 class="mb-3"><b>{{ store.infos[store.selected.section].exhibitions[store.selected.exhibition]?.artists[store.selected.artist]?.articles[store.selected.article]?.operaYear }}</b></h6>
                <p class="artistDesc"><i>{{ store.infos[store.selected.section].exhibitions[store.selected.exhibition]?.artists[store.selected.artist]?.articles[store.selected.article]?.operaMaterial }}</i></p>
                <p class="artistDesc">{{ store.infos[store.selected.section].exhibitions[store.selected.exhibition]?.artists[store.selected.artist]?.articles[store.selected.article]?.operaDescription }}</p>
            </div>

            <div class="photo-galery-with-zoom">
                <figure v-for="items in store.infos[store.selected.section].exhibitions[store.selected.exhibition]?.artists[store.selected.artist]?.articles[store.selected.article]?.pictures" :key="items.singlePicture">
                    <input type="checkbox" name="galery" onclick="bigImage(event);"/>
                    <img :src="`${store.apiBase}storage/${items.singlePicture}`" alt="">
                </figure>
            </div>
            <!-- <div class="col-12 extra-imgs" v-if="element.pictures">
                <div class="d-flex flex-wrap">
                    <figure v-for="items in element.pictures" :key="items.singlePicture" class="more-img">
                        <img :src="`${store.apiBase}storage/${items.singlePicture}`" alt="">
                    </figure>
                </div>
            </div> -->
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
        },
        bigImage(event){
            event.stopPropagation();
        }
    },
    watch: {
    
    },
    mounted () {
        
    },
}
</script>

<style lang="scss" scoped>

p{
    font: 17px/20px Times;
}

.photo-galery-with-zoom {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;
}

.photo-galery-with-zoom figure {
  position: relative;
  width: calc(100% / 2 - 7.5px);
  aspect-ratio: 3/2;
  flex-grow: 1;
}

.photo-galery-with-zoom img {
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  object-position: 50% 50%;
}

.photo-galery-with-zoom input:checked+img {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  padding: 5%;
  background-color: rgba(255, 255, 255, 0.5);
  object-fit: contain;
}

.photo-galery-with-zoom input {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 2;
}

.photo-galery-with-zoom input:checked {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}

// description in Times


figure{
    width: 100%;
    img{
        width: 100%;
        aspect-ratio: 3/2;
        object-fit: cover;
        object-position: 50% 50%;            
    }
}


.extra-imgs{
    
    padding-bottom: 15px;

    &>div{
        display: flex;
        justify-content: space-between;
        gap: 15px;

    }
    figure{
        width: calc(100%/2 - 7.5px);
        flex-grow: 1;
        img{
            width: 100%;
            aspect-ratio: 3/2;
            object-fit: cover;
            object-position: 50% 50%;
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
                aspect-ratio: 3/2;
                object-fit: cover;
                object-position: 50% 50%;            
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