<template>
    <div class="mui-slider">
        <div class="mui-slider-group mui-slider-loop">
            <div class="mui-slider-item mui-slider-item-duplicate">
                <a :href="last.link">
                    <img :src="last.img" />
                </a>
            </div>
            <div class="mui-slider-item" v-for="item in items">
                <a :href="item.link">
                    <img :src="item.img" />
                </a>
            </div>
            <div class="mui-slider-item mui-slider-item-duplicate">
                <a :href="first.link">
                    <img :src="first.img" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    const mui = require('mui')

    module.exports = {
        name: 'MuiSlider',
        props: {
            images: {
                type: Array,
                default: []
            },
            interval: {
                type: Number,
                default: 0
            }
        },
        mounted() {
            this.$nextTick(() => {
                //获得slider插件对象
                var gallery = mui(this.$el);
                gallery.slider({
                    interval: this.interval//自动轮播周期，若为0则不自动播放，默认为0；
                });
            })
        },
        computed: {
            items() {
                let arr = [];

                arr = this.images.map(t => {
                    return {
                        img: t,
                        link: '#'
                    }
                })

                return arr;
            },
            first() {
                return this.items[0]
            },
            last() {
                return this.items[this.items.length - 1]
            }
        }
    }
</script>