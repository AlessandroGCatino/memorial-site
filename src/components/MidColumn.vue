<template>
    <div :class="!isDisplayed ? 'd-none d-md-flex':''" class="mg-sidebar">
        <div class="content">
            <div v-if="dataReady" v-for="(artists, index) in exhibition?.artists" :key="artists.id">
                <figure v-for="(article, pos) in artists.articles" :key="article.id" class="w-100" @click="handleArticleClick(index, pos)">
                    <RouterLink :to="{ name: 'article', params: { exhibition: exhibitionSlug, article: article.slug }}">
                        <img :src="`${store.apiBase}storage/${article.operaPicture}`" alt="">
                    </RouterLink>
                </figure>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
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
            show: false,
            exhibitionSlug: null,
            exhibition: null,
            article: null,
            dataReady: false
        }
    },
    methods: {
        changeCurrentArtist(artist, article) {
            store.selected.artist = artist;
            store.selected.article = article;
            store.menuInteraction=false

            // console.log("Section: ", store.selected.section)
            // console.log("Exhibition: ", store.selected.exhibition)
            // console.log("Artist: ", store.selected.artist)

        },
        handleArticleClick(artist, article) {
            this.changeCurrentArtist(artist, article);
            this.$emit('changeToContent');
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
        handleLoading(){
            this.setExhibition()
            this.exhibition = this.searchActiveExhibition();
            this.checkURL();
            this.dataReady = true;
        },
        refreshPage(){
            let timer = setTimeout( () => {
                this.handleLoading();
                }, 1000);
        },
        checkURL(){
            if (this.$route.params.article){
                this.handleArticleClick(0,0)
            }
        }
    },
    mounted (){
        this.refreshPage() // refresh page after 5 seconds to ensure exhibition data is fetched before rendering the component
           
    },
    created() {
        this.$watch(
        () => this.$route.params.exhibition,
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