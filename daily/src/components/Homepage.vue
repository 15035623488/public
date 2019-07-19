<template>
  <div id="body">
    <div class="header">
      <div class="headr">商品详情</div>
      <div class="share"><img src="../assets/下载.png" alt=""></div>
    </div>
    <div>
      <mt-swipe :auto="4000" class="items">
        <mt-swipe-item class="item"><img :src="arr.img_url" alt=""></mt-swipe-item>
        <mt-swipe-item class="item"><img :src="arr.img_url" alt=""></mt-swipe-item>
        <mt-swipe-item class="item"><img :src="arr.img_url" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="title">
      <h3>{{arr.msg_details}}</h3>
      <div>{{arr.msg_tittle}}</div>
      <div class="price">
        <span style="color: #ff4891;"><strong>￥{{arr.msg_price}}</strong></span><span style="color: #999;">已售46378份</span>
      </div>
      <div class="beizhu">
        <span class="zhu">• 产地中国</span><span class="zhu">• 2小时达</span><span class="zhu">• 实付满0包邮</span>
      </div>
    </div>
    <div class="youhui model-box">
        <div class="youhui-title">
          <span style="font-size: 18px">优惠</span><span  class="title-two">详情＞</span>
        </div>
        <div class="xiangou">
          <div class="xiangou-box"><img src="../assets/img_20181107153704134.png" alt=""></div>
          <span style="font-size: 12px">每人每天购买不超过1件，享受此优惠</span>
        </div>
        <div class="redbag">
            <div class="redbag-left">
              <div class="fanxian"><img src="../assets/img_20171029215450695.png" alt=""></div>
              <div class="fanxian-zi">该商品分享可领49减10红包</div>
              <div class="wen-box"><img src="../assets/问号.png" alt=""></div>
            </div>
          <div class="redbag-right">去分享 ></div>
        </div>
        <div class="share-count">已经有14107人分享了该商品</div>
    </div>
    <div class="anxin model-box">
      <div class="youhui-title">
        <span style="font-size: 18px">安心指纹</span><span  class="title-two">点击查看＞</span>
      </div>
      <div class="zhenjian-box">
        <img src="../assets/3acaea400d1d4e4485fb4a8df941373d.jpg" alt="">
      </div>
      <div  class="zj-zi">经营证件</div>
    </div>
    <div class="linagd model-box">
      <div class="ld">亮点</div>
      <div class="kapian">
        <div class="ld-zi">
          <div class="ying-box"><img src="../assets/ying.png" alt=""></div>
          <ul class="ld-list">
            <li>【口碑热销3年的镇店之宝】</li>
            <li>*“包养”具备出口资质的洪湖和潜江生态养殖基地，水质干净管理严苛。</li>
            <li>*2019当季新鲜活虾秘制，液氮急冻锁鲜。</li>
            <li>*18余味真材实料，先煮后炸再秘制。锁住虾黄，肉质更弹牙。</li>
            <li>使用方法：</li>
            <li>1、解冻后直接微波加热即食。</li>
            <li>2、多加100g的秘制原汤，拌面煮菜也好吃。</li>
            <li>（每盒大约18-23只，具体以实物为准）</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="tuijian">
      <div class="ld">推荐商品</div>
    </div>
    <div class="bottom">
      <div class="bot-box">
        <div class="car" @click="shop">
          <div class="car-box"><img src="../assets/shop-icon.03511f0.png" alt=""></div>
          <div class="nums" >{{num}}</div>
        </div>
        <div class="add" @click="add">加入购物车</div>
      </div>
    </div>
    <div class="end"></div>
  </div>
</template>

<script>
  import API from '../api/api'
  export default {
    name: 'Homepage',
    data(){
      return{
        id:'',
        arr:[],
        num:0,
        brr:[],
      }
    },
    methods:{

      shop(){
        this.$router.push({
          name:'shoppingCart'
        })
      },
      add(e){
        this.$store.state.arr.push(this.arr);
        this.num=this.$store.state.arr.length;

      }
    },
    mounted(){
      this.num=this.$store.state.arr.length;
      this.id=this.$route.params.id;
      API.Model().then((res)=>{
        this.arr=(res.arr[this.id]);
      });
    }
  }
</script>
<style>
  .tuijian{
    padding: 15px;
    margin-top: 10px;
  }
  .nums{
    width: 20px;
    height: 20px;
    color: #fff;
    border-radius: 50%;
    background-color: #ff4891;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    position: absolute;
    right: 12px;
    top: 2px;
  }
  .car-box{
    width: 25px;
    height: 30px;
    margin-top: 5px;
  }
  .car-box img{
    width: 100%;
    height: 100%;
  }
  .car{
    position: relative;
    display: flex;
    justify-content: center;
    width: 20%;
    height: 100%;
    background-color: #fff;
  }
  .add{
    width: 80%;
    height: 100%;
    color: #fff;
    font-size: 15px;
  }
  .bot-box{
    border-top: 1px solid #ccc;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .bottom{
    height: 56px;
    line-height: 60px;
    background-color: #ff4891;
    position: fixed;
    bottom: 0px;
    left: 0;
   z-index: 100;
    width: 100%;
  }
  .ld-list li{
    margin-top: 8px;
  }
  ul{
    list-style: none;
  }
  .ying-box{
    text-align: left;
  }
  .ld-zi{
    background-color: #f5f5f5;
    padding: 10px;
    font-size: 14px;
    text-align: left;
  }
  .kapian{
    box-shadow: 0 0.125rem 0.5rem 0 #E7E7E7;
    border-radius: 10px;
    padding: 15px;
  }
  .ld{
    font-size: 18px;
    text-align: left;
  }
  .model-box{
    background-color: #fff;
    margin-top: 10px;
    padding: 15px;
  }

  .zj-zi{
    font-size: 13px;
    text-align: left;
  }
  .zhenjian-box{
    width:30px;
    height: 30px;
    padding: 10px;
  }
  .zhenjian-box img{
    width: 100%;
    height: 100%;
  }

  .share-count{
    text-align: left;
    font-size: 12px;
    color: #999;
    margin-left: 15px;
  }
  .end{
    height: 60px;
    line-height: 60px;
  }
  .redbag-right{
    color: #ff4891;
    font-size: 12px;
    line-height: 24px;
  }
  .wen-box{
    margin-top: 2px;
    margin-left: 5px;
  }
  .fanxian-zi{
    font-size: 14px;
    color: #ff4891;
  }
  .redbag-left{
    display: flex;
    align-items: center;
    line-height: 20px;
  }
  .fanxian{
    width: 28px;
    height: 16px;
    margin-right: 5px;
  }
  .fanxian img{
    width: 100%;
    height: 100%;
  }
  .redbag{
    display: flex;
    justify-content: space-between;
    height: 23px;
    margin-top: 15px;
    padding: 30px;
    background-size:106% 100% ;
    background-position-x: -10px;
    background-image: url("../assets/product-share-redpacket.e34d940.png");
  }
  .xiangou{
    padding: 5px 0;
    display: flex;
    align-items: center;
  }
  .xiangou-box{
    width: 26px;
    height: 16px;
    margin-right: 10px;
  }
  .xiangou-box img{
    width: 100%;
    height: 100%;
  }
  .title-two{
    color: #ccc;
    font-size: 13px;
  }
  .youhui-title{
    display: flex;
    justify-content: space-between;
    line-height: 25px;
  }
  #body{
    background-color: #f5f5f5;
  }
  .beizhu{
    margin-top: 10px;
  }
  .zhu{
    margin-right: 15px;
    font-size: 13px;
  }
  .price{
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 15px;
    border-bottom:1px solid #f5f5f5;
  }
  .title{
    padding: 10px;
    text-align: left;
    padding-top: 15px;
    background-color: #fff;
  }
  .items{
    height: 250px;
  }
  .item{
    width: 100%;
    height: 170px;
  }
  .item img{
    height: 100%;
    width: 100%;
  }
  .header{
    background-color: #fff;
    border-bottom: 1px solid #eee;
    box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.06);
    height: 40px;
  }
  .share{
    width: 22px;
    height: 22px;
    float: right;
    margin-right: 10px;
    margin-top: 10px;
  }
  .share img{
    width: 100%;
    height: 100%;
  }
  .headr{
    border-bottom-color: #ff4891;
    color: #ff4891;
    border-bottom: 3px solid;
    display: inline-block;
    height: 38px;
    line-height: 40px;
  }
</style>
