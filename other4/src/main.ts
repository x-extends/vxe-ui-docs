import { createApp } from 'vue'
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

import VxeUI from 'vxe-pc-ui'
import 'vxe-pc-ui/lib/style.css'

import VxeTable from 'vxe-table'
import 'vxe-table/lib/style.css'

import enUS from 'vxe-pc-ui/packages/language/en-US'

import VxeUIPluginExportXLSX from '@vxe-ui/plugin-export-xlsx'
import VxeUIPluginExportPDF from '@vxe-ui/plugin-export-pdf'
import VxeUIPluginRenderChart from '@vxe-ui/plugin-render-chart'
import '@vxe-ui/plugin-render-chart/dist/style.css'
import VxeUIPluginRenderElement from '@vxe-ui/plugin-render-element'
import '@vxe-ui/plugin-render-element/dist/style.css'
import VxeUIPluginRenderAntd from '@vxe-ui/plugin-render-antd'
import '@vxe-ui/plugin-render-antd/dist/style.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

axios.defaults.baseURL = 'https://api.vxetable.cn'

VxeUI.setI18n('en-US', enUS)

VxeUI.use(VxeUIPluginExportXLSX)
VxeUI.use(VxeUIPluginExportPDF, {
  // 支持中文字体
  fontName: 'SourceHanSans-Normal',
  fonts: [
    {
      fontName: 'SourceHanSans-Normal',
      fontUrl: 'https://cdn.jsdelivr.net/npm/vxe-table-plugin-export-pdf/fonts/source-han-sans-normal.js'
    }
  ]
})
VxeUI.use(VxeUIPluginRenderChart)
VxeUI.use(VxeUIPluginRenderElement)
VxeUI.use(VxeUIPluginRenderAntd)

const app = createApp(App)

app.component('PreCode', PreCode)
app.component('CodeLight', CodeLight)
app.component('CodeList', CodeList)
app.component('CodeRender', CodeRender)
app.component('CodeUseVersion', CodeUseVersion)
app.component('ApiLink', ApiLink)

app.use(VxeUI)
app.use(VxeTable)
app.use(ElementPlus)
app.use(Antd)

app.use(store)
app.use(router)
app.use(i18n)

app.config.globalProperties.$t = i18n.global.t

axios.get(`${process.env.VUE_APP_SITE_BASE_URL}/i18n/${i18n.global.locale}.json?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
  i18n.global.setLocaleMessage(i18n.global.locale, res.data)
}).catch(e => e).then(() => {
  app.mount('#app')
})
