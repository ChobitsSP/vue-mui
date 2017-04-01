<template>
    <div class="mui-slider">
        <div class="mui-slider-group mui-slider-loop">
            <div class="mui-slider-item mui-slider-item-duplicate" @click="$emit('click', last)">
                <img :src="last.img" />
            </div>
            <div class="mui-slider-item" v-for="item in items" @click="$emit('click', item)">
                <img :src="item.img" />
            </div>
            <div class="mui-slider-item mui-slider-item-duplicate" @click="$emit('click', first)">
                <img :src="first.img" />
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
                this.SetInterval(this.interval)
            })
        },
        methods: {
            SetInterval(val) {
                //获得slider插件对象
                const gallery = mui(this.$el)

                gallery.slider({
                    interval: val   //自动轮播周期，若为0则不自动播放，默认为0；
                })
            }
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
        },
        watch: {
            'interval': function (val) {
                this.SetInterval(val)
            }
        }
    }
</script>