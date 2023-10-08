<template>
    <div ref="e1" class="e1"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    mounted() {
        this.$nextTick(() => {
            this.init()
        })

    },
    methods: {
        init() {
            const chartDom = this.$refs.e1;
            const myChart = echarts.init(chartDom);
            const option = {
                color: ['#FDA772', '#F2843C', '#E45A00', '#AB5D2B', '#D9711E'],
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        center: ['50%', '50%'],
                        bottom: '8%',
                        data: [
                            { value: 21, name: '21%' },
                            { value: 23, name: '23%' },
                            { value: 22, name: '22%' },
                            { value: 23, name: '23%' },
                            { value: 26, name: '26%' }
                        ],
                        roseType: 'radius',
                        label: {
                            fontSize: 6,
                            color: '#fff'
                        },
                        labelLine: {
                            lineStyle: {
                                color: '#29CCFD'
                            },
                            length2: 0
                        },
                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: function (idx) {
                            return Math.random() * 200;
                        }
                    }
                ]
            };

            myChart.setOption(option);

        }
    }
}
</script>

<style lang="scss" scoped>
.e1 {
    width: 100%;
    height: 133px;
}
</style>