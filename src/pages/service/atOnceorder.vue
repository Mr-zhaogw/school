<!-- 立即预约 -->
<template>
  <f7-page class="atOnceorder">
    <f7-navbar title=" " back-link="1号会议室" sliding>
      <f7-nav-right>
          <f7-link>开锁</f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block>
      <div class="blank"></div>
      <div class="selectBox">
        <div class="list-block">
          <ul>
            <!-- Single chekbox item -->
            <li>
              <label class="label-checkbox item-content disabled">
                <!-- Checked by default -->
                <div class="item-inner">
                  <input type="checkbox" name="my-checkbox" value="9:00" checked="checked" disabled>
                  <div class="item-media">
                    <i class="icon icon-form-checkbox"></i>
                  </div>
                    <div class="item-title">
                      <p>9:00</p>
                      <p><i><img src="../../../static/imgs/icon/peo.png"></i>河马教育</p>
                      <p><i><img src="../../../static/imgs/icon/p2.png" style="width:70%"></i>马大哈</p>
                      <p><i><img src="../../../static/imgs/icon/phone.png"></i>13888888888</p>
                    </div>
                </div>
              </label>
            </li>
            <!-- Another chekbox item -->
            <li>
              <label class="label-checkbox item-content">
                <!-- Checked by default -->
                <div class="item-inner">
                  <input type="checkbox" name="my-checkbox" value="9:00">
                  <div class="item-media">
                    <i class="icon icon-form-checkbox"></i>
                  </div>
                    <div class="item-title">
                      <p>9:30</p>
                      <p><i><img src="../../../static/imgs/icon/peo.png"></i>--</p>
                      <p><i><img src="../../../static/imgs/icon/p2.png" style="width:70%"></i>--</p>
                      <p><i><img src="../../../static/imgs/icon/phone.png"></i>--</p>
                    </div>
                </div>
              </label>
            </li>
            <li>
              <label class="label-checkbox item-content">
                <!-- Checked by default -->
                <div class="item-inner">
                  <input type="checkbox" name="my-checkbox" value="9:00" checked="checked">
                  <div class="item-media">
                    <i class="icon icon-form-checkbox"></i>
                  </div>
                    <div class="item-title">
                      <p>10:00</p>
                      <p><i><img src="../../../static/imgs/icon/peo.png"></i>富士康</p>
                      <p><i><img src="../../../static/imgs/icon/p2.png" style="width:70%"></i>张毅</p>
                      <p><i><img src="../../../static/imgs/icon/phone.png"></i>13888888888</p>
                    </div>
                </div>
              </label>
            </li>
            <li>
              <label class="label-checkbox item-content">
                <!-- Checked by default -->
                <div class="item-inner">
                  <input type="checkbox" name="my-checkbox" value="9:00">
                  <div class="item-media">
                    <i class="icon icon-form-checkbox"></i>
                  </div>
                    <div class="item-title">
                      <p>9:30</p>
                      <p><i><img src="../../../static/imgs/icon/peo.png"></i>--</p>
                      <p><i><img src="../../../static/imgs/icon/p2.png" style="width:70%"></i>--</p>
                      <p><i><img src="../../../static/imgs/icon/phone.png"></i>--</p>
                    </div>
                </div>
              </label>
            </li>
          </ul>
        </div>            
      </div>
      <div class="btn">
        <a href="#" class="button active">保存</a>
      </div>
    </f7-block>
  </f7-page>
</template>
  <script>
    export default{
      name:'atOnceorder'
    }
  </script>
  <style>
    .atOnceorder{
      background:#fff;
    }
    .atOnceorder label.label-checkbox i.icon-form-checkbox{
      border-radius: 2px;
      width:18px;
      height: 18px;
    }
    .atOnceorder label.label-checkbox input[type=checkbox]:checked+.item-media i.icon-form-checkbox{
      background-color: #0098f9;
    }
    .atOnceorder .list-block .item-inner{
        position: relative;
    }
    .atOnceorder .list-block .item-media{
      position: absolute;
      top:5px;
    }
    .atOnceorder .list-block .item-title{
      margin-left: 50px;
    }
    .atOnceorder label.label-checkbox.disabled input[type=checkbox]:checked+.item-media i.icon-form-checkbox {
    background-color: #7c7c7c;
    }
    .atOnceorder .list-block .item-title p i{
        width:18px;
        height: 18px;
        display: inline-block;
        background:#0098f9;
        border-radius: 10px;
        text-align: center;
        vertical-align: -1px;
        margin-right: 7px;
    }
    .atOnceorder .list-block .item-title p i img{
      width:86%;
      vertical-align: 1px;
    }
    .atOnceorder .list-block label.label-checkbox.disabled .item-title p i{
        background:#7c7c7c;
    }
    .atOnceorder .list-block label.label-checkbox .item-title p{
      margin-bottom: 8px;
      font-size: 1rem;
    }
    .atOnceorder .list-block label.label-checkbox .item-title p:nth-of-type(1){
        font-size: 1.2rem;
        font-weight: 600;
        color:#3c3c3c;
    }
    .atOnceorder .list-block label.label-checkbox .item-title p:nth-of-type(4){
        color:#0098f9;
    }
    .disabled{
      opacity: 1
    }
    .atOnceorder .btn{
      width:100%;
      position: fixed;
      height: 3rem;
      bottom: 0;
      left: 0;
      padding:0 15px;
      z-index: 100
    }
    .atOnceorder .btn a{
      height: 2.6rem;
      line-height: 2.6rem;
      font-size: 1rem;
      background: #0098f9;
      border:none;
    }
    .page.atOnceorder{
      transform:none !important;
    }
    .page.atOnceorder .page-content .content-block{
        margin-bottom: 3rem;
    }
  </style>