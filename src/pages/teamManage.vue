<template>
  <f7-page class="teamManage" navbar-fixed>
    <f7-navbar title=" " back-link="主要成员" sliding>
    	<f7-nav-right>
	        <f7-link href="/addMember">添加</f7-link>
	    </f7-nav-right>
    </f7-navbar>
    <f7-block>
      <div class="blank"></div>
      <div class="allPeople">
	      <div class="introduceBox">
          <div class="introduceJb fn-clear">
  	      	<div class="left">
              <img src="../../static/imgs/p.png">
            </div>
            <div class="right">
              <div class="name fn-clear">
                <h3>张佳琪</h3>
                <a>编辑</a>
              </div>
              <span>项目负责人</span>
              <ul class="fn-clear label">
                <li>共享经济</li>
                <li>智能硬件</li>
                <li>算法工程</li>
              </ul>
              <p><i><img src="../../static/imgs/icon/p1.png"></i>13888888888</p>
            </div>
          </div>
          <div class="introduceText">
            <span>个人简介</span>
            <p>言归正传，最近有人在群里问怎么将新创建的本地代码上传到github上，这里简单的记录一下，我喜欢使用命令行，这里全用命令行来实现，不了解Git命令的可以去了解下</p>
          </div>
	      </div>
      </div>
      <div class="blank"></div>
      <div class="allPeople">
        <div class="introduceBox">
          <div class="introduceJb fn-clear">
            <div class="left">
              <img src="../../static/imgs/p.png">
            </div>
            <div class="right">
              <div class="name fn-clear">
                <h3>张佳琪</h3>
                <a>编辑</a>
              </div>
              <span>项目负责人</span>
              <ul class="fn-clear label">
                <li>共享经济</li>
                <li>智能硬件</li>
                <li>算法工程</li>
              </ul>
              <p><i><img src="../../static/imgs/icon/p1.png"></i>13888888888</p>
            </div>
          </div>
          <div class="introduceText">
            <span>个人简介</span>
            <p>言归正传，最近有人在群里问怎么将新创建的本地代码上传到github上，这里简单的记录一下，我喜欢使用命令行，这里全用命令行来实现，不了解Git命令的可以去了解下</p>
          </div>
        </div>
      </div>
      <div class="blank"></div>
      <div class="allPeople">
        <div class="introduceBox">
          <div class="introduceJb fn-clear">
            <div class="left">
              <img src="../../static/imgs/p.png">
            </div>
            <div class="right">
              <div class="name fn-clear">
                <h3>张佳琪</h3>
                <a>编辑</a>
              </div>
              <span>项目负责人</span>
              <ul class="fn-clear label">
                <li>共享经济</li>
                <li>智能硬件</li>
                <li>算法工程</li>
              </ul>
              <p><i><img src="../../static/imgs/icon/p1.png"></i>13888888888</p>
            </div>
          </div>
          <div class="introduceText">
            <span>个人简介</span>
            <p>言归正传，最近有人在群里问怎么将新创建的本地代码上传到github上，这里简单的记录一下，我喜欢使用命令行，这里全用命令行来实现，不了解Git命令的可以去了解下</p>
          </div>
        </div>
      </div>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
	name:'teamManage',
}
</script>
<style>
	.allPeople{
		background:#fff;
		padding:0 15px;
	}
	.introduceBox{
		background:#fff;
    padding:15px 0;
	}
  .introduceBox .left{
    float: left;
    width:30%;
  }
  .introduceBox .left img{
    width:100%;
  }
  .introduceBox .right{
    float: left;
    width:65%;
    margin-left: 5%
  }
  .introduceBox .right ul{
    margin-top:10px;
  }
  .introduceBox .right .name h3{
    margin:0;
    width:70%;
    float:left;
    font-weight: 400;
    font-size: .9rem;
    color:#282828;
  }
  .introduceBox .right .name  a{
    float: right;
    font-size: .8rem;
  }
  .introduceBox .right span{
    font-size: .8rem;
    color:#646464;
  }
  .introduceBox .right p{
    font-size: .8rem;
    margin-top:1.5rem;
  }
  .introduceBox .right p i{
    width:20px;
    height: 20px;
    margin-right: 5px;
    display: inline-block;
  }
  .introduceBox .right p i img{
    width:100%;
    vertical-align: -3px;
  }
  .introduceBox .introduceJb{
    border-bottom: 1px solid #efefef;
    padding-bottom: 8px;
  }
  .introduceBox .introduceText span{
    font-size: .9rem;
    display: block;
    margin:10px 0;
    color:#282828;
  }
  .introduceBox .introduceText p{
    font-size: .8rem;
    text-indent: 2em;
    text-align: justify;
    line-height: 25px;
  }
  .teamManage .page-content{
    padding-bottom: 0 !important;
  }
  .teamManage .content-block{
    margin-bottom:0;
  }
</style>