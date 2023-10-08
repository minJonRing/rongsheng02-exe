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
                grid: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
                color: ['#E45A00'],
                radar: {
                    indicator: [
                        { name: '', max: 100 },
                        { name: '', max: 100 },
                        { name: '', max: 100 },
                        { name: '', max: 100 },
                        { name: '', max: 100 },
                        { name: '', max: 100 },
                    ],
                    splitArea: {
                        areaStyle: {
                            color: 'transparent',
                        }
                    },
                    axisLine: {
                        show: false,
                    },
                    splitLine: {
                        lineStyle: {
                            color: "#fff",
                        }
                    },
                    axisName: {
                        show: false,
                    },
                },
                series: {
                    name: 'Budget vs spending',
                    type: 'radar',
                    symbolSize: 3,
                    areaStyle: {
                        opacity: 1
                    },
                    data: [
                        {
                            value: [10, 100, 60, 100, 80, 100],
                            name: 'Allocated Budget',
                            itemStyle: {
                                borderColor: '#fff'
                            }
                        },
                    ]
                }

            };

            myChart.setOption(option);

        }
    }
}
</script>

<style lang="scss" scoped>
.e1 {
    width: 100%;
    height: 249px;
    transform-origin: center center;
    transform: rotate(30deg);
}
</style>