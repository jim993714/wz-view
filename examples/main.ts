import { createApp } from "vue";
import App from "./app.vue";

import wzviewui from "wz-view-ui"
import { Button } from 'wz-view-ui'



const app = createApp(App);
app.use(wzviewui)
app.use(Button)
app.mount("#app");
