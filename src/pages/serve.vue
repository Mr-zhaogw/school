<template>
  <div class="serve">
    <f7-block>
      <div class="bannerImg">
        <div class="top">
          <div class="t-name padding-l-r">
            <h2>富士康供应链管理</h2>
            <p>负责人：周先生</p>
            <ul class="fn-clear">
              <li>大数据</li>
              <li>人工智能</li>
            </ul>
          </div>
        </div>
        <div class="bottom">
          <p class="padding-l-r fn-clear">
            <span>入驻时间：2017-8-10</span> 
            <span>团队成员：15人</span>
          </p>
        </div>
        <div class="companyImg">
          <img src="../../static/imgs/p.png">
        </div>
      </div>
      <div class="blank"></div>
      <div class="serveList"> 
        <f7-grid>
          <f7-col>
            <f7-link href="/meetingRoom">
              <i><img src="../../static/imgs/icon/time (1).png"></i>
              <p>会议预约</p>
            </f7-link>
          </f7-col>
          <f7-col>
            <f7-link href="/businessServices">
              <i><img src="../../static/imgs/icon/service.png"></i>
              <p>工商服务</p>
            </f7-link>
          </f7-col>
          <f7-col>
            <f7-link href="https://www.baidu.com">
              <i><img src="../../static/imgs/icon/team (1).png"></i>
              <p>团队管理</p>
            </f7-link>
          </f7-col>
        </f7-grid>
      </div>  
    </f7-block>
  </div>
</template>
<script>
  export default{
    name:'serve'
  }
</script>
<style>
  .serve{
    background:#fff;
    height: 100%
  }
  .serve .bannerImg{
    position: relative;
  }
  .serve .bannerImg .companyImg{
      position: absolute;
      width:6rem;
      height: 6rem;
      border-radius: 3rem;
      overflow: hidden;
      border:6px solid #fff;
      right: 1rem;
      bottom: 1.5rem;
      box-shadow: 2px 3px 10px rgba(0,0,0,.2);
  }
  .serve .bannerImg .companyImg img{
      width:100%;
  }
  .serve .bannerImg .top{
    background:url(../../static/imgs/bottom.jpg);
    height: 11rem;
    width:100%;
    background-size: cover;
    background-position: top;
    overflow: hidden;
  }
  .serve .bannerImg .top .t-name{
    color:#fff;
  }
  .serve .bannerImg .top .t-name h2{
    font-size: 1rem;
    letter-spacing: 2px;
    margin-bottom: 5px;
  }
  .serve .bannerImg .top .t-name p{
    font-size: .9rem;
  }
  .serve .bannerImg .top .t-name ul{
    padding-left: 0;
  }
  .serve .bannerImg .top .t-name ul li{
    float: left;
    margin-right: 10px;
    font-size: .9rem;
    background:#fff;
    color:#0098f9;
    padding:4px 8px;
    border-radius: 3px;
  }
  .serve .bannerImg .bottom{
    background:url(../../static/imgs/top.png);
    height: 5.2rem;
    width:100%;
    background-repeat: no-repeat;
    margin-top:-4rem;
    background-size: cover;
  }
  .serve .bannerImg .bottom p{
    position: absolute;
    bottom: 5px;
    font-size: .9rem;
    width: 100%
  }
  .serve .bannerImg .bottom p span:first-child{
    float: left;
  }
  .serve .bannerImg .bottom p span:last-child{
    float: right;
  }
  .serve .serveList{
    padding:20px 20px 300px;
  }
  .serve .serveList .row .col-auto{
    text-align: center;
  }
  .serve .serveList .row .col-auto a i{
    display:inline-block;
    width:35%; 
    }
  .serve .serveList .row .col-auto a i img{
    width:100%;
  }
  .serve .serveList .row .col-auto a p{
    font-size: .8rem;
    color:#010101;
  }
</style>