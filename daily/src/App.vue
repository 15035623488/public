<template>
  <div id="app">
    <mt-tabbar v-model="selected" fixed="" class="me-tabbar-wzys"  id="one">
      <mt-tab-item id="1">
        <img slot="icon" v-if="!(selected==='1')" src="../images/sy1.png">
        <img slot="icon" v-if="selected==='1'" src="../images/sy0.png">
        <span :style="{color:(selected ==1 ? '#ff4891':'#000')}">首页</span>
      </mt-tab-item>
      <mt-tab-item id="2">
        <img slot="icon" v-if="!(selected==='2')" src="../images/fl1.png">
        <img slot="icon" v-if="selected==='2'" src="../images/fl0.png">
        <span :style="{color:(selected==2 ? '#ff4891':'#000')}">分类</span>
      </mt-tab-item>
      <mt-tab-item id="3">
        <img slot="icon" v-if="!(selected==='3')" src="../images/znz1.png">
        <img slot="icon" v-if="selected==='3'" src="../images/znz0.png">
        <span :style="{color:(selected==3 ? '#ff4891':'#000')}">发现</span>
      </mt-tab-item>
      <mt-tab-item id="4">
        <img slot="icon" v-if="!(selected==='4')" src="../images/gwc1.png">
        <img slot="icon" v-if="selected==='4'" src="../images/gwc0.png">
        <span :style="{color:(selected==4 ? '#ff4891':'#000')}">购物车</span>
      </mt-tab-item>
      <mt-tab-item id="5">
        <img slot="icon" v-if="!(selected==='5')" src="../images/wd1.png">
        <img slot="icon" v-if="selected==='5'" src="../images/wd0.png">
        <span :style="{color:(selected==5 ? '#ff4891':'#000')}">我的</span>
      </mt-tab-item>
    </mt-tabbar>
    <router-view/>
    <!--  人生自闭中   -->
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return{
        selected:'1',
      }
    },
    mounted(){
      window.addEventListener('load', () => { // 滚动事件变为 scroll
        if (this.$route.path !== '/HelloWorld') { // /print 表示首页
          this.$router.replace('/HelloWorld') // 切换到首页
        }
      })
    },
    watch:{
      selected:function (now,old) {
        switch (now) {
          case '1':
            this.$router.push({
              path:'/HelloWorld'
            })
            this.show_img=true
            break;
          case '2':
            this.$router.push({
              path:'/classification'
            })
            break;
          case '3':
            this.$router.push({
              path:'/found'
            })
            break;
          case '4':
            this.$router.push({
              path:'/shoppingCart'
            })
            break;
          case '5':
            this.$router.push({
              path:'/my'
            })
            break;
        }
      }
    }

  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/

  }

  .page-tabbar {
    overflow: hidden;
    height: 100vh;

  }
  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
  *{
    padding:0px;
    margin: 0px;
  }
  .me-tabbar-wzys{

  }
</style>
