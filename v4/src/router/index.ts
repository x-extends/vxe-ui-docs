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
        component: () => import('@/views/icon/CodeExample.vue')
      },
      {
        path: 'layout',
        name: 'ComponentLayout',
        component: () => import('@/views/layout/CodeExample.vue')
      },
      {
        path: 'row',
        name: 'ComponentRow',
        component: () => import('@/views/row/CodeExample.vue')
      },
      {
        path: 'breadcrumb',
        name: 'ComponentBreadcrumb',
        component: () => import('@/views/breadcrumb/CodeExample.vue')
      },
      {
        path: 'menu',
        name: 'ComponentMenu',
        component: () => import('@/views/menu/CodeExample.vue')
      },
      {
        path: 'image',
        name: 'ComponentImage',
        component: () => import('@/views/image/CodeExample.vue')
      },
      {
        path: 'image-preview',
        name: 'ComponentImagePreview',
        component: () => import('@/views/image-preview/CodeExample.vue')
      },
      {
        path: 'anchor',
        name: 'ComponentAnchor',
        component: () => import('@/views/anchor/CodeExample.vue')
      },
      {
        path: 'text',
        name: 'ComponentText',
        component: () => import('@/views/text/CodeExample.vue')
      },
      {
        path: 'link',
        name: 'ComponentLink',
        component: () => import('@/views/link/CodeExample.vue')
      },
      {
        path: 'tag',
        name: 'ComponentTag',
        component: () => import('@/views/tag/CodeExample.vue')
      },
      {
        path: 'button',
        name: 'ComponentButton',
        component: () => import('@/views/button/CodeExample.vue')
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
        children: [
          {
            path: 'text',
            name: 'ComponentInputText',
            component: () => import('@/views/input/text/CodeExample.vue')
          },
          {
            path: 'search',
            name: 'ComponentInputSearch',
            component: () => import('@/views/input/search/CodeExample.vue')
          },
          {
            path: 'password',
            name: 'ComponentInputPassword',
            component: () => import('@/views/input/password/CodeExample.vue')
          },
          {
            path: 'date',
            name: 'ComponentInputDate',
            component: () => import('@/views/input/date/CodeExample.vue')
          },
          {
            path: 'week',
            name: 'ComponentInputWeek',
            component: () => import('@/views/input/week/CodeExample.vue')
          },
          {
            path: 'month',
            name: 'ComponentInputMonth',
            component: () => import('@/views/input/month/CodeExample.vue')
          },
          {
            path: 'quarter',
            name: 'ComponentInputQuarter',
            component: () => import('@/views/input/quarter/CodeExample.vue')
          },
          {
            path: 'year',
            name: 'ComponentInputYear',
            component: () => import('@/views/input/year/CodeExample.vue')
          },
          {
            path: 'time',
            name: 'ComponentInputTime',
            component: () => import('@/views/input/time/CodeExample.vue')
          },
          {
            path: 'datetime',
            name: 'ComponentInputDatetime',
            component: () => import('@/views/input/datetime/CodeExample.vue')
          },
          {
            path: 'number',
            name: 'ComponentInputNumber',
            component: () => import('@/views/input/number/CodeExample.vue')
          },
          {
            path: 'integer',
            name: 'ComponentInputInteger',
            component: () => import('@/views/input/integer/CodeExample.vue')
          },
          {
            path: 'float',
            name: 'ComponentInputFloat',
            component: () => import('@/views/input/float/CodeExample.vue')
          },
          {
            path: 'template',
            name: 'ComponentInputTemplate',
            component: () => import('@/views/input/template/CodeExample.vue')
          }
        ]
      },
      {
        path: 'password-input',
        name: 'ComponentPasswordInput',
        component: () => import('@/views/password-input/CodeExample.vue')
      },
      {
        path: 'number-input',
        name: 'ComponentNumberInput',
        component: () => import('@/views/number-input/CodeExample.vue')
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
        children: [
          {
            path: 'message',
            name: 'ComponentModalMessage',
            component: () => import('@/views/modal/message/Example.vue')
          },
          {
            path: 'alert',
            name: 'ComponentModalAlert',
            component: () => import('@/views/modal/alert/Example.vue')
          },
          {
            path: 'confirm',
            name: 'ComponentModalConfirm',
            component: () => import('@/views/modal/confirm/Example.vue')
          },
          {
            path: 'open',
            name: 'ComponentModalOpen',
            component: () => import('@/views/modal/modal/Example.vue')
          }
        ]
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
        path: 'alert',
        name: 'ComponentAlert',
        component: () => import('@/views/alert/CodeExample.vue')
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
      },
      {
        path: 'list-design',
        children: [
          {
            path: 'base',
            name: 'ComponentListDesignBase',
            component: () => import('@/views/list-design/base/CodeExample.vue')
          },
          {
            path: 'mobile',
            name: 'ComponentListDesignMobile',
            component: () => import('@/views/list-design/mobile/CodeExample.vue')
          },
          {
            path: 'pcAndMobile',
            name: 'ComponentListDesignPcAndMobile',
            component: () => import('@/views/list-design/pcAndMobile/CodeExample.vue')
          }
        ]
      },
      {
        path: 'upload',
        children: [
          {
            path: 'file',
            name: 'ComponentUploadFile',
            component: () => import('@/views/upload/file/CodeExample.vue')
          },
          {
            path: 'image',
            name: 'ComponentUploadImage',
            component: () => import('@/views/upload/image/CodeExample.vue')
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
