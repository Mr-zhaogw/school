<!-- 立即预约 -->
<template>
  <f7-page class="atOnceorder" navbar-fixed>
    <f7-navbar title=" " back-link="会议室预约" sliding>
      <f7-nav-right>
          <f7-link>开锁</f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block>
      <div class="topLine fn-clear padding-l-r">
        <span class="span1">{{ this.$route.query.room }}</span>
        <span class="span2">{{ this.$route.query.dateName }}</span>
      </div>
      <div class="blank"></div>
      <div class="selectBox">
        <div class="list-block">
          <ul>
            <!-- Single chekbox item -->
            <li v-for="(item,index) in meetingRoomList">
              <label class="label-checkbox item-content" :class="item.status == 1?'disabled':''">
                <!-- Checked by default -->
                <div class="item-inner">
                  <input type="checkbox" name="addtime" v-model="chooseRoomid" :value="item.id" :checked="item.status == 1?'true':'false'">
                  <div class="item-media">
                    <i class="icon icon-form-checkbox"></i>
                  </div>
                  <!-- {{chooseRoomid.indexOf(item.id)}} -->
                    <div class="item-title">
                      <p>{{item.startTime}}</p>
                      <p v-if="item.status == 0 && chooseRoomid.indexOf(item.id) === -1"><i><img src="../../../static/imgs/icon/peo.png"></i>--</p>
                      <p v-else><i><img src="../../../static/imgs/icon/peo.png"></i>{{userInfo.projectName}}</p>
                      <p v-if="item.status == 0 && chooseRoomid.indexOf(item.id) === -1"><i><img src="../../../static/imgs/icon/p2.png" style="width:70%"></i>--</p>
                      <p v-else><i><img src="../../../static/imgs/icon/p2.png" style="width:70%"></i>{{userInfo.name}}</p>
                      <p v-if="item.status == 0 && chooseRoomid.indexOf(item.id) === -1"><i><img src="../../../static/imgs/icon/phone.png"></i>--</p>
                      <p v-else><i><img src="../../../static/imgs/icon/phone.png"></i>{{userInfo.mobile}}</p>
                    </div>
                </div>
              </label>
            </li>
          </ul>
        </div>            
      </div>
      <div class="fixedBottom btn">
        <a href="javascript:" class="button active" @click="saveTime">保存</a>
      </div>
    </f7-block>
  </f7-page>
</template>
<script>
import { config } from '../../assets/config.js'
  export default{
    name:'atOnceorder',
    data(){
      return{
        meetingRoomList:[],
        config:config,
        dateName:'',
        roomId:0,
        room:'',
        chooseRoomid:[],
        userInfo:{}
      }
    },
    mounted(){
      this.$nextTick(function(){
        this.userInfo = this.$store.state.user
        this.roomId = this.$route.query.roomId;
        this.thisDate = this.$route.query.thisDate;
        this.getRoomList();
      })
    },
    methods:{
      getRoomList(){
          this.$http.post(this.config.domin + 'nengtou/app/roomdate/list?theDate='+this.thisDate+'&roomId='+ this.roomId).then(response =>{
            if(response.status === 200 && response.ok){   
                 this.meetingRoomList = response.body.rows[0].makeList
            }
        },(response) =>{

        })
      },
      saveTime(){
        if(this.chooseRoomid.length === 0){
          self.f7.alert('','请选择会议室');
          return;
        }else{
          this.$http.post(this.config.domin + 'nengtou/app/roomdate/make?id='+this.chooseRoomid).then(response =>{
              if(response.body.code === 0 && response.body.succeed){
                  self.f7.alert('',response.body.msg);
                   console.log(response); 
              }else{
                self.f7.alert('','当前会议室已被预订');
              }
          },(response) =>{
          })
        }
      },
    },
  }
</script>
  <style>
    .atOnceorder{
      background:#fff;
    }
    .atOnceorder .topLine{
      padding:10px 15px;
    }
    .atOnceorder .topLine .span1{
      float: left;
    }
    .atOnceorder .topLine .span2{
      float: right;
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
    
    .page.atOnceorder{
      transform:none !important;
    }
    .page.atOnceorder .page-content .content-block{
        margin-bottom: 3rem;
    }
  </style>