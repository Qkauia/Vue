// 載入 createApp函式
import { createApp } from "vue";
// 載入 根組件
import App from "./App.vue";
// 掛載HTML標籤
const app = createApp(App);
app.mount("#app");
