<template>
  <div class="head">
    <router-link
      v-for="item in list"
      :key="item.id"
      :to="'/home' + item.router"
      tag="span"
      >{{ item.name }}</router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: "首页",
          router: "/film",
        },
        {
          id: 2,
          name: "管理",
          router: "/manage",
        },
        {
          id: 3,
          name: "客户",
          router: "/custom",
        },
        {
          id: 4,
          name: "数据",
          router: "/data",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.head {
  width: 100%;
  height: 150px;
  background: aquamarine;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  span {
    color: blue;
    font-size: 30px;
  }
  .router-link-active {
    color: red;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 50px;
      left: 0;
      width: 100%;
      height: 6px;
      border-radius: 3px;
      background: red;
    }
  }
}
</style>