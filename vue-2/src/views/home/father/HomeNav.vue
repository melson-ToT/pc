<template>
    <div>
      <HomeHead />
      <HomeBottom />
    </div>
</template>

<script>
import HomeHead from './HomeHead.vue'
import HomeBottom from './HomeBottom.vue'
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