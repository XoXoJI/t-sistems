<script>
import ListHeader from './header';
import Search from '../search';
import Filters from '../filters';
import Grid from '../grid/grid';

export default {
    components: {
        ListHeader,
        Search,
        Filters,
        Grid
    },
    props: ["title", "subtitle", "gridData"]
}
</script>

<template>
    <div class="list">
        <div class="container">
            <div class="head">
                <ListHeader :title="title" :subtitle="subtitle">
                    <!-- Можно придумать разные пути для выбора иконки, но это уже далеко за рамками тестового задания -->
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="8" fill="#264564"/>
                        <path d="M11.28 7.47L9.03 5.22C8.74 4.93 8.26 4.93 7.97 5.22C7.68 5.51 7.68 5.99 7.97 6.28L8.94 7.25H5.25C4.84 7.25 4.5 7.59 4.5 8C4.5 8.41 4.84 8.75 5.25 8.75H8.94L7.97 9.72C7.68 10.01 7.68 10.49 7.97 10.78C8.12 10.93 8.31 11 8.5 11C8.69 11 8.88 10.93 9.03 10.78L11.28 8.53C11.57 8.24 11.57 7.76 11.28 7.47Z" fill="white"/>
                    </svg>

                </ListHeader>
                <div class="search-and-filters">
                    <Search class="search"/>
                    <Filters/>
                </div>
            </div>
            <Grid :grid-data="gridData"/>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.list
    background: $paleGray
    min-width: 320px
    flex: 1

    .container
        margin: 0
        padding: 36px 0 72px
        max-width: 1040px
        @media screen and (min-width: 769px)
            margin: 0 24px
        @media screen and (width: 1280px)
            margin: 0 48px
        @media screen and (min-width: 1281px)
            margin: auto
        @media screen and (width: 1680px)
            margin: 0 48px
        @media screen and (min-width: 1681px)
            margin: auto
        @media screen and (max-width: 768px)
            padding: 0

        .head
            display: flex
            justify-content: space-between
            margin-bottom: 32px
            @media screen and (max-width: 768px)
                flex-direction: column
                margin: 0

            .search-and-filters
                display: flex
                flex: 1
                justify-content: flex-end
                @media screen and (max-width: 768px)
                    padding: 16px
            
            .search
                margin-right: 16px
                flex: 1
                max-width: 405px

                @media screen and (max-width: 768px) and (min-width: 320px)
                    max-width: none

</style>