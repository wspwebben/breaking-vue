import './assets/style/index.scss';
import 'ant-design-vue/dist/antd.css';

import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import { router } from '/@/router';
import App from './App.vue'

createApp(App)
  .use(router)
  .use(Antd)
  .mount('#app')

