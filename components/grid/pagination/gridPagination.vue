<script>
import gridPaginationPagination from './gridPaginationPagination';
import gridPaginationCountOnPage from './gridPaginationCountOnPage';
import gridPaginationMin from './gridPaginationMin';

export default {
    components: {
        'grid-pagination-pagination': gridPaginationPagination,
        'grid-pagination-count-on-page': gridPaginationCountOnPage,
        'grid-pagination-min': gridPaginationMin
    }
}
</script>

<template>
    <div class="grid-pagination">
        <grid-pagination-pagination :count-page="20"></grid-pagination-pagination>
        <grid-pagination-count-on-page :totalCount="20"></grid-pagination-count-on-page>
        <grid-pagination-min class="grid-pagination-min"></grid-pagination-min>
    </div>
</template>

<style lang="sass" scoped>
.grid-pagination
    background: $white
    border-radius: $border-radius
    padding: 16px 24px
    font: $font-bold
    display: flex
    justify-content: space-between
    @media screen and (max-width: 768px)
        padding: 20px
        display: bloc

.grid-pagination-min
    display: none
    @media screen and (max-width: 768px)
        display: flex
</style>