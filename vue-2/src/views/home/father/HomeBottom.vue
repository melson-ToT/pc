<template>
  <div class="bott-sj">
    <ul>
      <li
        v-for="(item, index) in shujulist"
        :key="item.id"
        @click="active = index"
        :style="{ background: active === index ? '#eee' : '' }"
      >
        <span :style="{ color: active === index ? 'red' : '' }" >{{
          item.span
        }}</span>
      </li>
    </ul>
    <AaaA v-if="active === 0"/>
    <BbbB v-if="active === 1"/>
    <CccC v-if="active === 2"/>
    <DddD v-if="active === 3"/>
  </div>
</template>

<script>
import AaaA from "./ABCD/AaaA.vue";
import BbbB from "./ABCD/BbbB.vue";
import CccC from "./ABCD/CccC.vue";
import DddD from "./ABCD/DddD.vue";
export default {
  data() {
    return {
      shujulist: [
        {
          id: 1,
          span: "张非",
        },
        {
          id: 2,
          span: "小康",
        },
        {
          id: 3,
          span: "张浩",
        },
        {
          id: 4,
          span: "义军",
        },
      ],

      active: 0,
    };
  },
  components: {
    AaaA,
    BbbB,
    CccC,
    DddD,
  },
};
</script>

<style lang="less" scoped>
.bott-sj {
  width: 100%;
  height: calc(100% - 150px);
  background:#eee;
  display: flex;
  ul {
    width: 300px;
    height: 100%;
    background: #afafaf;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    li {
      width: 100%;
      height: calc(100% / 4);
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-size: 25px;
        color: #000;
      }
    }
  }
}
</style>