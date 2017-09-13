<template>
  <f7-page class="allMember" navbar-fixed>
    <f7-navbar title=" " back-link="团队成员" sliding>
      <f7-nav-right>
          <f7-link href="javascript:" @click="addMomber">添加</f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block>
      <div class="blank"></div>
      <div class="memberBox">
        <div class="list-block">
          <ul>
            <li class="swipeout">
              <div class="swipeout-content">
                <div class="item-content">
                  <div class="item-inner">
                    <div class="item-media">
                      <div class="img">
                        <img src="../../../static/imgs/timg.jpg">
                      </div>
                    </div>
                    <div class="text">
                      <p class="name">周先生</p>
                      <p class="post">项目经理</p>
                      <p class="number">13888888888</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swipeout-actions-right">
                <a href="#" class="bg-orange">重置密码</a>
                <a href="#" class="bg-red" @click="operation">操作</a>
              </div>
            </li>
            <li class="swipeout">
              <div class="swipeout-content">
                <div class="item-content">
                  <div class="item-inner">
                    <div class="item-media">
                      <div class="img">
                        <img src="../../../static/imgs/timg.jpg">
                      </div>
                    </div>
                    <div class="text">
                      <p class="name">周先生</p>
                      <p class="post">项目经理</p>
                      <p class="number">13888888888</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swipeout-actions-right">
                <a href="#" class="bg-orange">重置密码</a>
                <a href="#" class="bg-red">操作</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  name:'allMember',
  data(){
    return{

    }
  },
  methods:{
    operation(){
      var buttons = [
        {
          text: '选择操作',
          color:'black' 
        },
        {
          text: '编辑',
          color:'#0098f9'
        },
        {
          text: '删除',
          color:'red'
        },
        {
          text: '取消',
          color:'gray'
        }
      ];
      self.f7.actions(buttons);
    },
    addMomber(){
      self.f7.modal({
        title:'<span>添加成员</span>',
        afterText:'<div class="list-block">'+
                  '<ul>'+
                    '<li>'+
                      '<div class="item-content">'+
                        '<div class="item-inner">'+
                          '<div class="item-input">'+
                            '<input type="text" placeholder="成员姓名">'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                    '</li>'+
                    '<li>'+
                      '<div class="item-content">'+
                        '<div class="item-inner">'+
                          '<div class="item-input">'+
                            '<input type="text" placeholder="填写团队内职位">'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                    '</li>'+
                     '<li>'+
                      '<div class="item-content">'+
                        '<div class="item-inner">'+
                          '<div class="item-input">'+
                            '<input type="text" placeholder="请填写手机号">'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                    '</li>'+
                  '</ul>'+
                '</div>',
        buttons:[
          {
            text:'取消'
          },
          {
            text:'保存'
          }
        ]
      })
    },
  }
}
</script>
<style>
.allMember{
  background:#fff;
}
.allMember .list-block .item-media .img{
  width:4rem;
  height: 4rem;
  border-radius: 3rem;
  overflow: hidden;
}
.allMember .list-block .item-media .img img{
  width: 100%;
  height: 100%
}
.allMember .list-block .item-inner{
  display: block;
  padding-bottom: 15px;
}
.allMember .list-block .item-media{
  width:27%;
  float: left
}
.allMember .list-block .text{
  width:72%;
  float: right;
  margin-top:10px;
}
.allMember .list-block .text p.name{
  font-size: 1rem;
  color:#282828;
}
.allMember .list-block .text p.post{
  font-size: .8rem;
  margin-top:10px;
}
.allMember .list-block .text p.number{
  font-size: .9rem;
  color:#0098f9;
  margin-top:3px;
}
.allMember .list-block .swipeout-actions-right a{
  font-size: 1rem;
}
.modal{
  border-radius: 5px;
}
.modal.modal-in{
  background: #fff;
}
.modal.modal-in .modal-title{
  text-align: left;
  font-weight: 500;
  font-size: 1.1rem;
}
.modal.modal-in .list-block ul:before{
  height: 0px;
}
.modal.modal-in .list-block .item-content{
  padding-left: 0;
}
.modal.modal-in .modal-button:after{
  height: 0px;
}
.modal.modal-in .modal-inner:after{
  height: 0px;
}
.modal.modal-in .list-block .item-content{
  min-height: 55px;
}
.modal-button{
  height: 50px;
  line-height: 40px;
}
.list-block input[type=text]{
  color:#868585;
}
.modal-buttons{
  height: 50px;
}
.modal-button:last-child{
  font-size: 1.1rem;
  font-weight: 600;
}
</style>