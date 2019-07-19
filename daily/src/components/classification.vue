<template>
  <div>
    <mt-search>
      <!--v-model="value"-->
      cancel-text=""
      placeholder="搜索">
    </mt-search>
    <div class="content">
      <div class="left">
          <div v-for="(item,index) in LeftGoods"  @click="addClass(index)" :key="index" class="classnames"  :class="{active:index==isActive}" >{{item.name}}</div>
      </div>
      <div class="right">
          <div class="shade" v-show="showAll">
              <div class="white">
                  <div class="textLeft allclass">全部分类</div>
                  <div class="down-box1 textRight" @click="top"><img src="./classification/image/top.png" alt=""></div>
              </div>
              <div class="showBig">
              <div class="showBox" v-for="(item,index) in shopgoods"  @click="addClass2(index)" :key="index" :class="{active1:index==isActive1}">{{item.name1}}</div>
              </div>
              <div class="opacty">
              </div>
          </div>
          <div class="line">

        <div class="only-box">
          <div   v-for="(item,index) in shopgoods" :key="index"  @click="addClass1(index)" class="only" :class="{active1:index==isActive1}" ><div>{{item.name1}}</div>
          </div>
        </div>
             <div class="down-box" @click="down"><img src="./classification/image/down.png" alt=""></div>
          </div>
<div class="select">{{selected}}</div>
        <div class="class-content"  v-infinite-scroll="loadMore"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="10">
            <div  v-for="item in list">
                <!--<div class="load-more-gif" v-show="loading">loading... <img src="./classification/image/bys.gif" alt=""></div>-->
                <div v-for="(item,index) in Goods" :key="index" class="class-box">
                    <img :src='item.img' alt="" class="con-img">
                    <div class="text">
                        <h4>{{item.name}}</h4>
                        <h5>{{item.des}}</h5>
                    <div class="text1">
                        <div class="cuPrice">{{item.cuPrice}}</div>
                        <del class="orPrice">{{item.orPrice}}</del>
                    </div>
                    </div>
                    <div class="setnum" v-show="che">
                        <div class="del-box" @click="minus"><img src="../assets/del.png" alt=""></div>
                        <div class="input" vali>{{num}}</div>
                        <div class="add-box" @click="add"><img src="../assets/add.png" alt=""></div>
                    </div>
                     <div class="shop"  v-show="!che" >
                        <img src="./classification/image/shop12.png" alt="">
                     </div>
                </div>
            </div>
            </div>

            <div class="load-more-gif" v-show="loading">loading... <img src="./classification/image/bys.gif" alt=""></div>
          <div v-show="success">没有更多了</div>
        </div>
      </div>
    </div>
</template>

<script>
  import API from '../api/api'
  import $  from 'jquery'
  export default {
    name: 'classification',
    data() {
      return {
          success:false,
        selected:'',
          che:'',
          num:1,
        arr: [],
          list:[],
        shopgoods:[],
        Goods:[],
        rightArr: [],
        rightClass:[],
        isActive:0,
        isActive1:0,
        current: 0,
          showAll:false,
        only:'',
          data: [1,2,3,4,5,6,7,8,9,10],
          scloll:true,
          loading:true,
        LeftGoods: [
          {id: 1, name: '0.99菜场'},
          {id: 2, name: '麻小夜宵'},
          {id: 3, name: '蔬菜'},
          {id: 4, name: '水果'},
          {id: 5, name: '肉蛋'},
          {id: 6, name: '熟食'},
          {id: 7, name: '水产'},
          {id: 8, name: '乳品'},
          {id: 9, name: '酒饮'},
          {id: 10, name: '零食'},
          {id: 11, name: '轻食'},
          {id: 12, name: '速食'},
          {id: 13, name: '粮油'},
          {id: 14, name: '个护'},
          {id: 15, name: '清洁'},
          {id: 16, name: '家居'},
          {id: 17, name: '现磨咖啡'},
          {id: 18, name: '次日达'}
        ],
      }
    },
    mounted(){

      API.classList().then((res) => {
        // this.arr = res.date
          this.loading=true
        console.log(res.date)
        this.arr = res.date
        this.shopgoods = this.arr[0].child
        this.Goods=this.shopgoods[0].children
        this.selected=this.arr[0].child[0].name1
          this.loading=false
        console.log(this.Goods)
      }).catch((err) => {
      })

    },
    methods: {
        // gouwuche(a){
        //
        //     this.che=!this.che
        //     console.log(a)
        // },
        minus(){
            if(this.num<=1){
                this.num=1
                this.che=false
            } else{
                this.num--
            }
        },
        add(){
            this.num++
        },

        addClass: function (index) {
        this.isActive=index;
        console.log(this.isActive)
        this.shopgoods = this.arr[index].child
        this.Goods = this.arr[index].child[index].children
          this.selected=this.shopgoods[0].name1
      },
      addClass1: function (index) {
        // console.log(index)
        this.isActive1=index;
        this.current =index;
        this.Goods = this.arr[index].child[index].children
          this.selected=this.shopgoods[index].name1
    },
        addClass2: function (index) {
            // console.log(index)
            this.isActive1=index;
            this.current =index;
            this.Goods = this.arr[index].child[index].children
            this.selected=this.shopgoods[index].name1
            this.showAll=false
        },
        down(){
            this.showAll = !this.showAll
        },
        top(){
            this.showAll = !this.showAll
        },
            // 加载

        loadMore() {
            this.loading = true;
            setTimeout(() => {
                if (this.list.length>=5){
                    this.loading = false;
                    this.success=true
                } else{
                    for (var i = 1; i <=3; i++) {
                        this.list.push(this.Goods);
                    }
                }
            }, 1500);
            this.loading = false;
        }

    },
  }
</script>

<style scoped>
    .setnum{
        width: 83px;
        height: 22px;
        display: flex;
        align-items: center;
        position: absolute;
        right: 0;
        bottom: 0;
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
    .load-more-gif img{
        width: 30px;
        height: 30px;
    }
    .white{
        background-color: white;
    }
    .mint-search{
        height: 60px;
        margin: 0 0 !important;
        text-align: center;
    }
    .showBig{
        background-color: white;
        text-align: left;
    }
    .opacty{
        opacity: 0.5;
        height: 80%;
        background-color: #8a8a8a;
    }
  *{
    margin: 0;
    padding: 0;
  }
    .textLeft{
        text-align: left;
    }
    .textRight{
        text-align: right;
    }
    .down-box1 img{
        width: 20px;
        height: 20px;
        top: 0;
        right: 10px;
        position: absolute;
    }
  .showBox{
      display: inline-block;
      background-color: white;
      color:#969696 ;
      border:1px solid #969696;
      margin-right: 20px;
      margin-bottom: 10px;
      text-align: left;
  }
  .shade{
      z-index: 555;
      height: 81%;
      width:296px;
      position: fixed;
      right: 0;
  }
  .allclass{
      padding-bottom: 20px;
  }
  .line{
      display: flex;
  }
  .select{
      margin:10px 0;
      height: 50px;
      line-height: 50px;
      text-align: left;
      border-top:1px solid #969696;
      border-bottom:1px solid #969696;
      width: 100%;
  }
  .down-box{
      position: absolute;
      right: 5px;
      width: 43px;
      height: 40px;
      background-color: white;

  }
  .down-box img{
      width: 20px;
      height: 20px;
      margin-top: -50%;
      margin-top: 5px;
  }
  orPrice{
    color: #969696;
  }
  .cuPrice{
    color: #ff4891;
  }
  .shop{
    position: absolute;
    right: 37px;
    bottom: 0;
  }
  .shop img{
    width: 35px;
    height: 35px;
    background-color: #ff4891;
    color: white;
    border-radius: 50%;
  }
  .class-box .text{
    margin-left: 10px;
  }
  .class-box .text h4{
    color: #474245;
  }
  .class-box .text h5{
    color: #969696;
  }
  .class-box .text .text1{
    margin-top: 10px;
  }
  .class-box{
    margin-top: 20px;
  text-align: left;
    display: flex;
    position: relative;
  }
  .con-img{
    width:  70px;
    height: 70px;
    margin-top: 10px;
  }
  .only-box{
    display: flex;
    white-space: nowrap;
    overflow:hidden;
    overflow-x: scroll;
    width:260px;
      position: relative;
  }
  .only{
    display: inline-block;
    margin: 0 7px;
    color:#969696;
    border:1px solid #969696 ;
      width: 100px;
      height: 30px;
      padding: 0 10px;

      line-height: 30px;
  }
  .class-content{
    display:flex;
    flex-direction: column;
    height: 100%;
    overflow-y: scroll;
      height: 480px;
  }
  .mint-search .mintui-search{
    color: blue ;
  }
  .mint-searchbar-inner{
    background-color: #d9d9d9;
  }
  .mint-search{
    height: 60px;
    margin:35px 0;
    text-align: center;
  }
  .active{
    background-color: white;
  }
  .active1{
    border:1px solid #ff4891;
    color: #ff4891;

  }
  .content{
    display:flex;
    width: 100%;
      position:absolute;
      height: 585px;

  }
  .content .left{
    width:100px ;
    overflow-y: scroll;
    background:#f8f8f8;
      display: flex;
      flex-direction: column;
  }
  .classnames{
    color: aqua;
    height: 60px;
    display: flex;
    flex-direction: column;
    line-height: 60px;
    color:black;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  .content .right{
    width:100% ;
      padding: 10px;
      position: relative;
  }
  .right .item{
    display: inline-block;
  }

  .right .nav {
    padding: 10px;
  }

  .right .link{
    color: inherit;
    padding: 20px;
    display: block;
  }
</style>
