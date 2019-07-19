<template>
  <div class="box">
    <div class="center">发现</div>
    <div class="page-navbar">
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1">精选</mt-tab-item>
        <mt-tab-item id="2">快手食谱</mt-tab-item>
        <mt-tab-item id="3">甜点饮品</mt-tab-item>
        <mt-tab-item id="4">生活百科</mt-tab-item>
      </mt-navbar>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'found',
    data (){
      return {
        selected: '1'
      }
    },
    watch:{
      selected:function(a,b){
        console.log(a,b)
        switch (a) {
          case'1':
            this.$router.push({path:'/one',query:{id:1}})
            break;
          case'2':
            this.$router.push({
              path:'/two'
            })
            break;
          case'3':
            this.$router.push({
              path:'/three'
            })
            break;
          case'4':
            this.$router.push({
              path:'/four'
            })
            break;
        }
      }
    },
    methods: {

    }
  }
</script>
<style scoped>
  *{margin:0 auto;padding:0;font-family:"微软雅黑";}
  .box{
    width:100%;
  }
  .center{
    margin: 3px auto;
    width: 100%;
    height: 100%;
    line-height: 30px;
    text-align: center;
    font-family: '微软雅黑';
    font-weight: bold;
  }
  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 1px solid #ff4891 !important;
    color: #ff4891 !important;
    margin-bottom: -3px;
  }
</style>
