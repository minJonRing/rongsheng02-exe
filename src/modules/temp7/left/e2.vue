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
                color: ['#F2843C'],
                grid: {
                    left: '5%',
                    right: '5%',
                    top: '5%',
                    bottom: '25%'
                },
                xAxis: {
                    type: 'category',
                    data: new Array(43).fill('1 '),
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            width: 0
                        }
                    },
                    axisLabel: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    }
                },
                series: [
                    {
                        data: [64, 76, 86, 96, 101, 105, 109, 111, 112, 111, 109, 104, 96, 86, 76, 64, 55, 50, 45, 44, 45, 47, 54, 64, 75, 85, 89, 90, 88, 80, 65, 50, 33, 22, 16, 13, 14, 16, 23, 32, 43, 48, 50],
                        type: 'bar',
                        lineStyle: {
                            color: '#F2843C',
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