<script>
export default {
    
}
</script>

<template>
    <div class="search">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.5723 17 13.0236 16.4816 14.1922 15.6064L19.293 20.7072C19.6835 21.0977 20.3167 21.0977 20.7072 20.7072C21.0977 20.3167 21.0977 19.6835 20.7072 19.293L15.6064 14.1922C16.4816 13.0236 17 11.5723 17 10C17 6.13401 13.866 3 10 3ZM5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10Z" fill="#8697A9"/>
        </svg>
        <input type="text" placeholder="Search">
    </div>
</template>

<style lang="sass" scoped>
.search
    position: relative
    height: 40px

    input
        background: $lilac
        border-radius: $border-radius
        padding-left: 40px
        height: 40px
        box-sizing: border-box
        width: 100%

    input::placeholder
        font-family: Helvetica Neue
        font-size: 14px
        line-height: 20px
        letter-spacing: 0.03em
        color: $blueyGray
    
    svg
        position: absolute
        top: 8px
        left: 8px
</style>