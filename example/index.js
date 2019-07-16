import Vue from "vue";
import App from "./app.vue";
import draggableTree from "../src/index";

Vue.use(draggableTree);
new Vue({
  el: "#app",
  render: h => h(App)
});
