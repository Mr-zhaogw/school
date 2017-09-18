<template>
  <f7-page class="addService" navbar-fixed>
    <f7-navbar title=" " back-link="添加服务" sliding></f7-navbar>
    <f7-block>
      <div class="blank"></div>
      <div class="addSerBox">
        <div class="Head">
          <p><span>✻</span>注意：在Mac系统键盘上，meta对应命令键。在Windows系统键盘meta对应windows徽标键</p>
        </div>
        <div class="list-block">
          <ul>
            <li>
              <div class="item-content">
              <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                  <div class="item-input">
                    <input type="text" placeholder="请填写对接人姓名" v-model="linkName">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
              <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                  <div class="item-input">
                    <input type="text" placeholder="请填写手机号" v-model="linkMobile">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
              <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                  <div class="item-input">
                    <input type="text" placeholder="服务类型" readonly id="picker-device">
                  </div>
                </div>
              </div>
            </li>
            <li style="display:none">
              <div class="item-content">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                  <div class="item-inner">
                    <div class="item-input">
                      <input type="text" placeholder="服务类型">
                    </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="btn saveBtn">
          <a href="#" class="button active" @click="linkSave">提交</a>
        </div>
      </div>
    </f7-block>
  </f7-page>
</template>

<script>
import { config } from '../../assets/config.js'
export default {
  name:'addService',
  data(){
    return{
      config:config,
      linkName:'',
      linkMobile:'',
    }
  },
  mounted(){
    self.nameSelect = self.f7.picker({
    input: '#picker-device',
    toolbarCloseText:'确定',
    cols: [
        {
            textAlign: 'center',
            values: ['iPhone 4', 'iPhone 4S', 'iPhone 5', 'iPhone 5S', 'iPhone 6']
        }
    ]
});
  },
  methods:{
    linkSave(){
      var serviceType = document.getElementById('picker-device').value;
      if(this.linkName == null || this.linkName == undefined || this.linkName == ''){
        self.f7.alert('','联系人不能为空');
        return;
      }else if(this.linkMobile == null || this.linkMobile == undefined || this.linkMobile == ''){
        self.f7.alert('','联系电话不能为空');
        return;
      }else if(serviceType == null || serviceType == undefined || serviceType == ''){
        self.f7.alert('','服务类型不能为空');
        return;
      }else{
        this.$http.post(this.config.domin + 'nengtou/app/busserviceapply/save?linkMobile='+this.linkMobile+'&linkName='+this.linkName+'&serviceType='+serviceType).then(response =>{
              if(response.body.code === 0 && response.body.succeed){
                console.log(response);
                self.f7.alert('','服务添加成功');
              }else{
                self.f7.alert('',response.body.msg);
              }
          },(response) =>{

        })
      }
    }
  }
}
</script>
<style>
  .addService{
    background:#fff;
  }
  .addSerBox{
    padding:0 15px;
  }
  .addSerBox .Head{
    padding:10px 0;
  }
  .addSerBox .Head p{
    font-size: .9rem;
    line-height: 23px;
  }
  .addSerBox .Head p span{
    font-size: .6rem;
    color:red;
    margin:0 3px;
  }
  .addSerBox .list-block ul:before{
    height: 0
  }
  .addSerBox .list-block .item-inner{
    padding-right: 0;
    padding-top:20px;
  }
  .addSerBox .list-block .item-content{
    padding-left: 0
  }
  .addSerBox .list-block ul:after{
    height: 0px;
  }
  .addSerBox .list-block .item-media{
    padding-top:20px;
  }
  .addSerBox .btn.saveBtn{
    padding:0;
    margin:40px 0;
  }
  .picker-columns{
    height: 12rem;
  }
  .picker-modal .toolbar{
    background: #2198f2;
  }
  .picker-modal .toolbar a.link{
    line-height: 50px;
    color:#fff;
  }
  .picker-modal .picker-modal-inner{
    background:#fff;
    -webkit-mask-box-image:none;
  }
  .picker-modal .toolbar:before{
    height: 0px;
  }
</style>