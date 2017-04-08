<template>
    <div class="mui-content">
        <index-list ref="wrapper" :height="wrapperHeight"></index-list>
    </div>
</template>

<script>
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