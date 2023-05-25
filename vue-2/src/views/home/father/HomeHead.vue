<template>
  <div>
    <span v-for="item in list" :key="item.id">{{ item.name }}</span>
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
        },
        {
          id: 2,
          name: "管理",
        },
        {
          id: 3,
          name: "客户",
        },
        {
          id: 4,
          name: "数据",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
div {
  width: 100%;
  height: 150px;
  background: aquamarine;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  span {
    color: #afafaf;
    font-size: 30px;
  }
}
</style>