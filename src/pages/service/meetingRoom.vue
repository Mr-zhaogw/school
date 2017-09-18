<template>
  <f7-page class="meetingRoom" navbar-fixed>
    <f7-navbar title=" " back-link="预约会议室" sliding></f7-navbar>
    <f7-block>
      <div class="timeTab">
        <a :href="'#tab'+(index+1)" class="tab-link" :class="index === 0?'active':''" v-for="(item,index) in todayName" @click="changeDate(item)">
            <p>{{item.Tname}}</p>
            <p>{{item.date}}</p>
        </a>
      </div>
      <div class="blank"></div>
      <div class="subscribe">
        <f7-tabs>
          <f7-tab id="tab1" active>
            <div class="timeBox" v-for="item in roomList">
              <div class="padding-l-r"> 
                <div class="head fn-clear">
                  <div class="left">
                    <h3>{{item.room.roomName}}</h3>
                    <ul class="fn-clear">
                      <li v-for="tag in (item.room.equipment).split(',')">{{tag}}</li>
                    </ul>
                  </div>
                  <div class="right">
                    <p>容纳人数:<span>{{item.room.roomNum}}</span>人</p>
                    <a :href="'/atOnceorder?dateName='+dateName+'&roomId='+item.roomId+'&room='+item.room.roomName+'&thisDate='+thisDate">立即预约 ></a>
                  </div>
                </div>
                <div class="timeBody">
                  <div class="row">
                    <div class="col-20" v-for="room in item.makeList">
                      <div class="box" :class="(room.status == 0)?'empty':'reserve'">
                        <div class="text" v-if="room.status == 0">空</div>
                        <div class="text" v-else>已满</div>
                        <div class="T"> {{room.startTime}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="blank"></div>
            </div>
          </f7-tab>
          <f7-tab id="tab2">
            <div class="timeBox" v-for="item in roomList">
              <div class="padding-l-r"> 
                <div class="head fn-clear">
                  <div class="left">
                    <h3>{{item.room.roomName}}</h3>
                    <ul class="fn-clear">
                      <li v-for="tag in (item.room.equipment).split(',')">{{tag}}</li>
                    </ul>
                  </div>
                  <div class="right">
                    <p>容纳人数:<span>{{item.room.roomNum}}</span>人</p>
                    <a :href="'/atOnceorder?dateName='+dateName+'&roomId='+item.roomId+'&room='+item.room.roomName+'&thisDate='+thisDate">立即预约 ></a>
                  </div>
                </div>
                <div class="timeBody">
                  <div class="row">
                    <div class="col-20" v-for="room in item.makeList">
                      <div class="box" :class="(room.status == 0)?'empty':'reserve'">
                        <div class="text" v-if="room.status == 0">空</div>
                        <div class="text" v-else>已满</div>
                        <div class="T"> {{room.startTime}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="blank"></div>
            </div>
          </f7-tab>
          <f7-tab id="tab3">
            <div class="timeBox" v-for="item in roomList">
              <div class="padding-l-r"> 
                <div class="head fn-clear">
                  <div class="left">
                    <h3>{{item.room.roomName}}</h3>
                    <ul class="fn-clear">
                      <li v-for="tag in (item.room.equipment).split(',')">{{tag}}</li>
                    </ul>
                  </div>
                  <div class="right">
                    <p>容纳人数:<span>{{item.room.roomNum}}</span>人</p>
                    <a :href="'/atOnceorder?dateName='+dateName+'&roomId='+item.roomId+'&room='+item.room.roomName+'&thisDate='+thisDate">立即预约 ></a>
                  </div>
                </div>
                <div class="timeBody">
                  <div class="row">
                    <div class="col-20" v-for="room in item.makeList">
                      <div class="box" :class="(room.status == 0)?'empty':'reserve'">
                        <div class="text" v-if="room.status == 0">空</div>
                        <div class="text" v-else>已满</div>
                        <div class="T"> {{room.startTime}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="blank"></div>
            </div>
          </f7-tab>
        </f7-tabs>
      </div>
    </f7-block>
  </f7-page>
</template>

<script>
import { config } from '../../assets/config.js'
import utils from '../../assets/utils.js'
  export default{
    name:'meetingRoom',
    data:function(){
      return{
        config:config,
        roomList:[],
        dateName:'今天',
        thisDate:(new Date()).getFullYear() +'-' + ((new Date()).getMonth() + 1) +'-'+ (new Date()).getDate(),
        todayName:[
          {
            Tname:'今天',
            date:(new Date()).getFullYear() +'-' + ((new Date()).getMonth() + 1) +'-'+ (new Date()).getDate()
          },
          {
            Tname:'明天',
            date:(new Date()).getFullYear() +'-' + ((new Date()).getMonth() + 1) +'-'+ ((new Date()).getDate() + 1)
          },
          {
            Tname:'后天',
            date:(new Date()).getFullYear() +'-' + ((new Date()).getMonth() + 1) +'-'+ ((new Date()).getDate() + 2)
          },
        ]
      }
    },
    mounted(){
      this.$nextTick(function(){
          this.getTodayRoom()
      })
    },
    methods:{
      getTodayRoom(){
        this.$http.post(this.config.domin + 'nengtou/app/roomdate/list?theDate=' + (new Date()).getFullYear() +'-' + ((new Date()).getMonth() + 1) +'-'+ (new Date()).getDate()).then(response =>{
            if(response.status === 200 && response.ok){
              console.log(response);
              this.roomList = response.body.rows
            }
        },(response) =>{

        })
      },
      changeDate(item){
        this.dateName = item.Tname;
        this.thisDate = item.date
        this.$http.post(this.config.domin + 'nengtou/app/roomdate/list?theDate=' + item.date).then(response =>{
            if(response.status === 200 && response.ok){
              this.roomList = response.body.rows
            }
        },(response) =>{

        })
      }
    }
  }
</script>

<style>
.meetingRoom{
  background:#fff;
}
.meetingRoom .timeTab{
  background:#0098f9;
}
.meetingRoom .timeTab a{
  display: inline-block;
  width:33.3%;
  text-align: center;
  color:#fff;
  font-size: .9rem;
  padding-bottom:8px;
}
.meetingRoom .timeTab a.active{
  border-bottom: 4px solid rgba(255,255,255,.5);
}
/*.meetingRoom .subscribe .timeBox {
  padding: 15px
}*/
.meetingRoom .subscribe .timeBox .head{
  border-bottom: 1px solid #e4e4e4;
  padding: 15px 0;
}
.meetingRoom .subscribe .timeBox .head .left{
  float: left;
  width:60%;
}
.meetingRoom .subscribe .timeBox .head .left h3{
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    color:#232323;
    margin-bottom: 8px;
}
.meetingRoom .subscribe .timeBox .head .left ul{
  padding-left: 0;
  margin: 0
}
.meetingRoom .subscribe .timeBox .head .left ul li{
  float: left;
  font-size: .6rem;
  padding:3px 8px;
  margin-right: 5px;
  border-radius: 3px;
  color:#fff;
}
.meetingRoom .subscribe .timeBox .head .left ul li:nth-of-type(1){
  background:#0098f9;
}
.meetingRoom .subscribe .timeBox .head .left ul li:nth-of-type(2){
  background:#f78931;
}
.meetingRoom .subscribe .timeBox .head .left ul li:nth-of-type(3){
  background:#fe2a24;
}
.meetingRoom .subscribe .timeBox .head .right{
  float: right;
  width:40%;
  text-align: right;
}
.meetingRoom .subscribe .timeBox .head .right p{
  font-size: .8rem;
  margin-top: 3px;
  color:#adadad;
}
.meetingRoom .subscribe .timeBox .head .right p span{
  margin:0 8px;
}
.meetingRoom .subscribe .timeBox .head .right a{
  font-size: .9rem;
  margin-top:10px;
  display: inline-block;
}
.meetingRoom .subscribe .timeBox .head .right span.Ym{
  font-size: .9rem;
  margin-top:10px;
  display: inline-block;
  color:red;
}
.meetingRoom .subscribe .timeBody{
  padding:10px 0;
}
.meetingRoom .subscribe .timeBody .row .box{
    text-align: center;
}
.meetingRoom .subscribe .timeBody .row .box .text{
    height: 2.3rem;
    line-height: 2.3rem;
    font-size: .8rem;
    border-radius: 3px 3px 0 0 ;
    font-weight: 800;
}
.meetingRoom .subscribe .timeBody .row .box.full .text{
    border:1px solid #f8882f;
    color:#f8882f;
}
.meetingRoom .subscribe .timeBody .row .box.empty .text{
    border:1px solid #bebebe;
    color:#bebebe;
}
.meetingRoom .subscribe .timeBody .row .box.reserve .text{
    border:1px solid #0097fb;
    color:#0097fb;
}
.meetingRoom .subscribe .timeBody .row .box .T{
    height: 1rem;
    line-height: 1rem;
    font-size: .8rem;
    border-radius: 0 0 3px 3px;
    color:#fff;
}
.meetingRoom .subscribe .timeBody .row .box.full .T{
  background:#f8882f;
}
.meetingRoom .subscribe .timeBody .row .box.empty .T{
  background:#bebebe;
}
.meetingRoom .subscribe .timeBody .row .box.reserve .T{
  background:#0097fb;
}
.meetingRoom .subscribe .timeBody .row .col-20{
  width: calc((100% - 6px*4)/ 5);
  margin-bottom: 10px;
}
</style>