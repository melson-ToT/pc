<template>
  <div class="box">
    <el-carousel :interval="3000" type="card">
      <el-carousel-item v-for="item in list" :key="item.id">
        <img :src="item.img" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          img: "https://so2.360tres.com/sdm/420_627_/t01d7bcc974f60cdc86.webp",
        },
        {
          id: 2,
          img: "https://so2.360tres.com/sdm/417_417_/t01f23fc63a8a833188.webp",
        },
        {
          id: 3,
          img: "https://so2.360tres.com/sdm/365_259_/t0168ced599efb911bc.webp",
        },
        {
          id: 4,
          img: "https://so2.360tres.com/sdm/420_207_/t013808ea0e0454bb7b.webp",
        },
      ],
    };
  },
};
</script>

<style lang="less">
.box {
  width: 100%;
  height: 100%;
  .el-carousel {
    width: 800px;
    height: 400px;
    margin: 50px auto 0;
    overflow: hidden;
    .el-carousel-item {
      // img {
      //   width: 800px;
      //   height: 400px;
      // }
    }
    .el-carousel__button {
      background: red;
    }
  }
}
</style>





