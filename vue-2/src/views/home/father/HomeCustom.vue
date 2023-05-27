<template>
  <div class="father">
    <div class="shang"></div>
    <div class="xia">
      <ul></ul>
      <div class="box">

        <el-row :gutter="20">
          <el-col :span="6"
            ><div class="grid-content bg-purple" id="box1"></div
          ></el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple"></div
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
