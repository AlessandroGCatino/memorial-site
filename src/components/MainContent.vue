<template>
    <div class="mg-midcontent">
        
        <div class="content">
            <div class="scrollable" v-if="store.dataReady">
                
                <SelectedDetails :artist="store.infos[store.selected.section].exhibitions[store.selected.exhibition].artists[store.selected.artist]"/>
                
            </div>
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
        height: calc(100vh - 15px);        
        width: calc((100%/4) * 2);
        
        
        
        .content{
            margin-top: 15px;
            height: calc(100% - 150px);
            overflow: auto;
            padding: 0 15px;
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
    }
</style>