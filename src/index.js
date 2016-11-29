/**
 * Created by xinming on 2016/10/18.
 */
import Vue from 'vue';
import App from './app/components/app.vue';
import VueRouter from 'vue-router';
import 'weui/dist/style/weui.min.css';

import store from './app/vuex/store.js';
import Chats from './app/components/chat.vue';
import Friends from './app/components/friends.vue';
Vue.use(VueRouter)
//
//const App = resolve => {
//  require.ensure(['./App.vue'], () => {
//    resolve(require('./App.vue'));
//  });
//};
const router = new VueRouter({
  history: false,
  routes: [
    {
      path: '/',
      components:{
        default: App
      },
      children: [
        {
          path: 'chats',
          name:'chats',
          component: Chats
        },
        {
          path: 'friends',
          name:'friends',
          component: Friends
        }
      ]
    }
  ]
});
router.beforeEach((to, from, next) => {
  store.dispatch('setCurrentTab',to.name)
  console.log(store.getters.getCurrentTab);
  next();
});

export default new Vue({
  el: '#app',
  router,
  render: h => h('router-view')
}).$mount('#app');
