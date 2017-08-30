<template>
  <f7-page class="companyDetail">
    <f7-navbar title=" " back-link="企业介绍" sliding></f7-navbar>
    <f7-block>
      <div class="banner">
        <f7-swiper pagination :params="{speed:500}">
            <f7-swiper-slide><img src="../../static/imgs/banner.png"></f7-swiper-slide>
            <f7-swiper-slide><img src="../../static/imgs/banner.png"></f7-swiper-slide>
            <f7-swiper-slide><img src="../../static/imgs/banner.png"></f7-swiper-slide>
        </f7-swiper>
      </div>
      <div class="companyInf">
        <div class="text">
          <p>佳琪共享篮球</p>
          <ul class="fn-clear label">
            <li>共享经济</li>
            <li>智能硬件</li>
            <li>算法工程</li>
            <div class="clear"></div>
          </ul>
          <span>团队：69人</span>
        </div>
      </div>
      <div class="blank"></div>
      <div class="Honor">
        <div class="intro box">
          <span>项目简介</span>
          <p>言归正传，最近有人在群里问怎么将新创建的本地代码上传到github上，这里简单的记录一下，我喜欢使用命令行，这里全用命令行来实现，不了解Git命令的可以去了解下</p>
        </div>
        <div class="brand box">
          <span>商标资质</span>
          <div class="img fn-clear">
            <img src="../../static/imgs/banner.png">
          </div>
          <p>说明：言归正传，最近有人在群里问怎么将新创建的本地代码上传到github上</p>
        </div>
        <div class="brand box">
          <span>商标资质</span>
          <div class="img fn-clear">
            <img src="../../static/imgs/banner.png">
            <img src="../../static/imgs/banner.png">
          </div>
          <p>说明：言归正传，最近有人在群里问怎么将新创建的本地代码上传到github上</p>
        </div>
      </div>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  name:'companyDetail',
}
</script>
<style>
.companyDetail .page-content{
  padding-bottom: 0 !important
}
.companyDetail .content-block{
  margin-bottom:0;
}
.clear{
  clear:both;
}
.companyDetail{
  background:#fff;
}
.companyDetail .navbar:after{
  height: 0;
}
.companyDetail .swiper-pagination-bullet{
  background:#fff;
  opacity: .3
}
.companyDetail .swiper-pagination-bullet-active{
  background:#007aff;
  border:none;
  opacity: 1
}
.companyDetail .companyInf{
  padding:15px;
}
.companyDetail .companyInf p{
  color:#272727;
}
.companyDetail .companyInf ul{
  margin:10px 0;
}
.companyDetail .companyInf span{
  font-size: .9rem;
}
.companyDetail .Honor{
  padding:0 15px 30px;
}
.companyDetail .Honor .box{
  padding:15px 0;
  border-bottom: 1px solid #efefef
}
.companyDetail .Honor .box:last-child{
  border:none;
}
.companyDetail .Honor .box span{
  font-size: .9rem;
  color:#272727;
  display: inline-block;
  margin-bottom: 10px;
}
.companyDetail .Honor .intro p{
  font-size: .8rem;
  line-height: 25px;
  text-indent: 2em;
}
.companyDetail .Honor .brand .img{
  margin-bottom: 10px;
}
.companyDetail .Honor .brand .img img{
  width:47.5%;
  float: left;
  margin-right: 5%
}
.companyDetail .Honor .brand .img img:last-child{
  margin-right: 0
}
.companyDetail .Honor .brand p{
  text-indent: 2em;
  font-size: .8rem;
  line-height: 25px;
  color:#a7a7a7;
}
</style>