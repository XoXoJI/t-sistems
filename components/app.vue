<script>
import VueRouter from 'vue-router';
import Nav from './nav';
import List from "./list/list";
import Head from "./head";

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
        path: '/',
        component: List,
        props: {
            title: "Credential requests",
            subtitle: "Approval requested",
            gridData: "credential_approval"
        }
    },
    {
        path: '/rejected',
        component: List,
        props: {
            title: "Credential requests",
            subtitle: "Rejected requested",
            gridData: "rejected_approval"
        }
    }
  ]
});

export default {
    router,
    components: {
        Nav,
        Head
    }
}
</script>

<template>
    <div>
        <Head title="Bundeskabinett"/>
        <div class="container">
            <Nav class="leftSideBar"/>
            <router-view></router-view>
            <div class="rightSideBar"></div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.container
    display: flex

.rightSideBar
    background: $white
    width: 408px

    @media screen and (max-width: 1679px)
        display: none

.leftSideBar
    @media screen and (max-width: 1279px)
        display: none
</style>