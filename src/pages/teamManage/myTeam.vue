<template>
  <f7-page class="myTeam">
    <f7-navbar title=" " back-link="我的团队" sliding></f7-navbar>
    <f7-block>
      <div class="pageTop">
        <div class="backImg"></div>
        <div class="companyName">
            富士康供应链管理
        </div>
      </div>
      <div class="blank"></div>
        sdfds
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
  box-shadow: 0 1px 10px rgba(0,0,0,.2);
}
</style>