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
                    left: '15%',
                    top: '5%',
                    bottom: '30%'
                },
                xAxis: {
                    type: 'category',
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
                    axisLine: {
                        lineStyle: {
                            color: '#FDA772',
                        }
                    },
                    axisTick: {
                        lineStyle: {
                            width: 0
                        }
                    },
                    axisLabel: {
                        color: '#fff'
                    }
                },
                yAxis: {
                    type: 'value',
                    splitLine: {
                        lineStyle: {
                            color: '#FDA772',
                        }
                    },
                    axisLabel: {
                        color: '#fff'
                    }
                },
                series: [
                    {
                        data: [50, 40, 60, 70, 50, 80, 60, 100, 40],
                        type: 'line',
                        label: {
                            show: false,
                        },
                        itemStyle: {

                            color: '#E45A00',
                        },
                        lineStyle: {
                            color: '#E45A00',
                            width: 2.5
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
    height: 209px;
}
</style>