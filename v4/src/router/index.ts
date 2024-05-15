import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const StartInstall = () => import('../views/start/StartInstall.vue')
const StartQuick = () => import('../views/start/StartQuick.vue')
const StartUse = () => import('../views/start/StartUse.vue')
const StartIcons = () => import('../views/start/StartIcons.vue')
const StartGlobal = () => import('../views/start/StartGlobal.vue')
const StartTheme = () => import('../views/start/StartTheme.vue')
const StartI18n = () => import('../views/start/StartI18n.vue')
const StartUseZindex = () => import('../views/start/StartUseZindex.vue')

const FormBasics = () => import('../views/form/basics/Example.vue')
const FormConfig = () => import('../views/form/config/Example.vue')
const FormCustomLayout = () => import('../views/form/customLayout/Example.vue')
const FormVertical = () => import('../views/form/vertical/Example.vue')
const FormValid = () => import('../views/form/valid/Example.vue')

const ModuleIcon = () => import('../views/icon/Example.vue')
const ModuleButton = () => import('../views/button/Example.vue')
const ModuleRadio = () => import('../views/radio/Example.vue')
const ModuleCheckbox = () => import('../views/checkbox/Example.vue')
const ModuleInput = () => import('../views/input/Example.vue')
const ModuleTextarea = () => import('../views/textarea/Example.vue')
const ModuleSelect = () => import('../views/select/Example.vue')
const ModulePager = () => import('../views/pager/Example.vue')
const ModuleModal = () => import('../views/modal/Example.vue')
const ModuleTooltip = () => import('../views/tooltip/Example.vue')
const ModuleSwitch = () => import('../views/switch/Example.vue')
const ModuleList = () => import('../views/list/Example.vue')
const ModulePulldown = () => import('../views/pulldown/Example.vue')

const VXEAPI = () => import('../views/api/API.vue')
const Donation = () => import('../views/api/Donation.vue')
const JoinSponsor = () => import('../views/api/JoinSponsor.vue')
// const Run = () => import('../views/api/Run.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/*',
    redirect: {
      name: 'StartInstall'
    }
  },
  {
    path: '/',
    redirect: {
      name: 'StartInstall'
    }
  },
  {
    path: '/table/start/install',
    name: 'StartInstall',
    component: StartInstall
  },
  {
    path: '/table/start/quick',
    name: 'StartQuick',
    component: StartQuick
  },
  {
    path: '/table/start/use',
    name: 'StartUse',
    component: StartUse
  },
  {
    path: '/table/start/global',
    name: 'StartGlobal',
    component: StartGlobal
  },
  {
    path: '/table/start/icons',
    name: 'StartIcons',
    component: StartIcons
  },
  {
    path: '/table/start/theme',
    name: 'StartTheme',
    component: StartTheme
  },
  {
    path: '/table/start/i18n',
    name: 'StartI18n',
    component: StartI18n
  },
  {
    path: '/table/start/zindex',
    name: 'StartUseZindex',
    component: StartUseZindex
  },
  {
    path: '/form/basics',
    name: 'FormBasics',
    component: FormBasics
  },
  {
    path: '/form/config',
    name: 'FormConfig',
    component: FormConfig
  },
  {
    path: '/form/vertical',
    name: 'FormVertical',
    component: FormVertical
  },
  {
    path: '/form/valid',
    name: 'FormValid',
    component: FormValid
  },
  {
    path: '/form/customLayout',
    name: 'FormCustomLayout',
    component: FormCustomLayout
  },
  {
    path: '/table/module/icon',
    name: 'ModuleIcon',
    component: ModuleIcon
  },
  {
    path: '/table/module/button',
    name: 'ModuleButton',
    component: ModuleButton
  },
  {
    path: '/table/module/radio',
    name: 'ModuleRadio',
    component: ModuleRadio
  },
  {
    path: '/table/module/checkbox',
    name: 'ModuleCheckbox',
    component: ModuleCheckbox
  },
  {
    path: '/table/module/input',
    name: 'ModuleInput',
    component: ModuleInput
  },
  {
    path: '/table/module/textarea',
    name: 'ModuleTextarea',
    component: ModuleTextarea
  },
  {
    path: '/table/module/select',
    name: 'ModuleSelect',
    component: ModuleSelect
  },
  {
    path: '/table/module/pager',
    name: 'ModulePager',
    component: ModulePager
  },
  {
    path: '/table/module/modal',
    name: 'ModuleModal',
    component: ModuleModal
  },
  {
    path: '/table/module/tooltip',
    name: 'ModuleTooltip',
    component: ModuleTooltip
  },
  {
    path: '/table/module/switch',
    name: 'ModuleSwitch',
    component: ModuleSwitch
  },
  {
    path: '/table/module/list',
    name: 'ModuleList',
    component: ModuleList
  },
  {
    path: '/table/module/pulldown',
    name: 'ModulePulldown',
    component: ModulePulldown
  },
  {
    path: '/donation/api',
    name: 'Donation',
    component: Donation
  },
  {
    path: '/joinSponsor',
    name: 'JoinSponsor',
    component: JoinSponsor
  },
  {
    path: '/:name/api',
    name: 'VXEAPI',
    component: VXEAPI
  // },
  // {
  //   path: '/api/run',
  //   name: 'Run',
  //   component: Run
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
