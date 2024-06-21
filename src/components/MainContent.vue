<template>
    <div :class="!isDisplayed ? 'd-none d-lg-flex':''" class="mg-midcontent">
        
        <div class="content">
            <div v-if="store.openCallActive && store.openCall?.exhibitions[0]?.artists[0]?.articles[0]">

                <div class="col-12">
                    <figure id="artistImage" ref="artistImage" class="w-100 text-center ">
                        <img :src="`${store.apiBase}storage/${store.openCall.exhibitions[0].artists[0].articles[0].operaPicture}`" @load="scrollToImage" alt="" class="w-100">
                    </figure>
                </div>

                <h5 class="default-spacing"><strong>{{ store.openCall.exhibitions[0].artists[0].artistName }}</strong></h5>
                <p>{{store.openCall.exhibitions[0].artists[0].articles[0].operaDescription}}</p>

            </div>
            <div v-else-if="store.openCallActive">
                No open call available! Stay tuned on our socials for more info.
            </div>
            <div v-else-if="store.hcnActive" class="hcn">
                <h6>Holocaust Centre North</h6>
                <p>Holocaust Centre North is home to an exhibition, learning programme and archive, all of which tell the stories of Jewish survivors of the Holocaust who rebuilt their lives in the North of England. By ensuring that the atrocities of the Nazi genocide are never forgotten we seek to raise awareness of human rights, freedom and equality. Our educational, academic and artistic programming is shaped by a community-led approach, working in dialogue with survivors and their descendants. <br>
                In Holocaust Centre North’s archive, you will find traces of: pre-war Jewish life & culture, forced displacement/migration, child refugees, trauma/intergenerational trauma, memory/post-memory, loss, internment, forced labour, survival & liberation, childhood & youth, diasporic identities, and making a new life in the North of England. We believe these traces of the past can help us to understand and amplify contemporary struggles and experiences. <br>
                Our archival collection includes photographs, letters, legal documents, artefacts, textiles, ephemera & postcards, as well as an extensive collection of video & audio testimony with Holocaust survivors and their families. <br>
                Our understanding of the Holocaust is constantly evolving. At Holocaust Centre North we believe that the Holocaust must be understood alongside other historical and contemporary events and conflicts. We encourage ongoing conversations about its meaning and legacy. We are committed to fostering a culture of care when talking about difficult and traumatic histories.</p>
                <p>
                Holocaust Centre North was founded in the mid-1990s by survivors with the aim of providing friendship and community support. Since 2018 we have had a permanent home on the University of Huddersfield campus. At every stage of our development, we continually return to the core values of bearing witness to the truth and showing solidarity with survivors. Visit our main website for more information and to find out how to visit our free exhibition.</p>
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