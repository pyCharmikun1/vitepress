// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import DemoComponent from '../components/DemoComponent.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义组件
    app.component('DemoComponent', DemoComponent)
  }
}
