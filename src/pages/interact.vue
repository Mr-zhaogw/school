<template>
  <div class="interact">
    <f7-block>
      <div class="coverImg">
        <div class="backImg">
          <img src="../../static/imgs/timg.jpg">
        </div>
        <div class="headImg">
          <div class="img">
            <img src="../../static/imgs/timg.jpg">
          </div>
          <span>查看我的评论</span>
        </div>
      </div>
      <div class="myspeak padding-l-r">
        <div class="speakList fn-clear">
          <div class="left">
            <div class="head">
              <img src="../../static/imgs/timg.jpg">
            </div>
          </div>
          <div class="right">
            <div class="title">
              <span>张磊</span>
              <span>富士康供应链管理</span>
            </div>
            <div class="text">
              <p>出售二手电动车一台，各团队如有需要联系我，八成新，内部出售，童叟无欺。出售二手电动车一台，各团队如有需要联系我，八成新，内部出售，童叟无欺。</p>
              <div class="img">
                <img src="../../static/imgs/timg.jpg">
                <img src="../../static/imgs/timg.jpg">
              </div>
            </div>
            <div class="time-F fn-clear">
              <span>17分钟前</span>
              <i @click="handle"><img src="../../static/imgs/icon/hf.png"></i>
            </div>
            <div class="reply">
              <div class="box">
                <p><span>周云</span>：我想要啊，说话算数的</p>
                <p><span>周云</span>：我想要啊，说话算数的我想要啊，说话算数的。我想要啊，说话算数的。我想要啊，说话算数的</p>
              </div>
              <i></i>
            </div>
          </div>
        </div>
        <div class="speakList fn-clear">
          <div class="left">
            <div class="head">
              <img src="../../static/imgs/timg.jpg">
            </div>
          </div>
          <div class="right">
            <div class="title">
              <span>张磊</span>
              <span>富士康供应链管理</span>
            </div>
            <div class="text">
              <p>出售二手电动车一台，各团队如有需要联系我，八成新，内部出售，童叟无欺。出售二手电动车一台，各团队如有需要联系我，八成新，内部出售，童叟无欺。</p>
              <div class="img">
                <img src="../../static/imgs/timg.jpg">
                <img src="../../static/imgs/timg.jpg">
              </div>
            </div>
            <div class="time-F fn-clear">
              <span>17分钟前</span>
              <i><img src="../../static/imgs/icon/hf.png"></i>
            </div>
            <div class="reply">
              <div class="box">
                <p><span>周云</span>：我想要啊，说话算数的</p>
                <p><span>周云</span>：我想要啊，说话算数的我想要啊，说话算数的。我想要啊，说话算数的。我想要啊，说话算数的</p>
              </div>
              <i></i>
            </div>
          </div>
        </div>
      </div>
    </f7-block>
  </div>
</template>
<script>
  export default{
    name:'interact',
    data(){
      return{

      }
    },
    methods:{
      handle(){
        var buttons = [
        {
          text:'评论',
          color:'#0098f9'
        },
        {
         text:'删除',
        color:'red' 
        },
        {
         text:'取消',
        color:'black' 
        }
        ];
        self.f7.actions(buttons)
      }
    }
  }
</script>
<style>
  .interact{
    background:#fff;
  }
  .interact .coverImg{
    position: relative;
  }
  .interact .coverImg .backImg{
    width:100%;
    height: 7rem;
  }
  .interact .coverImg .backImg img{
    width:100%;
    height: 100%
  }
  .interact .coverImg .headImg{
    position: absolute;
    right: 15px;
    bottom:-60px;
  }
  .interact .coverImg .headImg .img{
    width:5.5rem;
    height: 5.5rem;
    border:3px solid #fff;
    border-radius: 5px;
  }
  .interact .coverImg .headImg .img img{
    width:100%;
    height: 100%
  }
  .interact .coverImg .headImg span{
    font-size: .9rem;
  }
  .interact .myspeak{
    margin-top:5rem;
    padding-bottom: 1rem;
  }
  .interact .myspeak .speakList{
    margin-bottom: 20px;
  }
  .interact .myspeak .speakList .left{
    width:13%;
    float: left
  }
  .interact .myspeak .speakList .left .head{
    width:2.4rem;
    height: 2.4rem;
  }
  .interact .myspeak .speakList .left .head img{
    width:100%;
    height: 100%
  }
  .interact .myspeak .speakList .right{
    width:85%;
    float: left;
    margin-left: 2%
  }
  .interact .myspeak .speakList .right .title span:first-child{
    font-size: .9rem;
    display: block;
    color:#0098f9;
  }
  .interact .myspeak .speakList .right .title span:last-child{
    font-size: .8rem;
  /*  color:#282828;*/
  }
  .interact .myspeak .speakList .right .text{
    margin-top:8px;
  }
  .interact .myspeak .speakList .right .text p{
    font-size: .8rem;
    color:#282828;
    line-height: 21px;
    margin-bottom: 10px;
  }
  .interact .myspeak .speakList .right .text .img img{
    width:45%;
  }
  .interact .myspeak .speakList .right .time-F{
    margin-top:7px;
  }
  .interact .myspeak .speakList .right .time-F span{
    float: left;
    font-size: .8rem;
  }
  .interact .myspeak .speakList .right .time-F i{
    float: right;
    width:25px;
    height: 20px;
    display: inline-block;
  }
  .interact .myspeak .speakList .right .reply{
    position: relative;
    margin-top:7px;
  }
  .interact .myspeak .speakList .right .reply .box{
    background:#f3f3f4;
    padding:5px 10px;
  }
  .interact .myspeak .speakList .right .reply .box p{
    font-size: .8rem;
    margin-bottom: 3px;
  }
  .interact .myspeak .speakList .right .reply .box p:last-child{
    margin-bottom: 0
  }
  .interact .myspeak .speakList .right .reply .box p span{
    color:#0098f9;
  }
  .interact .myspeak .speakList .right .reply i{
    position: absolute;
    left: 10px;
    top: -8px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px dashed transparent;
    border-bottom: 8px dashed #f3f3f4;
    font-size: 0;
  }
  .actions-modal-group{
    margin: 0;
    border-radius: 0;
  }
  .actions-modal-button{
    text-align: left;
    padding-left: 10px;
    height: 57px;
    line-height: 57px
  }
  .actions-modal-button:first-child{
    border-radius: 0;
    line-height: 70px;
  }
  .actions-modal-button:last-child{
    border-top:1px solid #d1d1d1;
    border-radius: 0
  }
  .actions-modal-button:nth-of-type(2){
     line-height: 50px;
  }
  .actions-modal-button:after{
    height: 0
  }
</style>