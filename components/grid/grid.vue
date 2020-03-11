<script>
import gridHead from './gridHead';
import gridRow from './gridRow';
import gridPagination from './pagination/gridPagination';

export default {
    components: {
        'grid-head': gridHead,
        'grid-row': gridRow,
        'grid-pagination': gridPagination,
    },
    props: ["gridData"],
    data() {
        return {
            rows: []
        };
    },
    created() {
        this.getData();
    },
    watch: {
        $route: 'getData'
    },
    methods: {
        getData() {
            if ( this.gridData == "credential_approval" ) {
                this.rows = [
                    {
                        id: 1,
                        type: 'Birth certificate',
                        did: 'did:sidetree:M7EAoYdz2D4GNgTEU9xdeQ',
                        date: '21.02.2020, 13:52'
                    },
                    {
                        id: 2,
                        type: 'Passport',
                        did: 'did:sidetree:2KLJysUoKpG7a5DFy4D7xh',
                        date: '21.02.2020, 10:24'
                    },
                    {
                        id: 3,
                        type: 'Driver’s license',
                        did: 'did:sidetree:G6FRjUds5S3DZaQWE8fdaD',
                        date: '20.02.2020, 22:13'
                    },
                    {
                        id: 4,
                        type: 'Diploma',
                        did: 'did:sidetree:1HYEgfRtKhI8s5KOg5D7dc',
                        date: '20.02.2020, 12:45'
                    },
                    {
                        id: 5,
                        type: 'Custom',
                        did: 'did:sidetree:3FJAuwFpJaQ9a4LAu5S6zf',
                        date: '19.02.2020, 08:20'
                    },
                    {
                        id: 6,
                        type: 'Birth certificate',
                        did: 'did:sidetree:M7EAoYdz2D4GNgTEU9xdeQ',
                        date: '18.02.2020, 13:52'
                    },
                    {
                        id: 7,
                        type: 'Passport',
                        did: 'did:sidetree:2KLJysUoKpG7a5DFy4D7xh',
                        date: '17.02.2020, 10:24'
                    },
                    {
                        id: 8,
                        type: 'Driver’s license',
                        did: 'did:sidetree:G6FRjUds5S3DZaQWE8fdaD',
                        date: '16.02.2020, 22:13'
                    },
                    {
                        id: 9,
                        type: 'Diploma',
                        did: 'did:sidetree:1HYEgfRtKhI8s5KOg5D7dc',
                        date: '15.02.2020, 12:45'
                    },
                    {
                        id: 10,
                        type: 'Custom',
                        did: 'did:sidetree:3FJAuwFpJaQ9a4LAu5S6zf',
                        date: '17.02.2020, 10:24'
                    },
                    {
                        id: 11,
                        type: 'Birth certificate',
                        did: 'did:sidetree:M7EAoYdz2D4GNgTEU9xdeQ',
                        date: '16.02.2020, 22:13'
                    },
                    {
                        id: 12,
                        type: 'Passport',
                        did: 'did:sidetree:2KLJysUoKpG7a5DFy4D7xh',
                        date: '15.02.2020, 12:45'
                    },
                    {
                        id: 13,
                        type: 'Driver’s license',
                        did: 'did:sidetree:G6FRjUds5S3DZaQWE8fdaD',
                        date: '18.02.2020, 13:52'
                    }
                ];
            }
            else {
                this.rows = [
                    {
                        id: 1,
                        type: 'Birth certificate',
                        did: 'did:sidetree:M7EAoYdz2D4GNgTEU9xdeQ',
                        date: '21.02.2020, 13:52'
                    }
                ];
            }
        }
    }
}
</script>

<template>
    <div>
        <table>
            <th>
                <grid-head class="column-type" title='Credential type'></grid-head>
                <grid-head class="column-did" title='Requestor’s DID'></grid-head>
                <grid-head class="column-date" title='Date and time of request'></grid-head>
            </th>
            <grid-row
                v-for="row in rows"
                v-bind:key="row.id"
                v-bind:row="row"
            ></grid-row>
            <tr>
                <td>
                    <grid-pagination class="grid-pagination"></grid-pagination>
                </td>
            </tr>
        </table>
    </div>
</template>

<style lang="sass" scoped>
table
    width: 100%
    font: $font
    color: $dark
    white-space: nowrap
    @media screen and (max-width: 768px)
        border-spacing: 0

/deep/ tr
    display: flex
    padding: 8px 12px
    @media screen and (max-width: 768px)
        flex-direction: column
        padding: 6px 8px
        border-radius: 0
    background: $white

    box-shadow: inset 0px -1px 0px #E7EAEE
    border-radius: 4px 4px 0px 0px

/deep/ tr:nth-last-of-type(2)
    box-shadow: none
    border-radius: 0px 0px 4px 4px
    @media screen and (max-width: 768px)
        border-radius: 0
        box-shadow: inset 0px -1px 0px #E7EAEE

/deep/ tr:last-of-type
    margin-top: 4px
    box-shadow: none
    @media screen and (max-width: 768px)
        margin-top: 0

/deep/ td
    padding: 8px 12px
    @media screen and (max-width: 768px)
        padding: 6px 8px
    flex: 1

th
    display: flex
    @media screen and (max-width: 768px)
        display: none
    font: $font-bold
    line-height: 16px
    padding: 12px 12px
    text-align: start
    background: $white
    margin-bottom: 4px
    border-radius: $border-radius

/deep/ svg
    vertical-align: middle

/deep/ .column-type
    min-width: 130px
    font: $font-bold

/deep/ .column-did
    min-width: 300px

/deep/ .column-date
    min-width: 220px
</style>