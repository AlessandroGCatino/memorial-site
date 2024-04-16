<template>
    <div>
        <router-view>

        </router-view>
        
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

</style>
