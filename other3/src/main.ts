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

import VxeUIAll, { VxeUI } from 'vxe-pc-ui'
import 'vxe-pc-ui/es/style.css'

import VxeUITable from 'vxe-table'
import 'vxe-table/es/style.css'

import VxeUIDesign from 'vxe-design'
import 'vxe-design/lib/style.css'

//  import zhCN from 'vxe-pc-ui/lib/language/zh-CN' // 中文(简体)
// import zhHK from 'vxe-pc-ui/lib/language/zh-HK' // 中文(香港)
import zhTW from 'vxe-pc-ui/lib/language/zh-TW' // 中文(繁体)
// import zhMO from 'vxe-pc-ui/lib/language/zh-MO' // 中文(澳门)
import arEG from 'vxe-pc-ui/lib/language/ar-EG' // 阿拉伯语(埃及)
import deDE from 'vxe-pc-ui/lib/language/de-DE' // 德语(德国)
import enUS from 'vxe-pc-ui/lib/language/en-US' // 英语(美国)
import esES from 'vxe-pc-ui/lib/language/es-ES' // 西班牙语(国际)
import frFR from 'vxe-pc-ui/lib/language/fr-FR' // 法语(法国)
import huHU from 'vxe-pc-ui/lib/language/hu-HU' // 匈牙利语
// import hyAM from 'vxe-pc-ui/lib/language/hy-AM' // 亚美尼亚语
import jaJP from 'vxe-pc-ui/lib/language/ja-JP' // 日语
import koKR from 'vxe-pc-ui/lib/language/ko-KR' // 朝鲜语
import nbNO from 'vxe-pc-ui/lib/language/nb-NO' // 挪威语(伯克梅尔)(挪威)
import ptBR from 'vxe-pc-ui/lib/language/pt-BR' // 葡萄牙语
import ruRU from 'vxe-pc-ui/lib/language/ru-RU' // 俄语
import ugCN from 'vxe-pc-ui/lib/language/ug-CN' // 维吾尔语
import ukUA from 'vxe-pc-ui/lib/language/uk-UA' // 乌克兰语
import viVN from 'vxe-pc-ui/lib/language/vi-VN' // 越南语
import thTH from 'vxe-pc-ui/lib/language/th-TH' // 泰语
import itIT from 'vxe-pc-ui/lib/language/it-IT' // 意大利语(意大利)
import idID from 'vxe-pc-ui/lib/language/id-ID' // 印度尼西亚语
import msMY from 'vxe-pc-ui/lib/language/ms-MY' // 马来语(马来西亚)

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

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

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

// VxeUI.setI18n('zh-CN', zhCN)
// VxeUI.setI18n('zh-HK', zhHK)
VxeUI.setI18n('zh-TW', zhTW)
// VxeUI.setI18n('zh-MO', zhMO)
VxeUI.setI18n('ar-EG', arEG)
VxeUI.setI18n('de-DE', deDE)
VxeUI.setI18n('en-US', enUS)
VxeUI.setI18n('es-ES', esES)
VxeUI.setI18n('fr-FR', frFR)
VxeUI.setI18n('hu-HU', huHU)
VxeUI.setI18n('ja-JP', jaJP)
VxeUI.setI18n('ko-KR', koKR)
VxeUI.setI18n('nb-NO', nbNO)
VxeUI.setI18n('pt-BR', ptBR)
VxeUI.setI18n('ru-RU', ruRU)
VxeUI.setI18n('ug-CN', ugCN)
VxeUI.setI18n('uk-UA', ukUA)
VxeUI.setI18n('vi-VN', viVN)
VxeUI.setI18n('th-TH', thTH)
VxeUI.setI18n('it-IT', itIT)
VxeUI.setI18n('id-ID', idID)
VxeUI.setI18n('ms-MY', msMY)

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

Vue.use(VxeUIAll)
Vue.use(VxeUITable)
Vue.use(VxeUIDesign)
Vue.use(Element)
Vue.use(Antd)
Vue.use(WangEditor)

Vue.component('PreCode', PreCode)
Vue.component('CodeLight', CodeLight)
Vue.component('CodeList', CodeList)
Vue.component('CodeRender', CodeRender)
Vue.component('CodeUseVersion', CodeUseVersion)
Vue.component('ApiLink', ApiLink)

Vue.config.productionTip = false

axios.get(`${process.env.VUE_APP_SITE_BASE_URL}/i18n/${i18n.locale}.json?v=${process.env.VUE_APP_DATE_NOW}`).then(appRes => {
  i18n.setLocaleMessage(i18n.locale, appRes.data)
}).catch(e => e).then(() => {
  new Vue({
    router,
    i18n,
    store,
    render: h => h(App)
  }).$mount('#app')
})
