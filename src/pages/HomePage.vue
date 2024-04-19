<template>
    <div class="d-flex">
        <SideMenu/>
        <MainContent/>

    </div>
</template>

<script>
import SideMenu from '@/components/SideMenu.vue';
import MainContent from '@/components/MainContent.vue';

    export default {
        name: "HomePage",
        components: {
            SideMenu,
            MainContent
        }
    }
</script>

<style lang="scss" scoped>

</style>