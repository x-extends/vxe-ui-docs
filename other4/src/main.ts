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
import XEUtils from 'xe-utils'

import VxeUIAll, { VxeUI } from 'vxe-pc-ui'
import 'vxe-pc-ui/es/style.css'

import VxeUITable from 'vxe-table'
import 'vxe-table/es/style.css'

import VxeUIDesign from 'vxe-design'
import 'vxe-design/lib/style.css'

import enUS from 'vxe-pc-ui/es/language/en-US'

import VxeUIPluginMenu from '@vxe-ui/plugin-menu'
import VxeUIPluginExportXLSX from '@vxe-ui/plugin-export-xlsx'
import VxeUIPluginExportPDF from '@vxe-ui/plugin-export-pdf'
import VxeUIPluginRenderChart from '@vxe-ui/plugin-render-chart'
import '@vxe-ui/plugin-render-chart/dist/style.css'
import VxeUIPluginRenderElement from '@vxe-ui/plugin-render-element'
import '@vxe-ui/plugin-render-element/dist/style.css'
import VxeUIPluginRenderAntd from '@vxe-ui/plugin-render-antd'
import '@vxe-ui/plugin-render-antd/dist/style.css'
import VxeUIPluginRenderWangEditor, { WangEditor } from '@vxe-ui/plugin-render-wangeditor'
import '@vxe-ui/plugin-render-wangeditor/dist/style.css'
import VxeUIPluginValidator from '@vxe-ui/plugin-validator'
import VxeUIPluginRenderIView from '@vxe-ui/plugin-render-iview'
import '@vxe-ui/plugin-render-iview/dist/style.css'
import VxeUIPluginRenderNaive from '@vxe-ui/plugin-render-naive'
import '@vxe-ui/plugin-render-naive/dist/style.css'
import VxeUIPluginRenderArco from '@vxe-ui/plugin-render-arco'
import '@vxe-ui/plugin-render-arco/dist/style.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

import '@/views/other-iconfont/symbol/button/icon/demo1.renderer'
import '@/views/other-iconfont/symbol/icon-picker/icons/demo1.renderer'

declare global {
  interface Window {
    XEUtils: typeof XEUtils;
    hljs: any
  }
}

window.XEUtils = XEUtils

axios.defaults.baseURL = process.env.VUE_APP_SERVE_API_URL

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
VxeUI.use(VxeUIPluginRenderWangEditor, {
  // 自定义上传图片方法
  uploadImageMethod ({ file }) {
    const formData = new FormData()
    formData.append('file', file)
    return axios.post('/api/pub/upload/single', formData).then((res) => {
      return {
        ...res.data
      }
    })
  },
  // 自定义上传视频方法
  uploadVideoMethod ({ file }) {
    const formData = new FormData()
    formData.append('file', file)
    return axios.post('/api/pub/upload/single', formData).then((res) => {
      return {
        ...res.data
      }
    })
  }
})
VxeUI.use(VxeUIPluginValidator)
VxeUI.use(VxeUIPluginRenderIView)
VxeUI.use(VxeUIPluginRenderNaive)
VxeUI.use(VxeUIPluginRenderArco)

const app = createApp(App)

app.component('PreCode', PreCode)
app.component('CodeLight', CodeLight)
app.component('CodeList', CodeList)
app.component('CodeRender', CodeRender)
app.component('CodeUseVersion', CodeUseVersion)
app.component('ApiLink', ApiLink)

app.use(VxeUIAll)
app.use(VxeUITable)
app.use(VxeUIDesign)
app.use(ElementPlus)
app.use(Antd)
app.use(WangEditor)

app.use(store)
app.use(router)
app.use(i18n)

app.config.globalProperties.$t = i18n.global.t

axios.get(`${process.env.VUE_APP_SITE_BASE_URL}/i18n/${i18n.global.locale}.json?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
  i18n.global.setLocaleMessage(i18n.global.locale, res.data)
}).catch(e => e).then(() => {
  app.mount('#app')
})
