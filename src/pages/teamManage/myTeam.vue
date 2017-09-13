<template>
  <f7-page class="myTeam" navbar-fixed>
    <f7-navbar title=" " back-link="我的团队" sliding></f7-navbar>
    <f7-block>
      <div class="pageTop">
        <div class="backImg"></div>
        <div class="companyName">
            富士康供应链管理
        </div>
      </div>
      <div class="blank"></div>
        <div class="list-block">
          <ul>
            <li>
              <a href="/honor" class="item-link item-content">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                  <div class="item-title">荣誉资料</div>
                  <div class="item-after">0 项</div>
                </div>
              </a>
            </li>
            <li>
              <a href="/allMember" class="item-link item-content">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                  <div class="item-title">团队成员</div>
                  <div class="item-after">0 人</div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="item-link item-content">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                  <div class="item-title">项目简介</div>
                  <div class="item-after">从事供应链管理</div>
                </div>
              </a>
            </li>
            <li>
              <a href="/teamManage" class="item-link item-content">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                  <div class="item-title">成员资料</div>
                  <div class="item-after">0 人</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  name:'myTeam',
}
</script>
<style>
 .myTeam{
  background:#fff;
 }
 .myTeam .pageTop{
  height: 6rem;
  position: relative;
 }
.myTeam .pageTop .backImg{
  height: 3rem;
  background:url(../../../static/imgs/timg.jpg);
 }
.myTeam .pageTop .companyName{
  background:#fff;
  height: 3rem;
  position: absolute;
  top:1.5rem;
  width: 90%;
  left: 5%;
  border-radius: 5px;
  text-align: center;
  line-height: 3rem;
  color:#282828;
  box-shadow: 0 1px 3px rgba(0,0,0,.2);
}
.myTeam .list-block ul:before{
  height: 0px;
}
.myTeam .list-block .item-inner{
  min-height: 55px;
}
/*.myTeam .list-block .item-after{
  width:9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}*/
</style>