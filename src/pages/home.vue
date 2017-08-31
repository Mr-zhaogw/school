<template>
  <f7-page class="home">
    <!-- Top Navbar-->
    <!-- <f7-navbar title="Awesome App"></f7-navbar> -->
    <!-- Toolbar-->
    <f7-toolbar toolbar tabbar tabbar-labels>
      <bottom></bottom>
    </f7-toolbar>
    <!-- Page Content -->
    <div class="banner">
      <f7-swiper pagination :params="{autoplay:2000, loop:true}">
        <f7-swiper-slide><img src="../../static/imgs/banner.png"></f7-swiper-slide>
        <f7-swiper-slide><img src="../../static/imgs/banner.png"></f7-swiper-slide>
        <f7-swiper-slide><img src="../../static/imgs/banner.png"></f7-swiper-slide>
      </f7-swiper>
    </div>
    <div class="nav">
      <f7-grid>
        <f7-col>
          <f7-link href="/teamManage">
            <i><img src="../../static/imgs/icon/icon1.png"></i>
            <p>团队管理</p>
          </f7-link>
        </f7-col>
        <f7-col>
          <f7-link href="/businessServices">
            <i><img src="../../static/imgs/icon/icon1.png"></i>
            <p>工商服务</p>
          </f7-link>
        </f7-col>
        <f7-col>
          <f7-link href="#1">
            <i><img src="../../static/imgs/icon/icon1.png"></i>
            <p>全景地图</p>
          </f7-link>
        </f7-col>
      </f7-grid>
    </div>
    <div class="enterCompany">
      <div class="head title fn-clear">
        <span><i><img src="../../static/imgs/icon/icon2.png"></i>入驻企业</span>
        <a class="more" href="/companyList"><span>更多</span> ></a>
      </div>
      <div class="companyList">
        <div class="swiper-container swiper-3">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <f7-link href="/companyDetail">
                <div class="img">
                  <img src="../../static/imgs/timg.jpg">
                  <div class="cover">小米科技</div>
                </div>
              </f7-link>
            </div>
            <div class="swiper-slide">
              <f7-link href="/companyDetail">
                <div class="img">
                  <img src="../../static/imgs/timg.jpg">
                  <div class="cover">小米科技</div>
                </div>
              </f7-link>
            </div>
            <div class="swiper-slide">
              <f7-link href="/companyDetail">
                <div class="img">
                  <img src="../../static/imgs/timg.jpg">
                  <div class="cover">小米科技</div>
                </div>
              </f7-link>
            </div>
            <div class="swiper-slide">
              <f7-link href="/companyDetail">
                <div class="img">
                  <img src="../../static/imgs/timg.jpg">
                  <div class="cover">小米科技</div>
                </div>
              </f7-link>
            </div>
            <div class="swiper-slide">
              <f7-link href="/companyDetail">
                <div class="img">
                  <img src="../../static/imgs/timg.jpg">
                  <div class="cover">小米科技</div>
                </div>
              </f7-link>
            </div>
            <div class="swiper-slide">
              <f7-link href="/companyDetail">
                <div class="img">
                  <img src="../../static/imgs/timg.jpg">
                  <div class="cover">小米科技</div>
                </div>
              </f7-link>
            </div>
            <div class="swiper-slide">
              <f7-link href="/companyDetail">
                <div class="img">
                  <img src="../../static/imgs/timg.jpg">
                  <div class="cover">小米科技</div>
                </div>
              </f7-link>
            </div>
            <div class="swiper-slide">
              <f7-link href="/companyDetail">
                <div class="img">
                  <img src="../../static/imgs/timg.jpg">
                  <div class="cover">小米科技</div>
                </div>
              </f7-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="notice">
      <div class="head title fn-clear">
        <span><i><img src="../../static/imgs/icon/icon2.png"></i>园区资讯</span>
        <a class="more" href="/newsList"><span>更多</span> ></a>
      </div>
      <div class="nt-box1 nt-box">
        <f7-link href="/newsDetail">
          <p class="title">
            园区最新通告在这里查看
          </p>
          <div class="img"><img src="../../static/imgs/timg.jpg"></div>
          <p class="time fn-clear">
            <span>2017-08-10</span>
            <span>浏览量：2302人</span>
          </p>
        </f7-link>
      </div>
      <div class="nt-box2 nt-box">
        <f7-link href="/newsDetail">
          <p class="title">
            园区最新通告在这里查看
          </p>
          <div class="img">
            <img src="../../static/imgs/timg.jpg">
            <img src="../../static/imgs/timg.jpg">
            <img src="../../static/imgs/timg.jpg">
          </div>
          <p class="time fn-clear">
            <span>2017-08-10</span>
            <span>浏览量：2302人</span>
          </p>
        </f7-link>
      </div>
    </div>
  </f7-page>
</template>
<script>
import Bottom from '../pages/bottom.vue'
  export default{
    name:'home',
    components:{
      Bottom
    },
  }
</script>