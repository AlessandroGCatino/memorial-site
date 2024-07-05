<template>
    <div :class="!isDisplayed ? 'd-none d-md-flex':''" class="mg-sidebar">
        
        <div class="content">
            <div class="scrollable">

                <div class="sections mb-2 " v-for="(element, indice) in store.infos">
                    <h6 data-bs-toggle="collapse" :data-bs-target="`#collapse${indice}`" aria-expanded="false" :aria-controls="`#collapse${indice}`"><strong>{{ element.name }}</strong></h6>
                    <div class="collapse" :id="`collapse${indice}`">

                        <div v-for="(item, index) in element.exhibitions" :key="item.id">
                            <span @click="handleArticleClick(indice, index)"><RouterLink :to="{ name: 'exhibition', params: { exhibition: item.slug } }">{{ item.title }}</RouterLink></span>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
        
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import { store } from '../store';

export default {
    name: "SideMenu",
    props: {
        isDisplayed: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            store,
        }
    },
    methods: {
        changeCurrentArticle(sectionid, exhibitionid) {
            store.selected.section = sectionid;
            store.selected.exhibition = exhibitionid;
            store.selected.artist = 0;
            store.hcnActive=false;
            store.openCallActive=false;
            store.menuInteraction=false

        },
        handleArticleClick(sectionid, exhibitionid) {
            this.changeCurrentArticle(sectionid, exhibitionid);
            this.$emit('changeToMid');
        },
        checkURL(){
            if (Object.keys(this.$route.params).length > 0){
                this.changeCurrentArticle(0,0)
            }
        }
        // refreshPage(){
        //     let timer = setTimeout( () => {
        //         this.changeCurrentArticle(0,0)
        //         }, 500);
        // }
    },
    mounted () {
        // this.refreshPage();
        this.checkURL()
    },
}
</script>

<style lang="scss" scoped>

    .bottom{
        height: 700px;
        display: flex;
        align-items: end;
    }

    span,
    h6{
        cursor: pointer;
    }
    .mg-sidebar{
        height: calc(100vh - 15px);
        width: calc(100%/4);
        border-right: 1px solid black;
        
        .content{
        height: 100%;
        padding: 0 15px;
        .scrollable{
            overflow: auto;
            height: calc(100% - 63px);
        }

        .sections:first-of-type{
            padding-top: 13.5px;
            // padding-bottom: 15px;
        }
    }
    .top-leftspace,
    .top-rightspace,
    .bot-leftspace,
    .bot-rightspace{
        background-color: white;
        height: 1px;
        width: 15px;
        position: absolute;
    }
    .top-leftspace{
        top: -1px;
    }
    .top-rightspace{
        top: -1px;
        right: 0;
    }
    .bot-leftspace{
        bottom: -1px;
    }
    .bot-rightspace{
        bottom: -1px;
        right: 0;
    }

    }
    @media (max-width: 768px) { /* Modifica: le regole CSS all'interno di questa media query verranno applicate solo per schermi con larghezza massima di 768px (ad es. dispositivi mobili) */
        .mg-sidebar{
            width: calc(100vh - 15px); 
        }
    }
    
</style>