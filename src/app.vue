<template>
  <div id="app">
  <!-- Status bar overlay for full screen mode (Cordova or PhoneGap) -->
    <f7-statusbar></f7-statusbar>
    <!-- Views -->
    <f7-views>
    <!-- Your main view, should have "main" prop -->
      <f7-view main>
        <!-- Pages container, because we use fixed navbar and toolbar, it has additional appropriate props -->
        <f7-pages toolbar-fixed>
          <!-- Initial Page -->
          <f7-page>
            <!-- Top Navbar-->
            <!-- <f7-navbar title="Awesome App"></f7-navbar> -->
            <!-- Toolbar-->
            <f7-toolbar>
              <f7-grid>
                <f7-col>
                  <i><img src="../static/imgs/icon/icon1.png"></i>
                  <p>首页</p>
                </f7-col>
                <f7-col>
                  <i><img src="../static/imgs/icon/icon1.png"></i>
                  <p>服务</p>
                </f7-col>
                <f7-col>
                  <i><img src="../static/imgs/icon/icon1.png"></i>
                  <p>互动</p>
                </f7-col>
                <f7-col>
                  <i><img src="../static/imgs/icon/icon1.png"></i>
                  <p>我的</p>
                </f7-col>
              </f7-grid>
            </f7-toolbar>
            <!-- Page Content -->
            <div class="banner">
              <f7-swiper pagination :params="{speed:500}">
                <f7-swiper-slide><img src="../static/imgs/banner.png"></f7-swiper-slide>
                <f7-swiper-slide><img src="../static/imgs/banner.png"></f7-swiper-slide>
                <f7-swiper-slide><img src="../static/imgs/banner.png"></f7-swiper-slide>
              </f7-swiper>
            </div>
            <div class="nav">
              <f7-grid>
                <f7-col>
                  <f7-link href="/teamManage">
                    <i><img src="../static/imgs/icon/icon1.png"></i>
                    <p>团队管理</p>
                  </f7-link>
                </f7-col>
                <f7-col>
                  <f7-link href="#1">
                    <i><img src="../static/imgs/icon/icon1.png"></i>
                    <p>工商服务</p>
                  </f7-link>
                </f7-col>
                <f7-col>
                  <f7-link href="#1">
                    <i><img src="../static/imgs/icon/icon1.png"></i>
                    <p>全景地图</p>
                  </f7-link>
                </f7-col>
              </f7-grid>
            </div>
            <div class="enterCompany">
              <div class="head title fn-clear">
                <span><i><img src="../static/imgs/icon/icon2.png"></i>入驻企业</span>
                <a class="more"><span>更多</span> ></a>
              </div>
              <div class="companyList">
                <div class="swiper-container swiper-3">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="img">
                        <img src="../static/imgs/timg.jpg">
                        <div class="cover">小米科技</div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="img">
                        <img src="../static/imgs/timg.jpg">
                        <div class="cover">小米科技</div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="img">
                        <img src="../static/imgs/timg.jpg">
                        <div class="cover">小米科技</div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="img">
                        <img src="../static/imgs/timg.jpg">
                        <div class="cover">小米科技</div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="img">
                        <img src="../static/imgs/timg.jpg">
                        <div class="cover">小米科技</div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="img">
                        <img src="../static/imgs/timg.jpg">
                        <div class="cover">小米科技</div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="img">
                        <img src="../static/imgs/timg.jpg">
                        <div class="cover">小米科技</div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="img">
                        <img src="../static/imgs/timg.jpg">
                        <div class="cover">小米科技</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="notice">
              <div class="head title fn-clear">
                <span><i><img src="../static/imgs/icon/icon2.png"></i>园区资讯</span>
                <a class="more"><span>更多</span> ></a>
              </div>
              <div class="nt-box1 nt-box">
                <p class="title">
                  园区最新通告在这里查看
                </p>
                <div class="img"><img src="../static/imgs/timg.jpg"></div>
                <p class="time fn-clear">
                  <span>2017-08-10</span>
                  <span>浏览量：2302人</span>
                </p>
              </div>
              <div class="nt-box2 nt-box">
                <p class="title">
                  园区最新通告在这里查看
                </p>
                <div class="img">
                  <img src="../static/imgs/timg.jpg">
                  <img src="../static/imgs/timg.jpg">
                  <img src="../static/imgs/timg.jpg">
                </div>
                <p class="time fn-clear">
                  <span>2017-08-10</span>
                  <span>浏览量：2302人</span>
                </p>
              </div>
            </div>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
  </div>
</template>
<script>
  export default{
    data:function(){
      return{

      }
    },
    mounted:function(){
        var self = this;
        this.$nextTick(function(){         
         self.f7 = self.$f7Router.framework7;
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
    vertical-align: -15px;
  }
</style>