<template>
  <f7-page class="FAQ" navbar-fixed>
    <f7-navbar title=" " back-link="常见问题" sliding></f7-navbar>
    <f7-block>
      <div class="blank"></div>
      <div class="faqBox" v-for="item in faqList">
          <div class="content">
            <h2>Q.{{item.title}}</h2>
            <p v-html="item.content"></p>
          </div>
          <div class="blank"></div>
      </div>

      
    </f7-block>
  </f7-page>
</template>

<script>
import { config } from '../../assets/config.js'
export default {
  name:'safety',
  data(){
    return{
      config:config,
      faqList:[]
    }
  },
  mounted(){
    this.$nextTick(function(){      
        this.getFaqList();
    })
  },
  methods:{
    getFaqList(){
      self.f7.showPreloader(' ');
      this.$http.post(this.config.domin + 'nengtou/app/question/list?page=0&pagesize=10').then(response => {
            if (response.status === 200 && response.ok) {
                self.f7.hidePreloader();
                this.faqList = response.body.rows;
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
  .FAQ{
    background:#f2f2f2;
  }
  .FAQ .faqBox .content{
    padding:15px;
    background:#fff;
  }
  .FAQ .faqBox h2{
    margin-top:0;
    margin-bottom:10px;
    font-size: 1rem;
    color:#0098f9;
  }
  .FAQ .faqBox p{
    font-size: .9rem;
    line-height: 25px;
  }

</style>