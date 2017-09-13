<template>
  <f7-page class="addMember" navbar-fixed>
    <f7-navbar title=" " back-link="新增成员" sliding></f7-navbar>
    <f7-block>
      <div class="blank"></div>
        <div class="zLBox padding-l-r">
        <div class="list-block">
          <ul>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-input">
                    <input type="text" placeholder="请写真名">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-input">
                    <input type="text" placeholder="填写团队内职位">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-input">
                    <input type="text" placeholder="请填写手机号">
                  </div>
                </div>
              </div>
            </li>
            <li class="align-top">
              <div class="item-content">
                <div class="item-media"><i class="icon icon-form-comment"></i></div>
                <div class="item-inner">
                  <div class="item-input">
                    <textarea placeholder="请输入个人介绍"></textarea>
                    <span>1/50</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="addlabel">
          <div class="title">
            <span>关键词（至多3个）</span>
            <a href="javascript:" @click="addlabel">添加</a>
          </div>
          <ul class="fn-clear">
            <li>人工智能<i><img src="../../../static/imgs/icon/delete.png"></i></li>
            <li>大数据<i><img src="../../../static/imgs/icon/delete.png"></i></li>
          </ul>
        </div>
        <div class="uploadImg">
          <h2>图片资料</h2>
          <div class="imgBox">
            <ul class="fn-clear">
              <!-- <li>
                <img src="../../../static/imgs/timg.jpg">
              </li> -->
            </ul>
            <i><img src="../../../static/imgs/icon/addImg.png"></i>
          </div>
        </div>
        <div class="fixedBottom btn">
          <a href="#" class="button active">保存</a>
        </div>
      </div>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  name:'addMember',
  data(){
    return{

    }
  },
  methods:{
    addlabel(){
      self.f7.modal({
        title:'<span>添加新关键词</span>',
        afterText:'<div class="list-block">'+
                  '<ul>'+
                    '<li>'+
                      '<div class="item-content">'+
                        '<div class="item-inner">'+
                          '<div class="item-input">'+
                            '<input type="text" placeholder="限制7字">'+
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
    }
  }
}
</script>
<style>
.addMember{
   background:#fff;
}
.addMember .zLBox{
  margin-bottom: 100px;
}
.addMember .list-block ul:before{
  height: 0px;
}
.addMember .list-block .item-content{
  padding-left: 0;
}
.addMember .list-block .item-inner{
  padding-right: 0 ;
  min-height: 50px;
}
.addMember .list-block .item-media+.item-inner{
  margin-left: 0
}
.addMember .list-block input[type=text]{
  padding-left: 10px;
}
.addMember .list-block textarea{
  background:#f2f2f2;
  margin: 15px 0;
  border-radius: 5px;
  padding-left: 10px;
  color:#868585;
}
.addMember .align-top .item-inner .item-input{
  position: relative;
}
.addMember .align-top .item-inner .item-input span{
  position: absolute;
  right: 10px;
  bottom: 15px;
}
.addMember .addlabel{
  margin-top:20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eaeaea
}
.addMember .addlabel .title span{
  color:#adadad;
}
.addMember .addlabel .title a{
  float: right;
}
.addMember .addlabel ul li{
  float: left;
  position: relative;
  background:#0098f9;
  font-size: .9rem;
  color:#fff;
  width:30%;
  margin-right:8px;
  text-align: center;
  padding:7px 0;
  border-radius: 3px;
}
.addMember .addlabel ul li i{
  width:1rem;
  height: 1rem;
  display: inline-block;
  position: absolute;
  background:#005b95;
  top:0;
  right: 0;
  border-radius: 3px;
}
.addMember .addlabel ul li i img{
  width:100%;
}
.page.addMember {
  transform:none !important;
}
</style>

