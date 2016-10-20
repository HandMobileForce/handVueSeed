import Vuex from 'vuex';
import Vue from 'vue';
import chat from './modules/chat.js';
Vue.use(Vuex);

/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */

const state = {
  currentTab:'chats',
   footerTabs:[
    {tabName: '微信',
      tabCode:'chats',
      url: '/chats',
      pic:'http://vuefe.cn/images/logo.png',
      active: true
    },
    {tabName: '通讯录',
      tabCode:'friends',
      url: '/friends',
      pic:'http://vuefe.cn/images/logo.png',
      active: false
    },
    {tabName: '发现',
      tabCode:'find',
      url: 'found',
      pic:'http://vuefe.cn/images/logo.png',
      active: false
    },
    {tabName: '我的',
      tabCode:'mine',
      url: 'mine',
      pic:'http://vuefe.cn/images/logo.png',
      active: false
    }
  ]
};
const getters = {
  getFooterTabs (state){
   return  state.footerTabs;
  },
  getCurrentTab(state){
    return  state.currentTab;
  }
  }
const mutations = {
  //  设置当前的tab
  setCurrentTab(state, tab) {
    state.currentTab = tab;
  }
};
const actions = {
  setCurrentTab(context,tab){
    context.commit("setCurrentTab",tab);
  }
}
/* eslint-disable no-new */
export default new Vuex.Store({
  state:state,
  getters:getters,
  mutations:mutations,
  actions:actions,
  modules: {
    chat
  },
  strict:process.env.NODE_ENV !== 'production'
  //plugins: debug ? [createLogger()] : []
});
