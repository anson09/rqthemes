import Vue from "vue";
import elementUI from "element-ui";
import App from "./App.vue";

/* build from source */
import "element-ui/lib/theme-chalk/base.css";
import "../src/element-ui/light.scss";
import "../src/element-ui/dark.scss";
import "../src/element-ui/product.scss";
import "../src/index.scss";

/* build from lib */
// import "../lib/element-light.css";
// import "../lib/element-dark.css";
// import "../lib/element-product.css";
// import "../lib/index.css";

Vue.use(elementUI);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
