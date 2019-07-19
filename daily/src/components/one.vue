<template>
  <div class="box">
    <div class="title">
      <div class="imgbox">
        <img v-lazy="arr.headone" class="head" alt="">
      </div>
      <div class="title_head">
        <h3 class="title_one">一周吃什么</h3>
        <span class="title_two">|轻松解决一日三餐的世纪难题</span>
      </div>
      <div class="content">
        <div class="content_top">
          <div class="imgtitle">
            <img  alt="" class="left" v-lazy="arr.head">
          </div>
          <div class="font">
            <span class="font_left">{{arr.title}}</span>
          </div>
        </div>
      </div>
      <div class="imgbox">
        <img v-lazy="arr.img" class="head" alt="">
        <div class="h3">
          <h3  class="imgbox_title">{{arr.imgtitle}}</h3>
        </div>
        <div class="see">
          <div class="see_left"style="text-align: left;width: 50%">浏览{{arr.see}}</div>
          <div class="see_right"style="text-align: right; ;width: 50%">
              <div class="font-img"style="display: inline-block;position:relative; top:3px" >
                <img src="../../images/share.png" alt=""style="width:20px;height: 20px;">
              </div>
            分享
          </div>
        </div>
      </div>

      <div class="food">
            <div v-for="(item,index) in arr.imagesone" :key="index"  class="food_content">
              <div class="content_left">
                <img v-lazy="item.imgsrc" alt="" class="content_left_img">
              </div>
              <div class="content_right">
                  <div class="content_right_titletop">
                    {{item.title}}
                  </div>
                  <div class="content_right_titlebottom" >
                    {{item.content}}
                  </div>
                <div class="content_right_see">
                  浏览{{item.see }}
                </div>
              </div>
            </div>
      </div>



      <div class="content">
        <div class="content_top">
          <div class="imgtitle">
            <img  alt="" class="left" v-lazy="are.head">
          </div>
          <div class="font">
            <span class="font_left">{{are.title}}</span>
          </div>
        </div>
      </div>
      <div class="imgbox">
        <img v-lazy="are.img" class="head" alt="">
        <div class="h3">
          <h3  class="imgbox_title">{{are.imgtitle}}</h3>
        </div>
        <div class="see">
          <div class="see_left"style="text-align: left;width: 50%">浏览{{are.see}}</div>
          <div class="see_right"style="text-align: right; ;width: 50%">
            <div class="font-img"style="display: inline-block;position:relative; top:3px" >
              <img src="../../images/share.png" alt=""style="width:20px;height: 20px;">
            </div>
            分享
          </div>
        </div>
      </div>

      <div class="food">
        <div v-for="(item,index) in are.imagesone" :key="index"  class="food_content">
          <div class="content_left">
            <img v-lazy="item.imgsrc" alt="" class="content_left_img">
          </div>
          <div class="content_right">
            <div class="content_right_titletop">
              {{item.title}}
            </div>
            <div class="content_right_titlebottom" >
              {{item.content}}
            </div>
            <div class="content_right_see">
              浏览{{item.see }}
            </div>
          </div>
        </div>
      </div>




      <div class="content">
        <div class="content_top">
          <div class="imgtitle">
            <img  alt="" class="left" v-lazy="art.head">
          </div>
          <div class="font">
            <span class="font_left">{{art.title}}</span>
          </div>
        </div>
      </div>
      <div class="imgbox">
        <img v-lazy="art.img" class="head" alt="">
        <div class="h3">
          <h3  class="imgbox_title">{{art.imgtitle}}</h3>
        </div>
        <div class="see">
          <div class="see_left"style="text-align: left;width: 50%">浏览{{are.see}}</div>
          <div class="see_right"style="text-align: right; ;width: 50%">
            <div class="font-img"style="display: inline-block;position:relative; top:3px" >
              <img src="../../images/share.png" alt=""style="width:20px;height: 20px;">
            </div>
            分享
          </div>
        </div>
      </div>


<div v-for="(item) in art" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
  <div class="food" id="food">
    <div v-for="(item,index) in art.imagesone" :key="index"  class="food_content">
      <div class="content_left">
        <img v-lazy="item.imgsrc" alt="" class="content_left_img">
      </div>
      <div class="content_right">
        <div class="content_right_titletop">
          {{item.title}}
        </div>
        <div class="content_right_titlebottom" >
          {{item.content}}
        </div>
        <div class="content_right_see">
          浏览{{item.see }}
        </div>
      </div>
    </div>
  </div>


</div>





    </div>
  </div>
</template>
<script>
  import API from '../api/api'
  export default {
    name: "one",
    data (){
      return {
        arr:[],
        are:[],
        art:[],
        actived: 0,
        selected: '1',
        list:[],
        loading:false
      }
    },
    mounted() {
      API.List().then((res)=>{
          this.arr=res.dses.dataone,
          this.are=res.dses.datatwo,
          this.art=res.dses.datathree,
          console.log(this.arr)
          console.log(this.are)
          console.log(this.art)
          }).catch((err)=>{

      })

    },
    methods:{
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          for (let i= 1; i <= 2; i++) {
            this.list.push(this.list.art);
          }
          console.log(this.list)
          this.loading = false;
        }, 2500);
      }
    },
  }
</script>
<style scoped>
  *{margin:0 auto;padding:0;font-family:"微软雅黑";}
  .box{
    width:100%;
    /*height: 2000px;*/
  }
  .content_right_titlebottom{
    line-height:20px;
  }
  .food_content{
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  .food{
    padding:10px;
  }
  .content_left_img{
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    border-radius: 12%;
  }
  .content_left{
    text-align: left;
    /*background: blue;*/
    width:50%;
  }
  .content_right{
    width:50%;
  }
  .content_right_titletop{
    text-align:center;
    font-size: 12px;
    line-height: 18px;
    color: #474245;
  }
  .content_right_see{
    font-size: 12px;
    color: #969696;
    text-align: left;
    padding-left: 16px;
  }
  .center{
    margin-top: 10px;
    height: 100%;
    line-height: 30px;
    text-align: center;
    font-family: '\5FAE\8F6F\96C5\9ED1';
    font-weight: bold;
  }
  .h3{
    width: 92%;
  }
  .title{
    height: 43px;
    line-height: 50px;
    padding-top: 5px;
  }
  .title_one{
    display: inline-block;
    font-weight: 500;
    font-size: 22px;
    color: #474245;
    line-height: 28px;
  }
  .title_two{
    font-size: 12px;
    line-height: 20px;
    color: #969696;
  }
  .title_head{
    text-align: left;
    width: 92%;
  }
  .content_top{
    width: 92%;
  }
  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 2px solid  #ff4891 !important;
    color: #ff4891 !important;
    margin-bottom: -3px;
  }
  .head{
    width: 92%;
    height: 150px;
    border-radius: 10px;
  }
  .imgbox{
    width: 100%;
    margin-top: 15px;
  }
  .left{
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    background: #fff3e8;
    border: 1px solid #e6e6e6;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .font{
    position: relative;
    display: inline-block;
    line-height: 10px;
    /* background: blue; */
    height: 24px;
    font-size: 12px;
    top: 10px;

  }
  .content{
    /*background: red;*/
    width:100%;
    text-align: left;
  }
  .content > span{
    font-size: 14px;
    line-height: 24px;
    color: #474245;
    padding: 0 7px;
  }
  .imgtitle{
    display: inline-block;
    position: relative;
    top: 17px;
  }
  .imgbox_title{
    text-align: left;
    /*background: yellow;*/
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
    color: #474245;
  }
  .see{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #969696;
    width: 92%;
  }
  img[lazy=loading] {}
  img[lazy=error] {background-image:url('./foundimg/d1.png');background-repeat:no-repeat;background-position: center;}
  img[lazy=loaded] {background-image:url('./foundimg/d1.png');background-repeat:no-repeat;background-position: center; }
</style>
