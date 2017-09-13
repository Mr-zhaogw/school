<template>
  <f7-page class="businessServices" navbar-fixed>
    <f7-navbar title=" " back-link="工商服务" sliding>
      <f7-nav-right>
          <f7-link href="/myService">我的服务</f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block>
      <div class="blank"></div>
      <div class="servicesBox">
        <div class="list-block">
          <ul>
            <li v-for="item in servicesList">
              <a href="#" class="item-link item-content">
                <div class="item-inner">
                  <div class="item-title">{{item.title}}</div>
                  <div class="item-after">{{item.createtime | changeDate}}</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </f7-block>
  </f7-page>
</template>

<script>
import { config } from '../assets/config.js'
import utils from '../assets/utils.js'
export default {
  name:'businessServices',
  data(){
    return{
      config:config,
      servicesList:[]
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
      this.getServicesList();
    })
  },
  methods:{
      getServicesList(){
        self.f7.showPreloader(' ');
        this.$http.post(this.config.domin + 'nengtou/app/busservicenews/list?page=0&pagesize=5').then(response => {
              if (response.status === 200 && response.ok) {
                  self.f7.hidePreloader();
                  this.servicesList = response.body.rows;
              } else {
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
.businessServices .list-block{
  margin: 0
}
.businessServices .list-block .item-content{
  min-height: 50px;
}
.businessServices .page-content{
  background:#fff;
  padding-bottom: 0 !important;
}
.businessServices .list-block .item-title{
  font-size: .9rem;
  color:#232323;
}
.businessServices .list-block .item-after{
  font-size: .9rem;
  color:#adadad;
}
</style>