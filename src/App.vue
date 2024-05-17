<template>
    <div class="frame">
        <div class="external-frame">
            <div class="d-flex">
                <div class="col-3 default-padding d-flex align-items-center menu-section border-end border-black position-relative">
                    <div class="left-space"></div>
                    <RouterLink :to="{ name: 'home' }">
                        <h5>Memorial Gestures</h5>
                    </RouterLink>
                    <div class="right-space"></div>
                </div>
                <div class="col-3 default-padding d-flex align-items-center menu-section border-end border-black position-relative">
                    <div class="left-space"></div>
                    <h5>About Us</h5>
                    <div class="right-space"></div>
                </div>
                <div class="d-flex col-6 justify-content-between menu-section position-relative">
                    <div class="default-padding d-flex align-items-center">
                        <div class="left-space"></div>
                        <RouterLink :to="{ name: 'homepage' }">
                            <h5>Holocaust Centre North</h5>
                        </RouterLink>
                        <div class="right-space"></div>
                    </div>
                    <div class="default-padding">
                        <div class="left-space"></div>
                        <div class="bg-black">
                            <h5 class="text-white ">OPEN CALL</h5>
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
                    <h5>
                        <a href="">Facebook</a>
                        /
                        <a href="">Instagram</a>
                        /
                        <a href="">X</a>
                    </h5>
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
                    <div class="default-padding">
                        <div class="left-space"></div>
                            <h5 class="">Memorial Gestures &copy;</h5>
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
        }
    }


</script>


<style lang="scss">

@use "./styles/general.scss";

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
figure{
    margin: 0;
}

.views{
    height: calc(100% - 150px);
    overflow: hidden;
    flex-grow: 1;

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
    padding: 10px 15px;
}

.red{
    background-color: red;
    width: 100%;
    height: 15px;
}

.bg-black{
    padding: 5px;
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
