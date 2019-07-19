<template>
  <div class="allgwc">
    <!-- 顶部定位 -->
    <div class="shoppingtop">
      <div class="shoppingtop-div">
        <button>
          <img src="../../images/dw.png" alt="">
          <span>购物车</span>
        </button>
      </div>
      <div class="shoppingtop-divb">
        <button>优惠券</button>
        <button @click="alldel">删除</button>
      </div>
    </div>
    <!-- ---------------------------------------------------------- -->


    <div class="gwc-padding">
      <!--  购物车部分--------------------------  -->
      <div class="gwc-center" v-for="(item,index) in arr" :key="index">

        <mt-cell-swipe
          class="mtswipe"
          :right="[
    {
      content: '删除',
      style: { background: 'red', color: '#fff' ,textAlign: 'center',paddingTop:'70%' },
       handler: () => shanchu(index)
    }
  ]"><div class="gwc-center-div">

          <!--  复选框    -->
          <div class="gwc-center-div-checkbox">
            <input @click="listbtn(index)" :checked="item.fal" type="checkbox">
          </div>
          <!--  ////////  -->
          <div class="gwc-center-div-imgdiv"><img v-bind:src="item.img_url"></div>
          <div class="gwc-center-div-wz">
            <span class="zng">{{item.msg_details}}</span>
            <div class="w">
              <div class="fl">
                <p class="ptal">￥{{item.msg_price}} <s>￥{{item.msg_oldprice}}</s></p>
              </div>
              <div class="fr">
                <button class="btn" @click="btnroo(index)">-</button>
                <span>{{item.num}}</span>
                <button class="btn" @click="btnadd(index)">+</button>
              </div>
            </div>
          </div>
        </div></mt-cell-swipe>
      </div>
      <!-- ------------------------------------------ -->
    </div>
    <!-- 猜你喜欢 -->
    <div class="gwc-bottom">

    </div>
    <!-- ----------------------------------------------- -->
    <!-- 底部定位 -->
    <div class="bottom-flixed">
      <div class="bottom-flixed-left">
        <div class="bottom-flixed-left-fl">
          <input :disabled="disabled" type="checkbox" @click="all" v-model="allcheck">
          <span>全选</span>
        </div>
        <div class="bottom-flixed-left-fr">
          <span class="db-left-sp1">(不含运费)</span>
          <span class="db-left-sp2">合计:￥</span>
          <span class="db-left-sp3" >{{allsum}}</span>
        </div>
      </div>
      <div class="bottom-flixed-right">
        <button @click="jiesuan">去结算 <span db-right-sp1> ▶</span></button>
      </div>
    </div>
    <!-- ------------------------------------------------ -->
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'shoppingCart',
    data(){
      return{
        arr:[],
        sum:0,
        allcheck:true,
        disabled:false,

      }
    },
    methods:{
      jiesuan(){
        this.$router.push({
          path:'../zhifu'
        })
      },
      all(){
        this.arr.forEach(item=>{
          item.fal=!this.allcheck
        })
      },
      listbtn(e) {
        this.arr[e].fal = !this.arr[e].fal
        this.allcheck=this.arr.every(item=>item.fal)
      },
      alldel(){
        this.$messagebox.confirm("您是否要删除已选中物品?").then(item => {
          // console.log(this.arr)
          this.arr.forEach((item,index)=>{
            if (item.fal){
              this.arr.splice(index,1,'')
            }
          })
          let asd = []
          for (let i=0;i<this.arr.length;i++){
            if (this.arr[i]!=''){
              asd.push(this.arr[i])
            }
          }
          this.arr=asd
        });
      },
      btnadd(e){
        this.arr[e].num+=1
      },
      btnroo(e){
        if (this.arr[e].num>1){
          this.arr[e].num-=1
        }else {
          this.$messagebox.confirm("您是否要删除商品").then(item=>{
            this.arr.splice(e,1)

          })
        }
      },
      shanchu(e){
        // console.log(e)
        this.arr.splice(e,1)
      }
    },
    watch:{
      arr:function(){
        if(this.arr.length<1){
          this.allcheck=false
          this.disabled=true
        }
      }
    },
    mounted:function(){
      var bbb = document.getElementById('one')
      if(this.$store.aaa){
        bbb.style.display = ""
      }
    },

    computed:{
      allsum(){
        var sum=this.sum
        for(let i = 0; i < this.arr.length; i++){
          if (this.arr[i].fal){
            sum += this.arr[i].msg_price * this.arr[i].num
          }
        }
        return sum.toFixed(2)

      }

    },
    created() {
      this.arr=this.$store.state.arr
      axios.get('https://www.fastmock.site/mock/636d7a2fec84360dd14ef8068143e2dd/ooo/ooo')
        .then((res)=>{
          // console.log(res.data)
        })
      // console.log(this.sum)
    },
  }
</script>

<style scoped>
  .allgwc{
    background-color: #f5f5f5;
    margin-top: 2.4rem;
    width: 100%;
    height: 35rem;
    overflow: hidden;
    overflow: scroll;
  }
  .shoppingtop{
    width: 100%;
    height:2.4rem;
    line-height: 2.4rem;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
  }
  .shoppingtop-div{
    width: 50%;
    height: 100%;
    margin: 0 auto;
    text-align: right;
    display: inline-block;
  }
  .shoppingtop-div button{
    margin: .5rem;
    background-color: white;
    border: 1px solid white;
  }
  .shoppingtop-divb{
    display: inline-block;
    float:right;
    margin: 0 1rem 0 0;
    height: 100%;
  }
  .shoppingtop-divb button:first-child{
    height: 1.5rem;
    background: url("../../images/yhq.png") no-repeat;
    background-size: 3.5rem;
    border: 1px solid #f8f8f8;
    padding:0 .6rem;
    text-align: center;
    color: #fff;
  }
  .shoppingtop-divb button:last-child{
    background-color: #f8f8f8;
    border: 1px solid #f8f8f8;
    margin-left: .5rem;
  }
  .gwc-padding{
    padding: 1rem 0 8rem 0;
  }
  /*------------------------------------------*/
  .gwc-center{
    width: 100%;
    padding: .1rem 0 0 0;
  }
  .mtswipe{
  }
  .gwc-center-div{
    width: 100%;
    height: 8rem;
    background-color: white;

  }
  .gwc-center-div-checkbox{
    float: left;
    margin: 3.5rem .5rem 0 1rem;
  }
  .gwc-center-div-checkbox input{
    width: 1rem;
    height: 1rem;
    border: 1px solid #ccc;
    border-radius: 100%;
    list-style: none;
  }
  .gwc-center-div-imgdiv{
    width: 5rem;
    height: 5rem;
    float: left;
    padding-top: 1.5rem;
  }
  .gwc-center-div-imgdiv img{
    width: 100%;
    height: 100%;
  }
  .gwc-center-div-wz{
    margin-top: 2rem;
    margin-left: .5rem;
    float: left;
    text-align: left;
  }
  .zng{
    width:14rem;
    height: 16px;
    display: inline-block;
    margin: 0;
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    float: left;
  }
  .ptal{
    color: #ee4f98;
  }
  .ptal s{
    font-size: .5rem;
    color: #ccc;
  }
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
  .w{
    height: 1.5rem;
    margin-top: 1.5rem;
  }
  .btn{
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1rem;
    font-size: 1.2rem;
    border-radius: 100%;
    background-color: white;
    border: 1px solid #ccc;
  }

  /* ---------------- 底部定位 -------------------- */
  .bottom-flixed{
    width: 100%;
    height: 3.5rem;
    background-color: white;
    border-bottom: 1px solid #f5f5f5;
    border-top: 1px solid #f5f5f5;
    position: fixed;
    bottom: 3.45rem;
    left: 0;
  }
  .bottom-flixed div{
    display: inline-block;
    line-height: 3.5rem;
  }
  .bottom-flixed-left{
    width: 68%;
    margin-right: 2%;
  }
  .bottom-flixed-left-fl{
    width: 20%;
    float: left;
    padding-left: 5%;
    text-align: left;
  }
  .bottom-flixed-left-fr{
    width: 75%;
    float: left;
    text-align: right;
    overflow: hidden;
  }
  .db-left-sp1{
    font-size: .5rem;
    color: #ccc;
  }
  .db-left-sp2{
    font-size: 1.1rem;
  }
  .db-left-sp3{
    font-size: 1.1rem;
    width: 2rem;
  }
  .bottom-flixed-right{
    width: 30%;
    float: right;
    display: inline-block;
  }
  .bottom-flixed-right button{
    width: 100%;
    height: 3.5rem;
    border: 0px ;
    background-color: #ff4891;
    color: white;
    font-size: 1.1rem;

  }
</style>
