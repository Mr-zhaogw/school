export default [
  {
      path: '/index/',
      component: require('./pages/index.vue')
  },
  {
      path: '/teamManage/',
      component: require('./pages/teamManage.vue')
  },
  {
      path: '/businessServices/',
      component: require('./pages/businessServices.vue')
  },
  {
      path: '/companyList/',
      component: require('./pages/companyList.vue')
  },
   {
      path: '/companyDetail/',
      component: require('./pages/companyDetail.vue')
  },
  {
      path: '/newsList/',
      component: require('./pages/newsList.vue')
  },
  {
      path: '/newsDetail/',
      component: require('./pages/newsDetail.vue')
  },
  {
      path: '/safety/',
      component: require('./pages/my/safety.vue')
  },
  {
      path: '/faq/',
      component: require('./pages/my/faq.vue')
  },
  {
      path: '/meetingRoom/',
      component: require('./pages/service/meetingRoom.vue')
  },
  {
      path: '/atOnceorder/',
      component: require('./pages/service/atOnceorder.vue')
  },
  {
      path: '/myTeam/',
      component: require('./pages/teamManage/myTeam.vue')
  },
  {
      path: '/honor/',
      component: require('./pages/teamManage/honor.vue')
  },
  {
      path: '/addHonor/',
      component: require('./pages/teamManage/addHonor.vue')
  },
  {
      path: '/allMember/',
      component: require('./pages/teamManage/allMember.vue')
  },
  {
      path: '/addMember/',
      component: require('./pages/teamManage/addMember.vue')
  },
  {
      path: '/myService/',
      component: require('./pages/service/myService.vue')//我的服务
  },
  {
      path: '/addService/',
      component: require('./pages/service/addService.vue')//添加服务
  },
  {
      path: '/addInteract/',
      component: require('./pages/interact/addInteract.vue')//添加服务
  },
  // {
  //     path: '/personalCenter/',
  //     component: require('./pages/personalCenter.vue')
  // },
  // {
  //     path: '/dynamic-route/blog/:blogId/post/:postId/',
  //     component: require('./pages/dynamic-route.vue')
  // }
]