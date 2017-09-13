// Import Vue
import Vue from 'vue'

import VueResource from 'vue-resource' 
// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme:
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
*/
import Css from '../static/css/style.css'
// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './app'

import store from './assets/store.js'


Vue.use(Framework7Vue);
Vue.use(VueResource);

Vue.config.productionTip = false

Vue.http.interceptors.push(function(request, next) {
  request.method = 'POST';
  if((request.url).match('\\?')){
      request.url = request.url +  ((sessionStorage.getItem('userToken'))?('&token='+sessionStorage.getItem('userToken')):'');
  }else{
    request.url = request.url +  ((sessionStorage.getItem('userToken'))?('?token='+sessionStorage.getItem('userToken')):'');
  }
  next(function(response){
    
  });
});


new Vue({
  el: '#app',
  store,
  template: '<app/>',
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: Routes,
  },
  components: {
    app: App
  }
});
