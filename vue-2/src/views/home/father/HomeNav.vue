<template>
    <div>
      <HomeBottom />
      <HomeHead />
    </div>
</template>

<script>
import HomeHead from './HomeBottom.vue'
import HomeBottom from './HomeHead.vue'
export default {
    components:{
        HomeHead,
        HomeBottom,
    }
};
</script>

<style lang="less" scoped>
div {
    width: 100%;
    height: 100%;
}

</style>