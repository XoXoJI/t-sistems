<script>
export default {
    props: {
        totalCount: Number
    },
    data() {
        return {
            countOnPage: 13
        }
    }
}
</script>

<template>
    <div class="count-on-page">
        <span>Items per page</span>
        <select>
            <option v-for="count in totalCount" :key="count" :selected="count==countOnPage">{{count}}</option>
        </select>
    </div>
</template>

<style lang="sass" scoped>
.count-on-page
    min-width: 170px
    @media screen and (max-width: 768px)
        display: none

span
    font-weight: normal
    line-height: 20px
    height: 20px
    color: $blueyGray

select
    background: $lilac
    border-radius: $border-radius
    padding: 6px 8px
    margin-left: 16px
    font: $font-bold
    line-height: 16px
    color: $dusk
</style>