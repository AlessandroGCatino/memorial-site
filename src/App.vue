<template>
    <div class="frame">
        <div class="external-frame">
            <div class="d-flex">
                <div class="col-3 default-padding d-flex align-items-center menu-section border-end border-black position-relative">
                    <div class="left-space"></div>
                    <RouterLink :to="{ name: 'home' } " @click="changehcnActive()">
                        <h6>Memorial Gestures</h6>
                    </RouterLink>
                    <div class="right-space"></div>
                </div>
                <div class="col-3 default-padding d-flex align-items-center menu-section border-end border-black position-relative">
                    <div class="left-space"></div>
                    <RouterLink :to="{ name: 'home' }" @click="changehcnActive()">
                        <h6 @click="changehcnActive()">About Us</h6>
                    </RouterLink>
                    <div class="right-space"></div>
                </div>
                <div class="d-flex col-6 justify-content-between menu-section position-relative">
                    <div class="default-padding d-flex align-items-center">
                        <div class="left-space"></div>
                        <RouterLink :to="{ name: 'homepage' }" @click="changehcnActive()">
                            <h6>Holocaust Centre North</h6>
                        </RouterLink>
                        <div class="right-space"></div>
                    </div>
                    <div class="default-padding" id="top-definer">
                        <div class="left-space"></div>
                        <div class="bg-black">
                            <RouterLink :to="{ name: 'home' } ">
                                <h6 @click="changeOpencallActive()" class="text-white">OPEN CALL</h6>
                            </RouterLink>
                        </div>
                        <div class="right-space"></div>
                    </div>
                </div>
            </div>


            <div class="views">
                <router-view>

                </router-view>
            </div>

            <div class="d-flex">
                <div class="col-3 default-padding d-flex align-items-center menu-section-bot border-end border-black position-relative">
                    <div class="left-space"></div>
                    <h6>
                        <a href="https://www.facebook.com/hsfa.hud/">Facebook</a>
                        /
                        <a href="https://www.instagram.com/holocaustcentrenorth/">Instagram</a>
                        /
                        <a href="https://x.com/holocaustnorth">X</a>
                    </h6>
                    <div class="right-space"></div>
                </div>
                <div class="col-3 default-padding d-flex align-items-center menu-section-bot border-end border-black position-relative">
                    <div class="left-space"></div>
                    <div class="right-space"></div>
                </div>
                <div class="d-flex col-6 justify-content-between menu-section-bot position-relative">
                    <div class="default-padding d-flex align-items-center">
                        <div class="left-space"></div>
                        <div class="right-space"></div>
                    </div>
                    <div class="default-padding" id="bot-definer">
                        <div class="left-space"></div>
                            <h6 class="">Memorial Gestures &copy;</h6>
                        <div class="right-space"></div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
        
    

</template>

<script>
    import axios from 'axios'
    import { store } from './store'
    import HomePage from './pages/HomePage.vue';
    import RealHomePage from './pages/RealHomePage.vue';
    
    
    export default {
        components: {
            HomePage,
            RealHomePage
        },
        data() {
            return{
                store,
            }
        },
        methods: {
            changehcnActive() {
                store.hcnActive=true;
                store.openCallActive=false;
                store.selected.section = null;
                store.selected.exhibition = null;
                store.selected.artist = 0;
            },
            changeOpencallActive() {
                store.openCallActive=true;
                store.hcnActive=false;
                store.selected.section = null;
                store.selected.exhibition = null;
                store.selected.artist = 0;
            }
        },
    }


</script>


<style lang="scss">

@use "./styles/general.scss";

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

h5{
    cursor: pointer;
    line-height: 1em;
}

h4,
h6{
    line-height: 1em;
}

h6{
    font-size: 115%;
}

figure{
    margin: 0;
}

.views{
    height: calc(100% - 150px);
    overflow: hidden;
    flex-grow: 1;

}

#top-definer{
    padding-block: 10px;
}

#bot-definer{
    padding-block: 15px;
}

.right-space,
.left-space{
    position: absolute;
    width: 15px;
    height: 75px;
    background-color: white;
    top: -1px;

}

.left-space{
    left: 0;
}
.right-space{
    right: 0;
}

.default-padding{
    padding-inline: 15px;
}

.red{
    background-color: red;
    width: 100%;
    height: 15px;
}

.bg-black{
    padding: 5px 7px;
}

.external-frame{
    border: 1px solid black;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .menu-section{
        border-bottom: 1px solid black;
    }
    .menu-section-bot{
        border-top: 1px solid black;
    }
}

.frame{
    width: 100vw;
    height: 100vh;
    padding: 15px;
    overflow: hidden;
}

</style>
