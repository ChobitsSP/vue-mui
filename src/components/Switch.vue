<template>
    <div class="mui-switch">
        <div class="mui-switch-handle"></div>
    </div>
</template>

<script>
    const mui = require('mui')

    module.exports = {
        name: 'MuiSwitch',
        props: {
            value: Boolean
        },
        mounted() {
            mui(this.$el)['switch']()
            this.$el.addEventListener('toggle', this.update)
            this.refresh(this.value)
        },
        methods: {
            update(event) {
                this.$emit('input', event.detail.isActive)
            },
            refresh(val) {
                const isActive = this.$el.classList.contains("mui-active")

                if (val !== isActive) {
                    mui(this.$el).switch().toggle()
                }
            }
        },
        beforeDestroy() {
            this.$el.removeEventListener('toggle', this.update)
        },
        watch: {
            'value': 'refresh'
        }
    }
</script>