<template>
  <f7-page class="honor" navbar-fixed>
    <f7-navbar title=" " back-link="荣誉资料" sliding>
      <f7-nav-right>
          <f7-link href="/addHonor">添加</f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block>
      <div class="blank"></div>
      <div class="honorHead">
        <p><span>✻</span>注意：在Mac系统键盘上，meta对应命令键。在Windows系统键盘meta对应windows徽标键。在Sun操作系统键盘上，meta对应实心宝石键</p>
      </div>
      <div class="blank"></div>
      <div class="ourHonor padding-l-r">
        <div class="brand box">
          <span>商标资质</span>
          <a>删除</a>
          <div class="img fn-clear">
            <img src="../../../static/imgs/banner.png">
          </div>
          <p>说明：言归正传，最近有人在群里问怎么将新创建的本地代码上传到github上</p>
        </div>
        <div class="brand box">
          <span>商标资质</span>
          <a>删除</a>
          <div class="img fn-clear">
            <img src="../../../static/imgs/banner.png">
            <img src="../../../static/imgs/banner.png">
          </div>
          <p>说明：言归正传，最近有人在群里问怎么将新创建的本地代码上传到github上</p>
        </div>
      </div>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  name:'honor',
}
</script>
<style>
.honor{
  background:#fff;
}
.honor .honorHead{
  padding:10px 15px;
}
.honor .honorHead p {
  font-size: .9rem;
  line-height: 22px;
  color:#a7a7a7;
}
.honor .honorHead p span{
  color:red;
  font-size: .6rem;
  margin: 0 3px 5px;
}
.ourHonor .brand .img{
  margin-bottom: 10px;
}
.ourHonor .brand .img img{
  width:47.5%;
  float: left;
  margin-right: 5%
}
.ourHonor .brand .img img:last-child{
  margin-right: 0
}
.ourHonor .brand p{
  font-size: .8rem;
  line-height: 25px;
  color:#a7a7a7;
}
.ourHonor .brand a{
  float: right;
  font-size: .9rem;
}
.ourHonor .box{
  padding:15px 0;
  border-bottom: 1px solid #efefef
}
.ourHonor .box:last-child{
  border:none;
}
.ourHonor .box span{
  font-size: .9rem;
  color:#272727;
  display: inline-block;
  margin-bottom: 10px;
}
</style>