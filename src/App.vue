<template>
    <div id="app">
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <h1 class="mui-title">{{ title }}</h1>
        </header>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    module.exports = {
        data() {
            return {
                title: null
            }
        },
        created() {
            this.title = this.$route.meta.title
        },
        watch: {
            '$route': function ($route) {
                this.title = $route.meta.title
            }
        }
    }
</script>