import { createApp } from 'vue';
import './style.css';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

// import { createRouter, createWebHistory } from 'vue-router';
// import routes from 'virtual:generated-pages';

import App from './App.vue';

const app = createApp(App);

// // 使用路由
// const router = createRouter({
//     history: createWebHistory(),
//     routes,
// });

// app.use(router);

// 使用 Ant Design 组件库
app.use(Antd);

// 挂载应用
app.mount('#app');