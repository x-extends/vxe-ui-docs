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

// import zhCN from 'vxe-pc-ui/lib/language/zh-CN' // 简体中文
import zhCHT from 'vxe-pc-ui/lib/language/zh-CHT' // 繁体中文
// import zhHK from 'vxe-pc-ui/lib/language/zh-HK' // 中文(香港)
// import zhTW from 'vxe-pc-ui/lib/language/zh-TW' // 中文(台湾)
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

import '@/views/form/basics/format/demo2.format'
import '@/views/table/base/format/demo2.format'
import '@/views/table/footer/footerFormat/demo2.footerFormat'
import '@/views/grid/footer/footerFormat/demo2.footerFormat'

import '@/views/global/formats/form/base/demo1.form.formats'
import '@/views/global/formats/table/base/demo1.table.formats'

import '@/views/global/commands/date-picker/base/demo1.date-picker.commands'
import '@/views/global/commands/date-range-picker/base/demo1.date-range-picker.commands'
import '@/views/global/commands/table/base/demo1.table.commands'

import '@/views/global/menus/table/base/demo1.table.menus'

import '@/views/global/validators/form/base/demo1.form.validators'
import '@/views/global/validators/table/base/demo1.table.validators'

import '@/views/global/renderer/table/default/myCellLink/demo1.table.renderer'
import '@/views/global/renderer/table/default/myCellImg/demo1.table.renderer'
import '@/views/global/renderer/table/default/myCellAmount/demo1.table.renderer'
import '@/views/global/renderer/table/default/myHeaderLink/demo1.table.renderer'
import '@/views/global/renderer/table/default/myFooterAmount/demo1.table.renderer'
import '@/views/global/renderer/table/default/myFullAmount/demo1.table.renderer'

import '@/views/global/renderer/table/edit/myEditAmount/demo1.table.renderer'
import '@/views/global/renderer/table/edit/myEditPulldown/demo1.table.renderer'

import '@/views/global/renderer/table/expand/myExpandList/demo1.table.renderer'
import '@/views/global/renderer/table/expand/myExpandTable/demo1.table.renderer'

import '@/views/global/renderer/table/toolbar/button/demo1.table.renderer'
import '@/views/global/renderer/table/toolbar/tool/demo1.table.renderer'

import '@/views/global/renderer/table/filter/myFilterInput/demo1.table.renderer'
import '@/views/global/renderer/table/filter/myFilterComplex/demo1.table.renderer'
import '@/views/global/renderer/table/filter/myFilterContent/demo1.table.renderer'

import '@/views/global/renderer/table/empty/myEmptyImg/demo1.table.renderer'
import '@/views/global/renderer/table/empty/myEmptyText/demo1.table.renderer'

import '@/views/global/renderer/form/item/myItemAmount/demo1.form.renderer'
import '@/views/global/renderer/form/item/myItemUpload/demo1.form.renderer'

import '@/views/global/renderer/form-design/widget/myInputWidget/demo1.form-design.renderer'
import '@/views/global/renderer/form-design/widget/myTextareaWidget/demo1.form-design.renderer'
import '@/views/global/renderer/form-design/widget/mySelectWidget/demo1.form-design.renderer'
import '@/views/global/renderer/form-design/widget/myDatePickerWidget/demo1.form-design.renderer'
import '@/views/global/renderer/form-design/widget/myNumberInputWidget/demo1.form-design.renderer'
import '@/views/global/renderer/form-design/widget/myAmountInputWidget/demo1.form-design.renderer'
import '@/views/global/renderer/form-design/widget/myUploadFileWidget/demo1.form-design.renderer'
import '@/views/global/renderer/form-design/widget/myUploadImageWidget/demo1.form-design.renderer'

import '@/views/global/renderer/button/prefix/demo1.button.renderer'
import '@/views/global/renderer/button/suffix/demo1.button.renderer'

import '@/views/global/renderer/icon-picker/icon/demo1.icon-picker.renderer'

import DemoUserSelectPulldown from '@/views/table/editTemplate/vxe-pulldown/DemoUserSelectPulldown.vue'
import DemoRoleSelectPulldown from '@/views/table/editTemplate/vxe-pulldown/DemoRoleSelectPulldown.vue'

declare global {
  export interface Window {
    XEUtils: typeof XEUtils;
    hljs: any
  }
}

axios.defaults.baseURL = import.meta.env.VITE_APP_SERVE_API_URL

// VxeUI.setI18n('zh-CN', zhCN)
VxeUI.setI18n('zh-CHT', zhCHT)
// VxeUI.setI18n('zh-HK', zhHK)
// VxeUI.setI18n('zh-TW', zhTW)
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

const app = createApp(App)

app.component('PreCode', PreCode)
app.component('CodeLight', CodeLight)
app.component('CodeList', CodeList)
app.component('CodeRender', CodeRender)
app.component('CodeUseVersion', CodeUseVersion)
app.component('ApiLink', ApiLink)

app.component('DemoUserSelectPulldown', DemoUserSelectPulldown)
app.component('DemoRoleSelectPulldown', DemoRoleSelectPulldown)

app.use(VxeUIAll)
app.use(VxeUITable)
app.use(VxeUIDesign)

app.use(store)
app.use(router)
app.use(i18n)

app.config.globalProperties.$t = i18n.global.t

axios.get(`${import.meta.env.VITE_APP_SITE_BASE_URL}/i18n/${i18n.global.locale}.json?v=${import.meta.env.VITE_APP_DATE_NOW}`).then(res => {
  i18n.global.setLocaleMessage(i18n.global.locale, res.data)
}).catch(e => e).then(() => {
  app.mount('#app')
})
