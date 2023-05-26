<template>
    <div>
      <HomeNav />
       <HomeManage />
       <HomeCustom />
       <HomeData />
    </div>
</template>

<script>
import HomeNav from './HomeNav.vue'
import HomeManage from './HomeManage.vue'
import HomeCustom from './HomeCustom.vue'
import HomeData from './HomeData.vue'


export default {
    components:{
        HomeNav,
        HomeManage,
        HomeCustom,
        HomeData,
    }
};
</script>

<style lang="less" scoped>
div {
    width: 100%;
    height: 100%;
}

</style>