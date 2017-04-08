<template>
    <div class="mui-content">
        <index-list></index-list>
    </div>
</template>

<script>
    module.exports = {
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