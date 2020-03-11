<script>
export default {
    props: ['title']
}
</script>

<template>
    <td>
        <span>{{title}}</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.70711 8.29289C3.31658 7.90237 2.68342 7.90237 2.29289 8.29289C1.90237 8.68342 1.90237 9.31658 2.29289 9.70711L7.29289 14.7071C7.68342 15.0976 8.31658 15.0976 8.70711 14.7071L13.7071 9.70711C14.0976 9.31658 14.0976 8.68342 13.7071 8.29289C13.3166 7.90237 12.6834 7.90237 12.2929 8.29289L9 11.5858V3C9 2.44771 8.55228 2 8 2C7.44772 2 7 2.44772 7 3V11.5858L3.70711 8.29289Z" fill="#CFD6DD"/>
        </svg>
    </td>
</template>

<style lang="sass" scoped>
td
    padding: 12px 12px
    flex: 1
    height: 16px
    display: flex

svg
    margin-left: 8px

svg.active
    fill: #3BA2CD

    path
        fill: #3BA2CD
</style>