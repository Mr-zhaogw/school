<template>
  <f7-page class="personalCenter">
    <f7-navbar title=" " back-link="我的资料" sliding></f7-navbar>
    <f7-toolbar>
      <bottom></bottom>
    </f7-toolbar>
    <f7-block>
      <div class="blank"></div>
      <div class="line1">
        <div class="list-block">
          <ul>
            <li>
              <a href="#" class="item-link item-content">
                <div class="item-inner noIcon myHead">
                  <div class="item-title">头像</div>
                  <div class="item-after">
                    <div class="headImg">
                      <img src="../../static/imgs/p.png">
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="item-link item-content">
                <div class="item-inner noIcon">
                  <div class="item-title">名字</div>
                  <div class="item-after">周先生</div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="item-link item-content">
                <div class="item-inner noIcon">
                  <div class="item-title">联系电话</div>
                  <div class="item-after">13888888888</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="blank"></div>
      <div class="line2">
        <div class="list-block">
          <ul>
            <li>
              <a href="#" class="item-link item-content">
                <div class="item-inner">
                  <div class="item-title">资料修改</div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="item-link item-content">
                <div class="item-inner">
                  <div class="item-title">账号安全</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="blank"></div>
      <div class="line1">
        <div class="list-block">
          <ul>
            <li>
              <a href="#" class="item-link item-content">
                <div class="item-inner">
                  <div class="item-title">常见问题</div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="item-link item-content">
                <div class="item-inner noIcon">
                  <div class="item-title">客服电话</div>
                  <div class="item-after phone">400-4090-4000</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="btn">
        <a href="#" class="button active">退出登录</a>
      </div>
    </f7-block>
  </f7-page>
</template>

<script>
import Bottom from '../pages/bottom.vue'
export default {
  name:'personalCenter',
  components:{
    Bottom
  },
}
</script>
<style>
.personalCenter .list-block{
  margin: 0
}
.personalCenter .list-block .item-content{
  min-height: 56px;
}
.personalCenter .page-content{
  /*background:#fff;*/
  /*padding-bottom: 0 !important;*/
}
.personalCenter .list-block .item-link .item-inner.noIcon{
  padding-right: 15px;
  background:none;
}
.personalCenter .list-block .item-after .headImg{
  width:4rem;
  height: 4rem;
  border-radius: 2rem;
  overflow: hidden;
  border:4px solid #e8e8e8;
}
.personalCenter .list-block .item-after .headImg img{
  width:100%;
}
.personalCenter .list-block .item-link .item-inner.myHead .item-after{
  max-height: 6rem;
}
.personalCenter .list-block .item-title{
  color:#282828;
}
.personalCenter .list-block .item-after{
  color:#757575;
}
.personalCenter .list-block .item-after.phone{
  color:#2198f2;
}
.personalCenter .btn{
  padding:0 15px;
  margin:50px 0;
}
.personalCenter .btn .button.active{
  height: 2.8rem;
  line-height: 2.8rem;
  font-size: 1rem;
  background:#2198f2;
  border:none;
}
</style>