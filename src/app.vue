<template>
    <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" main>
        <f7-pages>
          <f7-page>
            <div class="login">
              <div class="loginBox">
                <div class="list-block">
                  <ul>
                    <li>
                      <div class="item-content">
                        <div class="item-inner">
                          <div class="item-input">
                            <input type="text" placeholder="输入账号" v-model="Mobile">
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="item-content">
                        <div class="item-inner">
                          <div class="item-input">
                            <input type="password" placeholder="输入密码" v-model="Password">
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <a class="forgetWord">忘记密码？</a>
                <a href="javascript:" class="button button-fill loginBtn" @click="Login">登录</a>
                <div class="line">
                  <span>OR</span>
                </div> 
                <a href="#" class="button button-fill onlyLook">随便看看</a> 
              </div>
            </div>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
  </div>
</template>
<script>
import { config } from './assets/config.js'
  export default{
    name:'app',
    data:function(){
      return{
        config:config,
        Mobile:'',
        Password:''
      }
    },
    mounted:function(){
      this.$nextTick(function(){
        // this.Login();
      })
    },
    methods:{
       Login(){
        var data = {
          "mobile":this.Mobile,
          "password":this.Password
        }
        if(this.Mobile === '' || this.Mobile === null){
          self.f7.alert('','请输入手机号');
        }else if(this.Password === '' || this.Password === null){
          self.f7.alert('','请输入密码');
        }else{
          self.f7.showPreloader(' ');
          this.$http.post(this.config.domin + 'nengtou/app/login?mobile='+data.mobile+'&password='+data.password).then(response => {
              if (response.body.code === 0 && response.body.succeed) {
                this.$store.commit('saveUser',response.body)
                self.f7.hidePreloader()
                self.f7.mainView.loadPage({url:'/index'})
              } else {
                  self.f7.hidePreloader()
                  self.f7.alert('',response.body.msg);
              }
            },
          (response) => {
              // self.$message.error(response.body.msg);
          })
        }
      },
    }
  }
</script>
<style>
  .login{
    width:100%;
    height: 100vh;
    background:url(../static/imgs/login.png);
    background-position: 100%;
    background-size: cover;
    position: relative;
  }
  .login .loginBox{
    position: absolute;
    top:13rem;
    width:70%;
    left: 15%
  }
  .login .loginBox .list-block ul{
    background:none;
  }
  .login .loginBox .list-block ul:before{
    height: 0px;
  }
  .login .loginBox .list-block .item-inner:after{
    height: 0px;
  }
  .login .loginBox .list-block ul:after{
    height: 0px;
  }
  .login .loginBox .list-block input[type=text]{
    background:#fff;
    border-radius: 5px;
    margin-bottom: 10px;
    padding-left: 10px;
  }
  .login .loginBox .list-block input[type=password]{
    background:#fff;
    border-radius: 5px;
    padding-left: 10px;
  }
  .login .loginBox .list-block .item-content{
    padding-left: 0px;
  }
  .login .loginBox .list-block .item-inner{
    padding-right: 0px;
  }
  .login .loginBox .forgetWord{
    color:#fff;
    margin-top: 10px;
    display: block;
  }
  .login .loginBox a.loginBtn{
      height: 44px;
      line-height: 44px;
      margin-top: 15px;
  }
  .login .loginBox .line{
    height: 1px;
    background:rgba(255,255,255,.3);
    margin:20px 0;
    position: relative;
  }
  .login .loginBox .line span{
    display: inline-block;
    width:4rem;
    height: 1rem;
    position: absolute;
    top:-.5rem;
    background:#49b3f8;
    left: 5rem;
    text-align: center;
    color:#fff;
    font-size: .8rem;
  }
  .login .loginBox a.onlyLook{
    height: 44px;
    line-height: 44px;
    background:rgba(0,136,225,.6);
  }
</style>