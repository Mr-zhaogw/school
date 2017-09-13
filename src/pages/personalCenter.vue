<template>
    <div class="personalCenter">
      <f7-block>
        <div class="blank"></div>
        <div class="line1">
          <div class="list-block">
            <ul>
              <li>
                <a href="#" class="item-link item-content">
                  <div class="item-inner noIcon myHead">
                    <div class="item-title">头像</div>
                    <div class="item-after">
                      <div class="headImg">
                        <img src="../../static/imgs/p.png">
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="item-link item-content">
                  <div class="item-inner noIcon">
                    <div class="item-title">名字</div>
                    <div class="item-after">{{userInfo.name}}</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="item-link item-content">
                  <div class="item-inner noIcon">
                    <div class="item-title">联系电话</div>
                    <div class="item-after">{{userInfo.mobile}}</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="blank"></div>
        <div class="line2">
          <div class="list-block">
            <ul>
              <li>
                <a href="#" class="item-link item-content">
                  <div class="item-inner">
                    <div class="item-title">资料修改</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="/safety" class="item-link item-content">
                  <div class="item-inner">
                    <div class="item-title">账号安全</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="blank"></div>
        <div class="line1">
          <div class="list-block">
            <ul>
              <li>
                <a href="/faq" class="item-link item-content">
                  <div class="item-inner">
                    <div class="item-title">常见问题</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="item-link item-content">
                  <div class="item-inner noIcon">
                    <div class="item-title">客服电话</div>
                    <div class="item-after phone">400-4090-4000</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="btn saveBtn">
          <a href="#" class="button active" @click="loginOut">退出登录</a>
        </div>
      </f7-block>
    </div>
</template>

<script>
import { config } from '../assets/config.js'
export default {
  name:'personalCenter',
  data:function(){
    return{
      config:config,
      userInfo:{},
    }
  },
  mounted:function(){
      this.$nextTick(function(){
        this.userInfo = this.$store.state.user
      })
    },
  methods:{
    loginOut:function(){
      self.f7.showPreloader(' ');
      this.$http.post(this.config.domin + 'nengtou/app/loginout').then(response => {
              if (response.body.code === 0 && response.body.succeed) {
                self.f7.hidePreloader()
                sessionStorage.removeItem('user');
                sessionStorage.removeItem('userToken');
                self.f7.mainView.loadPage({url:'/'})
              } else {
                  // self.f7.hidePreloader()
                  self.f7.alert('',response.body.msg);
              }
            },
          (response) => {
              // self.$message.error(response.body.msg);
          })
        },
    },
  }
</script>
<style>
.personalCenter .list-block{
  margin: 0
}
.personalCenter .list-block .item-content{
  min-height: 56px;
}
.personalCenter .page-content{
  /*background:#fff;*/
  /*padding-bottom: 0 !important;*/
}
.personalCenter .list-block .item-link .item-inner.noIcon{
  padding-right: 15px;
  background:none;
}
.personalCenter .list-block .item-after .headImg{
  width:4rem;
  height: 4rem;
  border-radius: 2rem;
  overflow: hidden;
  border:4px solid #e8e8e8;
}
.personalCenter .list-block .item-after .headImg img{
  width:100%;
}
.personalCenter .list-block .item-link .item-inner.myHead .item-after{
  max-height: 6rem;
}
.personalCenter .list-block .item-title{
  color:#282828;
}
.personalCenter .list-block .item-after{
  color:#757575;
}
.personalCenter .list-block .item-after.phone{
  color:#2198f2;
}

</style>