import { appCore } from "./appCore.vue.js";

// No need to import by calling vue.global
const { createApp } = Vue
const idApp = "#app";
const app = createApp(appCore)
// Render
app.mount(idApp)