import './assets/style/index.scss';
import 'ant-design-vue/dist/antd.css';

import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';

createApp(App)
  .use(Antd)
  .mount('#app')

