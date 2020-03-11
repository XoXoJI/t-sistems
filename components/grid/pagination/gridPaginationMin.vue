<script>
export default {
    
}
</script>

<template>
    <span class="pagination-min">
        <span class="button-previos">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7071 13.7071C11.0976 13.3166 11.0976 12.6834 10.7071 12.2929L6.41421 8L10.7071 3.70711C11.0976 3.31658 11.0976 2.68342 10.7071 2.29289C10.3166 1.90237 9.68342 1.90237 9.29289 2.29289L4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711L9.29289 13.7071C9.68342 14.0976 10.3166 14.0976 10.7071 13.7071Z" fill="#3E5975"/>
            </svg>
            <span>Previos</span>
        </span>
        <span class="button-next">
            <span>Next</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 2.29289C4.90237 2.68342 4.90237 3.31658 5.29289 3.70711L9.58579 8L5.29289 12.2929C4.90237 12.6834 4.90237 13.3166 5.29289 13.7071C5.68342 14.0976 6.31658 14.0976 6.70711 13.7071L11.7071 8.70711C12.0976 8.31658 12.0976 7.68342 11.7071 7.29289L6.70711 2.29289C6.31658 1.90237 5.68342 1.90237 5.29289 2.29289Z" fill="#3E5975"/>
            </svg>
        </span>
    </span>
</template>

<style lang="sass" scoped>
.pagination-min
    display: flex
    height: 32px
    font: $font-bold
    color: $dusk
    border: $border-dusk
    box-sizing: border-box
    border-radius: 8px
    margin: auto

span[class|="button"]
    display: flex
    width: 112px
    justify-content: center
    align-items: center

.button-previos
    border-right: $border-dusk

    svg
        margin-right: 4px

.button-next svg
    margin-left: 4px
</style>