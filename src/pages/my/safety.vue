<template>
  <f7-page class="safety" navbar-fixed>
    <f7-navbar title=" " back-link="账号安全" sliding></f7-navbar>
    <f7-block>
      <div class="blank"></div>
      <div class="passwordBox padding-l-r">
        <div class="list-block">
          <ul>
            <!-- Text inputs -->
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-input">
                    <input type="password" placeholder="请输入新密码">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-innser">
                  <div class="item-input">
                    <input type="password" placeholder="确认密码">
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="btn save">
          <a href="#" class="button active">保存</a>
        </div>
      </div>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  name:'safety',
}
</script>
<style>
  .safety{
    background:#fff;
  }
  .safety .list-block .item-content{
    padding-left: 0
  }
  .safety .list-block{
    margin: 0
  }
  .safety .list-block ul:before{
    height: 0px;
  }
  input::-webkit-input-placeholder {
     color: #adadad;
 }
 .safety .list-block input[type=password]{
  height: 50px;
 }
 .safety .list-block .item-content{
  min-height: 50px;
 }
</style>