<template>
  <div id="app">
  <!-- Status bar overlay for full screen mode (Cordova or PhoneGap) -->
    <f7-statusbar></f7-statusbar>
    <!-- Views -->
    <f7-views>
    <!-- Your main view, should have "main" prop -->
      <f7-view main toolbar-fixed>
        <!-- Pages container, because we use fixed navbar and toolbar, it has additional appropriate props -->
        <f7-pages>
          <!-- Initial Page -->
          <f7-page>
            <home></home>
          </f7-page>
        </f7-pages>
        <div class="toolbar tabbar tabbar-labels">
          <div class="toolbar-inner">
              <a href="#tab1" class="tab-link active">
                  <i class="icon demo-icon-1"><img src="../static/imgs/icon/icon1.png"></i>
                  <span class="tabbar-label">首页</span>
              </a>
              <a href="#tab2" class="tab-link">
                  <i class="icon demo-icon-2"><img src="../static/imgs/icon/icon1.png"></i>
                  <span class="tabbar-label">服务</span>
              </a>
              <a href="#tab3" class="tab-link">
                  <i class="icon demo-icon-3"><img src="../static/imgs/icon/icon1.png"></i>
                  <span class="tabbar-label">互动</span>
              </a>
              <a href="/personalCenter" class="tab-link">
                  <i class="icon demo-icon-4"><img src="../static/imgs/icon/icon1.png"></i>
                  <span class="tabbar-label">我的</span>
              </a>
          </div>
      </div>
      </f7-view>
    </f7-views>
  </div>
</template>
<script>
import Home from './pages/home.vue'
import Bottom from './pages/bottom'
  export default{
    name:'app',
     components:{
      Home,
      Bottom
     },
    data:function(){
      return{

      }
    },
    mounted:function(){
        var self = this;
        this.$nextTick(function(){         
         self.f7 = self.$f7Router.framework7;
         console.log(self.f7);
         self.f7.mainView.loadPage({url:'/home'});
          self.companylist = self.f7.swiper('.swiper-3', {
            pagination:'.swiper-3 .swiper-pagination',
            spaceBetween: 10,
            slidesPerView: 2.4
          });
        })
    },
  }
</script>
<style>
  .banner{
    height: 9rem;
    background:#fff;
  }
  .banner .swiper-container{
    height: 9rem;
  }
  .banner .swiper-container .swiper-slide img{
    width: 100%;
    height: 100%
  }
   .banner .swiper-container-horizontal>.swiper-pagination-bullets{
    bottom:0px;
  }
   .banner .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{
    margin:0 3px;
  }
  .banner .swiper-pagination-bullet{
    width:7px;
    height: 7px;
  }
  .swiper-pagination-bullet-active{
    background:none;
    border:2px solid #fff;
  }
  .nav{
    padding:1rem .5rem;
    background:#fff;
  }
  .nav .row .col-auto{
    text-align: center;
  }
  .nav .row .col-auto a{
    display: block;
    color:#000;
  }
  .nav .row .col-auto i{
    width:40%;
    display: inline-block;
  }
  .nav .row .col-auto i img{
    width: 100%
  }
  .nav .row .col-auto p{
    font-size:.8rem;
  }
  .enterCompany{
    margin-top:15px;
    background:#fff;
  }
  .head.title{
    padding:15px 0 10px 0;
    margin:0 15px;
    border-bottom: 1px solid #e4e4e4
  }
  .head.title span{
    font-size: .9rem;
    float: left;
  }
  .head.title span i{
    width:1rem;
    height: 1rem;
    display: inline-block;
    margin-right: 5px;
  }
  .notice .head.title{
    margin: 0
  }
  .head.title span i img{
    width: 100%;
    vertical-align: -4px;
  }
  .head.title a.more{
    font-size: .8rem;
    float: right;
    color:#999;
    margin-top:2px;
  }
  .head.title a.more span{
    font-size: .8rem;
    margin-right: 5px;
  }
  .companyList{
    padding: 15px 15px 25px;
  }
  .companyList .swiper-slide{

  }
  .companyList .swiper-slide .img{
    position: relative;
    height: 5rem;
  }
  .companyList .swiper-slide .img img{
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
  .companyList .swiper-slide .img .cover{
    position: absolute;
    width: 100%;
    top:0;
    left: 0;
    background:rgba(0,0,0,.3);
    text-align: center;
    color:#fff;
    height:5rem;
    line-height: 5rem;
    font-weight: 600;
    border-radius: 3px;
    font-size: 1rem;
  }
  .notice{
    background:#fff;
    margin-top:15px;
    padding: 0 15px;
  }
  .notice .nt-box {
    padding:0 0 10px;
    border-bottom: 1px solid #e4e4e4
  }
  .notice .nt-box a p{
    color:#282828;
  }
  .notice .nt-box:last-child{
    border:none;
    padding-bottom: 15px;
  }
  .notice .nt-box p.title{
    font-size: .9rem;
    margin: 10px 0
  }
  .notice .nt-box .img{
    width:100%;
  }
  .notice .nt-box1 .img img{
    width: 100%;
    border-radius: 3px;
  }
  .notice .nt-box2 .img img{
    width:32.2%;
    height: 4.5rem;
  }
  .notice .nt-box p.time{
    margin-top:3px;
  }
  .notice .nt-box p.time span{
    font-size: .8rem;
    color:#999;
  }
  .notice .nt-box p.time span:first-child{
    float: left
  }
  .notice .nt-box p.time span:last-child{
    float: right;
  }
  
</style>