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
                <h6 class="mb-2"><b>{{ artist?.artistName }}</b></h6>
                <h6><b>{{ exhibition?.expositionDates }}</b></h6>
                <p class="artistDesc">{{ artist?.artistDesc }}</p>
            </div>
        </div>
        
        <div>
            <div class="col-12 text-center">
                <div v-if="article?.videoUrl !== null">
                    <iframe   :src="article?.videoUrl" ></iframe>
                </div>
                <figure v-else>
                    <img v-if="article?.operaPicture" :src="`${store.apiBase}storage/${article?.operaPicture}`" alt="" class="w-100">
                </figure>
            </div>
            <div class="col-12 description">
                <h6 v-if="article?.operaName && artist?.artistName" class="mb-3"><b>{{ article?.operaName }}</b>, <b>{{ artist?.artistName }}</b></h6>
                <h6 class="mb-3"><b>{{ article?.operaYear }}</b></h6>
                <p class="artistDesc"><i>{{ article?.operaMaterial }}</i></p>
                <p class="artistDesc">{{ article?.operaDescription }}</p>
            </div>

            <div class="photo-galery-with-zoom">
                <figure v-for="items in article?.pictures" :key="items.singlePicture">
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
            exhibitionSlug: null,
            exhibition: null,
            dataReady: false,
            articleSlug: null,
            article:null,
            artist:null
        }
    },
    methods:{
        scrollToImage(){
            this.$refs.artistImage.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        },
        bigImage(event){
            event.stopPropagation();
        },
        setExhibition() {
            this.exhibitionSlug = this.$route?.params?.exhibition
        },
        searchActiveExhibition(){
            for (let section=0; section<store.infos.length; section++) {
                for (let exhibition=0; exhibition<store.infos[section].exhibitions.length; exhibition++) {
                    if (store.infos[section].exhibitions[exhibition].slug === this.exhibitionSlug) {
                        return store.infos[section].exhibitions[exhibition];
                    }
                }
            }
        },
        setArticle(){
            this.articleSlug = this.$route?.params?.article
        },
        searchActiveArticle(){
            for (let section=0; section<store.infos.length; section++) {
                for (let exhibition=0; exhibition<store.infos[section].exhibitions.length; exhibition++) {
                    for (let artist=0; artist<store.infos[section].exhibitions[exhibition].artists.length; artist++) {
                        for (let article=0; article<store.infos[section].exhibitions[exhibition].artists[artist].articles.length; article++) {
                            if (store.infos[section].exhibitions[exhibition].artists[artist].articles[article].slug === this.articleSlug) {
                                this.artist = store.infos[section].exhibitions[exhibition].artists[artist]
                                return store.infos[section].exhibitions[exhibition].artists[artist].articles[article];
                            }
                        }
                    }
                }
            }
        },
        handleLoading(){
            this.setExhibition()
            this.exhibition = this.searchActiveExhibition();
            this.setArticle()
            this.article = this.searchActiveArticle()
            console.log(this.article)
            this.dataReady = true;
        },
        refreshPage(){
            let timer = setTimeout( () => {
                this.handleLoading();
                }, 1000);
        }
    },
    mounted (){
        this.refreshPage() // refresh page after 5 seconds to ensure exhibition data is fetched before rendering the component
           
    },
    created() {
        this.$watch(
        () => this.$route.params.article,
        (newId, oldId) => {
            this.handleLoading()
        }
        );
        this.$watch(
        () => store.infos,
        (newInfos, oldInfos) => {
            this.handleLoading()
        },
        { deep: true }
        );
    },
}
</script>

<style lang="scss" scoped>

iframe {
    width: 100%;
    aspect-ratio: 16/9;
}

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