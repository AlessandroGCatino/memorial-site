<template>
    <div class="mg-sidebar">
        
        <div class="content">
            <div class="scrollable">

                <div class="sections" v-for="(element, indice) in store.infos">
                    <h6><strong>{{ element.name }}</strong></h6>
                    <div v-for="(item, index) in element.exhibitions" :key="item.id">
                        <span @click="changeCurrentArticle(indice, index)">{{ item.title }}</span>
                    </div>
                </div>

                
            </div>
        </div>
        
    </div>
</template>

<script>
import { store } from '../store';

export default {
    name: "SideMenu",
    data () {
        return {
            store
        }
    },
    methods: {
        changeCurrentArticle(sectionid, exhibitionid) {
            store.selected.section = sectionid;
            store.selected.exhibition = exhibitionid;
            store.selected.artist = 0;
            console.log("Section: ", store.selected.section)
            console.log("Article: ", store.selected.exhibition)
        }
    },
}
</script>

<style lang="scss" scoped>

    .bottom{
        height: 700px;
        display: flex;
        align-items: end;
    }

    span{
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

        .top-content{
            padding: 15px 0;
            border-bottom: 1px solid black;

        }

        .sections{
            border-bottom: 1px solid black;
            padding-top: 13.5px;
            padding-bottom: 15px;
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
    
</style>