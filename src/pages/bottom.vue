<template id="bottom">
  <div class="toolbar tabbar tabbar-labels">
      <div class="toolbar-inner">
          <a :href="active == 'home'?'#':'/home/'" class="tab-link active">
              <i class="icon demo-icon-1"><img src="../../static/imgs/icon/icon1.png"></i>
              <span class="tabbar-label">首页</span>
          </a>
          <a href="#tab2" class="tab-link">
              <i class="icon demo-icon-2"><img src="../../static/imgs/icon/icon1.png"></i>
              <span class="tabbar-label">服务</span>
          </a>
          <a href="#tab3" class="tab-link">
              <i class="icon demo-icon-3"><img src="../../static/imgs/icon/icon1.png"></i>
              <span class="tabbar-label">互动</span>
          </a>
          <a :href="active == 'personalCenter'?'#':'/personalCenter/'" class="tab-link">
              <i class="icon demo-icon-4"><img src="../../static/imgs/icon/icon1.png"></i>
              <span class="tabbar-label">我的</span>
          </a>
      </div>
  </div> 
</template>
<script>
  export default{
    name:'bottom',
    data(){
      return{

      }
    },
    props:['active'],
  }
</script>
<style>
  .bottom{
    width:100%;
  }
  .toolbar{
    position: fixed;
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
    vertical-align: -9px;
  }
  .toolbar a.link{
    display: block;
    line-height: 3px;
  }
</style>