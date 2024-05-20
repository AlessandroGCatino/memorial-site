<template>
    <div class="d-flex">
        <SideMenu/>
        <MidColumn/>

        <MainContent/>

    </div>
</template>

<script>
import SideMenu from '@/components/SideMenu.vue';
import MainContent from '@/components/MainContent.vue';
import MidColumn from '@/components/MidColumn.vue';
import { store } from '@/store';
import axios from 'axios';

export default {
    name: "HomePage",
    components: {
        SideMenu,
        MainContent,
        MidColumn
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        // ottiene voti da stampare nella select

        getDatas() {
            axios.get(`${store.apiUrl}`).then(response => {
                store.infos = response.data.sections;
                store.openCall = response.data.openCall;
                console.log("Intero array: ", store.infos);
                console.log("Exhibition: ", store.infos[0].exhibitions)
                console.log("Open Call: ", store.openCall);

                store.dataReady = true
                console.log(store.infos[store.selected.section].exhibitions[store.selected.exhibition])
            });
        }
    },
    mounted() {
        this.getDatas()
    }
}
</script>

<style lang="scss" scoped>

</style>