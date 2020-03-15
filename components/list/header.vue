<script>
export default {
    props: ['title', 'subtitle']
}
</script>

<template>
    <div class="header">
        <h2>{{title}}</h2>
        <div class="subhead">
            <slot class="ico"></slot>
            <span class="subtitle">{{subtitle}}</span>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.header
    white-space: nowrap
    font: $font
    @media screen and (max-width: 768px)
        padding: 24px 16px
        background: $white

    h2
        font-weight: bold
        font-size: 24px
        line-height: 32px
        margin: 4px 0
        color: $dark

    .subhead
        font-size: 14px
        line-height: 20px
        color: $slate
        display: flex
        margin: 4px 0 0

    .subtitle
        margin-left: 8px
</style>