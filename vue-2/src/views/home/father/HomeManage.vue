<template>
  <div class="father">
    <div class="shang"></div>
    <div class="xia">
      <ul></ul>
      <div class="box">
        <el-row :gutter="20">
          <el-col :span="12"
            ><div class="grid-content bg-purple" id="box3"></div
          ></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6"
            ><div class="grid-content bg-purple" id="box1"></div
          ></el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple" id="box2"></div
          ></el-col>
          <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    var myChart = echarts.init(document.getElementById("box1"));
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
    var chartDom = document.getElementById("box2");
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

    var chartDo = document.getElementById("box3");
    var myCha = echarts.init(chartDo);
    var opti;

    opti = {
      title: {
        text: "折现图",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      // toolbox: {  删除点击下载的图标
      //   feature: {
      //     saveAsImage: {},
      //   },
      // },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Email",
          type: "line",
          stack: "Total",
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "Union Ads",
          type: "line",
          stack: "Total",
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: "Video Ads",
          type: "line",
          stack: "Total",
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: "Direct",
          type: "line",
          stack: "Total",
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: "Search Engine",
          type: "line",
          stack: "Total",
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    };

    opti && myCha.setOption(opti);
  },
};
</script>

<style lang="less" scoped>
.father {
  width: 100%;
  height: 100%;
  .shang {
    width: 100%;
    height: 150px;
    background: red;
  }
  .xia {
    width: 100%;
    height: calc(100% - 150px);
    display: flex;
    ul {
      width: 300px;
      height: 100%;
      background: blue;
    }
    .box {
      width: calc(100% - 300px);
      height: 100%;
      padding: 20px;
      .el-row {
        margin: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .el-col {
        border-radius: 4px;
      }
      .bg-purple-dark {
        background: #99a9bf;
      }
      .bg-purple {
        background: #d3dce6;
      }
      .bg-purple-light {
        background: #e5e9f2;
      }
      .grid-content {
        border-radius: 4px;
        height: 360px;
      }
      .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
      }
    }
  }
}
</style>
