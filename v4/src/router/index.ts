import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import StartInstall from '@/views/start/install/CodeExample.vue'
import StartUse from '@/views/start/use/CodeExample.vue'
import StartIcons from '@/views/start/icon/CodeExample.vue'
import StartConfig from '@/views/start/config/CodeExample.vue'
import StartTheme from '@/views/start/theme/CodeExample.vue'
import StartI18n from '@/views/start/i18n/CodeExample.vue'
import StartUseZIndex from '@/views/start/z-index/CodeExample.vue'
import FreeDonation from '@/views/start/FreeDonation.vue'
import JoinSponsor from '@/views/start/JoinSponsor.vue'

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
    path: '/start',
    children: [
      {
        path: 'install',
        name: 'StartInstall',
        component: StartInstall
      },
      {
        path: 'use',
        name: 'StartUse',
        component: StartUse
      },
      {
        path: 'global',
        name: 'StartConfig',
        component: StartConfig
      },
      {
        path: 'icons',
        name: 'StartIcons',
        component: StartIcons
      },
      {
        path: 'theme',
        name: 'StartTheme',
        component: StartTheme
      },
      {
        path: 'i18n',
        name: 'StartI18n',
        component: StartI18n
      },
      {
        path: 'z-index',
        name: 'StartUseZIndex',
        component: StartUseZIndex
      },
      {
        path: 'freeDonation',
        name: 'FreeDonation',
        component: FreeDonation
      },
      {
        path: 'joinSponsor',
        name: 'JoinSponsor',
        component: JoinSponsor
      }
    ]
  },
  {
    path: '/tool',
    children: [
      {
        path: 'clipboard',
        name: 'ToolClipboard',
        component: () => import('@/views/tool/clipboard/CodeExample.vue')
      }
    ]
  },
  {
    path: '/component',
    children: [
      {
        path: 'icon',
        name: 'ComponentIcon',
        component: () => import('@/views/icon/Example.vue')
      },
      {
        path: 'row',
        name: 'ComponentRow',
        component: () => import('@/views/row/CodeExample.vue')
      },
      {
        path: 'text',
        name: 'ComponentText',
        component: () => import('@/views/text/Example.vue')
      },
      {
        path: 'link',
        name: 'ComponentLink',
        component: () => import('@/views/link/Example.vue')
      },
      {
        path: 'button',
        name: 'ComponentButton',
        component: () => import('@/views/button/Example.vue')
      },
      {
        path: 'radio',
        name: 'ComponentRadio',
        component: () => import('@/views/radio/Example.vue')
      },
      {
        path: 'checkbox',
        name: 'ComponentCheckbox',
        component: () => import('@/views/checkbox/Example.vue')
      },
      {
        path: 'input',
        name: 'ComponentInput',
        component: () => import('@/views/input/Example.vue')
      },
      {
        path: 'password-input',
        name: 'ComponentPasswordInput',
        component: () => import('@/views/password-input/CodeExample.vue')
      },
      {
        path: 'textarea',
        name: 'ComponentTextarea',
        component: () => import('@/views/textarea/Example.vue')
      },
      {
        path: 'select',
        name: 'ComponentSelect',
        component: () => import('@/views/select/Example.vue')
      },
      {
        path: 'pager',
        name: 'ComponentPager',
        component: () => import('@/views/pager/Example.vue')
      },
      {
        path: 'modal',
        name: 'ComponentModal',
        component: () => import('@/views/modal/Example.vue')
      },
      {
        path: 'tooltip',
        name: 'ComponentTooltip',
        component: () => import('@/views/tooltip/Example.vue')
      },
      {
        path: 'switch',
        name: 'ComponentSwitch',
        component: () => import('@/views/switch/Example.vue')
      },
      {
        path: 'list',
        name: 'ComponentList',
        component: () => import('@/views/list/Example.vue')
      },
      {
        path: 'pulldown',
        name: 'ComponentPulldown',
        component: () => import('@/views/pulldown/Example.vue')
      },
      {
        path: 'tabs',
        name: 'ComponentTabs',
        component: () => import('@/views/tabs/CodeExample.vue')
      },
      {
        path: 'drawer',
        name: 'ComponentDrawer',
        component: () => import('@/views/drawer/CodeExample.vue')
      },
      {
        path: 'tips',
        name: 'ComponentTips',
        component: () => import('@/views/tips/CodeExample.vue')
      },
      {
        path: 'print',
        name: 'ComponentPrint',
        component: () => import('@/views/print/CodeExample.vue')
      },
      {
        path: 'form/basics',
        children: [
          {
            path: 'base',
            name: 'ComponentFormBasicsBase',
            component: () => import('@/views/form/basics/base/Example.vue')
          },
          {
            path: 'customLayout',
            name: 'ComponentFormBasicsCustomLayout',
            component: () => import('@/views/form/basics/customLayout/Example.vue')
          },
          {
            path: 'vertical',
            name: 'ComponentFormBasicsVertical',
            component: () => import('@/views/form/basics/vertical/Example.vue')
          },
          {
            path: 'valid',
            name: 'ComponentFormBasicsValid',
            component: () => import('@/views/form/basics/valid/Example.vue')
          }
        ]
      },
      {
        path: 'form/config',
        children: [
          {
            path: 'base',
            name: 'ComponentFormConfigBase',
            component: () => import('@/views/form/config/base/Example.vue')
          }
        ]
      },
      {
        path: 'form-design',
        children: [
          {
            path: 'base',
            name: 'ComponentFormDesignBase',
            component: () => import('@/views/form-design/base/CodeExample.vue')
          },
          {
            path: 'customGroup',
            name: 'ComponentFormDesignCustomGroup',
            component: () => import('@/views/form-design/customGroup/CodeExample.vue')
          },
          {
            path: 'mobile',
            name: 'ComponentFormDesignMobile',
            component: () => import('@/views/form-design/mobile/CodeExample.vue')
          },
          {
            path: 'pcAndMobile',
            name: 'ComponentFormDesignPcAndMobile',
            component: () => import('@/views/form-design/pcAndMobile/CodeExample.vue')
          },
          {
            path: 'renderView',
            name: 'ComponentFormDesignRenderView',
            component: () => import('@/views/form-design/renderView/CodeExample.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/:name/api',
    name: 'DocsApi',
    component: () => import('@/views/api/DocsApi.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
