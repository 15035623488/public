// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mintui from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import { MessageBox } from 'mint-ui';
import { CellSwipe } from 'mint-ui';
import store from './vuex/store'
import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);
Vue.component(CellSwipe.name, CellSwipe);
Vue.use(Mintui)
Vue.config.productionTip = false
Vue.prototype.$messagebox = MessageBox

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
