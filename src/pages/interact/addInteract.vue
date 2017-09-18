<template>
  <f7-page class="addInteract" navbar-fixed>
    <f7-navbar title=" " back-link="我要说" sliding></f7-navbar>
    <f7-block>
      <div class="blank"></div>
      <div class="myspeak padding-l-r">
        <div class="list-block">
          <ul>
            <li class="align-top">
              <div class="item-content">
                <div class="item-media"><i class="icon icon-form-comment"></i></div>
                <div class="item-inner">
                  <div class="item-input">
                    <textarea placeholder="这一刻的想法..."></textarea>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="uploadImg">
          <h2>图片资料</h2>
          <div class="imgBox">
            <ul class="fn-clear">
              <!-- <li>
                <img src="../../../static/imgs/timg.jpg">
              </li> -->
            </ul>
            <i @click="addPicture"><img src="../../../static/imgs/icon/addImg.png"></i>
          </div>
        </div>
        <div class="fixedBottom btn">
          <a href="#" class="button active">发布</a>
        </div>
      </div>
    </f7-block>
  </f7-page>
</template>
<script>
import { config } from '../../assets/config.js'
  export default{
    name:'addInteract',
    data(){
      return{
        config:config,
    }
  },
    // mounted(){
    //   this.$nextTick(function(){
    //   })
    // },
    methods:{
      addPicture(){
       
      },
    }
  }
</script>
<style>
  .addInteract{
    background:#fff;
  }
  .addInteract .list-block textarea{
    background: #f2f2f2;
    margin: 15px 0;
    border-radius: 5px;
    padding-left: 10px;
  }
  .addInteract .list-block .item-content{
    padding-left: 0px;
  }
  .addInteract .list-block .item-media+.item-inner{
    margin-left: 0 
  }
  .addInteract .list-block .item-inner{
    padding-right: 0
  }
  .addInteract .list-block ul:before{
    height: 0
  }
</style>
