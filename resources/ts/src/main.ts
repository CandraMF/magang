import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import i18n from "@/core/plugins/i18n";

//imports for app initialization
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { initVeeValidate } from "@/core/plugins/vee-validate";

import "@/core/plugins/bootstrap";
import "@/core/plugins/keenthemes";
import "@/core/plugins/prismjs";


const app = createApp(App);

app.use(store);
app.use(router);
app.use(ElementPlus);
app.use(i18n);

initInlineSvg(app);
initVeeValidate();

app.mount("#app");
