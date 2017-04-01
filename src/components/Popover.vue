<template>
    <div class="mui-popover">
        <div class="mui-popover-arrow"></div>
        <slot></slot>
    </div>
</template>

<script>
    const mui = require('mui')

    module.exports = {
        name: 'MuiPopover',
        methods: {
            popover(status, anchor) {
                mui(this.$el).popover(status, anchor)
            }
        }
    }
</script>