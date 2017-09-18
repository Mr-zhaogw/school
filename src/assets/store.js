import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

  state:{
    user:{},
    parentId:0
  },

  mutations:{
    saveUser (state, data) {
      if(data){
        state.user = {...data.data}
        var saveLocal = JSON.stringify(state.user);
        sessionStorage.setItem('user', saveLocal);
        if(data.data.id){
          sessionStorage.setItem('userToken', data.data.id)
        }
      }else{
        state.user = {};
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('userToken');
      }
    },
    parentId(state,data){
      state.parentId = data;
    },
  }
})
