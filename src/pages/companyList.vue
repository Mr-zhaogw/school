<template>
  <f7-page class="allCompany">
    <f7-navbar title=" " back-link="入驻企业" sliding></f7-navbar>
    <f7-block>
      <div class="blank"></div>
      <div class="allCompanyBox">
        <div class="companyBox fn-clear">
          <f7-link href="/companyDetail">
            <div class="left">
              <img src="../../static/imgs/banner.png">
            </div>
            <div class="right">
              <h2>佳琪共享篮球</h2>
              <span>负责人：张毅</span>
              <ul class="fn-clear label">
                <li>共享经济</li>
                <li>智能硬件</li>
                <li>算法工程</li>
              </ul>
              <p class="fn-clear">
                <span><i><img src="../../static/imgs/icon/time.png"></i>2017-8-10</span>
                <span><i><img src="../../static/imgs/icon/team.png"></i>16</span>
              </p>
            </div>
          </f7-link>
        </div>
        <div class="companyBox fn-clear">
          <f7-link href="/companyDetail">
            <div class="left">
              <img src="../../static/imgs/banner.png">
            </div>
            <div class="right">
              <h2>佳琪共享篮球</h2>
              <span>负责人：张毅</span>
              <ul class="fn-clear label">
                <li>共享经济</li>
                <li>智能硬件</li>
                <li>算法工程</li>
              </ul>
              <p class="fn-clear">
                <span><i><img src="../../static/imgs/icon/time.png"></i>2017-8-10</span>
                <span><i><img src="../../static/imgs/icon/team.png"></i>16</span>
              </p>
            </div>
          </f7-link>
        </div>
        <div class="companyBox fn-clear">
          <f7-link href="/companyDetail">
            <div class="left">
              <img src="../../static/imgs/banner.png">
            </div>
            <div class="right">
              <h2>佳琪共享篮球</h2>
              <span>负责人：张毅</span>
              <ul class="fn-clear label">
                <li>共享经济</li>
                <li>智能硬件</li>
                <li>算法工程</li>
              </ul>
              <p class="fn-clear">
                <span><i><img src="../../static/imgs/icon/time.png"></i>2017-8-10</span>
                <span><i><img src="../../static/imgs/icon/team.png"></i>16</span>
              </p>
            </div>
          </f7-link>
        </div>
        <div class="companyBox fn-clear">
          <f7-link href="/companyDetail">
            <div class="left">
              <img src="../../static/imgs/banner.png">
            </div>
            <div class="right">
              <h2>佳琪共享篮球</h2>
              <span>负责人：张毅</span>
              <ul class="fn-clear label">
                <li>共享经济</li>
                <li>智能硬件</li>
                <li>算法工程</li>
              </ul>
              <p class="fn-clear">
                <span><i><img src="../../static/imgs/icon/time.png"></i>2017-8-10</span>
                <span><i><img src="../../static/imgs/icon/team.png"></i>16</span>
              </p>
            </div>
          </f7-link>
        </div>
      </div>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  name:'companyList',
}
</script>
<style>
.allCompany .page-content{
  padding-bottom: 0px !important
}
.allCompany .content-block{
  margin-bottom: 0
}
.allCompany{
  background:#fff;
}
.allCompany .allCompanyBox{
  padding:0px 10px 20px;
}
.allCompany .allCompanyBox .companyBox{
  padding: 15px 0;
  border-bottom: 1px solid #f2f2f2;
}
.allCompany .allCompanyBox .companyBox:last-child{
  border:none;
}
.companyBox .left{
  width:37%;
  float: left;
  height: 6rem;
}
.companyBox .left img{
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.companyBox .right{
  width:60%;
  float: left;
  margin-left: 3%
}
.companyBox .right h2{
  margin:0;
  font-size: .9rem;
  font-weight: 500;
  color:#272727;
}
.companyBox .right span{
  font-size: .8rem;
}
.companyBox .right p span{
  font-size: .7rem;
  color:#828181;
}
.companyBox .right p span:first-child{
  float: left
}
.companyBox .right p span:last-child{
  float: right;
}
.companyBox .right p span i{
  width:15px;
  height: 15px;
  display: inline-block;
}
.companyBox .right p span i{
  margin-right: 7px;
}
.companyBox .right p span i img{
  width:100%;
  vertical-align: -2px;

}
</style>