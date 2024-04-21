<template>
    <div class="mg-sidebar">
        
        <div class="mg-realMenu border-black">
            <div class="top-leftspace"></div>
            <div class="bot-leftspace"></div>
            <div class="content">
                <div class="top-content">
                    <a href="/home">
                        <h5>Holocaust Centre North</h5>
                    </a>
                </div>

                <div class="scrollable">

                    <div class="sections" v-for="(element) in store.sections">
                        <h6>{{ element.name }}</h6>
                        <div v-for="item in element.list" :key="item.id">
                            <span @click="changeCurrentArticle(element.section_id, item.list_id)">{{ item.title }}</span>
                        </div>
                    </div>
                    <div class="bottom">
                        Lorem ipsum dolor sit amet.
                    </div>
                    
                </div>
            </div>
            <div class="top-rightspace"></div>
            <div class="bot-rightspace"></div>
            
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
        changeCurrentArticle(sectionid, articleposition) {
            store.selected.section = sectionid;
            store.selected.article = articleposition
            console.log("Section: ", store.selected.section)
            console.log("Article: ", store.selected.article)
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
        padding: 15px 0px 15px 15px;
        height: calc(100vh - 15px);
        width: calc(100%/4);
        
        .mg-realMenu{
            width: 100%;
            height: 100%;
            
            border: 1px solid black;
            
            position: relative;
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
                    padding-top: 5px;
                    padding-bottom: 20px;
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
    }
    
</style>