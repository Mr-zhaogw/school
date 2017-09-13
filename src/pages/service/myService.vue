<template>
  <f7-page class="myService" navbar-fixed>
    <f7-navbar title=" " back-link="我的服务" sliding>
      <f7-nav-right>
          <f7-link href="/addService">添加</f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block>
      <div class="blank"></div>
      <div class="mySerBox">
        <div class="list-block">
          <ul>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="line fn-clear">
                    <div class="left">
                      <h2>工商注册服务申请</h2>
                      <p>团队内对接人：刘小龙</p>
                    </div>
                    <div class="right">
                      <span>2017-08-10</span>
                      <a href="javascript:" class="b1">受理中</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="line fn-clear">
                    <div class="left">
                      <h2>工商注册服务申请</h2>
                      <p>团队内对接人：刘小龙</p>
                    </div>
                    <div class="right">
                      <span>2017-08-10</span>
                      <a href="javascript:" class="b2">受理中</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="line fn-clear">
                    <div class="left">
                      <h2>工商注册服务申请</h2>
                      <p>团队内对接人：刘小龙</p>
                    </div>
                    <div class="right">
                      <span>2017-08-10</span>
                      <a href="javascript:" class="b3">受理中</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  name:'myService',
}
</script>
<style>
.myService{
  background:#fff;
}
.myService .mySerBox .line{
  width: 100%;
  padding:7px 0;
}
.myService .mySerBox .line .left{
  float: left;
  width:70%;
}
.myService .mySerBox .line .left h2{
  margin: 0;
  font-size: .9rem;
  font-weight: 500;
  color:#000;
}
.myService .mySerBox .line .left p{
  font-size: .8rem;
  margin-top:13px;
}
.myService .mySerBox .line .right{
  float: right;
  width:30%;
  text-align: right;
}
.myService .mySerBox .line .right span{
  font-size: .8rem;
}
.myService .mySerBox .line .right a{
  font-size: .7rem;
  color:#fff;
  padding:5px 10px;
  border-radius: 3px;
  display: inline-block;
  margin-top:5px;
}
.myService .mySerBox .line .right a.b1{
    background:#0098f9;
}
.myService .mySerBox .line .right a.b2{
    background:#f6b37f;
}
.myService .mySerBox .line .right a.b3{
    background:#a0a0a0;
}
</style>