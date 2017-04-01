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
            popover(val) {
                mui(this.$el).popover(val ? 'show' : 'hide')
            }
        }
    }
</script>