<template>
  <f7-page class="newsList" navbar-fixed>
    <f7-navbar title=" " back-link="园区资讯" sliding></f7-navbar>
    <f7-block>
      <div class="blank"></div>
      <div class="notice">
        <div class="nt-box1 nt-box" v-for="item in newsList">
          <f7-link :href="'/newsDetail?id='+item.id">
            <p class="title">
              {{item.title}}
            </p>
            <div class="img"><img :src="item.imgUrl"></div>
            <p class="time fn-clear">
              <span>{{item.createtime | changeDate}}</span>
              <span>浏览量：{{item.browser}}人</span>
            </p>
          </f7-link>
        </div>
        <!-- <div class="nt-box2 nt-box">
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
        </div> -->
      </div>
    </f7-block>
  </f7-page>
</template>

<script>
import { config } from '../assets/config.js'
import utils from '../assets/utils.js'
export default {
  name:'newsList',
  data(){
    return{
      config:config,
      newsList:[],
    }
  },

  filters:{
      changeDate(time){
          var time = utils.fomatDate(time);
          return time ;
      }
    },

  mounted(){
    this.$nextTick(function(){
      this.getNewsList()
    })
  },
  methods:{
    getNewsList(){
      self.f7.showPreloader(' ');
      this.$http.post(this.config.domin + 'nengtou/app/news/list?page=0&pagesize=10').then(response =>{
          if(response.status === 200 && response.ok){
            console.log(response);
            self.f7.hidePreloader();
            this.newsList = response.body.rows
          }else{
            self.f7.alert('',response.body.msg);
          }
        },
        (response) =>{
            self.f7.alert('','请求失败');
        })
    }
  }
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