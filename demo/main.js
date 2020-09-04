import Vue from "vue";
import elementUI from "element-ui";
import App from "./App.vue";
import "../lib/element-light.css";
import "../lib/element-dark.css";
import "../lib/element-product.css";
import "../lib/index.css";

Vue.use(elementUI);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
