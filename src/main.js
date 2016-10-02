/**
 * @Author: chenanjie
 * @Date:   2017-06-13T21:20:08+08:00
 * @Last modified by:   chenanjie
 * @Last modified time: 2017-07-05T13:57:58+08:00
 */

/*jshint esversion: 6 */
import Vue from 'vue';
import App from './App';
import router from './router';
import $ from './jquery.js';
// import './bootstrap/js/bootstrap.min.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import http from 'vue-resource';
import _ from 'lodash';
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

// import './styles/hybrid.css';
// import './highlight.pack.js';

require('./bootstrap/css/bootstrap.min.css');
Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(http);
Vue.use(mavonEditor);
// Vue.use(marked);
// hljs.initHighlightingOnLoad();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
