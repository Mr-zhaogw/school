<template>
  <f7-page class="addHonor" navbar-fixed>
    <f7-navbar title=" " back-link="添加荣誉" sliding></f7-navbar>
    <f7-block>
      <div class="blank"></div>
      <div class="passwordBox padding-l-r">
        <div class="list-block">
          <ul>
            <!-- Text inputs -->
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-input">
                    <input type="password" placeholder="请输入资料名称">
                  </div>
                </div>
              </div>
            </li>
            <li class="align-top">
              <div class="item-content">
                <div class="item-media"><i class="icon icon-form-comment"></i></div>
                <div class="item-inner">
                  <div class="item-input">
                    <textarea placeholder="请输入资料说明"></textarea>
                  </div>
                </div>
              </div>
            </li>
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
  name:'addHonor',
}
</script>
<style>
  .addHonor{
    background:#fff;
  }
  .addHonor .list-block .item-content{
    padding-left: 0
  }
  .addHonor .list-block{
    margin: 0
  }
  .addHonor .list-block ul:before{
    height: 0px;
  }
  input::-webkit-input-placeholder {
     color: #adadad;
 }
 .addHonor .list-block input[type=password]{
  height: 50px;
  padding-left: 10px;
 }
 .addHonor .list-block .item-content{
  min-height: 50px;
 }
.addHonor .list-block .item-media+.item-inner{
  margin-left: 0px;
  padding-right: 0px;
}
.addHonor .list-block textarea{
  background:#f2f2f2;
  margin: 15px 0;
  border-radius: 5px;
  padding-left: 10px;
}
.uploadImg{
  margin-top:15px;
}
.uploadImg h2{
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  padding-left: 10px;
  color: #adadad;
  margin-bottom: 15px;
}
.uploadImg .imgBox i{
  display: inline-block;
  width:5rem;
  height: 5rem;
  background:#f2f2f2;
  border-radius: 4px;
  text-align: center;
  line-height: 9.5rem;
}
.uploadImg .imgBox i img{
  width:30%;
  vertical-align: 1.8rem;
}
.uploadImg .imgBox ul{
  display: inline-block;
  margin: 0
}
.uploadImg .imgBox ul li{
  float: left;
  width:5rem;
  height: 5rem;
  margin-right: 10px;
}
.uploadImg .imgBox ul li img{
  width: 100%;
  height: 100%
}
.page.addHonor {
  transform:none !important;
}
</style>