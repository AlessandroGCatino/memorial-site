<template>
    <div>
        <SideMenu/>
    </div>

</template>

<script>
    import axios from 'axios'
    import { store } from './store'
    import SideMenu from "./components/SideMenu.vue"
    
    export default {
        components: {
            SideMenu
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
