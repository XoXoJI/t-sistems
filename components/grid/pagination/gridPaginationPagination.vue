<script>
export default {
    props: {
        countPage: Number
    },
    data() {
        return {
            currentPage: 1
        };
    },
    computed: {
        pages() {
            let pages = [];

            if(this.countPage <= 10) {
                for(let i = 1; i <= this.countPage; i++) {
                    pages.push(i);
                }
            }
            else {
                if(this.currentPage < 6) {
                    pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                }
                else {
                    if(this.countPage - this.currentPage < 5) {
                        for(let i = this.countPage - 9; i <= this.countPage; i++) {

                        }
                    }
                    for(let i = 0; i < 10; i++) {
                        pages.push(this.currentPage - 5 + j);
                    }
                }
            }

            return pages;
        }
    }
}
</script>

<template>
    <div class="pagination">
        <span v-for="page in pages" :key="page" :class="{current: page == currentPage}">
            {{page}}
        </span>
        <span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 2.29289C4.90237 2.68342 4.90237 3.31658 5.29289 3.70711L9.58579 8L5.29289 12.2929C4.90237 12.6834 4.90237 13.3166 5.29289 13.7071C5.68342 14.0976 6.31658 14.0976 6.70711 13.7071L11.7071 8.70711C12.0976 8.31658 12.0976 7.68342 11.7071 7.29289L6.70711 2.29289C6.31658 1.90237 5.68342 1.90237 5.29289 2.29289Z" fill="#3E5975"/>
            </svg>
        </span>
        <span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 3.70711C6.90237 3.31658 6.90237 2.68342 7.29289 2.29289C7.68342 1.90237 8.31658 1.90237 8.70711 2.29289L13.7071 7.29289C14.0976 7.68342 14.0976 8.31658 13.7071 8.70711L8.70711 13.7071C8.31658 14.0976 7.68342 14.0976 7.29289 13.7071C6.90237 13.3166 6.90237 12.6834 7.29289 12.2929L11.5858 8L7.29289 3.70711ZM2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L8.70711 7.29289C9.09763 7.68342 9.09763 8.31658 8.70711 8.70711L3.70711 13.7071C3.31658 14.0976 2.68342 14.0976 2.29289 13.7071C1.90237 13.3166 1.90237 12.6834 2.29289 12.2929L6.58579 8L2.29289 3.70711Z" fill="#3E5975"/>
            </svg>
        </span>
    </div>
</template>

<style lang="sass" scoped>
.pagination
    color: $dusk
    min-width: 400px
    @media screen and (max-width: 768px)
        display: none

span
    display: inline-block
    width: 32px
    height: 32px
    line-height: 32px
    text-align: center

.current
    background: $dusk
    border-radius: 50%
    color: $white
</style>