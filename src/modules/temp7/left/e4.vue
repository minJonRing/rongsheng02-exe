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
                color: ['#F2843C', '#E45A00', '#AB5D2B', '#FDA772'],
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['50%', '80%'],
                        bottom: '12%',
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 40,
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 22, name: 'Search Engine' },
                            { value: 24, name: 'Direct' },
                            { value: 22, name: 'Email' },
                            { value: 32, name: 'Union Ads' },
                        ]
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