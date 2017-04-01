<template>
    <div class="mui-content">
        <button @click="show">show</button>
        <mui-popover ref="popover">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell" v-for="i in 5">
                    Item{{ i }}
                </li>
            </ul>
        </mui-popover>
    </div>
</template>

<script>
    module.exports = {
        data() {
            return {
                value: true,
            }
        },
        methods: {
            show() {
                this.$refs.popover.popover(true)
            }
        },
        components: {
            MuiPopover: require('components/Popover')
        }
    }
</script>