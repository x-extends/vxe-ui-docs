import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import './styles/index.scss'

import PreCode from './components/PreCode.vue'
import CodeLight from './components/CodeLight.vue'
import CodeList from './components/CodeList.vue'
import CodeRender from './components/CodeRender.vue'
import CodeUseVersion from './components/CodeUseVersion.vue'
import ApiLink from './components/ApiLink.vue'

import axios from 'axios'
import XEUtils from 'xe-utils'

import VxeUI from 'vxe-pc-ui'
import 'vxe-pc-ui/lib/style.css'

import VxeTable from 'vxe-table'
import 'vxe-table/lib/style.css'

import enUS from 'vxe-pc-ui/lib/language/en-US'

import VxeUIPluginMenu from '@vxe-ui/plugin-menu'
import VxeUIPluginExportXLSX from '@vxe-ui/plugin-export-xlsx'
import VxeUIPluginExportPDF from '@vxe-ui/plugin-export-pdf'
import VxeUIPluginRenderChart from '@vxe-ui/plugin-render-chart'
import '@vxe-ui/plugin-render-chart/dist/style.css'
import VxeUIPluginRenderElement from '@vxe-ui/plugin-render-element'
import '@vxe-ui/plugin-render-element/dist/style.css'
import VxeUIPluginRenderAntd from '@vxe-ui/plugin-render-antd'
import '@vxe-ui/plugin-render-antd/dist/style.css'
import VxeUIPluginValidator from '@vxe-ui/plugin-validator'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

declare global {
  interface Window {
    XEUtils: typeof XEUtils;
  }
}

window.XEUtils = XEUtils

axios.defaults.baseURL = 'https://api.vxetable.cn/demo'

VxeUI.setI18n('en-US', enUS)

VxeUI.use(VxeUIPluginMenu)
VxeUI.use(VxeUIPluginExportXLSX)
VxeUI.use(VxeUIPluginExportPDF, {
  // 支持中文字体
  fontName: 'SourceHanSans-Normal',
  fonts: [
    {
      fontName: 'SourceHanSans-Normal',
      fontUrl: 'https://cdn.jsdelivr.net/npm/@vxe-ui/plugin-export-pdf/fonts/source-han-sans-normal.js'
    }
  ]
})
VxeUI.use(VxeUIPluginRenderChart)
VxeUI.use(VxeUIPluginRenderElement)
VxeUI.use(VxeUIPluginRenderAntd)
VxeUI.use(VxeUIPluginValidator)

Vue.use(VxeUI)
Vue.use(VxeTable)
Vue.use(Element)
Vue.use(Antd)

Vue.component('PreCode', PreCode)
Vue.component('CodeLight', CodeLight)
Vue.component('CodeList', CodeList)
Vue.component('CodeRender', CodeRender)
Vue.component('CodeUseVersion', CodeUseVersion)
Vue.component('ApiLink', ApiLink)

Vue.config.productionTip = false

axios.get(`${process.env.VUE_APP_SITE_BASE_URL}/i18n/${i18n.locale}.json?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
  i18n.setLocaleMessage(i18n.locale, res.data)
}).catch(e => e).then(() => {
  new Vue({
    router,
    i18n,
    store,
    render: h => h(App)
  }).$mount('#app')
})
