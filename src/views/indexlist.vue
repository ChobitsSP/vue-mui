<template>
    <div class="mui-content">
        <index-list style="height:1000px;"></index-list>
    </div>
</template>

<script>
    module.exports = {
        data() {

        },
        mounted() {
            this.$nextTick(() => {

            })
        },
        components: {
            IndexList: require('components/IndexList')
        }
    }
</script>

<style>
    html,
    body {
        height: 100%;
        overflow: hidden;
    }

    .mui-bar {
        -webkit-box-shadow: none;
        box-shadow: none;
    }
</style>