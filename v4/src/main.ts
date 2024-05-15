import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import './style/index.scss'
import './plugins'

import PreCode from './components/PreCode.vue'
import CodeLight from './components/CodeLight.vue'
import CodeList from './components/CodeList.vue'
import CodeRender from './components/CodeRender.vue'
import PagerAPILink from './components/PagerAPILink.vue'
import DemoBlock from './components/DemoBlock.vue'

import VxeUI from 'vxe-pc-ui'

const app = createApp(App)

app.component('PreCode', PreCode)
app.component('CodeLight', CodeLight)
app.component('CodeList', CodeList)
app.component('CodeRender', CodeRender)
app.component(PagerAPILink.name, PagerAPILink)
app.component(DemoBlock.name, DemoBlock)

app.use(VxeUI)

app.use(store)
app.use(router)
app.use(i18n)

app.config.globalProperties.$t = i18n.global.t
app.config.globalProperties.$i18n = i18n.global

app.mount('#app')
