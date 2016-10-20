
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */

const state = {
  myChats:{}
};

const getters = {
  getChats (state){
    return  state.myChats;
  }
};

const mutations = {
  //  获取微信聊天列表
  fetchMyChats(state, chatList) {
    state.myChats = chatList;
  }
};

const actions = {
   fetchMyChats(context,pagenum,pagesize){
     const chatList = [
       {name:"宇智波佐助",id:1,headImg:"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3489634496,1803502658&fm=58",content:"万花筒写轮眼"},
       {name:"漩涡鸣人",id:2,headImg:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3040269265,2307215528&fm=58",content:"我要吃拉面"},
       {name:"春野樱",id:3,headImg:"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3681487295,1884754808&fm=58",content:"我喜欢佐助"}]
     context.commit("fetchMyChats",chatList)
   }
}
/* eslint-disable no-new */
export default{
  state,
  getters,
  mutations,
  actions
};
