<template>
    <div class="mui-content">
        <index-list :height="wrapperHeight"></index-list>
    </div>
</template>

<script>
    const airports = require('src/data/airports.json')

    module.exports = {
        data() {
            return {
                wrapperHeight: 0
            }
        },
        mounted() {
            this.wrapperHeight = document.body.offsetHeight - 44
        },
        components: {
            IndexList: require('components/IndexList.vue')
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