<template>
  <f7-page class="companyDetail" navbar-fixed>
    <f7-navbar title=" " back-link="企业介绍" sliding></f7-navbar>
    <f7-block>
      <div class="companyInf fn-clear">
        <div class="conpanyLogon">
          <img :src="companyInfo.imgUrl">
        </div>
        <div class="text">
          <p>{{companyInfo.name}}</p>
          <ul class="fn-clear label">
            <li v-for="tag in tags">{{tag}}</li>
            <div class="clear"></div>
          </ul>
          <!-- <span>团队：69人</span> -->
        </div>
      </div>
      <div class="blank"></div>
      <div class="totlaPeople"> 
        <div class="list-block">
          <ul>
            <li>
              <a href="#" class="item-link item-content">
                <div class="item-inner">
                  <div class="item-title">团队：{{totalPeople}} 人</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="blank"></div>
      <div class="Honor">
        <div class="intro box">
          <span>项目简介</span>
          <p v-html="companyInfo.introduce"></p>
        </div>
        <div class="brand box" v-for="awards in companyInfo.dataList">
          <span>{{awards.dataName}}</span>
          <div class="img fn-clear">
            <img :src="awards.imgUrls">
          </div>
          <p v-html="awards.dataExplain"></p>
        </div>
        <!-- <div class="brand box">
          <span>商标资质</span>
          <div class="img fn-clear">
            <img src="../../static/imgs/banner.png">
            <img src="../../static/imgs/banner.png">
          </div>
          <p>说明：言归正传，最近有人在群里问怎么将新创建的本地代码上传到github上</p>
        </div> -->
      </div>
    </f7-block>
  </f7-page>
</template>

<script>
import { config } from '../assets/config.js'
export default {
  name:'companyDetail',
  data(){
    return{
        config:config,
        companyId:'',
        companyInfo:'',
        tags:[],
        totalPeople:0
    }
  },
  mounted(){
    this.$nextTick(function(){
      this.companyId = this.$route.query.id
      this.getCompanyDetail();
    })
  },
  methods:{
    getCompanyDetail(){
        self.f7.showPreloader(' ');
        this.$http.post(this.config.domin + 'nengtou/app/project/detail?id='+this.companyId).then(response => {
              if (response.status === 200 && response.ok) {
                console.log(response);
                self.f7.hidePreloader()
                    this.companyInfo = response.body;
                    this.tags = ((response.body.tag).split(','))
                    this.totalPeople = response.body.userList.length
              } else {
                  self.f7.hidePreloader()
                  self.f7.alert('',response.body.msg);
              }
            },
          (response) => {
              // self.$message.error(response.body.msg);
          })
    } 
  }
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
.companyDetail .companyInf .conpanyLogon{
  float: left;
  width:4rem;
  margin-right: 15px;
  height: 4rem;
}
.companyDetail .companyInf .conpanyLogon img{
  width:100%;
}
.companyDetail .companyInf .text{
  float: left;
}
.companyDetail .list-block ul:before{
 height: 0
}
.companyDetail .list-block ul:after{
    height: 0
}
.companyDetail .list-block .item-inner{
  min-height: 50px;
}
</style>