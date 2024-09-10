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
import 'vxe-pc-ui/es/style.css'

import VxeTable from 'vxe-table'
import 'vxe-table/es/style.css'

import enUS from 'vxe-pc-ui/packages/language/en-US'

declare global {
  interface Window {
    XEUtils: typeof XEUtils;
  }
}

window.XEUtils = XEUtils

axios.defaults.baseURL = 'https://api.vxetable.cn/demo'

VxeUI.setI18n('en-US', enUS)

Vue.component('PreCode', PreCode)
Vue.component('CodeLight', CodeLight)
Vue.component('CodeList', CodeList)
Vue.component('CodeRender', CodeRender)
Vue.component('CodeUseVersion', CodeUseVersion)
Vue.component('ApiLink', ApiLink)

Vue.use(VxeUI)
Vue.use(VxeTable)

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
