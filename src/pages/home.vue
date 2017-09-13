<template>
  <div class="home">
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
          <f7-link href="/myTeam/">
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
          <f7-link href="https://www.baidu.com">
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
            <div class="swiper-slide" v-for="(item,index) in companyList">
              <f7-link :href="'/companyDetail?id='+item.id">
                <div class="img">
                  <img :src="item.imgUrl">
                  <div class="cover">{{item.name}}</div>
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
      <div class="nt-box1 nt-box" v-for="item in newsList">
        <f7-link :href="'/newsDetail?id='+item.id">
          <p class="title">
            {{item.title}}
          </p>
          <div class="img"><img :src="item.imgUrl"></div>
          <p class="time fn-clear">
            <span>{{item.createtime | changeDate}}</span>
            <span>浏览量：2302人</span>
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
  </div>
</template>
<script>
import Bottom from '../pages/bottom.vue'
import { config } from '../assets/config.js'
import utils from '../assets/utils.js'
  export default{
    name:'home',
    props:['thisTab'],
    data(){
      return{
        config:config,
        companyList:[],
        newsList:[]
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
        this.getCompanList();
        this.getNewsList();
      })
    },
    components:{
      Bottom
    },
    methods:{
        getCompanList(){
            this.$http.post(this.config.domin + 'nengtou/app/project/list?page=0&pagesize=5').then(response => {
              // if (response.body.code === 0 && response.body.succeed) {
                  this.companyList = response.body.rows;
                  this.$nextTick(function(){     
                    self.companylist = self.f7.swiper('.swiper-3', {
                      pagination:'.swiper-3 .swiper-pagination',
                      spaceBetween: 10,
                      slidesPerView: 2.4
                    });
                })
              // } else {
              //     self.f7.alert('',response.body.msg);
              // }
            },
          (response) => {
              // self.$message.error(response.body.msg);
          })
        },
      getNewsList(){
        this.$http.post(this.config.domin + 'nengtou/app/news/list?page=0&pagesize=10').then(response =>{
          if(response.status === 200 && response.ok){
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