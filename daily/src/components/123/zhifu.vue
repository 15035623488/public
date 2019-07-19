<template>
  <div>
    <div class="header">
      <div class="b1">
        <img src="../../../images/fh.png" alt="" @click="shop">
      </div>
      <div class="b2">
        填写订单
      </div>
    </div>

    <div class="c1">
      <div class="c2">
        <span class="c3">其他</span>
        <span class="c4">华康商务大厦</span>
        <span class="c5">郭宇田 17634957307</span>
        <img class="c6" src="../../../images/fh2.png" alt="">
        <ul class="ull">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>

    <div class="d1">
      <div class="d2">
        <div class="d3"></div>
        <ul class="slide-box">
          <li v-for="(item,index) in brr" :key="index"><img :src="item.img_url" alt=""></li>
        </ul>
        <div class="d4" @click="lb">共<span>{{jijian}}</span>件<img src="../../../images/fh2.png" alt="" style="width: 15px;height: 15px;float: right;margin-top: 42px;margin-right: 15px;"></div>
      </div>
    </div>

    <div class="e1">
      <ul class="price-list-ul">
        <li class="rela item-content-totalPrice" style="border-bottom: 0.05rem solid #f5f5f5;">
          <p class="abs li-left">商品总价</p>
          <p class="li-right">
            <span class="active">{{zongjia}}</span>
          </p>
        </li>
        <li class="rela" style="height: 36px;line-height: 36px;font-size: 0.875rem;">
          <p class="abs li-left"><img src="https://j-image.missfresh.cn/img_20181211112417523.png" alt="">商品劵</p>
          <p class="li-right red-packet" style="color: rgb(150, 150, 150);">0张商品券&nbsp;&nbsp;</p><img src="../../../images/fh2.png" alt="" style="width: 15px;height: 15px;float: right;margin-top: -25px" @click="sp">
        </li>
        <li class="rela" style="height: 36px;line-height: 36px;font-size: 0.875rem;border-bottom: 0.05rem solid #f5f5f5;">
          <p class="abs li-left"><img src="https://j-image.missfresh.cn/img_20181211112401171.png" alt="">红包</p>
          <p class="li-right red-packet" style="color: rgb(150, 150, 150);">0个可用红包&nbsp;&nbsp;</p><img src="../../../images/fh2.png" alt="" style="width: 15px;height: 15px;float: right;margin-top: -25px" @click="hb">
        </li>
        <li class="rela" style="height: 36px;line-height: 36px;font-size: 0.875rem;">
          <p class="abs li-left">配送费</p>
          <p class="li-right">包邮</p>
        </li>
        <p class="total-price">
          合计￥&nbsp;<span>{{zongjia}}</span>
        </p>
      </ul>
    </div>

    <div class="f1">
      <div class="open-vip-box flex-box">
        <div class="open-vip-box-top">
          <img src="https://j-image.missfresh.cn/img_20181205175918600.png" alt="" class="open-vip-icon">
        </div>
        <div class="open-vip-box-bot-r">
          <span class="open-txt"><i style="color:#ff4891;">1/月&nbsp;</i>立即续费</span>
          <div>
            <img src="https://j-image.missfresh.cn/img_20181206163746310.png" alt="" class="dim2" id="img" @click="Imgbtn">
          </div>
        </div>
      </div>
    </div>

    <div class="g1">
      <div class="open-vip-box flex-box" style="height: 45px;border-radius: 10px 10px 0px 0px;">
        <div class="g2">
          <img src="../../../images/wei.png" alt="" class="g3">
        </div>
        <span class="g4">微信支付</span><span class="g5">推荐</span>
        <span class="g6">亿万用户的选择，更快更安全</span>
        <div class="open-vip-box-bot-r">
          <div>
            <img src="https://j-image.missfresh.cn/img_20181206164210920.png" alt="" class="dim2">
          </div>
        </div>
      </div>

      <div class="open-vip-box flex-box" style="height: 45px;border-radius: 0px 0px 10px 10px;">
        <div style="border: 0.05rem solid #cccccc;width:1.9rem;height: 1.9rem;line-height: 1.6rem;text-align: center;border-radius: 6px;margin-top: 6px;">
          <img src="../../../images/zhi.png" alt="" style=" width: 1.6rem;height: 1.4rem;vertical-align: middle;">
        </div>
        <span style="font-size: 13px;height: 13px;margin-top: 12px;margin-left: 12px;">支付宝支付</span>
        <div class="open-vip-box-bot-r">
          <div>
            <img src="https://j-image.missfresh.cn/img_20181206163746310.png" alt="" class="dim2">
          </div>
        </div>
      </div>
    </div>



    <!-- 底部定位 -->
    <div class="bottom-flixed">
      <div class="bottom-flixed-left">
        <div class="bottom-flixed-left-fl">
          <span>付款：</span>
          <span class="db-left-sp2">￥</span>
          <span class="db-left-sp3">{{zongjia}}</span>
        </div>
      </div>
      <div class="bottom-flixed-right">
        <button  @click=" ">去支付<span db-right-sp1>&nbsp;</span></button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "zhifu",
    data(){
      return{
        brr:[],
        jijian:'',
        sum:0,
      }
    },
    created(){
      this.brr=this.$store.state.arr
      this.jijian=this.brr.length
    },
    mounted(){
      // console.log(this.$store.is)
      var bbb = document.getElementById('one')
      this.$store.is = false
      if(!(this.$store.is)){
        bbb.style.display = "none"
      }
    },
    computed:{
      zongjia(){
        var sum=this.sum
        for (let i=0;i<this.brr.length;i++){
          console.log(this.brr)
          sum+=this.brr[i].msg_price*this.brr[i].num
        }
        return sum
      }
    },
    methods:{
      shop(){
        this.$router.replace({path:'../shoppingCart'})
        var bbb = document.getElementById('one')
        this.$store.is = false
        if(!(this.$store.is)){
          bbb.style.display = ""
        }
      },
      lb(){
        this.$router.replace({path:'/liebiao'})
      },
      sp(){
        this.$router.replace({path:'/shangpinjuan'})
      },
      hb(){
        this.$router.replace({path:'/hongbao'})
      },
      Imgbtn(){
        if(img.src=='https://j-image.missfresh.cn/img_20181206163746310.png'){
          img.src='https://j-image.missfresh.cn/img_20181206164210920.png';
        }else{
          img.src='https://j-image.missfresh.cn/img_20181206163746310.png'
        }
      }
    },
    mounted: function () {
      // console.log(this.$store.aaa)
      var bbb = document.getElementById('one')
      this.$store.aaa = false
      if (!(this.$store.aaa)) {
        bbb.style.display = "none"
      }
    },
    beforeRouteEnter(to,from,next){
      window.document.body.style.backgroundColor = '#FAFAFA';
      next();
    },
    beforeRouteLeave(to,from,next){
      window.document.body.style.backgroundColor = '';
      next();
    }
  }
</script>
<style scoped>
  *{
    font-family: "微软雅黑";
  }
  .header{
    width: 100%;
    height:50px;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    border-bottom:0.5px solid #cccccc;
    display: flex;
  }
  .b1{
    width: 2%;
    margin-top: 8px;
  }
  .b2{
    width: 100px;
    height:50px;
    line-height: 50px;
    text-align: center;
    font-size: 15px;
    margin-left: 130px;
  }
  .c1{
    margin-top: 62px;
    padding: 0 10px;
  }
  .c2{
    width: 100%;
    height: 80px;
    background-color: #fff;
    border-radius: 10px;
    padding-top: 18px
  }
  .c3{
    background:rgba(233,150,122,0.1);
    color: #FF4500;
    font-size: 10px;
    width: 30px;
    height: 16px;
    display: block;
    text-align: center;
    line-height: 16px;
    border: .5px solid orangered;
    border-radius: 5px;
    margin-left: 15px;
    float: left;
  }
  .c4{
    font-size: 18px;
    font-weight: bold;
    width: 120px;
    height: 35px;
    margin-top: -10px;
    margin-left:55px;
    display: block;
    line-height: 35px;
  }
  .c5{
    font-size: 12px;
    color: #cccccc;
    margin-left: 15px;
    margin-top: 8px;
    display: block;
  }
  .c6{
    display: block;
    float: right;
    margin-right: 15px;
    margin-top: -26px;
  }
  ol, ul ,li{
    list-style: none;
  }
  .ull{
    margin-left: 5px;
    margin-top: 27px;
  }
  .ull>li:nth-of-type(2n){
    width:14px;
    height:3px;
    background-color: deepskyblue;
    float:left;
    margin-left: 10px;
    transform: skewX(-45deg);
  }
  .ull>li:nth-of-type(2n+1){
    width:14px;
    height:3px;
    background-color: hotpink;
    float:left;
    margin-left: 10px;
    transform: skewX(-45deg);
  }




  .d1{
    padding: 0 10px;
  }
  .d2{
    width: 100%;
    height: 100px;
    background: white;
    border-radius: 10px;
  }
  .d3{
    width: 10px;
    height: 100px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    left: 0;
    margin-left: 9px;
  }
  .d4{
    width: 80px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    background: white;
    position: absolute;
    right: 0;
    margin-top: -74px;
    margin-right: 9px;
    border-radius: 10px;
    font-size: 13px;
  }
  .slide-box{
    padding: 1rem 0 0 0;
    margin-top:.8rem;
    display: -webkit-box;
    overflow-x: auto;
    /*适应苹果*/
    -webkit-overflow-scrolling:touch;
  }
  .slide-item{
    width: 50px;
    height: 50px;
    margin-right: 15px;
    margin-top: 23px;
    background-image: url("https://fms-image.missfresh.cn/1ad71b2e1f96475ba61393105f7e8b20.jpg?iopcmd=convert&dst=webp");
    background-position:center;
    background-size: 100% 100%;
  }
  /*隐藏掉滚动条*/
  .slide-box::-webkit-scrollbar {
    display: none;
  }
  .slide-box li{
    width: 4rem;
    height: 4rem;
  }
  .slide-box li img{
    width: 100%;
    height: 100%;
  }


  .e1{
    margin-top: 15px;
    padding: 0 10px;
  }
  .active{
    display: inline-block;
  }
  .price-list-ul{
    background-color: #fff;
    border-radius: 16px;
    padding: 0 0.8rem;
  }
  .item-content-totalPrice{
    height: 3.4375rem;
    line-height: 3.4375rem;
  }
  .abs {
    position: absolute;
  }
  .li-right{
    padding-right: 0.9375rem;
    text-align: right;
  }
  p{
    box-sizing: border-box;
  }
  .li-left img{
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;
    margin-right: 0.25rem;
  }
  .total-price{
    width: 100%;
    font-size: 1.125rem;
    text-align: right;
    color: #262626;
    line-height: 3.4375rem;
    padding-right: 0.9375rem;
    background-color: #fff;
  }
  .total-price span{
    color: #ff4891;
  }

  .f1{
    margin-top: 15px;
    padding: 0 10px;
  }


  .open-vip-box{
    /*width: 100%;*/
    background-color: #fff;
    border-radius: 0.625rem;
    padding-left: 10px;
    padding-right: 10px;
  }
  .flex-box{
    display: flex;
  }
  .open-vip-box-top{
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 0.75rem;
    color: #474245;
  }
  .open-vip-icon{
    width: 3.125rem;
    height: 0.875rem;
    vertical-align: middle;
  }
  .open-vip-box-bot-r{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    text-align: right;
    padding-right: 1.875rem;
    line-height: 3.75rem;
    position: relative;
  }
  .open-txt{
    color: #474245;
    font-size: 14px;
  }
  .flex-box .open-vip-box-bot-r{
    line-height: 2.8125rem;
  }
  .dim2{
    width: 1.125rem;
    height: 1.125rem;
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -0.5625rem;
  }


  .g1{
    margin-top: 15px;
    padding: 0 10px;
    margin-bottom: 50px;
  }
  .g2{
    border: 0.05rem solid #cccccc;
    width:1.9rem;
    height: 1.9rem;
    line-height: 1.6rem;
    text-align: center;
    border-radius: 6px;
    margin-top: 6px;
  }
  .g3{
    width: 1.6rem;
    height: 1.4rem;
    vertical-align: middle;
  }
  .g4{
    height:18px;
    font-size: 13px;
    margin-left: 10px;
    margin-top: 5px;
  }
  .g5{
    background: lightcoral;
    color: white;
    font-size: 9px;
    width: 30px;
    height: 15px;
    border-radius: 6px;
    text-align: center;
    margin-top: 6px;
  }
  .g6{
    font-size: 7px;
    height: 13px;
    color: #cccccc;
    margin-top: 23px;
    margin-left: -82px;
  }



  /*底部*/
  .bottom-flixed{
    width: 100%;
    height: 45px;
    background-color: white;
    border-bottom: 1px solid #f5f5f5;
    border-top: 1px solid #f5f5f5;
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .bottom-flixed div{
    display: inline-block;
    line-height: 45px;
  }
  .bottom-flixed-left{
    width: 68%;
    margin-right: 2%;
  }
  .bottom-flixed-left-fl{
    float: left;
    padding-left: 5%;
    text-align: left;
  }
  .db-left-sp2{
    font-size: 1.1rem;
    color: deeppink;
  }
  .db-left-sp3{
    font-size: 1.1rem;
    width: 2rem;
    color: deeppink;
  }
  .bottom-flixed-right{
    width: 30%;
    float: right;
    display: inline-block;
  }
  .bottom-flixed-right button{
    width: 100%;
    height: 45px;
    border: 0px ;
    background-color: #ff4891;
    color: white;
    font-size: 1.1rem;
  }
</style>
