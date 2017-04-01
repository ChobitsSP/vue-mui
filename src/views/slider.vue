<template>
    <div class="mui-content">
        <mui-slider :images="images" :interval="5000"></mui-slider>
    </div>
</template>

<script>
    module.exports = {
        data() {
            return {
                images: []
            }
        },
        created() {
            this.images.push('http://www.dcloud.io/hellomui/images/yuantiao.jpg');
            this.images.push('http://www.dcloud.io/hellomui/images/shuijiao.jpg');
            this.images.push('http://www.dcloud.io/hellomui/images/muwu.jpg');
        },
        components: {
            MuiSlider: require('components/Slider')
        }
    }
</script>