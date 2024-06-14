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
        children: [
          {
            path: 'base',
            name: 'ComponentIconBase',
            component: () => import('@/views/icon/base/CodeExample.vue')
          },
          {
            path: 'animation',
            name: 'ComponentIconAnimation',
            component: () => import('@/views/icon/animation/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentIconStatus',
            component: () => import('@/views/icon/status/CodeExample.vue')
          }
        ]
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
        children: [
          {
            path: 'base',
            name: 'ComponentImageBase',
            component: () => import('@/views/image/base/CodeExample.vue')
          },
          {
            path: 'lazy',
            name: 'ComponentImageLazy',
            component: () => import('@/views/image/lazy/CodeExample.vue')
          }
        ]
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
        children: [
          {
            path: 'size',
            name: 'ComponentTextSize',
            component: () => import('@/views/text/size/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentTextStatus',
            component: () => import('@/views/text/status/CodeExample.vue')
          }
        ]
      },
      {
        path: 'link',
        children: [
          {
            path: 'size',
            name: 'ComponentLinkSize',
            component: () => import('@/views/link/size/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentLinkStatus',
            component: () => import('@/views/link/status/CodeExample.vue')
          },
          {
            path: 'router',
            name: 'ComponentLinkRouter',
            component: () => import('@/views/link/router/CodeExample.vue')
          }
        ]
      },
      {
        path: 'tag',
        children: [
          {
            path: 'size',
            name: 'ComponentTagSize',
            component: () => import('@/views/tag/size/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentTagStatus',
            component: () => import('@/views/tag/status/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentTagIcon',
            component: () => import('@/views/tag/icon/CodeExample.vue')
          }
        ]
      },
      {
        path: 'button',
        children: [
          {
            path: 'size',
            name: 'ComponentButtonSize',
            component: () => import('@/views/button/size/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentButtonStatus',
            component: () => import('@/views/button/status/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentButtonIcon',
            component: () => import('@/views/button/icon/CodeExample.vue')
          },
          {
            path: 'circle',
            name: 'ComponentButtonCircle',
            component: () => import('@/views/button/circle/CodeExample.vue')
          },
          {
            path: 'round',
            name: 'ComponentButtonRound',
            component: () => import('@/views/button/round/CodeExample.vue')
          },
          {
            path: 'loading',
            name: 'ComponentButtonLoading',
            component: () => import('@/views/button/loading/CodeExample.vue')
          },
          {
            path: 'group',
            name: 'ComponentButtonGroup',
            component: () => import('@/views/button/group/CodeExample.vue')
          },
          {
            path: 'dropdown',
            name: 'ComponentButtonDropdown',
            component: () => import('@/views/button/dropdown/CodeExample.vue')
          }
        ]
      },
      {
        path: 'radio',
        name: 'ComponentRadio',
        component: () => import('@/views/radio/CodeExample.vue')
      },
      {
        path: 'checkbox',
        name: 'ComponentCheckbox',
        component: () => import('@/views/checkbox/CodeExample.vue')
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
        component: () => import('@/views/textarea/CodeExample.vue')
      },
      {
        path: 'select',
        children: [
          {
            path: 'base',
            children: [
              {
                path: 'size',
                name: 'ComponentSelectBaseSize',
                component: () => import('@/views/select/base/size/CodeExample.vue')
              },
              {
                path: 'clearable',
                name: 'ComponentSelectBaseClearable',
                component: () => import('@/views/select/base/clearable/CodeExample.vue')
              },
              {
                path: 'disabled',
                name: 'ComponentSelectBaseDisabled',
                component: () => import('@/views/select/base/disabled/CodeExample.vue')
              },
              {
                path: 'filterable',
                name: 'ComponentSelectBaseFilterable',
                component: () => import('@/views/select/base/filterable/CodeExample.vue')
              },
              {
                path: 'group',
                name: 'ComponentSelectBaseGroup',
                component: () => import('@/views/select/base/group/CodeExample.vue')
              },
              {
                path: 'multiple',
                name: 'ComponentSelectBaseMultiple',
                component: () => import('@/views/select/base/multiple/CodeExample.vue')
              },
              {
                path: 'template',
                name: 'ComponentSelectBaseTemplate',
                component: () => import('@/views/select/base/template/CodeExample.vue')
              }
            ]
          },
          {
            path: 'config',
            children: [
              {
                path: 'basics',
                name: 'ComponentSelectBaseBasics',
                component: () => import('@/views/select/config/basics/CodeExample.vue')
              },
              {
                path: 'template',
                name: 'ComponentSelectBaseTemplate',
                component: () => import('@/views/select/config/template/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'pager',
        children: [
          {
            path: 'size',
            name: 'ComponentPagerSize',
            component: () => import('@/views/pager/size/CodeExample.vue')
          },
          {
            path: 'align',
            name: 'ComponentPagerAlign',
            component: () => import('@/views/pager/align/CodeExample.vue')
          },
          {
            path: 'pageSize',
            name: 'ComponentPagerPageSize',
            component: () => import('@/views/pager/pageSize/CodeExample.vue')
          },
          {
            path: 'layout',
            name: 'ComponentPagerLayout',
            component: () => import('@/views/pager/layout/CodeExample.vue')
          },
          {
            path: 'template',
            name: 'ComponentPagerTemplate',
            component: () => import('@/views/pager/template/CodeExample.vue')
          }
        ]
      },
      {
        path: 'alert',
        children: [
          {
            path: 'global',
            name: 'ComponentModalAlertGlobal',
            component: () => import('@/views/modal/alert/global/CodeExample.vue')
          },
          {
            path: 'draggable',
            name: 'ComponentModalAlertDraggable',
            component: () => import('@/views/modal/alert/draggable/CodeExample.vue')
          },
          {
            path: 'escClosable',
            name: 'ComponentModalAlertEscClosable',
            component: () => import('@/views/modal/alert/escClosable/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentModalAlertStatus',
            component: () => import('@/views/modal/alert/status/CodeExample.vue')
          },
          {
            path: 'manual',
            name: 'ComponentModalAlertManual',
            component: () => import('@/views/modal/alert/manual/CodeExample.vue')
          },
          {
            path: 'multiple',
            name: 'ComponentModalAlertMultiple',
            component: () => import('@/views/modal/alert/multiple/CodeExample.vue')
          },
          {
            path: 'template',
            name: 'ComponentModalAlertTemplate',
            component: () => import('@/views/modal/alert/template/CodeExample.vue')
          }
        ]
      },
      {
        path: 'confirm',
        children: [
          {
            path: 'global',
            name: 'ComponentModalConfirmGlobal',
            component: () => import('@/views/modal/confirm/global/CodeExample.vue')
          },
          {
            path: 'draggable',
            name: 'ComponentModalConfirmDraggable',
            component: () => import('@/views/modal/confirm/draggable/CodeExample.vue')
          },
          {
            path: 'escClosable',
            name: 'ComponentModalConfirmEscClosable',
            component: () => import('@/views/modal/confirm/escClosable/CodeExample.vue')
          },
          {
            path: 'manual',
            name: 'ComponentModalConfirmManual',
            component: () => import('@/views/modal/confirm/manual/CodeExample.vue')
          },
          {
            path: 'multiple',
            name: 'ComponentModalConfirmMultiple',
            component: () => import('@/views/modal/confirm/multiple/CodeExample.vue')
          },
          {
            path: 'template',
            name: 'ComponentModalConfirmTemplate',
            component: () => import('@/views/modal/confirm/template/CodeExample.vue')
          }
        ]
      },
      {
        path: 'message',
        children: [
          {
            path: 'global',
            name: 'ComponentModalMessageGlobal',
            component: () => import('@/views/modal/message/global/CodeExample.vue')
          },
          {
            path: 'multiple',
            name: 'ComponentModalMessageMultiple',
            component: () => import('@/views/modal/message/multiple/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentModalMessageStatus',
            component: () => import('@/views/modal/message/status/CodeExample.vue')
          },
          {
            path: 'template',
            name: 'ComponentModalMessageTemplate',
            component: () => import('@/views/modal/message/template/CodeExample.vue')
          }
        ]
      },
      {
        path: 'notification',
        children: [
          {
            path: 'global',
            name: 'ComponentModalNotificationGlobal',
            component: () => import('@/views/modal/notification/global/CodeExample.vue')
          },
          {
            path: 'multiple',
            name: 'ComponentModalNotificationMultiple',
            component: () => import('@/views/modal/notification/multiple/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentModalNotificationStatus',
            component: () => import('@/views/modal/notification/status/CodeExample.vue')
          },
          {
            path: 'template',
            name: 'ComponentModalNotificationTemplate',
            component: () => import('@/views/modal/notification/template/CodeExample.vue')
          }
        ]
      },
      {
        path: 'modal',
        children: [
          {
            path: 'base',
            name: 'ComponentModalModalBase',
            component: () => import('@/views/modal/modal/base/CodeExample.vue')
          },
          {
            path: 'global',
            name: 'ComponentModalModalGlobal',
            component: () => import('@/views/modal/modal/global/CodeExample.vue')
          },
          {
            path: 'size',
            name: 'ComponentModalModalSize',
            component: () => import('@/views/modal/modal/size/CodeExample.vue')
          },
          {
            path: 'padding',
            name: 'ComponentModalModalPadding',
            component: () => import('@/views/modal/modal/padding/CodeExample.vue')
          },
          {
            path: 'draggable',
            name: 'ComponentModalModalDraggable',
            component: () => import('@/views/modal/modal/draggable/CodeExample.vue')
          },
          {
            path: 'mask',
            name: 'ComponentModalModalMask',
            component: () => import('@/views/modal/modal/mask/CodeExample.vue')
          },
          {
            path: 'lockView',
            name: 'ComponentModalModalLockView',
            component: () => import('@/views/modal/modal/lockView/CodeExample.vue')
          },
          {
            path: 'resize',
            name: 'ComponentModalModalResize',
            component: () => import('@/views/modal/modal/resize/CodeExample.vue')
          },
          {
            path: 'multiple',
            name: 'ComponentModalModalMultiple',
            component: () => import('@/views/modal/modal/multiple/CodeExample.vue')
          },
          {
            path: 'escClosable',
            name: 'ComponentModalModalEscClosable',
            component: () => import('@/views/modal/modal/escClosable/CodeExample.vue')
          },
          {
            path: 'beforeHide',
            name: 'ComponentModalModalBeforeHide',
            component: () => import('@/views/modal/modal/beforeHide/CodeExample.vue')
          },
          {
            path: 'template',
            name: 'ComponentModalModalTemplate',
            component: () => import('@/views/modal/modal/template/CodeExample.vue')
          },
          {
            path: 'button',
            name: 'ComponentModalModalButton',
            component: () => import('@/views/modal/modal/button/CodeExample.vue')
          },
          {
            path: 'zoom',
            name: 'ComponentModalModalZoom',
            component: () => import('@/views/modal/modal/zoom/CodeExample.vue')
          },
          {
            path: 'remember',
            name: 'ComponentModalModalRemember',
            component: () => import('@/views/modal/modal/remember/CodeExample.vue')
          },
          {
            path: 'iframe',
            name: 'ComponentModalModalIframe',
            component: () => import('@/views/modal/modal/iframe/CodeExample.vue')
          },
          {
            path: 'full',
            name: 'ComponentModalModalFull',
            component: () => import('@/views/modal/modal/full/CodeExample.vue')
          }
        ]
      },
      {
        path: 'tooltip',
        name: 'ComponentTooltip',
        component: () => import('@/views/tooltip/CodeExample.vue')
      },
      {
        path: 'switch',
        name: 'ComponentSwitch',
        component: () => import('@/views/switch/CodeExample.vue')
      },
      {
        path: 'list',
        children: [
          {
            path: 'base',
            name: 'ComponentListBase',
            component: () => import('@/views/list/base/CodeExample.vue')
          },
          {
            path: 'table',
            name: 'ComponentListTable',
            component: () => import('@/views/list/table/CodeExample.vue')
          }
        ]
      },
      {
        path: 'pulldown',
        children: [
          {
            path: 'base',
            name: 'ComponentPulldownBase',
            component: () => import('@/views/pulldown/base/CodeExample.vue')
          },
          {
            path: 'template',
            name: 'ComponentPulldownTemplate',
            component: () => import('@/views/pulldown/template/CodeExample.vue')
          },
          {
            path: 'select',
            name: 'ComponentPulldownSelect',
            component: () => import('@/views/pulldown/select/CodeExample.vue')
          },
          {
            path: 'table',
            name: 'ComponentPulldownTable',
            component: () => import('@/views/pulldown/table/CodeExample.vue')
          }
        ]
      },
      {
        path: 'tabs',
        children: [
          {
            path: 'base',
            name: 'ComponentTabsBase',
            component: () => import('@/views/tabs/base/CodeExample.vue')
          },
          {
            path: 'borderCard',
            name: 'ComponentTabsBorderCard',
            component: () => import('@/views/tabs/borderCard/CodeExample.vue')
          },
          {
            path: 'card',
            name: 'ComponentTabsCard',
            component: () => import('@/views/tabs/card/CodeExample.vue')
          },
          {
            path: 'height',
            name: 'ComponentTabsHeight',
            component: () => import('@/views/tabs/height/CodeExample.vue')
          },
          {
            path: 'roundCard',
            name: 'ComponentTabsRoundCard',
            component: () => import('@/views/tabs/roundCard/CodeExample.vue')
          }
        ]
      },
      {
        path: 'drawer',
        name: 'ComponentDrawer',
        children: [
          {
            path: 'base',
            name: 'ComponentDrawerBase',
            component: () => import('@/views/drawer/base/CodeExample.vue')
          },
          {
            path: 'maskClosable',
            name: 'ComponentDrawerMaskClosable',
            component: () => import('@/views/drawer/maskClosable/CodeExample.vue')
          },
          {
            path: 'template',
            name: 'ComponentDrawerTemplate',
            component: () => import('@/views/drawer/template/CodeExample.vue')
          }
        ]
      },
      {
        path: 'tip',
        children: [
          {
            path: 'base',
            name: 'ComponentTipBase',
            component: () => import('@/views/tip/base/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentTipIcon',
            component: () => import('@/views/tip/icon/CodeExample.vue')
          },
          {
            path: 'title',
            name: 'ComponentTipTitle',
            component: () => import('@/views/tip/title/CodeExample.vue')
          }
        ]
      },
      {
        path: 'alert',
        children: [
          {
            path: 'base',
            name: 'ComponentAlertBase',
            component: () => import('@/views/alert/base/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentAlertIcon',
            component: () => import('@/views/alert/icon/CodeExample.vue')
          },
          {
            path: 'title',
            name: 'ComponentAlertTitle',
            component: () => import('@/views/alert/title/CodeExample.vue')
          },
          {
            path: 'close',
            name: 'ComponentAlertClose',
            component: () => import('@/views/alert/close/CodeExample.vue')
          }
        ]
      },
      {
        path: 'card',
        children: [
          {
            path: 'base',
            name: 'ComponentCardBase',
            component: () => import('@/views/card/base/CodeExample.vue')
          },
          {
            path: 'width',
            name: 'ComponentCardWidth',
            component: () => import('@/views/card/width/CodeExample.vue')
          },
          {
            path: 'height',
            name: 'ComponentCardHeight',
            component: () => import('@/views/card/height/CodeExample.vue')
          },
          {
            path: 'border',
            name: 'ComponentCardBorder',
            component: () => import('@/views/card/border/CodeExample.vue')
          },
          {
            path: 'padding',
            name: 'ComponentCardPadding',
            component: () => import('@/views/card/padding/CodeExample.vue')
          },
          {
            path: 'shadow',
            name: 'ComponentCardShadow',
            component: () => import('@/views/card/shadow/CodeExample.vue')
          },
          {
            path: 'template',
            name: 'ComponentCardTemplate',
            component: () => import('@/views/card/template/CodeExample.vue')
          }
        ]
      },
      {
        path: 'print',
        children: [
          {
            path: 'base',
            children: [
              {
                path: 'html',
                name: 'ComponentPrintBaseHtml',
                component: () => import('@/views/print/base/html/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'ComponentPrintBaseImg',
                component: () => import('@/views/print/base/img/CodeExample.vue')
              },
              {
                path: 'table',
                name: 'ComponentPrintBaseTable',
                component: () => import('@/views/print/base/table/CodeExample.vue')
              }
            ]
          },
          {
            path: 'page',
            children: [
              {
                path: 'basics',
                name: 'ComponentPrintPageBasics',
                component: () => import('@/views/print/page/basics/CodeExample.vue')
              },
              {
                path: 'header',
                name: 'ComponentPrintPageHeader',
                component: () => import('@/views/print/page/header/CodeExample.vue')
              },
              {
                path: 'footer',
                name: 'ComponentPrintPageFooter',
                component: () => import('@/views/print/page/footer/CodeExample.vue')
              },
              {
                path: 'template',
                name: 'ComponentPrintPageTemplate',
                component: () => import('@/views/print/page/template/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'tree',
        children: [
          {
            path: 'base',
            name: 'ComponentTreeBase',
            component: () => import('@/views/tree/base/CodeExample.vue')
          },
          {
            path: 'current',
            name: 'ComponentTreeCurrent',
            component: () => import('@/views/tree/current/CodeExample.vue')
          },
          {
            path: 'radio',
            name: 'ComponentTreeRadio',
            component: () => import('@/views/tree/radio/CodeExample.vue')
          },
          {
            path: 'checkbox',
            name: 'ComponentTreeCheckbox',
            component: () => import('@/views/tree/checkbox/CodeExample.vue')
          }
        ]
      },
      {
        path: 'form',
        children: [
          {
            path: 'basics',
            children: [
              {
                path: 'base',
                name: 'ComponentFormBasicsBase',
                component: () => import('@/views/form/basics/base/CodeExample.vue')
              },
              {
                path: 'size',
                name: 'ComponentFormBasicsSize',
                component: () => import('@/views/form/basics/size/CodeExample.vue')
              },
              {
                path: 'colon',
                name: 'ComponentFormBasicsColon',
                component: () => import('@/views/form/basics/colon/CodeExample.vue')
              },
              {
                path: 'bold',
                name: 'ComponentFormBasicsBold',
                component: () => import('@/views/form/basics/bold/CodeExample.vue')
              },
              {
                path: 'align',
                name: 'ComponentFormBasicsAlign',
                component: () => import('@/views/form/basics/align/CodeExample.vue')
              },
              {
                path: 'tooltip',
                name: 'ComponentFormBasicsTooltip',
                component: () => import('@/views/form/basics/tooltip/CodeExample.vue')
              },
              {
                path: 'width',
                name: 'ComponentFormBasicsWidth',
                component: () => import('@/views/form/basics/width/CodeExample.vue')
              },
              {
                path: 'overflow',
                name: 'ComponentFormBasicsOverflow',
                component: () => import('@/views/form/basics/overflow/CodeExample.vue')
              },
              {
                path: 'gather',
                name: 'ComponentFormBasicsGather',
                component: () => import('@/views/form/basics/gather/CodeExample.vue')
              },
              {
                path: 'customLayout',
                name: 'ComponentFormBasicsCustomLayout',
                component: () => import('@/views/form/basics/customLayout/CodeExample.vue')
              },
              {
                path: 'vertical',
                name: 'ComponentFormBasicsVertical',
                component: () => import('@/views/form/basics/vertical/CodeExample.vue')
              },
              {
                path: 'collapse',
                name: 'ComponentFormBasicsCollapse',
                component: () => import('@/views/form/basics/collapse/CodeExample.vue')
              },
              {
                path: 'valid',
                name: 'ComponentFormBasicsValid',
                component: () => import('@/views/form/basics/valid/CodeExample.vue')
              }
            ]
          },
          {
            path: 'config',
            children: [
              {
                path: 'base',
                name: 'ComponentFormConfigBase',
                component: () => import('@/views/form/config/base/CodeExample.vue')
              },
              {
                path: 'colon',
                name: 'ComponentFormConfigColon',
                component: () => import('@/views/form/config/colon/CodeExample.vue')
              },
              {
                path: 'bold',
                name: 'ComponentFormConfigBold',
                component: () => import('@/views/form/config/bold/CodeExample.vue')
              },
              {
                path: 'tooltip',
                name: 'ComponentFormConfigTooltip',
                component: () => import('@/views/form/config/tooltip/CodeExample.vue')
              },
              {
                path: 'gather',
                name: 'ComponentFormConfigGather',
                component: () => import('@/views/form/config/gather/CodeExample.vue')
              },
              {
                path: 'vertical',
                name: 'ComponentFormConfigVertical',
                component: () => import('@/views/form/config/vertical/CodeExample.vue')
              },
              {
                path: 'collapse',
                name: 'ComponentFormConfigCollapse',
                component: () => import('@/views/form/config/collapse/CodeExample.vue')
              },
              {
                path: 'valid',
                name: 'ComponentFormConfigValid',
                component: () => import('@/views/form/config/valid/CodeExample.vue')
              }
            ]
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
            children: [
              {
                path: 'base',
                name: 'ComponentUploadFileBase',
                component: () => import('@/views/upload/file/base/CodeExample.vue')
              },
              {
                path: 'readonly',
                name: 'ComponentUploadFileReadonly',
                component: () => import('@/views/upload/file/readonly/CodeExample.vue')
              },
              {
                path: 'disabled',
                name: 'ComponentUploadFileDisabled',
                component: () => import('@/views/upload/file/disabled/CodeExample.vue')
              },
              {
                path: 'multiple',
                name: 'ComponentUploadFileMultiple',
                component: () => import('@/views/upload/file/multiple/CodeExample.vue')
              },
              {
                path: 'tip',
                name: 'ComponentUploadFileTip',
                component: () => import('@/views/upload/file/tip/CodeExample.vue')
              },
              {
                path: 'progress',
                name: 'ComponentUploadFileProgress',
                component: () => import('@/views/upload/file/progress/CodeExample.vue')
              },
              {
                path: 'types',
                name: 'ComponentUploadFileTypes',
                component: () => import('@/views/upload/file/types/CodeExample.vue')
              },
              {
                path: 'limitCount',
                name: 'ComponentUploadFileLimitCount',
                component: () => import('@/views/upload/file/limitCount/CodeExample.vue')
              },
              {
                path: 'limitSize',
                name: 'ComponentUploadFileLimitSize',
                component: () => import('@/views/upload/file/limitSize/CodeExample.vue')
              },
              {
                path: 'autoHidden',
                name: 'ComponentUploadFileAutoHidden',
                component: () => import('@/views/upload/file/autoHidden/CodeExample.vue')
              },
              {
                path: 'showError',
                name: 'ComponentUploadFileShowError',
                component: () => import('@/views/upload/file/showError/CodeExample.vue')
              }
            ]
          },
          {
            path: 'image',
            children: [
              {
                path: 'base',
                name: 'ComponentUploadImageBase',
                component: () => import('@/views/upload/image/base/CodeExample.vue')
              },
              {
                path: 'readonly',
                name: 'ComponentUploadImageReadonly',
                component: () => import('@/views/upload/image/readonly/CodeExample.vue')
              },
              {
                path: 'disabled',
                name: 'ComponentUploadImageDisabled',
                component: () => import('@/views/upload/image/disabled/CodeExample.vue')
              },
              {
                path: 'multiple',
                name: 'ComponentUploadImageMultiple',
                component: () => import('@/views/upload/image/multiple/CodeExample.vue')
              },
              {
                path: 'tip',
                name: 'ComponentUploadImageTip',
                component: () => import('@/views/upload/image/tip/CodeExample.vue')
              },
              {
                path: 'progress',
                name: 'ComponentUploadImageProgress',
                component: () => import('@/views/upload/image/progress/CodeExample.vue')
              },
              {
                path: 'types',
                name: 'ComponentUploadImageTypes',
                component: () => import('@/views/upload/image/types/CodeExample.vue')
              },
              {
                path: 'limitCount',
                name: 'ComponentUploadImageLimitCount',
                component: () => import('@/views/upload/image/limitCount/CodeExample.vue')
              },
              {
                path: 'limitSize',
                name: 'ComponentUploadImageLimitSize',
                component: () => import('@/views/upload/image/limitSize/CodeExample.vue')
              },
              {
                path: 'autoHidden',
                name: 'ComponentUploadImageAutoHidden',
                component: () => import('@/views/upload/image/autoHidden/CodeExample.vue')
              },
              {
                path: 'showError',
                name: 'ComponentUploadImageShowError',
                component: () => import('@/views/upload/image/showError/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'table',
        children: [
          {
            path: 'base',
            children: [
              {
                path: 'basic',
                name: 'ComponentTableBaseBasic',
                component: () => import('@/views/table/base/basic/CodeExample.vue')
              },
              {
                path: 'size',
                name: 'ComponentTableBaseSize',
                component: () => import('@/views/table/base/size/CodeExample.vue')
              },
              {
                path: 'align',
                name: 'ComponentTableBaseAlign',
                component: () => import('@/views/table/base/align/CodeExample.vue')
              },
              {
                path: 'width',
                name: 'ComponentTableBaseWidth',
                component: () => import('@/views/table/base/width/CodeExample.vue')
              },
              {
                path: 'autoBreak',
                name: 'ComponentTableBaseAutoBreak',
                component: () => import('@/views/table/base/autoBreak/CodeExample.vue')
              },
              {
                path: 'overflow',
                name: 'ComponentTableBaseOverflow',
                component: () => import('@/views/table/base/overflow/CodeExample.vue')
              },
              {
                path: 'tooltip',
                name: 'ComponentTableBaseTooltip',
                component: () => import('@/views/table/base/tooltip/CodeExample.vue')
              },
              {
                path: 'stripe',
                name: 'ComponentTableBaseStripe',
                component: () => import('@/views/table/base/stripe/CodeExample.vue')
              },
              {
                path: 'border',
                name: 'ComponentTableBaseBorder',
                component: () => import('@/views/table/base/border/CodeExample.vue')
              },
              {
                path: 'round',
                name: 'ComponentTableBaseRound',
                component: () => import('@/views/table/base/round/CodeExample.vue')
              },
              {
                path: 'style',
                name: 'ComponentTableBaseStyle',
                component: () => import('@/views/table/base/style/CodeExample.vue')
              },
              {
                path: 'dynamicStyle',
                name: 'ComponentTableBaseDynamicStyle',
                component: () => import('@/views/table/base/dynamicStyle/CodeExample.vue')
              },
              {
                path: 'header',
                name: 'ComponentTableBaseHeader',
                component: () => import('@/views/table/base/header/CodeExample.vue')
              },
              {
                path: 'headerHighlight',
                name: 'ComponentTableBaseHeaderHighlight',
                component: () => import('@/views/table/base/headerHighlight/CodeExample.vue')
              },
              {
                path: 'resizable',
                name: 'ComponentTableBaseHeaderResizable',
                component: () => import('@/views/table/base/resizable/CodeExample.vue')
              },
              {
                path: 'minHeight',
                name: 'ComponentTableBaseHeaderMinHeight',
                component: () => import('@/views/table/base/minHeight/CodeExample.vue')
              },
              {
                path: 'height',
                name: 'ComponentTableBaseHeight',
                component: () => import('@/views/table/base/height/CodeExample.vue')
              },
              {
                path: 'maxHeight',
                name: 'ComponentTableBaseMaxHeight',
                component: () => import('@/views/table/base/maxHeight/CodeExample.vue')
              },
              {
                path: 'rowHeight',
                name: 'ComponentTableBaseRowHeight',
                component: () => import('@/views/table/base/rowHeight/CodeExample.vue')
              },
              {
                path: 'autoHeight',
                name: 'ComponentTableBaseAutoHeight',
                component: () => import('@/views/table/base/autoHeight/CodeExample.vue')
              },
              {
                path: 'fixed',
                name: 'ComponentTableBaseFixed',
                component: () => import('@/views/table/base/fixed/CodeExample.vue')
              },
              {
                path: 'fixedFull',
                name: 'ComponentTableBaseFixedFull',
                component: () => import('@/views/table/base/fixedFull/CodeExample.vue')
              },
              {
                path: 'group',
                name: 'ComponentTableBaseGroup',
                component: () => import('@/views/table/base/group/CodeExample.vue')
              },
              {
                path: 'seq',
                name: 'ComponentTableBaseSeq',
                component: () => import('@/views/table/base/seq/CodeExample.vue')
              },
              {
                path: 'current',
                name: 'ComponentTableBaseCurrent',
                component: () => import('@/views/table/base/current/CodeExample.vue')
              },
              {
                path: 'radio',
                name: 'ComponentTableBaseRadio',
                component: () => import('@/views/table/base/radio/CodeExample.vue')
              },
              {
                path: 'selection',
                name: 'ComponentTableBaseSelection',
                component: () => import('@/views/table/base/selection/CodeExample.vue')
              },
              {
                path: 'sort',
                name: 'ComponentTableBaseSort',
                component: () => import('@/views/table/base/sort/CodeExample.vue')
              },
              {
                path: 'filter',
                name: 'ComponentTableBaseFilter',
                component: () => import('@/views/table/base/filter/CodeExample.vue')
              },
              {
                path: 'empty',
                name: 'ComponentTableBaseEmpty',
                component: () => import('@/views/table/base/empty/CodeExample.vue')
              },
              {
                path: 'loading',
                name: 'ComponentTableBaseLoading',
                component: () => import('@/views/table/base/loading/CodeExample.vue')
              },
              {
                path: 'format',
                name: 'ComponentTableBaseFormat',
                component: () => import('@/views/table/base/format/CodeExample.vue')
              },
              {
                path: 'data',
                name: 'ComponentTableBaseData',
                component: () => import('@/views/table/base/data/CodeExample.vue')
              },
              {
                path: 'html',
                name: 'ComponentTableBaseHtml',
                component: () => import('@/views/table/base/html/CodeExample.vue')
              },
              {
                path: 'full',
                name: 'ComponentTableBaseFull',
                component: () => import('@/views/table/base/full/CodeExample.vue')
              }
            ]
          },
          {
            path: 'footer',
            children: [
              {
                path: 'footerData',
                name: 'ComponentTableFooterFooterData',
                component: () => import('@/views/table/footer/footerData/CodeExample.vue')
              },
              {
                path: 'footerMethod',
                name: 'ComponentTableFooterFooterMethod',
                component: () => import('@/views/table/footer/footerMethod/CodeExample.vue')
              },
              {
                path: 'template',
                name: 'ComponentTableFooterTemplate',
                component: () => import('@/views/table/footer/template/CodeExample.vue')
              }
            ]
          },
          {
            path: 'merge',
            children: [
              {
                path: 'row',
                name: 'ComponentTableMergeRow',
                component: () => import('@/views/table/merge/row/CodeExample.vue')
              },
              {
                path: 'column',
                name: 'ComponentTableMergeColumn',
                component: () => import('@/views/table/merge/column/CodeExample.vue')
              },
              {
                path: 'all',
                name: 'ComponentTableMergeAll',
                component: () => import('@/views/table/merge/all/CodeExample.vue')
              }
            ]
          },
          {
            path: 'expand',
            children: [
              {
                path: 'basic',
                name: 'ComponentTableExpandBasic',
                component: () => import('@/views/table/expand/basic/CodeExample.vue')
              },
              {
                path: 'padding',
                name: 'ComponentTableExpandPadding',
                component: () => import('@/views/table/expand/padding/CodeExample.vue')
              },
              {
                path: 'height',
                name: 'ComponentTableExpandHeight',
                component: () => import('@/views/table/expand/height/CodeExample.vue')
              },
              {
                path: 'fixed',
                name: 'ComponentTableExpandFixed',
                component: () => import('@/views/table/expand/fixed/CodeExample.vue')
              }
            ]
          },
          {
            path: 'menu',
            children: [
              {
                path: 'header',
                name: 'ComponentTableMenuHeader',
                component: () => import('@/views/table/menu/header/CodeExample.vue')
              },
              {
                path: 'body',
                name: 'ComponentTableMenuBody',
                component: () => import('@/views/table/menu/body/CodeExample.vue')
              },
              {
                path: 'footer',
                name: 'ComponentTableMenuFooter',
                component: () => import('@/views/table/menu/footer/CodeExample.vue')
              },
              {
                path: 'full',
                name: 'ComponentTableMenuFull',
                component: () => import('@/views/table/menu/full/CodeExample.vue')
              },
              {
                path: 'privilege',
                name: 'ComponentTableMenuPrivilege',
                component: () => import('@/views/table/menu/privilege/CodeExample.vue')
              }
            ]
          },
          {
            path: 'toolbar',
            children: [
              {
                path: 'basic',
                name: 'ComponentTableToolbarBasic',
                component: () => import('@/views/table/toolbar/basic/CodeExample.vue')
              },
              {
                path: 'custom',
                name: 'ComponentTableToolbarCustom',
                component: () => import('@/views/table/toolbar/custom/CodeExample.vue')
              },
              {
                path: 'print',
                name: 'ComponentTableToolbarPrint',
                component: () => import('@/views/table/toolbar/print/CodeExample.vue')
              }
            ]
          },
          {
            path: 'custom',
            children: [
              {
                path: 'toolbar',
                name: 'ComponentTableCustomToolbar',
                component: () => import('@/views/table/custom/toolbar/CodeExample.vue')
              },
              {
                path: 'visible',
                name: 'ComponentTableCustomVisible',
                component: () => import('@/views/table/custom/visible/CodeExample.vue')
              },
              {
                path: 'fixed',
                name: 'ComponentTableCustomFixed',
                component: () => import('@/views/table/custom/fixed/CodeExample.vue')
              },
              {
                path: 'resizable',
                name: 'ComponentTableCustomResizable',
                component: () => import('@/views/table/custom/resizable/CodeExample.vue')
              },
              {
                path: 'sort',
                name: 'ComponentTableCustomSort',
                component: () => import('@/views/table/custom/sort/CodeExample.vue')
              },
              {
                path: 'template',
                name: 'ComponentTableCustomTemplate',
                component: () => import('@/views/table/custom/template/CodeExample.vue')
              },
              {
                path: 'placement',
                name: 'ComponentTableCustomPlacement',
                component: () => import('@/views/table/custom/placement/CodeExample.vue')
              },
              {
                path: 'storage',
                name: 'ComponentTableCustomStorage',
                component: () => import('@/views/table/custom/storage/CodeExample.vue')
              },
              {
                path: 'events',
                name: 'ComponentTableCustomEvents',
                component: () => import('@/views/table/custom/events/CodeExample.vue')
              },
              {
                path: 'remote',
                name: 'ComponentTableCustomRemote',
                component: () => import('@/views/table/custom/remote/CodeExample.vue')
              },
              {
                path: 'remoteFull',
                name: 'ComponentTableCustomRemoteFull',
                component: () => import('@/views/table/custom/remoteFull/CodeExample.vue')
              }
            ]
          },
          {
            path: 'tree',
            children: [
              {
                path: 'leveling',
                name: 'ComponentTableTreeLeveling',
                component: () => import('@/views/table/tree/leveling/CodeExample.vue')
              },
              {
                path: 'hierarchy',
                name: 'ComponentTableTreeHierarchy',
                component: () => import('@/views/table/tree/hierarchy/CodeExample.vue')
              },
              {
                path: 'icon',
                name: 'ComponentTableTreeIcon',
                component: () => import('@/views/table/tree/icon/CodeExample.vue')
              },
              {
                path: 'radio',
                name: 'ComponentTableTreeRadio',
                component: () => import('@/views/table/tree/radio/CodeExample.vue')
              },
              {
                path: 'checkbox',
                name: 'ComponentTableTreeCheckbox',
                component: () => import('@/views/table/tree/checkbox/CodeExample.vue')
              },
              {
                path: 'line',
                name: 'ComponentTableTreeLine',
                component: () => import('@/views/table/tree/line/CodeExample.vue')
              },
              {
                path: 'menu',
                name: 'ComponentTableTreeMenu',
                component: () => import('@/views/table/tree/menu/CodeExample.vue')
              },
              {
                path: 'sort',
                name: 'ComponentTableTreeSort',
                component: () => import('@/views/table/tree/sort/CodeExample.vue')
              },
              {
                path: 'lazy',
                name: 'ComponentTableTreeLazy',
                component: () => import('@/views/table/tree/lazy/CodeExample.vue')
              },
              {
                path: 'lazyEdit',
                name: 'ComponentTableTreeLazyEdit',
                component: () => import('@/views/table/tree/lazyEdit/CodeExample.vue')
              },
              {
                path: 'expand',
                name: 'ComponentTableTreeExpand',
                component: () => import('@/views/table/tree/expand/CodeExample.vue')
              },
              {
                path: 'expandLazy',
                name: 'ComponentTableTreeExpandLazy',
                component: () => import('@/views/table/tree/expandLazy/CodeExample.vue')
              }
            ]
          },
          {
            path: 'edit',
            children: [
              {
                path: 'manual',
                name: 'ComponentTableEditManual',
                component: () => import('@/views/table/edit/manual/CodeExample.vue')
              },
              {
                path: 'click',
                name: 'ComponentTableEditClick',
                component: () => import('@/views/table/edit/click/CodeExample.vue')
              },
              {
                path: 'dblclick',
                name: 'ComponentTableEditDblclick',
                component: () => import('@/views/table/edit/dblclick/CodeExample.vue')
              },
              {
                path: 'insert',
                name: 'ComponentTableEditInsert',
                component: () => import('@/views/table/edit/insert/CodeExample.vue')
              },
              {
                path: 'remove',
                name: 'ComponentTableEditRemove',
                component: () => import('@/views/table/edit/remove/CodeExample.vue')
              },
              {
                path: 'pending',
                name: 'ComponentTableEditPending',
                component: () => import('@/views/table/edit/pending/CodeExample.vue')
              },
              {
                path: 'cellValid',
                name: 'ComponentTableEditCellValid',
                component: () => import('@/views/table/edit/cellValid/CodeExample.vue')
              },
              {
                path: 'rowValid',
                name: 'ComponentTableEditRowValid',
                component: () => import('@/views/table/edit/rowValid/CodeExample.vue')
              }
            ]
          },
          {
            path: 'template',
            children: [
              {
                path: 'default',
                name: 'ComponentTableTemplateDefault',
                component: () => import('@/views/table/template/default/CodeExample.vue')
              },
              {
                path: 'header',
                name: 'ComponentTableTemplateHeader',
                component: () => import('@/views/table/template/header/CodeExample.vue')
              },
              {
                path: 'footer',
                name: 'ComponentTableTemplateFooter',
                component: () => import('@/views/table/template/footer/CodeExample.vue')
              },
              {
                path: 'checkbox',
                name: 'ComponentTableTemplateCheckbox',
                component: () => import('@/views/table/template/checkbox/CodeExample.vue')
              },
              {
                path: 'radio',
                name: 'ComponentTableTemplateRadio',
                component: () => import('@/views/table/template/radio/CodeExample.vue')
              },
              {
                path: 'content',
                name: 'ComponentTableTemplateContent',
                component: () => import('@/views/table/template/content/CodeExample.vue')
              },
              {
                path: 'filter',
                name: 'ComponentTableTemplateFilter',
                component: () => import('@/views/table/template/filter/CodeExample.vue')
              },
              {
                path: 'edit',
                name: 'ComponentTableTemplateEdit',
                component: () => import('@/views/table/template/edit/CodeExample.vue')
              }
            ]
          },
          {
            path: 'scroll',
            children: [
              {
                path: 'vertical',
                name: 'ComponentTableScrollVertical',
                component: () => import('@/views/table/scroll/vertical/CodeExample.vue')
              },
              {
                path: 'horizontal',
                name: 'ComponentTableScrollHorizontal',
                component: () => import('@/views/table/scroll/horizontal/CodeExample.vue')
              },
              {
                path: 'hv',
                name: 'ComponentTableScrollHV',
                component: () => import('@/views/table/scroll/hv/CodeExample.vue')
              },
              {
                path: 'rowHeight',
                name: 'ComponentTableScrollRowHeight',
                component: () => import('@/views/table/scroll/rowHeight/CodeExample.vue')
              },
              {
                path: 'group',
                name: 'ComponentTableScrollGroup',
                component: () => import('@/views/table/scroll/group/CodeExample.vue')
              },
              {
                path: 'tree',
                name: 'ComponentTableScrollTree',
                component: () => import('@/views/table/scroll/tree/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'grid',
        children: [
          {
            path: 'base',
            children: [
              {
                path: 'basic',
                name: 'ComponentGridBaseBasic',
                component: () => import('@/views/grid/base/basic/CodeExample.vue')
              },
              {
                path: 'size',
                name: 'ComponentGridBaseSize',
                component: () => import('@/views/grid/base/size/CodeExample.vue')
              },
              {
                path: 'align',
                name: 'ComponentGridBaseAlign',
                component: () => import('@/views/grid/base/align/CodeExample.vue')
              },
              {
                path: 'width',
                name: 'ComponentGridBaseWidth',
                component: () => import('@/views/grid/base/width/CodeExample.vue')
              },
              {
                path: 'autoBreak',
                name: 'ComponentGridBaseAutoBreak',
                component: () => import('@/views/grid/base/autoBreak/CodeExample.vue')
              },
              {
                path: 'overflow',
                name: 'ComponentGridBaseOverflow',
                component: () => import('@/views/grid/base/overflow/CodeExample.vue')
              },
              {
                path: 'tooltip',
                name: 'ComponentGridBaseTooltip',
                component: () => import('@/views/grid/base/tooltip/CodeExample.vue')
              },
              {
                path: 'stripe',
                name: 'ComponentGridBaseStripe',
                component: () => import('@/views/grid/base/stripe/CodeExample.vue')
              },
              {
                path: 'border',
                name: 'ComponentGridBaseBorder',
                component: () => import('@/views/grid/base/border/CodeExample.vue')
              },
              {
                path: 'round',
                name: 'ComponentGridBaseRound',
                component: () => import('@/views/grid/base/round/CodeExample.vue')
              },
              {
                path: 'style',
                name: 'ComponentGridBaseStyle',
                component: () => import('@/views/grid/base/style/CodeExample.vue')
              },
              {
                path: 'dynamicStyle',
                name: 'ComponentGridBaseDynamicStyle',
                component: () => import('@/views/grid/base/dynamicStyle/CodeExample.vue')
              },
              {
                path: 'header',
                name: 'ComponentGridBaseHeader',
                component: () => import('@/views/grid/base/header/CodeExample.vue')
              },
              {
                path: 'headerHighlight',
                name: 'ComponentGridBaseHeaderHighlight',
                component: () => import('@/views/grid/base/headerHighlight/CodeExample.vue')
              },
              {
                path: 'resizable',
                name: 'ComponentGridBaseHeaderResizable',
                component: () => import('@/views/grid/base/resizable/CodeExample.vue')
              },
              {
                path: 'minHeight',
                name: 'ComponentGridBaseHeaderMinHeight',
                component: () => import('@/views/grid/base/minHeight/CodeExample.vue')
              },
              {
                path: 'height',
                name: 'ComponentGridBaseHeight',
                component: () => import('@/views/grid/base/height/CodeExample.vue')
              },
              {
                path: 'maxHeight',
                name: 'ComponentGridBaseMaxHeight',
                component: () => import('@/views/grid/base/maxHeight/CodeExample.vue')
              },
              {
                path: 'rowHeight',
                name: 'ComponentGridBaseRowHeight',
                component: () => import('@/views/grid/base/rowHeight/CodeExample.vue')
              },
              {
                path: 'autoHeight',
                name: 'ComponentGridBaseAutoHeight',
                component: () => import('@/views/grid/base/autoHeight/CodeExample.vue')
              },
              {
                path: 'fixed',
                name: 'ComponentGridBaseFixed',
                component: () => import('@/views/grid/base/fixed/CodeExample.vue')
              },
              {
                path: 'fixedFull',
                name: 'ComponentGridBaseFixedFull',
                component: () => import('@/views/grid/base/fixedFull/CodeExample.vue')
              },
              {
                path: 'footer',
                name: 'ComponentGridBaseFooter',
                component: () => import('@/views/grid/base/footer/CodeExample.vue')
              },
              {
                path: 'group',
                name: 'ComponentGridBaseGroup',
                component: () => import('@/views/grid/base/group/CodeExample.vue')
              },
              {
                path: 'seq',
                name: 'ComponentGridBaseSeq',
                component: () => import('@/views/grid/base/seq/CodeExample.vue')
              },
              {
                path: 'current',
                name: 'ComponentGridBaseCurrent',
                component: () => import('@/views/grid/base/current/CodeExample.vue')
              },
              {
                path: 'radio',
                name: 'ComponentGridBaseRadio',
                component: () => import('@/views/grid/base/radio/CodeExample.vue')
              },
              {
                path: 'selection',
                name: 'ComponentGridBaseSelection',
                component: () => import('@/views/grid/base/selection/CodeExample.vue')
              },
              {
                path: 'sort',
                name: 'ComponentGridBaseSort',
                component: () => import('@/views/grid/base/sort/CodeExample.vue')
              },
              {
                path: 'filter',
                name: 'ComponentGridBaseFilter',
                component: () => import('@/views/grid/base/filter/CodeExample.vue')
              },
              {
                path: 'empty',
                name: 'ComponentGridBaseEmpty',
                component: () => import('@/views/grid/base/empty/CodeExample.vue')
              },
              {
                path: 'loading',
                name: 'ComponentGridBaseLoading',
                component: () => import('@/views/grid/base/loading/CodeExample.vue')
              },
              {
                path: 'format',
                name: 'ComponentGridBaseFormat',
                component: () => import('@/views/grid/base/format/CodeExample.vue')
              },
              {
                path: 'data',
                name: 'ComponentGridBaseData',
                component: () => import('@/views/grid/base/data/CodeExample.vue')
              },
              {
                path: 'html',
                name: 'ComponentGridBaseHtml',
                component: () => import('@/views/grid/base/html/CodeExample.vue')
              },
              {
                path: 'full',
                name: 'ComponentGridBaseFull',
                component: () => import('@/views/grid/base/full/CodeExample.vue')
              }
            ]
          },
          {
            path: 'toolbar',
            children: [
              {
                path: 'custom',
                name: 'ComponentGridToolbarCustom',
                component: () => import('@/views/grid/toolbar/custom/CodeExample.vue')
              },
              {
                path: 'print',
                name: 'ComponentGridToolbarPrint',
                component: () => import('@/views/grid/toolbar/print/CodeExample.vue')
              },
              {
                path: 'zoom',
                name: 'ComponentGridToolbarZoom',
                component: () => import('@/views/grid/toolbar/zoom/CodeExample.vue')
              },
              {
                path: 'import',
                name: 'ComponentGridToolbarImport',
                component: () => import('@/views/grid/toolbar/import/CodeExample.vue')
              },
              {
                path: 'export',
                name: 'ComponentGridToolbarExport',
                component: () => import('@/views/grid/toolbar/export/CodeExample.vue')
              },
              {
                path: 'refresh',
                name: 'ComponentGridToolbarRefresh',
                component: () => import('@/views/grid/toolbar/refresh/CodeExample.vue')
              },
              {
                path: 'icon',
                name: 'ComponentGridToolbarIcon',
                component: () => import('@/views/grid/toolbar/icon/CodeExample.vue')
              }
            ]
          },
          {
            path: 'tree',
            children: [
              {
                path: 'leveling',
                name: 'ComponentGridTreeLeveling',
                component: () => import('@/views/grid/tree/leveling/CodeExample.vue')
              },
              {
                path: 'hierarchy',
                name: 'ComponentGridTreeHierarchy',
                component: () => import('@/views/grid/tree/hierarchy/CodeExample.vue')
              }
            ]
          },
          {
            path: 'edit',
            children: [
              {
                path: 'click',
                name: 'ComponentGridEditClick',
                component: () => import('@/views/grid/edit/click/CodeExample.vue')
              },
              {
                path: 'dblclick',
                name: 'ComponentGridEditDblclick',
                component: () => import('@/views/grid/edit/dblclick/CodeExample.vue')
              }
            ]
          },
          {
            path: 'scroll',
            children: [
              {
                path: 'vertical',
                name: 'ComponentGridScrollVertical',
                component: () => import('@/views/grid/scroll/vertical/CodeExample.vue')
              },
              {
                path: 'horizontal',
                name: 'ComponentGridScrollHorizontal',
                component: () => import('@/views/grid/scroll/horizontal/CodeExample.vue')
              },
              {
                path: 'hv',
                name: 'ComponentGridScrollHV',
                component: () => import('@/views/grid/scroll/hv/CodeExample.vue')
              },
              {
                path: 'group',
                name: 'ComponentGridScrollGroup',
                component: () => import('@/views/grid/scroll/group/CodeExample.vue')
              }
            ]
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
