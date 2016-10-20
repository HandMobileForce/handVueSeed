<template>
  <div class="">

    <!--<div class="weui-panel__hd">图文组合列表</div>-->
    <div class="weui-panel__bd">
      <a v-for="chat in chats" href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
        <div class="weui-media-box__hd">
          <img class="weui-media-box__thumb" v-bind:src="chat.headImg"alt="">
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title">{{chat.name}}</h4>
          <p class="weui-media-box__desc">{{chat.content}}</p>
        </div>
      </a>
    </div>
    <!--<div class="weui-cells__title">{{title}}</div>-->
    <!--<div class="weui-cells">-->

      <!--<a v-for="chat in chats" class="weui-cell weui-cell_access" href="javascript:;">-->
        <!--<div class="weui-cell__hd"><img v-bind:src="chat.headImg" alt="" style="width:20px;margin-right:5px;display:block"></div>-->
        <!--<div class="weui-cell__bd">-->
          <!--<p>{{chat.content}}</p>-->
        <!--</div>-->
        <!--<div class="weui-cell__ft">{{chat.name}}</div>-->
      <!--</a>-->

    <!--</div>-->
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    computed:{
    ...mapGetters({
        chats: "getChats"
      })
    },

  beforeCreate:function(){
    this.$store.dispatch('fetchMyChats',0,1);
  }
  }
</script>
