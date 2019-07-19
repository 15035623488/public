<template>
    <div>
      <div class="top">
        <div class="back" @click="back">
          <div class="back-box">
            <img src="../assets/search-goods-back.a157fb3.png" alt="">
          </div>
        </div>
        <div class="search-goods">
          <div class="sou-box"><img src="../assets/sou.png" alt=""></div>
          <input type="text" placeholder="蓝莓" class="search-input">
        </div>
        <div class="search-right">搜索</div>
      </div>
      <div class="re">
        <div class="shang">
          <h5 style="margin-bottom: 10px">热门搜索</h5>
          <ul class="sou-items">
            <li class="bg-gray">椰青9粒装</li>
            <li class="bg-gray">冰淇淋</li>
            <li class="bg-gray">小龙虾</li>
            <li class="bg-gray">鸡蛋</li>
            <li class="bg-gray">酸奶</li>
            <li class="bg-gray">牛奶</li>
            <li class="bg-gray">啤酒</li>
          </ul>
        </div>
        <div class="xia">
          <div class="history">
            <h5>历史记录</h5>
            <span class="del">清空历史记录</span>
          </div>
          <div class="history-list">
            <ul class="sou-items">
              <li class="bg-gray">椰青9粒装</li>
            </ul>
          </div>
        </div>
        <div class="jian">
          <h5>推荐商品</h5>
          <ul>
            <li>
              <div class="one-model" @click="xiang(index)" v-for="(item,index) in arrs.arr" :key="index">
                <div class="is-left"><img :src="item.img_url" alt=""></div>
                <div class="is-right">
                  <h5 class="right-title">{{item.msg_tittle}}</h5>
                  <p style="color:#999">{{item.msg_details}}</p>
                  <div class="spans">新人专享</div><div class="spans">满39减15</div>
                  <div class="end">
                    <div class="end-box">
                      <div><span style="color: rgb(255, 72, 145);">￥{{item.msg_price}}</span><br> <span style="color: #ccc;" class="span-two">￥{{item.msg_oldprice}}</span></div>
                      <div class="car"><img src="../assets/img_20170425134548759.png" alt=""></div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import API from '../api/api'
  export default {
        name: "Sou",
      data(){
          return{
            arrs:[]
          }
      },
      methods:{
        back(){
          this.$router.go(-1)
        }
      },
      mounted(){
          API.Model().then((res)=>{
            this.arrs=res;
            console.log(this.arrs)
          })

      }
    }
</script>

<style scoped>
  .right-title{
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
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
    margin-top: 30px;
  }
  .jian{
    padding: 20px 15px;
    position: relative;
    z-index: 222;
    background-color: #fff;
  }
  .del{
    font-size: 12px;
    color: #999;
  }
  .history{
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul{
    list-style: none;
  }
  .sou-items{
    display: flex;
    flex-wrap: wrap;
  }
  .bg-gray{
    margin-right: 10px;
    margin-bottom: 10px;
    background-color: #f5f5f5;
    padding: 5px;
    border-radius: 5px;
    font-size: 14px;
  }
  .shang{
    padding: 20px 15px ;
    border-bottom: 1px solid #e6e6e6 ;
  }
  .xia{
    padding: 20px 15px;
    border-bottom: 1px solid #e6e6e6;
  }
  .re{
    text-align: left;
    height: 296px;
  }
  .search-input{
    background-color: #f5f5f5;
    border: 0;
    outline: none;
  }
  .sou-box img{
    width: 100%;
    height: 100%;
  }
  .sou-box{
    margin-left: 10px;
    width: 18px;
    height: 18px;
  }
  .search-goods{
    align-items: center;
    display: flex;
    height: 30px;
    width: 75%;
    background-color: #f5f5f5;
    border-radius: 50px;
    text-align: left;
  }
  .back{
    width: 6%;
    margin-left: 10px;
  }
  .search-right{
    width: 10%;
    margin-right: 5px;
  }
  .back-box{
    width: 18px;
    height: 18px;
  }
  .back-box img{
    width: 100%;
    height: 100%;
  }
.top{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 46px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
</style>
