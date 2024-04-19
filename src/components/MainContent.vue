<template>
    <div class="mg-midcontent">
        <div class="mg-realMenu border-black">
            
            <div class="top-leftspace"></div>
            <div class="bot-leftspace"></div>
            
                
            <div class="top-content d-flex">
                <div class="col-6">
                    <h5>Memorial Gestures</h5>
                </div>
                <div class="col-6 d-flex justify-content-between ">
                    <h5>About us</h5>
                    <h5>Contact</h5>
                </div>
            </div>
                <div class="content">
                    <div class="scrollable">
                        
                        <SelectedDetails 
                        :topRImg="store.fakeData[store.selected.section][store.selected.article].topRImage" 
                        :topLImg="store.fakeData[store.selected.section][store.selected.article].topLImage" 
                        :title="store.fakeData[store.selected.section][store.selected.article].title" 
                        :artist="store.fakeData[store.selected.section][store.selected.article].artist" 
                        :year="store.fakeData[store.selected.section][store.selected.article].year" 
                        :desc="store.fakeData[store.selected.section][store.selected.article].description"
                        :botLImg="store.fakeData[store.selected.section][store.selected.article].botLImage"
                        :botRImg="store.fakeData[store.selected.section][store.selected.article].botRImage"
                        :secondDesc="store.fakeData[store.selected.section][store.selected.article].secondDescription"/>
                        
                    </div>
                </div>
            <div class="top-rightspace"></div>
            <div class="bot-rightspace"></div>
        </div>

    </div>
</template>

<script>
import { store } from '../store';
import SelectedDetails from "./SelectedDetails.vue"

export default {
    name: "MainContent",
    components: {
        SelectedDetails
    },
    data () {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>

    

    .mg-midcontent{
        padding: 15px 15px 15px 0 ;
        height: calc(100vh - 15px);
        
        width: calc((100%/4) * 3);
        
        
        .mg-realMenu{
            width: 100%;
            height: 100%;
            border-top: 1px solid black;
            border-bottom: 1px solid black;
            border-right: 1px solid black;

            position: relative;

            .top-content{
                padding: 15px;
                border-bottom: 1px solid black;
            }
            .content{
                height: calc(100% - 63px);
                padding: 0 15px 15px 15px;
                overflow: auto;
                .scrollable{
                 overflow: auto;
                 height: 100%;
                }

                

                .sections{
                    border-top: 1px solid black;
                    padding-top: 5px;
                    padding-bottom: 20px;
                }
            }
            .top-leftspace,
            .top-rightspace,
            .bot-leftspace,
            .bot-rightspace{
                background-color: white;
                height: 5px;
                width: 15px;
                position: absolute;
            }
            .top-leftspace{
                height: 100px;
                top: -1px;
            }
            .top-rightspace{
                height: 100px;
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