<template>
    <div class="d-md-flex">
        <SideMenu @changeToMid="changeMid" :isDisplayed="store.displaySidebar"/>
        <MidColumn @changeToContent="changeContent" :isDisplayed="store.displayMiddle"/>

        <MainContent :isDisplayed="store.displayContent"/>

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
            displaySidebar: true,
            displayMiddle: false,
            displayContent: false
        }
    },
    methods: {
        changeSide() {
        store.displayMiddle=false,
        store.displayContent=false,
        store.displaySidebar=true
        },
        changeMid() {
        store.displayMiddle=true,
        store.displaySidebar=false,
        this.$emit("hide-navbar")
        },
        changeContent() {
        store.displayContent=true,
        store.displayMiddle=false,
        store.displaySidebar=false
        },

        getDatas() {
            axios.get(`${store.apiUrl}`).then(response => {
                store.infos = response.data.sections;
                store.openCall = response.data.openCall;
                store.AboutPage = response.data.aboutUsPage
                console.log(store.AboutPage)
                // console.log("Intero array: ", store.infos);
                // console.log("Exhibition: ", store.infos[0].exhibitions)
                // console.log("Open Call: ", store.openCall);
                store.dataReady = true
                // console.log(store.infos[store.selected.section].exhibitions[store.selected.exhibition])
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