<template>
    <div class="frame">
        <div class="external-frame">
            <div class="d-flex flex-column flex-md-row">
                <div class="col-12 col-md-3 default-padding d-flex align-items-start align-items-md-center justify-content-between menu-section position-relative border-right">
                    <div class="left-space"></div>
                    <RouterLink :to="{ name: 'homepage' }" @click="changeBaseState()">
                        <h6>Memorial Gestures</h6>
                    </RouterLink>
                    <h6 class="d-md-none hamburger" :class="showNavbar ? 'd-none':''" @click="hamburgerMenu()">
                    +
                    </h6>
                    <div class="right-space"></div>
                </div>
                
                <div :class="!showNavbar ? 'd-none d-md-flex':''" class="col-12 col-md-3 default-padding d-flex align-items-start align-items-md-center menu-section position-relative border-right">
                    <div class="left-space"></div>
                    <RouterLink :to="{ name: 'homepage' }" @click="changehcnActive()">
                        <h6 @click="changehcnActive()">About Us</h6>
                    </RouterLink>
                    <div class="right-space"></div>
                </div>
                <div :class="!showNavbar ? 'd-none d-md-flex':''" class="d-flex flex-column flex-md-row col-12 col-md-6 justify-content-between menu-section position-relative">
                    <div class="default-padding d-flex align-items-start align-items-md-center">
                        <div class="left-space"></div>
                        <RouterLink :to="{ name: 'home' }" @click="changehcnActive()">
                            <h6>Holocaust Centre North</h6>
                        </RouterLink>
                        <div class="right-space"></div>
                    </div>
                    <div class="default-padding" id="top-definer">
                        <div class="left-space"></div>
                        <div class="bg-black">
                            <RouterLink :to="{ name: 'homepage' }">
                                <h6 @click="changeOpencallActive()" class="text-white">OPEN CALL</h6>
                            </RouterLink>
                        </div>
                        <div class="right-space"></div>
                    </div>
                </div>
            </div>

            <div class="views">
                <router-view @hide-navbar="showNavbar = false"></router-view>
            </div>

            <div class="d-flex flex-md-row">
                <div class="col-md-3 default-padding d-flex align-items-start align-items-md-center menu-section-bot position-relative border-right flex-grow-1">
                    <div class="left-space"></div>
                    <h6>
                        <a href="https://www.facebook.com/hsfa.hud/">Facebook</a>
                        /
                        <a href="https://www.instagram.com/holocaustcentrenorth/">Instagram</a>
                        /
                        <a href="https://x.com/holocaustnorth">X</a>
                    </h6>
                    <div class="right-space d-none d-md-block"></div>
                </div>
                <div class="col-md-3 default-padding d-md-flex align-items-start align-items-md-center menu-section-bot position-relative border-right d-none d-md-block">
                    <div class="left-space"></div>
                    <div class="right-space"></div>
                </div>
                <div class="d-flex col-md-6 justify-content-between menu-section-bot position-relative ">
                    <div class="default-padding d-flex align-items-start align-items-md-center d-none d-md-block">
                        <div class="left-space"></div>
                        <div class="right-space"></div>
                    </div>
                    <div class="default-padding" id="bot-definer">
                        <div class="left-space d-none d-md-block"></div>
                        <h6 class="d-none d-md-block">Memorial Gestures &copy;</h6>
                        <h6 class="d-md-none">MG &copy;</h6>
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
            return {
                store,
                showNavbar: true,
                menuInteraction: false
            }
        },
        methods: {
            hamburgerMenu(){
                if(!store.menuInteraction){
                    store.displayMiddle=false,
                    store.displayContent=false,
                    store.displaySidebar=true
                    // this.showNavbar=true
                    store.menuInteraction=true
                } else {
                    store.displayMiddle=true,
                    store.displayContent=false,
                    store.displaySidebar=false,
                    store.menuInteraction=false
                    // this.showNavbar=false
                }
            },
            changeBaseState() {         
                store.hcnActive = true;
                store.openCallActive = false;
                store.selected.section = null;
                store.selected.exhibition = null;
                store.selected.artist = 0;
                store.displayMiddle=false,
                store.displayContent=false,
                store.displaySidebar=true,
                this.showNavbar=true
            },
            changehcnActive() {         
                store.hcnActive = true;
                store.openCallActive = false;
                store.selected.section = null;
                store.selected.exhibition = null;
                store.selected.artist = 0;
                store.displayMiddle=false,
                store.displayContent=true,
                store.displaySidebar=false,
                this.showNavbar=true
            },
            changeOpencallActive() {
                store.displaySidebar= false,
                store.displayMiddle= false,
                store.displayContent= true,
                store.openCallActive = true;
                store.hcnActive = false;
                store.selected.section = null;
                store.selected.exhibition = null;
                store.selected.artist = 0;
            },
            
        },
        mounted() {
            console.log(this.$route)
        }
    }
</script>

<style lang="scss">

@use "./styles/general.scss";

.hamburger{
    background-color: black;
    color: white;
    padding-inline: 5px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h5 {
    cursor: pointer;
    line-height: 1em;
}

h4,
h6 {
    line-height: 1em;
}

h6 {
    font-size: 115%;
}

figure {
    margin: 0;
}

.views {
    height: calc(100% - 150px);
    overflow: hidden;
    flex-grow: 1;
}

#top-definer {
    padding-block: 10px;
    .left-space,
    .right-space{
        height: 150px;
    }
}

#bot-definer {
    padding-block: 15px;
}

.right-space,
.left-space {
    position: absolute;
    width: 15px;
    height: 75px;
    background-color: white;
    top: -1px;
}

.left-space {
    left: 0;
}
.right-space {
    right: 0;
}

.default-padding {
    padding-inline: 15px;
}

.border-right{
    border-right: 1px solid black;
}


.bg-black {
    padding: 5px 7px;
}

.external-frame {
    border: 1px solid black;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .menu-section {
        border-bottom: 1px solid black;
    }
    .menu-section-bot {
        border-top: 1px solid black;
    }
}

.frame {
    width: 100vw;
    height: 100vh;
    padding: 15px;
    overflow: hidden;
}

@media (max-width: 768px) {

    .border-right{
        border-right: none;
    }   

    .mid-whitespace{
        display: none;
    }

    #top-definer{
        border-top: 1px solid black;
    }

    #bot-definer{
        padding-block: 10px;
    }

    .bg-black{
        width: fit-content;
    }

    .default-padding {
        padding: 10px 15px;
    }

    .views {
        height: calc(100% - 300px);
    }
}
</style>
