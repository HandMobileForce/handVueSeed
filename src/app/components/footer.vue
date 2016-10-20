<template>
  <div class="weui-tabbar">

    <router-link v-for="tab in footTabs" v-bind:to="tab.url" class = "weui-tabbar__item" v-bind:class="{'weui-bar__item_on':(tab.tabCode==currentTab)}">
      <img src="../assets/img/icon_tabbar.png" alt="" class="weui-tabbar__icon">
      <p class="weui-tabbar__label">{{tab.tabName}}</p>
    </router-link>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
  ...mapGetters({
    footTabs: 'getFooterTabs',
    currentTab:'getCurrentTab'
  })
  }
  }
</script>
