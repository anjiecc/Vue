<template>
    <div id="chart">
    
    </div>
</template>
<script>
import echarts from 'echarts';

export default {
    data() {

    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
           
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('chart'));
            // 绘制图表
            myChart.setOption({
                title: { text: 'ECharts 入门示例' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        }
    }
}
</script>
<style>
#chart{
    width: 100%;
    height: 100%;
}
</style>

