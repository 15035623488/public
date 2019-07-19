<template>
  <div class="ye">
    <div class="qiandao" :style="{display}" @click="ycqiandao">
      <div><img src="https://j-image.missfresh.cn/img_20190717004845878.jpg" alt=""></div>
    </div>
    <div class="myTop">
      <div class="top">
        <div class="toplogin clearfix">
          <div class="loginLeft fl">
            <div class="login-img">
              <img src="@/../images/bo.jpg" alt="">
            </div>
            <div class="register">薄</div>
          </div>
          <button class="msg fr" @click="qiandaob" :disabled="disabled">{{oqd}}</button>
        </div>
      </div>
    </div>
    <div class="da">
      <div class="bigbox clearfix">
        <div class="box">
          <ul class="boxfirst">
            <li>
              <p><span class="smallFont">￥</span><span class="bigFont">0</span></p>
              <p class="firstFont">余额</p>
            </li>
            <div class="longline"></div>
            <li>
              <p><span class="bigFont">0</span></p>
              <p class="firstFont">红包</p>
            </li>
            <div class="longline"></div>
            <li>
              <p><span class="bigFont">0</span></p>
              <p class="firstFont">商品券</p>
            </li>
            <div class="longline"></div>
            <li>
              <p><span class="bigFont">0</span></p>
              <p class="firstFont">积分兑换</p>
            </li>
          </ul>
        </div>
        <div class="order">
          <div class="myorder clearfix">
            <div class="fl">我的订单</div><span class="fr">全部订单></span>
          </div>
          <ul class="boxsecond">
            <li v-for="(item,index) in allorder" :key="index" id="item.id">
              <p class="secondImg"><img :src="item.img" alt=""></p>
              <p class="orderfont">{{item.title}}</p>
            </li>
          </ul>
        </div>
        <div class="order">
          <div class="myorder clearfix">
            <div class="fl">我的服务</div>
          </div>
          <ul class="listservice clearfix">
            <li v-for="(item,index) in myservice" :key="index" @click="qiandao(index)">
              <p class="serviceImg"><img :src="item.img" alt=""></p>
              <p>{{item.title}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    name: 'my',
    data(){
      return{
        allorder:[
          {id:0,title:'待支付',img:require('../../images/zhifu.png')},
          {id:1,title:'代配送',img:require('../../images/book.png')},
          {id:2,title:'配送中',img:require('../../images/song.png')},
          {id:3,title:'待评价',img:require('../../images/ping.png')},
          {id:4,title:'售后/退款',img:require('../../images/tuikuan.png')},
        ],
        myservice:[
          {title:'储值送会员',img:require('../../images/li.png')},
          {title:'签到',img:require('../../images/qian.png')},
          {title:'我的拼团',img:require('../../images/pingtuan.png')},
          {title:'推荐有礼',img:require('../../images/tui.png')},
          {title:'积分商城',img:require('../../images/jifen.png')},
          {title:'邀请得红包',img:require('../../images/yao.png')},
          {title:'收获地址',img:require('../../images/di.png')},
          {title:'客服和帮助',img:require('../../images/fu.png')},
          {title:'设置',img:require('../../images/she.png')}
        ],
        oqd:"签到",
        display:'none',
        disabled:false
      }
    },
    methods:{
      qiandao(e){
        console.log(e)
        if (e==1){
          this.display='block'
          Toast({
            message:'签到成功',
            position: 'bottom',
            duration: 2000
          })
          this.oqd='已签到'
          if (this.oqd=='已签到'){
            this.disabled=true
          }
        }
        if (e==6){
          console.log(this)
        }
      },
      qiandaob(){
        this.display='block'
      },
      ycqiandao(){
        this.display='none'
        this.oqd='已签到'
        if (this.oqd=='已签到'){
          this.disabled=true
        }
      }
    }
  }
</script>

<style scoped>
  .qiandao{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 70;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
  }
  .qiandao div{
    width: 70%;
    height: 65%;
    position: fixed;
    z-index: 71;
    top: 17.5%;
    left: 15%;
  }
  .qiandao div img{
    width: 100%;
    height:100%;
  }
  .clearfix {
    zoom: 1;
  }
  .clearfix:after {
    content: "";
    width: 0;
    height: 0;
    visibility: hidden;
    display: block;
    clear: both;
    overflow:hidden;
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }

  .ye{
    width: 100%;
  }
  /*顶部*/
  .myTop{
    height:200px;
    width: 100%;
    background:linear-gradient(left , #feebe4, #fed4e2);

  }
  .top{
    padding:0px 15px;
  }
  .toplogin{
    padding-top: 60px;
  }
  .loginLeft{

    width: 200px;
    display:flex;
    line-height: 60px;
  }
  .login-img{
    width: 60px;
    height:60px;
    border-radius: 50%;
  }
  .login-img img{
    width: 100%;
    height:100%;
    text-align: center;
    border-radius: 50%;
  }
  .register{
    margin-left: 15px;
    font-size: 20px;
    color:#000;
    font-weight: bold;
  }
  .msg{
    margin-top: 1rem;
    width: 3rem;
    background-color: rgba(0,0,0,0);
    border: none;
    color: black;
  }
  /*顶部结束*/
  .da{
    width: 100%;
  }
  .bigbox{
    background: #f5f5f5;
    padding:10px 15px
  }
  /*中间第一部分余额*/
  .box{
    width:100%;

  }
  .boxfirst{
    padding-top:20px;
    padding-bottom:15px;
    background: white;
    border-radius:10px;
    display:flex;
    list-style: none;
    justify-content:center;
    align-items:center;
  }

  .boxfirst li{
    flex: 1;
    text-align: center;
  }
  .smallFont{
    font-size: 12px;
  }
  .bigFont{
    font-weight: bold;
    color:#474747;
    font-size: 19px;
  }
  .firstFont{
    font-size: 16px;
    padding-top:3px;
  }
  .longline{
    width: 1px;
    height: 20px;
    background: #f2f2f2;
  }

  /*我的订单样式*/
  .order{
    background: white;
    border-radius: 10px;
    margin-top:10px;
  }
  .myorder{
    padding:6px 15px;
  }
  .myorder div{
    font-size: 20px;
    color:#615f60;
    font-weight: bold;
    display: inline-block;
  }
  .myorder span{
    color: #999999;
    font-size: 14px;
    line-height: 26px;
  }

  .order .boxsecond{
    padding: 10px 0px;
    display:flex;
    list-style: none;
    justify-content:center;
    align-items:center;
  }
  .order .boxsecond li{
    flex:1;
    text-align: center;
  }

  /*图片和文字样式*/
  .secondImg{
    width: 30px;
    height: 28px;
    display: inline-block;
  }
  .secondImg img{
    width: 100%;
    height: 100%;
  }
  .orderfont{
    color:#4a4a4a;
    font-size:13px;
    padding: 5px 0px;
  }



  /*我的服务*/
  .listservice{
    list-style: none;
    margin-bottom: 4rem;
  }
  .listservice li{
    float:left;
    width: 33%;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;

    /*background: red;*/
  }
  .serviceImg{
    width: 30px;
    height: 30px;
    text-align: center;
    display: inline-block;
  }
  .serviceImg img{
    width: 100%;
    height: 100%;
  }


</style>
