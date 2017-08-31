<template>
  <div class="bottom">
    <f7-grid>
      <f7-col>
        <f7-link href="/home">
          <i><img src="../../static/imgs/icon/icon1.png"></i>
          <p>首页</p>
        </f7-link>
      </f7-col>
      <f7-col>
        <f7-link href="#">
          <i><img src="../../static/imgs/icon/icon1.png"></i>
          <p>服务</p>
        </f7-link>
      </f7-col>
      <f7-col>
        <f7-link href="#">
          <i><img src="../../static/imgs/icon/icon1.png"></i>
          <p>互动</p>
        </f7-link>
      </f7-col>
      <f7-col>
        <f7-link href="/personalCenter">
          <i><img src="../../static/imgs/icon/icon1.png"></i>
          <p>我的</p>
        </f7-link>
      </f7-col>
    </f7-grid>
  </div>
</template>
<script>
  export default{
    name:'bottom'
  }
</script>
<style>
  .bottom{
    width:100%;
  }
  .toolbar .row{
    width:100%;
  }
  .toolbar .row .col-auto{
    text-align: center;
  }
  .toolbar i{
    width:1.7rem;
    height: 2rem;
    display: inline-block;
  }
  .toolbar .row .col-auto p{
    font-size: .8rem;
    color:#6b6969;
  }
  .toolbar i img{
    width:100%;
    vertical-align: 1px;
  }
  .toolbar a.link{
    display: block;
    line-height: 3px;
  }
</style>