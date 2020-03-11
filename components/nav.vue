<script>
export default {
    data() {
        return {
            isApproval: true
        };
    }
}
</script>

<template>
    <div class="container">
        <div class="link-item">Credentials</div >
        <div class="item active">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="8" fill="#264564"/>
                <path d="M11.28 7.47L9.03 5.22C8.74 4.93 8.26 4.93 7.97 5.22C7.68 5.51 7.68 5.99 7.97 6.28L8.94 7.25H5.25C4.84 7.25 4.5 7.59 4.5 8C4.5 8.41 4.84 8.75 5.25 8.75H8.94L7.97 9.72C7.68 10.01 7.68 10.49 7.97 10.78C8.12 10.93 8.31 11 8.5 11C8.69 11 8.88 10.93 9.03 10.78L11.28 8.53C11.57 8.24 11.57 7.76 11.28 7.47Z" fill="white"/>
            </svg>
            <span>Credential requests</span>
        </div>
        <router-link to="/" class="sub-item" :class="{active: isApproval}" @click.native="isApproval = true">
            <ul>
                <li>Approval requested</li>
            </ul>
        </router-link>
        <router-link to="rejected" class="sub-item" :class="{active: !isApproval}" @click.native="isApproval = false">
            <ul>
                <li>Rejected requested</li>
            </ul>
        </router-link>
        <div class="item">
            <svg id="approved" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="8" fill="#546E7A"/>
                <path d="M7.17016 10.2502C6.99016 10.2502 6.81016 10.1802 6.67016 10.0602L5.00016 8.56021C4.71016 8.26021 4.72016 7.79021 5.01016 7.50021C5.28016 7.24021 5.70016 7.22021 6.00016 7.45021L7.16016 8.50021L9.99016 5.95021C10.3202 5.70021 10.7902 5.75021 11.0402 6.08021C11.2702 6.38021 11.2502 6.80021 10.9902 7.07021L7.66016 10.0702C7.53016 10.1802 7.35016 10.2502 7.17016 10.2502Z" fill="white"/>
            </svg>
            <span>Approved credentials</span>
        </div>
        <div class="item">
            <svg id="revoked" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="8" fill="#546E7A"/>
                <path d="M9.05994 7.99994L10.5299 6.52994C10.8199 6.23994 10.8199 5.75994 10.5299 5.46994C10.2399 5.17994 9.75994 5.17994 9.46994 5.46994L7.99994 6.93994L6.52994 5.46994C6.23994 5.17994 5.75994 5.17994 5.46994 5.46994C5.17994 5.75994 5.17994 6.23994 5.46994 6.52994L6.93994 7.99994L5.46994 9.46994C5.17994 9.75994 5.17994 10.2399 5.46994 10.5299C5.75994 10.8199 6.23994 10.8199 6.52994 10.5299L7.99994 9.06994L9.46994 10.5399C9.75994 10.8299 10.2399 10.8299 10.5299 10.5399C10.8199 10.2499 10.8199 9.76994 10.5299 9.47994L9.05994 7.99994Z" fill="white"/>
            </svg>
            <span>Revoked credentials</span>
        </div>
        <div class="link-item">Connections</div >
        <div class="item">
            <svg id="connections" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 3C6 3.39228 5.92471 3.76697 5.78779 4.11042L7.97152 6.02118C8.81201 5.38047 9.86157 5 11 5C11.5787 5 12.1343 5.0983 12.6513 5.2791L13.4488 3.57008C13.1718 3.29792 13 2.91902 13 2.5C13 1.67157 13.6716 1 14.5 1C15.3284 1 16 1.67157 16 2.5C16 3.32843 15.3284 4 14.5 4C14.4511 4 14.4027 3.99766 14.355 3.99308L13.5572 5.70252C15.0201 6.5749 16 8.17302 16 10C16 12.7614 13.7614 15 11 15C9.2302 15 7.67516 14.0805 6.78656 12.6932L3.99887 13.9321C3.99962 13.9547 4 13.9773 4 14C4 15.1046 3.10457 16 2 16C0.895431 16 0 15.1046 0 14C0 12.8954 0.895431 12 2 12C2.53982 12 3.02968 12.2139 3.38949 12.5615L6.17682 11.3227C6.06155 10.9014 6 10.4579 6 10C6 9.09996 6.23781 8.25546 6.65403 7.52591L4.47062 5.61543C4.03606 5.8603 3.53434 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3Z" fill="#546E7A"/>
            </svg>
            <span>Connections</span>
        </div>
        <div class="copyright">© Orbit Suite</div>
    </div>
</template>

<style lang="sass" scoped>
.container
    width: 248px
    font: $font
    color: $slate
    display: flex
    flex-direction: column
    background: $white
    box-shadow: 0px 4px 16px rgba(62, 89, 117, 0.1)
    min-height: 100vh

    .link-item
        padding: 32px 24px 16px
        color: $blueyGray
    
    .item
        padding: 16px 0 16px 24px
        font: $font-bold
        display: flex
        align-items: center

        svg
            margin-right: 12px
    
    .item.active, .item:hover
        background: $lilac

        svg#approved
            circle
                fill: #00A947
        
        svg#revoked
            circle
                fill: #D03C45
        
        svg#connections
            path
                fill: #264564
    
    .sub-item
        margin: 4px
        padding: 8px 0
        font: $font-bold
        border-radius: $border-radius
        padding: 16px 0
        display: flex
        justify-content: center
        text-decoration: none
        color: $slate

        ul
            margin: 0
            padding-left: 16px
    
    .sub-item.active, .sub-item:hover
        background: $paleGray
    
    .active, .item:hover, .sub-item:hover
        color: $dark
    
    .copyright
        margin: 24px
        margin-top: auto
</style>