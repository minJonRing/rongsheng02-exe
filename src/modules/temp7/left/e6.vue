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
                color: ['#FFAB75', '#E45A00',],
                grid: {
                    top: 15,
                    left: 10,
                    right: 20,
                    bottom: 15,
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['', '', '5月11日', '', '6月20日', '7月10日', ''],
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        color: '#fff',
                        fontSize: 7
                    },
                    axisTick: {
                        lineStyle: {
                            width: 0
                        }
                    },
                }
                ,
                yAxis: {
                    type: 'value',
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        color: '#fff',
                        fontSize: 9
                    },
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    }
                }
                ,
                series: [
                    {
                        name: '一期',
                        type: 'line',
                        // stack: 'Total',
                        smooth: true,
                        lineStyle: {
                            width: 1
                        },
                        symbolSize: 2,
                        label: {
                            show: false,
                        },
                        data: [18, 38, 17, 70, 30, 90, 33]
                    },
                    {
                        name: '二期',
                        type: 'line',
                        // stack: 'Total',
                        smooth: true,
                        lineStyle: {
                            width: 1
                        },
                        symbolSize: 2,
                        label: {
                            show: false,
                        },
                        data: [12, 30, 15, 50, 35, 80, 58]
                    },

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
    height: 175px;
}
</style>