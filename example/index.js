import Vue from 'vue'
import App from './app.vue'
import draggableTree from '../dist/index';

Vue.use(draggableTree);
new Vue({
  el: '#app',
  render: (h) => h(App)
})
