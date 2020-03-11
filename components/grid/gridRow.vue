<script>
import tooltip from '../tooltip';

export default {
    props: ['row'],
    components: {
        tooltip
    }
}
</script>

<template>
    <tr>
        <td class="column-type">{{row.type}}</td>
        <td class="column-did">
            <span>{{row.did}}</span>
            <tooltip text="Copy DID to clipboard">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3C2 1.89543 2.89543 1 4 1H9C10.1046 1 11 1.89543 11 3H4V12C2.89543 12 2 11.1046 2 10V3Z" fill="#CFD6DD"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 4C5.89543 4 5 4.89543 5 6V13C5 14.1046 5.89543 15 7 15H12C13.1046 15 14 14.1046 14 13V6C14 4.89543 13.1046 4 12 4H7ZM7 6H12V13H7V6Z" fill="#CFD6DD"/>
                </svg>
            </tooltip>
            <svg class="arrow-more" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 2.29289C4.90237 2.68342 4.90237 3.31658 5.29289 3.70711L9.58579 8L5.29289 12.2929C4.90237 12.6834 4.90237 13.3166 5.29289 13.7071C5.68342 14.0976 6.31658 14.0976 6.70711 13.7071L11.7071 8.70711C12.0976 8.31658 12.0976 7.68342 11.7071 7.29289L6.70711 2.29289C6.31658 1.90237 5.68342 1.90237 5.29289 2.29289Z" fill="#CFD6DD"/>
            </svg>
        </td>
        <td class="column-date">{{row.date}}</td>
    </tr>
</template>

<style lang="sass" scoped>
.column-did .tooltip svg
    visibility: hidden

.column-did:hover .tooltip
    svg
        visibility: visible
    
    svg:hover
        fill: #3BA2CD

        path
            fill: #3BA2CD

svg.arrow-more
    display: none
    float: right
    margin-right: 8px
    @media screen and (max-width: 768px)
        display: initial

@media screen and (max-width: 768px)
    .tooltip
        display: none
</style>