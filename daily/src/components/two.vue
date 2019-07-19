<template>
  <div class="box">

  </div>
</template>

<script>
    export default {
        name: "two",
      data (){
        return {
          actived: 0,
          selected: '1'
        }
      },
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
  }
  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 1px solid #ff4891 !important;
    color: #ff4891 !important;
    margin-bottom: -3px;
  }
</style>
