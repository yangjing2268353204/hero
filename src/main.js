import Vue from 'vue'
import App from './App.vue'
//基于webpack的开发,是基于模块化的开发
//nodejs的模块化遵守commonjs规范

//导入全局样式
//导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css'
new Vue({
  el: '#app',
  render: h => h(App)
})

