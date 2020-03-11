<script>
export default {
    props: ["text"]
}
</script>

<template>
    <span class="tooltip">
        <slot></slot>
        <span class="tooltip-text">{{text}}</span>
    </span>
</template>

<style lang="sass" scoped>
.tooltip
    position: relative

    .tooltip-text
        visibility: hidden
        background: #264564
        color: $white
        text-align: center
        border-radius: $border-radius
        padding: 4px 8px
        position: absolute
        z-index: 1
        top: -8px
        left: 50%
        transform: translate(-50%, -100%);

        font-size: 12px
        line-height: 16px

.tooltip:hover .tooltip-text
    visibility: visible
</style>