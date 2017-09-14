<template>
  <f7-page toolbar-fixed navbar-fixed>
    <f7-navbar>
      <f7-nav-left></f7-nav-left>
      <f7-nav-center sliding>{{navbarTitle}}</f7-nav-center>
      <f7-nav-right>
        <f7-link v-show="activedTab === 'interact'" href="/addInteract"><i><img src="../../static/imgs/icon/add.png"></i></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <div class="toolbar tabbar tabbar-labels">
      <div class="toolbar-inner">
          <a href="#home" class="tab-link active">
              <i class="icon demo-icon-1"><img src="../../static/imgs/icon/icon1.png"></i>
              <span class="tabbar-label">首页</span>
          </a>
          <a href="#serve" class="tab-link">
              <i class="icon demo-icon-2"><img src="../../static/imgs/icon/icon1.png"></i>
              <span class="tabbar-label">服务</span>
          </a>
          <a href="#interact" class="tab-link">
              <i class="icon demo-icon-3"><img src="../../static/imgs/icon/icon1.png"></i>
              <span class="tabbar-label">互动</span>
          </a>
          <a href="#personalCenter" class="tab-link">
              <i class="icon demo-icon-4"><img src="../../static/imgs/icon/icon1.png"></i>
              <span class="tabbar-label">我的</span>
          </a>
      </div>
    </div>
    <f7-tabs>
      <f7-tab id="home" active @tab:show="tabActived('home')">
        <home></home>  
      </f7-tab>
      <f7-tab id="serve" @tab:show="tabActived('serve')">
        <serve></serve>
      </f7-tab>
      <f7-tab id="interact" @tab:show="tabActived('interact')">
        <interact></interact>
      </f7-tab>
      <f7-tab id="personalCenter" @tab:show="tabActived('personalCenter')">
        <personalCenter></personalCenter>
      </f7-tab>
    </f7-tabs>
  </f7-page>

</template>
<script>
import Home from './home.vue'
import PersonalCenter from './personalCenter.vue'
import Serve from './serve.vue'
import Interact from './interact.vue'
  export default{
    name:'app',
     components:{
      Home,
      PersonalCenter,
      Serve,
      Interact
     },
    data:function(){
      return{
        activedTab: 'home'
      }
    },
    computed: {
      navbarTitle() {
        switch(this.activedTab) {
        case 'home':
          return '首页'
        case 'serve':
          return '服务'
        case 'interact':
          return '互动'
        case 'personalCenter':
          return '我的资料'
        }
      }
    },
    mounted:function(){
        var self = this;
        this.$nextTick(function(){         
         self.f7 = self.$f7Router.framework7;
          // self.companylist = self.f7.swiper('.swiper-3', {
          //   pagination:'.swiper-3 .swiper-pagination',
          //   spaceBetween: 10,
          //   slidesPerView: 2.4
          // });
        })
    },
    methods:{
        tabActived(tab) {
          this.activedTab = tab
        }
    }
  }
</script>
<style>
  .banner{
    height: 9rem;
    background:#fff;
  }
  /*.noNavbar{
    display: none;
  }
  .noNavbar.toolbar-fixed .page-content{
    padding-top:0;
  }*/
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
  .navbar .right a i{
    width:24px;
    height: 24px;
  }
  .navbar .right a img{
    width: 100%;
    vertical-align: 3px;
  }
  .toolbar{
    position: fixed;
  }
  .toolbar .row{
    width:100%;
  }
  .toolbar .row .col-auto{
    text-align: center;
  }
  .toolbar i{
    width:1.7rem;
    height: 2rem;
    display: inline-block;
  }
  .toolbar .row .col-auto p{
    font-size: .8rem;
    color:#6b6969;
  }
  .toolbar i img{
    width:100%;
    vertical-align: -9px;
  }
  .toolbar a.link{
    display: block;
    line-height: 3px;
  }
</style>