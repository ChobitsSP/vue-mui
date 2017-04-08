<template>
    <div class="mui-indexed-list" :style="{ height: height + 'px' }">
        <div class="mui-indexed-list-search mui-input-row mui-search">
            <input type="search" class="mui-input-clear mui-indexed-list-search-input" placeholder="搜索机场">
        </div>
        <div class="mui-indexed-list-bar">
            <a v-for="(cells, key) in groups" :key="key">{{ key }}</a>
        </div>
        <div class="mui-indexed-list-alert"></div>
        <div class="mui-indexed-list-inner">
            <div class="mui-indexed-list-empty-alert">没有数据</div>
            <ul class="mui-table-view">
                <template v-for="(cells, key) in groups">
                    <li :data-group="key" class="mui-table-view-divider mui-indexed-list-group">{{ key }}</li>
                    <li :data-value="cell.iata" :data-tags="cell.pinyin" v-for="cell in cells" :key="cell.iata" class="mui-table-view-cell mui-indexed-list-item">{{ cell.name }}</li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script>
    const mui = require('mui')
    require('./IndexList.js')

    const _ = require('lodash')
    const airports = require('src/data/airports.json')

    module.exports = {
        name: 'MuiIndexList',
        props: {
            height: {
                type: Number
            }
        },
        data() {
            return {
                items: []
            }
        },
        created() {
            airports.forEach(t => {
                t.key = t.pinyin[0].toUpperCase()
            })
            this.items = airports
        },
        mounted() {
            setTimeout(() => {
                mui(this.$el).indexedList()
            }, 0)
        },
        computed: {
            groups() {
                return _.groupBy(this.airports, t => t.key)
            },
            airports() {
                return this.items;
                return this.filterBy(this.items, this.q)
            }
        }
    }
</script>

<style>
    .mui-indexed-list {
        position: relative;
        border-top: solid 1px #e3e3e3;
        border-bottom: solid 1px #e3e3e3;
        overflow: hidden;
        background-color: #fafafa;
        height: 300px;
        cursor: default;
    }

    .mui-indexed-list-inner {
        margin: 0px;
        padding: 0px;
        overflow-y: auto;
        border: none;
    }

        .mui-indexed-list-inner::-webkit-scrollbar {
            width: 0px;
            height: 0px;
            visibility: hidden;
        }

        .mui-indexed-list-empty-alert,
        .mui-indexed-list-inner.empty ul {
            display: none;
        }

        .mui-indexed-list-inner.empty .mui-indexed-list-empty-alert {
            display: block;
        }

    .mui-indexed-list-empty-alert {
        padding: 30px 15px;
        text-align: center;
        color: #ccc;
        padding-right: 45px;
    }

    .mui-ios .mui-indexed-list-inner {
        width: calc(100% + 10px);
    }

    .mui-indexed-list-group,
    .mui-indexed-list-item {
        padding-right: 45px;
    }

    .mui-ios .mui-indexed-list-group,
    .mui-ios .mui-indexed-list-item,
    .mui-ios .mui-indexed-list-empty-alert {
        padding-right: 55px;
    }

    .mui-indexed-list-group {
        background-color: #f7f7f7;
    }

    .mui-indexed-list-group {
        padding-top: 3px;
        padding-bottom: 3px;
    }

    .mui-indexed-list-search {
        border-bottom: solid 1px #e3e3e3;
        z-index: 15;
    }

        .mui-indexed-list-search.mui-search:before {
            margin-top: -10px;
        }

        .mui-indexed-list-search input {
            border-radius: 0px;
            margin: 0px;
            background-color: #fafafa;
        }

    .mui-indexed-list-bar {
        width: 23px;
        background-color: lightgrey;
        position: absolute;
        height: 100%;
        z-index: 10;
        right: 0px;
        -webkit-transition: .2s;
    }

        .mui-indexed-list-bar a {
            display: block;
            text-align: center;
            font-size: 11px;
            padding: 0px;
            margin: 0px;
            line-height: 15px;
            color: #aaa;
        }

        .mui-indexed-list-bar.active {
            background-color: rgb(200,200,200);
        }

            .mui-indexed-list-bar.active a {
                color: #333;
            }

                .mui-indexed-list-bar.active a.active {
                    color: #007aff;
                }

    .mui-indexed-list-alert {
        position: absolute;
        z-index: 20;
        background-color: rgba(0, 0, 0, 0.5);
        width: 80px;
        height: 80px;
        left: 50%;
        top: 50%;
        margin-left: -40px;
        margin-top: -40px;
        border-radius: 40px;
        text-align: center;
        line-height: 80px;
        font-size: 35px;
        color: #fff;
        display: none;
        -webkit-transition: .2s;
    }

        .mui-indexed-list-alert.active {
            display: block;
        }
</style>