<template>
  <f7-page class="newsList">
    <f7-navbar title=" " back-link="园区资讯" sliding></f7-navbar>
    <f7-block>
      <div class="blank"></div>
      <div class="notice">
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
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  name:'newsList',
}
</script>
<style>
.newsList{
  background:#fff;
}
.newsList .content-block{
  margin-bottom: 0;
  padding-bottom: 30px;
}
.newsList .page-content{
  padding-bottom: 0 !important
}
</style>