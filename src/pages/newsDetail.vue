<template>
  <f7-page class="newsDetail" navbar-fixed>
    <f7-navbar title=" " back-link="园区最新通告在这里查看" sliding></f7-navbar>
    <f7-block>
      <div class="blank"></div>
      <div class="detailBox">
        <h2>园区最新通告在这里查看园区最新通告在这里查看!</h2>
        <span>撰稿人：张小龙</span>
        <span>2017-8-10</span>
        <div class="content">
          <p>Vue.js（读音 /vjuː/，类似于 view） 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面</p>
          <img src="../../static/imgs/banner.png">
          <p>Vue.js（读音 /vjuː/，类似于 view） 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面</p>
        </div>
      </div>
    </f7-block>
  </f7-page>
</template>

<script>
import { config } from '../assets/config.js'
import utils from '../assets/utils.js'
export default {
  name:'newsDetail',
  data(){
    return{
      config:config,
      newsId:0,
    }
  },
  mounted(){
    this.$nextTick(function(){
      this.newsId = this.$route.query.id
      this.getNewsDetail();
    })
  },
  methods:{
    getNewsDetail(){
      // self.f7.showPreloader(' ');
      this.$http.post(this.config.domin + 'nengtou/app/news/detail?id='+this.newsId).then(response =>{
          if(response.status === 200 && response.ok){
            console.log(response);
            // self.f7.hidePreloader();
            this.newsList = response.body.rows
          }else{
            self.f7.alert('',response.body.msg);
          }
        },
        (response) =>{
            self.f7.alert('','请求失败');
        })
    },
  }
}
</script>
<style>
.newsDetail{
  background:#fff;
}
.newsDetail .detailBox{
  padding:0 15px;
}
.newsDetail .detailBox h2{
  font-size: 1.1rem;
  color:#282828;
  margin-bottom: 7px;
}
.newsDetail .detailBox span{
  font-size: .8rem;
  display: block;
  margin-bottom: 5px;
}
.newsDetail .detailBox .content{
  margin-top:20px;
}
.newsDetail .detailBox .content p{
  font-size: .9rem;
  line-height: 27px;
  text-align: justify;
  margin-bottom: 5px;
}
.newsDetail .detailBox .content img{
  width:100%;
  margin-bottom: 5px;
}
.newsDetail .content-block{
  margin-bottom: 0;
  padding-bottom: 30px;
}
.newsDetail .page-content{
  padding-bottom: 0 !important
}
</style>