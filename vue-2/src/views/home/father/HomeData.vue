<template>
  <div class="box1">
    <div id="box2"></div>
    <div id="box3"></div>
    <div id="box4"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    var myChart = echarts.init(document.getElementById("box2"));
    // 绘制图表
    myChart.setOption({
      title: {
        text: "柱形图",
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });

    var chartDom = document.getElementById("box3");
    var myChar = echarts.init(chartDom);
    var option;

    option = {
      title: [
        {
          text: "饼形图",
        },
      ],
      polar: {
        radius: [30, "80%"],
      },
      angleAxis: {
        max: 4,
        startAngle: 75,
      },
      radiusAxis: {
        type: "category",
        data: ["a", "b", "c", "d"],
      },
      tooltip: {},
      series: {
        type: "bar",
        data: [2, 1.2, 2.4, 3.6],
        coordinateSystem: "polar",
        label: {
          show: true,
          position: "middle",
          formatter: "{b}: {c}",
        },
      },
    };

    option && myChar.setOption(option);

    var chartDo = document.getElementById("box4");
    var myCha = echarts.init(chartDo);
    var optio;

    optio = {
      title: {
        text: "周访问数",
      },
      legend: {
        top: "bottom",
      },
    //   toolbox: {   右上角的按钮，干掉
    //     show: true,
    //     feature: {
    //       mark: { show: true },
    //       dataView: { show: true, readOnly: false },
    //       restore: { show: true },
    //       saveAsImage: { show: true },
    //     },
    //   },
      series: [
        {
          name: "Nightingale Chart",
          type: "pie",
          radius: [50, 250],
          center: ["50%", "50%"],
          roseType: "area",
          itemStyle: {
            borderRadius: 7,
          },
          data: [
            { value: 40, name: "星期 一" },
            { value: 38, name: "星期 二" },
            { value: 32, name: "星期 三" },
            { value: 30, name: "星期 四" },
            { value: 28, name: "星期 五" },
            { value: 26, name: "星期 六" },
            { value: 22, name: "星期 日" },
          ],
        },
      ],
    };

    optio && myCha.setOption(optio);
  },
};
</script>

<style lang="less" scoped>
.box1 {
  width: 100%;
  height: 100%;
  display: flex;
  #box2 {
    width: 500px;
    height: 500px;
  }
  #box3 {
    width: 500px;
    height: 500px;
  }
  #box4 {
    width: 700px;
    height: 600px;
  }
}
</style>