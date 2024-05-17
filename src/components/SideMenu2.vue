<template>
    <div class="mg-sidebar">
        
        <div class="mg-realMenu border-black">
            <div class="top-leftspace"></div>
            <div class="bot-leftspace"></div>
            <div class="content d-flex flex-column justify-content-between ">
                <div class="top-content">
                    <a href="/">
                        <h5>Holocaust Centre North</h5>
                    </a>
                </div>
                <div>
                    <h6 class="socials">
                        Facebook / Instagram
                    </h6>
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
    name: "SideMenu2",
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

    .socials{
        padding-block: 15px;
        border-top: 1px solid black;
        
    }

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
            
            border-top: 1px solid black;
            border-left: 1px solid black;
            border-bottom: 1px solid black;
            
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