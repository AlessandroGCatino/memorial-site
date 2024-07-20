<template>
    <div :class="!isDisplayed ? 'd-none d-md-flex':''" class="mg-midcontent">
        
        <div class="content">
            <div v-if="store.openCallActive && store.openCall?.exhibitions[0]?.artists[0]?.articles[0]">

                <div class="col-12">
                    <figure id="artistImage" ref="artistImage" class="w-100 text-center">
                        <img :src="`${store.apiBase}storage/${store.openCall.exhibitions[0].artists[0].articles[0].operaPicture}`" @load="scrollToImage" alt="" class="w-100">
                    </figure>
                </div>

                <h5 class="default-spacing"><strong>{{ store.openCall.exhibitions[0].artists[0].artistName }}</strong></h5>
                <p>{{store.openCall.exhibitions[0].artists[0].articles[0].operaDescription}}</p>

            </div>
            <div v-else-if="store.openCallActive">
                No open call available! Stay tuned on our socials for more info.
            </div>
            <div v-else-if="store.hcnActive && store.AboutPage" class="hcn">
                <h6>{{ store.AboutPage[0]?.operaMaterial }}</h6>
                <figure v-if="store?.AboutPage[0]?.operaPicture">
                    <img :src="`${store.apiBase}storage/${store.AboutPage[0].operaPicture}`" alt="" class="w-100">
                </figure>
                <p>{{ store.AboutPage[0]?.operaDescription}}</p>
            </div>
            <div v-else class="scrollable" v-if="store.dataReady">
                
                <SelectedDetails/>
                
            </div>
        </div>

    </div>
</template>

<script>
import { store } from '../store';
import SelectedDetails from "./SelectedDetails.vue"

export default {
    name: "MainContent",
    props: {
        isDisplayed: {
            type: Boolean,
            default: false
        }
    },
    components: {
        SelectedDetails
    },
    data () {
        return {
            store,
        }
    },
    methods:{
        scrollToImage(){
            this.$refs.artistImage.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
    }
}
</script>

<style lang="scss" scoped>

    .default-spacing{
        margin-block: 15px;
    }


    .hcn{
        h6{
            padding-bottom: 15px;
        }
        p{
            font:20px/22px Times;
            overflow-wrap: break-word;
        }

    }

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
    @media (max-width: 768px){
        .mg-midcontent{
            width: 100%;
            height: calc(100vh - 15px);        
            .content{
                height: calc(100% - 130px);
            }
        }
    }
</style>