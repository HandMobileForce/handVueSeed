<template>

    <div class="page">
      <div class="page_bd">
        <div   class="weui-tab">
          <div class="weui-tab__panel">

            <router-view></router-view>

          </div>
          <my-footer></my-footer>
        </div>
      </div>
    </div>


</template>

<script>
//import cHeader from './components/header';
require('../assets/css/app.scss');
import cFooter from './footer.vue';
import store from './../vuex/store.js';

export default {
  components: {
//    cHeader,
    'my-footer':cFooter
  },
  store
};
</script>
