import Vue from "vue";
import elementUI from "element-ui";
import App from "./App.vue";
import "../src/index.scss";

Vue.use(elementUI);

new Vue({
  el: "#app",
  render: h => h(App)
});
