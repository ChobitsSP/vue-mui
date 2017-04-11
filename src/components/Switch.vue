<template>
    <div class="mui-switch">
        <span>{{ value ? onText : offText }}</span>
        <div class="mui-switch-handle"></div>
    </div>
</template>

<script>
    const mui = require('mui')

    module.exports = {
        name: 'MuiSwitch',
        props: {
            value: Boolean,
            disabled: Boolean,
            offText: {
                type: String,
                default: 'OFF'
            },
            onText: {
                type: String,
                default: 'ON'
            }
        },
        mounted() {
            mui(this.$el)['switch']();
            this.$el.addEventListener('toggle', this.update);
            this.refresh(this.value);
        },
        methods: {
            update(event) {
                if (this.disabled) {
                    this.refresh(this.value)
                    return
                }
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

<style>
    .mui-switch.mui-active span {
        right: auto;
        left: 15px;
        color: #fff;
    }

    .mui-switch span {
        font-size: 13px;
        position: absolute;
        top: 3px;
        right: 11px;
        text-transform: uppercase;
        color: #999;
    }

    .mui-switch.mui-active:before {
        content: '';
    }

    .mui-switch:before {
        content: '';
    }
</style>