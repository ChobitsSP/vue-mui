<template>
    <div class="mui-content">
        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell">
                定时轮播
                <mui-switch v-model="value"></mui-switch>
            </li>
        </ul>
        <mui-slider :images="images" :interval="interval"></mui-slider>
    </div>
</template>

<script>
    module.exports = {
        data() {
            return {
                images: [],
                value: true,
            }
        },
        created() {
            this.images.push('http://www.dcloud.io/hellomui/images/shuijiao.jpg');
            this.images.push('http://www.dcloud.io/hellomui/images/muwu.jpg');
            this.images.push('http://www.dcloud.io/hellomui/images/cbd.jpg');
            this.images.push('http://www.dcloud.io/hellomui/images/yuantiao.jpg');
        },
        computed: {
            interval() {
                return this.value ? 2000 : 0
            }
        },
        components: {
            MuiSlider: require('components/Slider'),
            MuiSwitch: require('components/Switch')
        }
    }
</script>