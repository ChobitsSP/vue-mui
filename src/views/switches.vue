<template>
    <div class="mui-content">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <span>状态：{{ value }}</span>
                <mui-switch v-model="value"></mui-switch>
            </li>
            <li class="mui-table-view-cell">
                <span>状态：{{ value }}</span>
                <mui-switch class="mui-switch-mini" v-model="value"></mui-switch>
            </li>
            <li class="mui-table-view-cell">
                <span>状态：{{ value }}</span>
                <mui-switch class="mui-switch-blue" on-text="开启" off-text="关闭" v-model="value"></mui-switch>
            </li>
            <li class="mui-table-view-cell">
                <span>状态：{{ value }}</span>
                <mui-switch class="mui-switch-mini mui-switch-blue" v-model="value" disabled></mui-switch>
            </li>
        </ul>
    </div>
</template>

<script>
    module.exports = {
        data() {
            return {
                value: true
            }
        },
        components: {
            MuiSwitch: require('components/Switch')
        }
    }
</script>