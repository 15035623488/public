<template>
  <div id="hi"><div >
    <div class="box" :class="scrollTop>=170?'bg-write':''">
      <div class="heads" >
        <div class="logo">
          <img src="../assets/img_20161108170831264.png" alt="">
          <div class="title-address">太原市小...</div>
          <img src="../assets/down.png" alt="" id="down">
        </div>
        <div class="search" @click="search">
          <div style="margin-left: 10px"><img src="../assets/sou.png" alt="">蓝莓</div>
        </div>
      </div>
    </div>
    <div>
      <mt-swipe :auto="4000" class="items">
        <mt-swipe-item class="item"><img src="../assets/微信图片_20190710102402.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item class="item"><img src="../assets/微信图片_201907101024021.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item class="item"><img src="../assets/微信图片_201907101024022.jpg" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="heng">
      <div v-for="(item,index) in arr" class="heng-item" :class="activeClass == index ? 'bg':''" :key="index" @click="getItme(index)">{{item.title}}</div>
    </div>
    <div class="down" @click="down">
      <div class="down-box">
      </div>
    </div>
    <div class="pop" v-show="is">
      <div class="header">
        <div class="pop-title">全部品类</div>
        <div class="cha" @click="cha"></div>
      </div>
      <div class="pop-list" >
        <div class="list-item" v-for="(item,index) in arr" :key="index" :style="{ 'background-image': 'url(' + item.src + ')'}">
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
    <div class="san">
      <div><img src="../assets/img_20170627185311186.png" alt=""> 优鲜严选</div>
      <div><img src="../assets/img_20170627184654084.png" alt=""> 安心检测</div>
      <div><img src="../assets/img_20170718194948016.png" alt=""> 赔付保障</div>
    </div>
    <div class="five-box">
      <div class="five">
        <img src="../assets/1.png" alt=""><br><span>0元吃水果</span>
      </div>
      <div class="five">
        <img src="../assets/2.png" alt=""><br><span>水果美容院</span>
      </div>
      <div class="five">
        <img src="../assets/3.png" alt=""><br><span>加入会员</span>
      </div>
      <div class="five">
        <img src="../assets/4.png" alt=""><br><span>本周上新</span>
      </div>
      <div class="five">
        <img src="../assets/5.png" alt=""><br><span>每日签到</span>
      </div>
    </div>
    <div class="two">
      <div class="img-box"><img src="../assets/img_20181213003703821.jpg" alt=""></div>
      <div class="img-box"><img src="../assets/img_20181213004855362.jpg" alt=""></div>
    </div>
    <div class="middle">
      <img src="../assets/mis_img_20190422154427379.jpg" alt="">
    </div>
    <div class="one-model" @click="xiang(index)" v-for="(item,index) in arrs" :key="index">
      <div class="is-left"><img :src="item.img_url" alt=""></div>
      <div class="is-right">
        <h5 class="right-title">{{item.msg_tittle}}</h5>
        <p style="color:#999">{{item.msg_details}}</p>
        <div class="spans">新人专享</div><div class="spans">满39减15</div>
        <div class="end">
          <div class="end-box">
            <div class="prices"><span style="color: rgb(255, 72, 145);">￥{{item.msg_price}}</span> <span style="color: #ccc;" class="span-two">￥{{item.msg_oldprice}}</span></div>
            <div class="setnum" v-show="che==index">
              <div class="del-box" @click.stop="del(index)"><img src="../assets/del.png" alt=""></div>
              <div class="input">{{item.num}}</div>
              <div class="add-box" @click.stop="add(index)"><img src="../assets/add.png" alt=""></div>
            </div>
            <div class="car" v-show="che!=index" @click.stop="gouwuche(index)"><img src="../assets/img_20170425134548759.png" alt=""></div>
          </div>
        </div>
      </div>
    </div>
    <div class="advert">
      <img src="../assets/img_20190414234246127.gif" alt="">
    </div>
    <div class="di-kong"></div>
    <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import API from '../api/api'
  export default {
    name: "HelloWorld",
    data(){
      return{
        activeClass:0,
        is:false,
        id:1,
        arr:[],
        arrs:[],
        scrollTop:0,
        che:17
      }
    },
    methods:{
      gouwuche(index){
        this.che=index;
        this.$store.state.arr.push(this.arrs[index]);
      },
      del(index){
        this.$store.state.arr[index].num--;
        if(this.$store.state.arr[index].num<1){
          this.$store.state.arr.slice(index,1);
          this.che=-1;
        }
        console.log(this.$store.state)
      },
      add(index){
        this.$store.state.arr[index].num++;
      },
      getscrollTop(){
        var hi=document.getElementById("hi");
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        this.scrollTop=scrollTop
      },
      getItme(index) {
        this.activeClass = index;  // 把当前点击元素的index，赋值给activeClass
      },
      cha(){
        this.is=false;
      },
      down(){
        this.is=true;
      },
      xiang(index){
        this.$router.push({
          name:'Homepage',
          params:{
            id:index
          }
        })
      },
      search(){
        this.$router.push({
          name:'/Sou'
        })
      }
    },
    mounted(){
      API.Arr().then((res)=>{
        this.arr=res
      }),
      API.Model().then((res)=>{
        this.arrs=res.arr;
      })
      window.addEventListener('scroll', this.getscrollTop)
    },
    destroyed () {//离开该页面需要移除这个监听的事件
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>
<style scoped>
  .prices{
    height: 60px;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .setnum{
    width: 83px;
    height: 22px;
    display: flex;
    align-items: center;
  }
  .input{
    width: 25px;
    height: 22px;
    text-align: center;
    line-height: 22px;
  }
  .del-box img{
    width: 100%;
    height: 100%;
  }
  .del-box{
    width: 22px;
    height: 22px;
    line-height: 22px;
  }
  .add-box{
    line-height: 22px;
    width: 22px;
    height: 22px;
  }
  .add-box img{
    width: 100%;
    height: 100%;
  }
  .bg-write{
    background-color: white;
    top:0px !important;
    padding: 10px 2px;
  }
  .advert{
    width:50px;
    height: 70px;
    /*background-color: yellow;*/
    position: fixed;
    right: 5px;
    bottom: 70px;
  }
  .advert img{
    width: 100%;
    height: 100%;
  }
  .right-title{
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .item_box{
    width: 35px;
    height: 35px;
  }
  .item_box img{
    width: 100%;
    height: 100%;
  }
  .di-kong{
    height: 60px;
    line-height: 60px;
  }
  .list-item{
    width: 124px;
    height: 76px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 13px;
    background-position: 50% 40%;
    background-size: 28%;
    background-repeat: no-repeat;
  }
  .pop-list{
    height: 420px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
  }
  .cha{
    width: 40px;
    height: 40px;
    position: absolute;
    right: 0;
    top: 0;
    background-image: url("../assets/cha.png");
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: 50%;
  }
  .header{
    border-bottom: 1px solid #e6e6e6;
    line-height: 40px;
    height: 40px;
    position: relative;
    background-color: #fff;
  }
  .pop{
    position: relative;
    top: -40px;
  }
  .down{
    position: relative;
  }
  .down-box{
    width: 43px;
    height: 40px;
    background-image: url("../assets/down.png");
    background-size: 37% ;
    background-position: 50%;
    background-repeat: no-repeat;
    position: absolute;
    right: 0px;
    top: -40px;
    background-color: #fff;
  }
  #hi{
    background-color: #fff;
  }
  .bg{
    color: #ff4891;
    border-bottom: 3px solid #ff4891;
  }
  .heng{
    width: 90%;
    height: 40px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f5f5f5;
    overflow-x: auto;
  }
  .heng-item{
    flex: 0 0 65px;
    margin: 0 8px;
    height: 40px;
    line-height: 40px;
  }
  .end-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .car{
    width: 45px;
    height: 45px;

  }
  .car img{
    width: 100%;
    height: 100%;
  }
  .end{
    font-size: 15px;
    position: absolute;
    bottom: 0px;
    width: 100%;

  }
  .span-two{
    text-decoration: line-through;
  }
  .spans{
    border-color: rgb(245, 159, 193);
    color: rgb(245, 159, 193);
    font-size: 12px;
    display: inline-block;
    border:1px solid;
    border-radius: 2px;
    margin-right: 10px;
  }
  .is-left{
    width: 120px;
    height: 120px;
  }
  .is-left img{
    width: 100%;
    height: 100%;
  }
  .is-right{
    width: 210px;
    height: 130px;
    text-align: left;
    position: relative;
  }
  .one-model{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 15px;
  }
  .img-box{
    width: 170px;
    height: 100px;
  }
  .img-box img{
    width: 100%;
    height: 100%;
  }
  .two{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 15px;
  }
  .five-box{
    padding: 15px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .five{
    font-size: 12px;
  }
  .five img{
    width: 40px;
    height: 40px;
  }
  .san{
    font-size: 13px;
    padding: 15px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
  }
  .san img{
    width: 16px;
    height: 16px;
    position: relative;
    top: 2px;
  }
  .heads{
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .box{
    position: fixed;
    top: 10px;
    width: 100%;
    left: 0;
    z-index: 10;
  }
  .logo{
    width:50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  #down{
    width: 13px;
    height: 9px;
  }
  .title-address{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .search img{
    width: 18px;
    height: 18px;
  }
  .search{
    width: 153px;
    height: 30px;
    background-color: #f5f5f5;
    border-radius: 50px;
    margin-right: 10px;
    color: #ccc;
    text-align: left;
    line-height: 32px;
  }
  .logo img{
    height: 15px;
  }
  .items{
    height: 170px;
  }
  .item{
    width: 100%;
    height: 170px;
  }
  .item img{
    height: 100%;
    width: 100%;
  }
  .middle{
    height: 83px;
    margin-top: 5px;
  }
  .middle img{
    width: 100%;
    height: 100%;
  }
</style>
