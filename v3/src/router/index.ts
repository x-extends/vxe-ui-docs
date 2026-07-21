import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import { datePickerRouteConfig } from './date-picker'
import { modalRouteConfig } from './modal'
import { formRouteConfig } from './form'
import { listRouteConfig } from './list'
import { treeRouteConfig } from './tree'
import { uploadRouteConfig } from './upload'
import { tableRouteConfig } from './table'
import { gridRouteConfig } from './grid'
import { ganttRouteConfig } from './gantt'
import { formDesignRouteConfig } from './form-design'
import { listDesignRouteConfig } from './list-design'

import RouteLayout from '@/components/RouteLayout.vue'
import PageLayout from '@/components/PageLayout.vue'

import StartUIInstall from '@/views/start/useUI/install/CodeExample.vue'
import StartTableInstall from '@/views/start/useTable/install/CodeExample.vue'
import StartDesignInstall from '@/views/start/useDesign/install/CodeExample.vue'
import StartGanttInstall from '@/views/start/useGantt/install/CodeExample.vue'
import FreeDonation from '@/views/start/FreeDonation.vue'
import JoinSponsor from '@/views/start/JoinSponsor.vue'
import EnterprisePreview from '@/views/start/EnterprisePreview.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '*',
    redirect: {
      name: 'StartUIInstall'
    }
  },
  {
    path: '/',
    redirect: {
      name: 'StartUIInstall'
    }
  },
  {
    path: '/start',
    component: PageLayout,
    children: [
      {
        path: 'useUI',
        component: RouteLayout,
        children: [
          { path: 'install', name: 'StartUIInstall', component: StartUIInstall },
          { path: 'useGlobal', name: 'StartUIUseGlobal', component: () => import('@/views/start/useUI/useGlobal/CodeExample.vue') },
          { path: 'useImport', name: 'StartUIUseImport', component: () => import('@/views/start/useUI/useImport/CodeExample.vue') },
          { path: 'cdn', name: 'StartUICDN', component: () => import('@/views/start/useUI/cdn/CodeExample.vue') }
        ]
      },
      {
        path: 'useTable',
        component: RouteLayout,
        children: [
          { path: 'install', name: 'StartTableInstall', component: StartTableInstall },
          { path: 'useGlobal', name: 'StartTableUseGlobal', component: () => import('@/views/start/useTable/useGlobal/CodeExample.vue') },
          { path: 'useImport', name: 'StartTableUseImport', component: () => import('@/views/start/useTable/useImport/CodeExample.vue') },
          { path: 'cdn', name: 'StartTableCDN', component: () => import('@/views/start/useTable/cdn/CodeExample.vue') },
          { path: 'singleCdn', name: 'StartTableSingleCDN', component: () => import('@/views/start/useTable/singleCdn/CodeExample.vue') }
        ]
      },
      {
        path: 'useDesign',
        component: RouteLayout,
        children: [
          { path: 'install', name: 'StartDesignInstall', component: StartDesignInstall },
          { path: 'useGlobal', name: 'StartDesignUseGlobal', component: () => import('@/views/start/useDesign/useGlobal/CodeExample.vue') },
          { path: 'useImport', name: 'StartDesignUseImport', component: () => import('@/views/start/useDesign/useImport/CodeExample.vue') },
          { path: 'cdn', name: 'StartDesignCDN', component: () => import('@/views/start/useDesign/cdn/CodeExample.vue') }
        ]
      },
      {
        path: 'useGantt',
        component: RouteLayout,
        children: [
          { path: 'install', name: 'StartGanttInstall', component: StartGanttInstall },
          { path: 'useGlobal', name: 'StartGanttUseGlobal', component: () => import('@/views/start/useGantt/useGlobal/CodeExample.vue') },
          { path: 'useImport', name: 'StartGanttUseImport', component: () => import('@/views/start/useGantt/useImport/CodeExample.vue') },
          { path: 'cdn', name: 'StartGanttCDN', component: () => import('@/views/start/useGantt/cdn/CodeExample.vue') }
        ]
      },
      {
        path: 'globalConfig',
        name: 'StartConfig',
        component: () => import('@/views/start/config/CodeExample.vue')
      },
      {
        path: 'icons',
        name: 'StartIcons',
        component: () => import('@/views/start/icon/CodeExample.vue')
      },
      {
        path: 'theme',
        name: 'StartTheme',
        component: () => import('@/views/start/theme/CodeExample.vue')
      },
      {
        path: 'i18n',
        name: 'StartI18n',
        component: () => import('@/views/start/i18n/CodeExample.vue')
      },
      {
        path: 'translate',
        name: 'StartTranslate',
        component: () => import('@/views/start/translate/CodeExample.vue')
      },
      {
        path: 'z-index',
        name: 'StartUseZIndex',
        component: () => import('@/views/start/z-index/CodeExample.vue')
      },
      {
        path: 'permission',
        name: 'StartPermission',
        component: () => import('@/views/start/permission/CodeExample.vue')
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
    path: '/enterprise',
    component: PageLayout,
    children: [
      {
        path: 'preview/:previewCode',
        name: 'EnterprisePreview',
        component: EnterprisePreview
      }
    ]
  },
  {
    path: '/tool',
    component: PageLayout,
    children: [
      {
        path: 'clipboard',
        name: 'ToolClipboard',
        component: () => import('@/views/tool/clipboard/CodeExample.vue')
      }
    ]
  },
  {
    path: '/global',
    component: PageLayout,
    children: [
      {
        path: 'formats',
        component: RouteLayout,
        children: [
          {
            path: 'form',
            component: RouteLayout,
            children: [
              { path: 'api', name: 'GlobalFormatsFormAPI', component: () => import('@/views/global/formats/form/api/CodeExample.vue') },
              { path: 'base', name: 'GlobalFormatsFormBase', component: () => import('@/views/global/formats/form/base/CodeExample.vue') }
            ]
          },
          {
            path: 'table',
            component: RouteLayout,
            children: [
              { path: 'api', name: 'GlobalFormatsTableAPI', component: () => import('@/views/global/formats/table/api/CodeExample.vue') },
              { path: 'base', name: 'GlobalFormatsTableBase', component: () => import('@/views/global/formats/table/base/CodeExample.vue') }
            ]
          }
        ]
      },
      {
        path: 'menus',
        component: RouteLayout,
        children: [
          {
            path: 'table',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalMenusTableAPI',
                component: () => import('@/views/global/menus/table/api/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'GlobalMenusTableBase',
                component: () => import('@/views/global/menus/table/base/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'commands',
        component: RouteLayout,
        children: [
          {
            path: 'date-picker',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalCommandsDatePickerAPI',
                component: () => import('@/views/global/commands/date-picker/api/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'GlobalCommandsDatePickerBase',
                component: () => import('@/views/global/commands/date-picker/base/CodeExample.vue')
              }
            ]
          },
          {
            path: 'date-range-picker',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalCommandsDateRangePickerAPI',
                component: () => import('@/views/global/commands/date-range-picker/api/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'GlobalCommandsDateRangePickerBase',
                component: () => import('@/views/global/commands/date-range-picker/base/CodeExample.vue')
              }
            ]
          },
          {
            path: 'table',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalCommandsTableAPI',
                component: () => import('@/views/global/commands/table/api/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'GlobalCommandsTableBase',
                component: () => import('@/views/global/commands/table/base/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'validators',
        component: RouteLayout,
        children: [
          {
            path: 'form',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalValidatorsFormAPI',
                component: () => import('@/views/global/validators/form/api/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'GlobalValidatorsFormBase',
                component: () => import('@/views/global/validators/form/base/CodeExample.vue')
              }
            ]
          },
          {
            path: 'table',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalValidatorsTableAPI',
                component: () => import('@/views/global/validators/table/api/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'GlobalValidatorsTableBase',
                component: () => import('@/views/global/validators/table/base/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'interceptor',
        component: RouteLayout,
        children: [
          {
            path: 'table',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalInterceptorTableAPI',
                component: () => import('@/views/global/interceptor/table/api/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'GlobalInterceptorTableBase',
                component: () => import('@/views/global/interceptor/table/base/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'renderer',
        component: RouteLayout,
        children: [
          {
            path: 'button',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalRendererButtonAPI',
                component: () => import('@/views/global/renderer/button/api/CodeExample.vue')
              },
              {
                path: 'prefix',
                name: 'GlobalRendererButtonPrefix',
                component: () => import('@/views/global/renderer/button/prefix/CodeExample.vue')
              },
              {
                path: 'suffix',
                name: 'GlobalRendererButtonSuffix',
                component: () => import('@/views/global/renderer/button/suffix/CodeExample.vue')
              }
            ]
          },
          {
            path: 'icon-picker',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalRendererIconPickerAPI',
                component: () => import('@/views/global/renderer/icon-picker/api/CodeExample.vue')
              },
              {
                path: 'icon',
                name: 'GlobalRendererIconPickerIcon',
                component: () => import('@/views/global/renderer/icon-picker/icon/CodeExample.vue')
              }
            ]
          },
          {
            path: 'form',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalRendererFormAPI',
                component: () => import('@/views/global/renderer/form/api/CodeExample.vue')
              },
              {
                path: 'item',
                component: RouteLayout,
                children: [
                  {
                    path: 'myItemAmount',
                    name: 'GlobalRendererFormItemMyItemAmount',
                    component: () => import('@/views/global/renderer/form/item/myItemAmount/CodeExample.vue')
                  },
                  {
                    path: 'myItemUpload',
                    name: 'GlobalRendererFormItemMyItemUpload',
                    component: () => import('@/views/global/renderer/form/item/myItemUpload/CodeExample.vue')
                  }
                ]
              }
            ]
          },
          {
            path: 'table',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalRendererTableAPI',
                component: () => import('@/views/global/renderer/table/api/CodeExample.vue')
              },
              {
                path: 'default',
                component: RouteLayout,
                children: [
                  { path: 'api', name: 'GlobalRendererTableDefaultApi', component: () => import('@/views/global/renderer/table/default/api/CodeExample.vue') },
                  {
                    path: 'myCellLink',
                    name: 'GlobalRendererTableDefaultMyLink',
                    component: () => import('@/views/global/renderer/table/default/myCellLink/CodeExample.vue')
                  },
                  {
                    path: 'myCellImg',
                    name: 'GlobalRendererTableDefaultMyImg',
                    component: () => import('@/views/global/renderer/table/default/myCellImg/CodeExample.vue')
                  },
                  {
                    path: 'myCellAmount',
                    name: 'GlobalRendererTableDefaultMyAmount',
                    component: () => import('@/views/global/renderer/table/default/myCellAmount/CodeExample.vue')
                  },
                  {
                    path: 'myHeaderLink',
                    name: 'GlobalRendererTableDefaultMyHeaderLink',
                    component: () => import('@/views/global/renderer/table/default/myHeaderLink/CodeExample.vue')
                  },
                  {
                    path: 'myFooterAmount',
                    name: 'GlobalRendererTableDefaultMyFooterAmount',
                    component: () => import('@/views/global/renderer/table/default/myFooterAmount/CodeExample.vue')
                  },
                  {
                    path: 'myFullAmount',
                    name: 'GlobalRendererTableDefaultMyFullAmount',
                    component: () => import('@/views/global/renderer/table/default/myFullAmount/CodeExample.vue')
                  },
                  { path: 'myCellStyle', name: 'GlobalRendererTableDefaultMyCellStyle', component: () => import('@/views/global/renderer/table/default/myCellStyle/CodeExample.vue') }
                ]
              },
              {
                path: 'edit',
                component: RouteLayout,
                children: [
                  {
                    path: 'myEditAmount',
                    name: 'GlobalRendererTableEditMyEditAmount',
                    component: () => import('@/views/global/renderer/table/edit/myEditAmount/CodeExample.vue')
                  },
                  {
                    path: 'myEditPulldown',
                    name: 'GlobalRendererTableEditMyEditPulldown',
                    component: () => import('@/views/global/renderer/table/edit/myEditPulldown/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'expand',
                component: RouteLayout,
                children: [
                  {
                    path: 'myExpandList',
                    name: 'GlobalRendererTableExpandMyExpandList',
                    component: () => import('@/views/global/renderer/table/expand/myExpandList/CodeExample.vue')
                  },
                  {
                    path: 'myExpandTable',
                    name: 'GlobalRendererTableExpandMyExpandTable',
                    component: () => import('@/views/global/renderer/table/expand/myExpandTable/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'toolbar',
                component: RouteLayout,
                children: [
                  {
                    path: 'btn',
                    name: 'GlobalRendererTableToolbarBtn',
                    component: () => import('@/views/global/renderer/table/toolbar/button/CodeExample.vue')
                  },
                  {
                    path: 'tool',
                    name: 'GlobalRendererTableToolbarTool',
                    component: () => import('@/views/global/renderer/table/toolbar/tool/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'filter',
                component: RouteLayout,
                children: [
                  {
                    path: 'myFilterInput',
                    name: 'GlobalRendererTableFilterMyFilterInput',
                    component: () => import('@/views/global/renderer/table/filter/myFilterInput/CodeExample.vue')
                  },
                  {
                    path: 'myFilterComplex',
                    name: 'GlobalRendererTableFilterMyFilterComplex',
                    component: () => import('@/views/global/renderer/table/filter/myFilterComplex/CodeExample.vue')
                  },
                  {
                    path: 'myFilterContent',
                    name: 'GlobalRendererTableFilterMyFilterContent',
                    component: () => import('@/views/global/renderer/table/filter/myFilterContent/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'empty',
                component: RouteLayout,
                children: [
                  {
                    path: 'myEmptyImg',
                    name: 'GlobalRendererTableMyEmptyImg',
                    component: () => import('@/views/global/renderer/table/empty/myEmptyImg/CodeExample.vue')
                  },
                  {
                    path: 'myEmptyText',
                    name: 'GlobalRendererTableMyEmptyText',
                    component: () => import('@/views/global/renderer/table/empty/myEmptyText/CodeExample.vue')
                  }
                ]
              }
            ]
          },
          {
            path: 'form-design',
            component: RouteLayout,
            children: [
              // {
              //   path: 'api',
              //   name: 'GlobalRendererFormDesignAPI',
              //   component: () => import('@/views/global/renderer/form-design/api/CodeExample.vue')
              // },
              // {
              //   path: 'widget',
              //   component: RouteLayout,
              //   children: [
              //     {
              //       path: 'myInputWidget',
              //       name: 'GlobalRendererFormDesignWidgetMyInputWidget',
              //       component: () => import('@/views/global/renderer/form-design/widget/myInputWidget/CodeExample.vue')
              //     },
              //     {
              //       path: 'myTextareaWidget',
              //       name: 'GlobalRendererFormDesignWidgetMyTextareaWidget',
              //       component: () => import('@/views/global/renderer/form-design/widget/myTextareaWidget/CodeExample.vue')
              //     },
              //     {
              //       path: 'mySelectWidget',
              //       name: 'GlobalRendererFormDesignWidgetMySelectWidget',
              //       component: () => import('@/views/global/renderer/form-design/widget/mySelectWidget/CodeExample.vue')
              //     },
              //     {
              //       path: 'myDatePickerWidget',
              //       name: 'GlobalRendererFormDesignWidgetMyDatePickerWidget',
              //       component: () => import('@/views/global/renderer/form-design/widget/myDatePickerWidget/CodeExample.vue')
              //     },
              //     {
              //       path: 'myNumberInputWidget',
              //       name: 'GlobalRendererFormDesignWidgetMyNumberInputWidget',
              //       component: () => import('@/views/global/renderer/form-design/widget/myNumberInputWidget/CodeExample.vue')
              //     },
              //     {
              //       path: 'myAmountInputWidget',
              //       name: 'GlobalRendererFormDesignWidgetMyAmountInputWidget',
              //       component: () => import('@/views/global/renderer/form-design/widget/myAmountInputWidget/CodeExample.vue')
              //     },
              //     {
              //       path: 'myUploadFileWidget',
              //       name: 'GlobalRendererFormDesignWidgetMyUploadFileWidget',
              //       component: () => import('@/views/global/renderer/form-design/widget/myUploadFileWidget/CodeExample.vue')
              //     },
              //     {
              //       path: 'myUploadImageWidget',
              //       name: 'GlobalRendererFormDesignWidgetMyUploadImageWidget',
              //       component: () => import('@/views/global/renderer/form-design/widget/myUploadImageWidget/CodeExample.vue')
              //     }
              //   ]
              // }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/cssVar',
    component: PageLayout,
    children: [
      {
        path: 'table',
        component: RouteLayout,
        children: [
          { path: 'fontSize', name: 'CssVarTableFontSize', component: () => import('@/views/vars/table/fontSize/CodeExample.vue') },
          { path: 'fontColor', name: 'CssVarTableFontColor', component: () => import('@/views/vars/table/fontColor/CodeExample.vue') },
          { path: 'round', name: 'CssVarTableRound', component: () => import('@/views/vars/table/round/CodeExample.vue') },
          { path: 'border', name: 'CssVarTableBorder', component: () => import('@/views/vars/table/border/CodeExample.vue') },
          { path: 'background', name: 'CssVarTableBackground', component: () => import('@/views/vars/table/background/CodeExample.vue') },
          { path: 'stripe', name: 'CssVarTableStripe', component: () => import('@/views/vars/table/stripe/CodeExample.vue') },
          { path: 'rowColHover', name: 'CssVarTableRowColHover', component: () => import('@/views/vars/table/rowColHover/CodeExample.vue') },
          { path: 'rowColCurrent', name: 'CssVarTableRowColCurrent', component: () => import('@/views/vars/table/rowColCurrent/CodeExample.vue') },
          { path: 'rowHeight', name: 'CssVarTableRowHeight', component: () => import('@/views/vars/table/rowHeight/CodeExample.vue') }
        ]
      }
    ]
  },
  {
    path: '/component',
    component: PageLayout,
    children: [
      {
        path: 'icon',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentIconSize',
            component: () => import('@/views/icon/size/CodeExample.vue')
          },
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
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentLayoutBase',
            component: () => import('@/views/layout/base/CodeExample.vue')
          },
          {
            path: 'fixed',
            name: 'ComponentLayoutFixed',
            component: () => import('@/views/layout/fixed/CodeExample.vue')
          },
          {
            path: 'aside',
            name: 'ComponentLayoutAside',
            component: () => import('@/views/layout/aside/CodeExample.vue')
          },
          {
            path: 'header',
            name: 'ComponentLayoutHeader',
            component: () => import('@/views/layout/header/CodeExample.vue')
          },
          {
            path: 'body',
            name: 'ComponentLayoutBody',
            component: () => import('@/views/layout/body/CodeExample.vue')
          }
        ]
      },
      {
        path: 'backtop',
        component: RouteLayout,
        children: [
          { path: 'size', name: 'ComponentBacktopSize', component: () => import('@/views/backtop/size/CodeExample.vue') },
          { path: 'status', name: 'ComponentBacktopStatus', component: () => import('@/views/backtop/status/CodeExample.vue') },
          { path: 'circle', name: 'ComponentBacktopCircle', component: () => import('@/views/backtop/circle/CodeExample.vue') },
          { path: 'icon', name: 'ComponentBacktopIcon', component: () => import('@/views/backtop/icon/CodeExample.vue') },
          { path: 'content', name: 'ComponentBacktopContent', component: () => import('@/views/backtop/content/CodeExample.vue') },
          { path: 'pos', name: 'ComponentBacktopPos', component: () => import('@/views/backtop/pos/CodeExample.vue') },
          {
            path: 'template',
            component: RouteLayout,
            children: [
              { path: 'default', name: 'ComponentBacktopTemplateDefault', component: () => import('@/views/backtop/template/default/CodeExample.vue') },
              { path: 'top', name: 'ComponentBacktopTemplateTop', component: () => import('@/views/backtop/template/top/CodeExample.vue') },
              { path: 'bottom', name: 'ComponentBacktopTemplateBottom', component: () => import('@/views/backtop/template/bottom/CodeExample.vue') }
            ]
          }
        ]
      },
      {
        path: 'row',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentRowBase',
            component: () => import('@/views/row/base/CodeExample.vue')
          },
          {
            path: 'gutter',
            name: 'ComponentRowGutter',
            component: () => import('@/views/row/gutter/CodeExample.vue')
          },
          {
            path: 'vertical',
            name: 'ComponentRowVertical',
            component: () => import('@/views/row/vertical/CodeExample.vue')
          },
          {
            path: 'wrap',
            name: 'ComponentRowWrap',
            component: () => import('@/views/row/wrap/CodeExample.vue')
          },
          {
            path: 'colWidth',
            name: 'ComponentRowColWidth',
            component: () => import('@/views/row/colWidth/CodeExample.vue')
          },
          {
            path: 'colFill',
            name: 'ComponentRowColFill',
            component: () => import('@/views/row/colFill/CodeExample.vue')
          },
          {
            path: 'colAlign',
            name: 'ComponentRowColAlign',
            component: () => import('@/views/row/colAlign/CodeExample.vue')
          },
          {
            path: 'colEllipsis',
            name: 'ComponentRowColEllipsis',
            component: () => import('@/views/row/colEllipsis/CodeExample.vue')
          }
        ]
      },
      {
        path: 'avatar',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentAvatarBase',
            component: () => import('@/views/avatar/base/CodeExample.vue')
          },
          {
            path: 'size',
            name: 'ComponentAvatarSize',
            component: () => import('@/views/avatar/size/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentAvatarIcon',
            component: () => import('@/views/avatar/icon/CodeExample.vue')
          },
          {
            path: 'circle',
            name: 'ComponentAvatarCircle',
            component: () => import('@/views/avatar/circle/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentAvatarStatus',
            component: () => import('@/views/avatar/status/CodeExample.vue')
          },
          {
            path: 'dot',
            name: 'ComponentAvatarDot',
            component: () => import('@/views/avatar/dot/CodeExample.vue')
          },
          {
            path: 'count',
            name: 'ComponentAvatarCount',
            component: () => import('@/views/avatar/count/CodeExample.vue')
          }
        ]
      },
      {
        path: 'badge',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentBadgeBase',
            component: () => import('@/views/badge/base/CodeExample.vue')
          },
          { path: 'size', name: 'ComponentBadgerSize', component: () => import('@/views/badge/size/CodeExample.vue') },
          { path: 'icon', name: 'ComponentBadgerIcon', component: () => import('@/views/badge/icon/CodeExample.vue') },
          {
            path: 'dot',
            name: 'ComponentBadgerDot',
            component: () => import('@/views/badge/dot/CodeExample.vue')
          }
        ]
      },
      {
        path: 'breadcrumb',
        name: 'ComponentBreadcrumb',
        component: () => import('@/views/breadcrumb/CodeExample.vue')
      },
      {
        path: 'menu',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentMenuBase',
            component: () => import('@/views/menu/base/CodeExample.vue')
          },
          {
            path: 'loading',
            name: 'ComponentMenuLoading',
            component: () => import('@/views/menu/loading/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentMenuIcon',
            component: () => import('@/views/menu/icon/CodeExample.vue')
          },
          {
            path: 'accordion',
            name: 'ComponentMenuAccordion',
            component: () => import('@/views/menu/accordion/CodeExample.vue')
          },
          {
            path: 'collapsed',
            name: 'ComponentMenuCollapsed',
            component: () => import('@/views/menu/collapsed/CodeExample.vue')
          },
          { path: 'linkUrl', name: 'ComponentMenuLinkUrl', component: () => import('@/views/menu/linkUrl/CodeExample.vue') },
          {
            path: 'routerLink',
            name: 'ComponentMenuRouterLink',
            component: () => import('@/views/menu/routerLink/CodeExample.vue')
          },
          {
            path: 'permissionCode',
            name: 'ComponentMenuPermissionCode',
            component: () => import('@/views/menu/permissionCode/CodeExample.vue')
          },
          {
            path: 'menu',
            component: RouteLayout,
            children: [
              { path: 'basics', name: 'ComponentMenuMenuBasics', component: () => import('@/views/menu/menu/basics/CodeExample.vue') },
              { path: 'icon', name: 'ComponentMenuMenuIcon', component: () => import('@/views/menu/menu/icon/CodeExample.vue') },
              { path: 'disabled', name: 'ComponentMenuMenuDisabled', component: () => import('@/views/menu/menu/disabled/CodeExample.vue') },
              { path: 'visible', name: 'ComponentMenuMenuVisible', component: () => import('@/views/menu/menu/visible/CodeExample.vue') },
              { path: 'loading', name: 'ComponentMenuMenuLoading', component: () => import('@/views/menu/menu/loading/CodeExample.vue') },
              { path: 'visibleMethod', name: 'ComponentMenuMenuVisibleMethod', component: () => import('@/views/menu/menu/visibleMethod/CodeExample.vue') }
            ]
          },
          {
            path: 'template',
            component: RouteLayout,
            children: [
              { path: 'icon', name: 'ComponentMenuTemplateIcon', component: () => import('@/views/menu/template/icon/CodeExample.vue') },
              { path: 'title', name: 'ComponentMenuTemplateTitle', component: () => import('@/views/menu/template/title/CodeExample.vue') },
              { path: 'option', name: 'ComponentMenuTemplateOption', component: () => import('@/views/menu/template/option/CodeExample.vue') }
            ]
          }
        ]
      },
      {
        path: 'image',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentImageBase',
            component: () => import('@/views/image/base/CodeExample.vue')
          },
          {
            path: 'circle',
            name: 'ComponentImageCircle',
            component: () => import('@/views/image/circle/CodeExample.vue')
          },
          {
            path: 'thumbnail',
            name: 'ComponentImageThumbnail',
            component: () => import('@/views/image/thumbnail/CodeExample.vue')
          },
          {
            path: 'multiple',
            name: 'ComponentImageMultiple',
            component: () => import('@/views/image/multiple/CodeExample.vue')
          },
          {
            path: 'lazy',
            name: 'ComponentImageLazy',
            component: () => import('@/views/image/lazy/CodeExample.vue')
          },
          {
            path: 'showPreview',
            name: 'ComponentImageShowPreview',
            component: () => import('@/views/image/showPreview/CodeExample.vue')
          },
          {
            path: 'maskClosable',
            name: 'ComponentImageMaskClosable',
            component: () => import('@/views/image/maskClosable/CodeExample.vue')
          },
          {
            path: 'showPrintButton',
            name: 'ComponentImageShowPrintButton',
            component: () => import('@/views/image/showPrintButton/CodeExample.vue')
          },
          { path: 'toolBtn', name: 'ComponentImageToolBtn', component: () => import('@/views/image/toolBtn/CodeExample.vue') },
          { path: 'toolIcon', name: 'ComponentImageToolIcon', component: () => import('@/views/image/toolIcon/CodeExample.vue') },
          { path: 'events', name: 'ComponentImageEvents', component: () => import('@/views/image/events/CodeExample.vue') }
        ]
      },
      {
        path: 'image-group',
        component: RouteLayout,
        children: [
          { path: 'group', name: 'ComponentImageGroupBase', component: () => import('@/views/image-group/base/CodeExample.vue') },
          { path: 'showPreview', name: 'ComponentImageGroupShowPreview', component: () => import('@/views/image-group/showPreview/CodeExample.vue') },
          { path: 'showPrintButton', name: 'ComponentImageGroupShowPrintButton', component: () => import('@/views/image-group/showPrintButton/CodeExample.vue') },
          { path: 'showDownloadButton', name: 'ComponentImageGroupShowDownloadButton', component: () => import('@/views/image-group/showDownloadButton/CodeExample.vue') }
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
        component: RouteLayout,
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
          },
          {
            path: 'loading',
            name: 'ComponentTextLoading',
            component: () => import('@/views/text/loading/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentTextIcon',
            component: () => import('@/views/text/icon/CodeExample.vue')
          },
          {
            path: 'suffixIcon',
            name: 'ComponentTextSuffixIcon',
            component: () => import('@/views/text/suffixIcon/CodeExample.vue')
          },
          {
            path: 'clickToCopy',
            name: 'ComponentTextClickToCopy',
            component: () => import('@/views/text/clickToCopy/CodeExample.vue')
          }
        ]
      },
      {
        path: 'text-ellipsis',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentTextEllipsisSize',
            component: () => import('@/views/text-ellipsis/size/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentTextEllipsisStatus',
            component: () => import('@/views/text-ellipsis/status/CodeExample.vue')
          },
          {
            path: 'line-single',
            name: 'ComponentTextEllipsisIconLineSingle',
            component: () => import('@/views/text-ellipsis/line-single/CodeExample.vue')
          },
          {
            path: 'line-clamp',
            name: 'ComponentTextEllipsisLineClamp',
            component: () => import('@/views/text-ellipsis/line-clamp/CodeExample.vue')
          }
        ]
      },
      {
        path: 'link',
        component: RouteLayout,
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
            path: 'icon',
            name: 'ComponentLinkIcon',
            component: () => import('@/views/link/icon/CodeExample.vue')
          },
          {
            path: 'underline',
            name: 'ComponentLinkUnderline',
            component: () => import('@/views/link/underline/CodeExample.vue')
          },
          {
            path: 'disabled',
            name: 'ComponentLinkDisabled',
            component: () => import('@/views/link/disabled/CodeExample.vue')
          },
          {
            path: 'href',
            name: 'ComponentLinkHref',
            component: () => import('@/views/link/href/CodeExample.vue')
          },
          {
            path: 'router',
            name: 'ComponentLinkRouter',
            component: () => import('@/views/link/router/CodeExample.vue')
          },
          {
            path: 'permissionCode',
            name: 'ComponentLinkPermissionCode',
            component: () => import('@/views/link/permissionCode/CodeExample.vue')
          }
        ]
      },
      {
        path: 'tag',
        component: RouteLayout,
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
            path: 'round',
            name: 'ComponentTagRound',
            component: () => import('@/views/tag/round/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentTagIcon',
            component: () => import('@/views/tag/icon/CodeExample.vue')
          },
          { path: 'border', name: 'ComponentTagBorder', component: () => import('@/views/tag/border/CodeExample.vue') },
          { path: 'loading', name: 'ComponentTagLoading', component: () => import('@/views/tag/loading/CodeExample.vue') },
          { path: 'color', name: 'ComponentTagColor', component: () => import('@/views/tag/color/CodeExample.vue') },
          { path: 'closable', name: 'ComponentTagClosable', component: () => import('@/views/tag/closable/CodeExample.vue') }
        ]
      },
      {
        path: 'button',
        component: RouteLayout,
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
            path: 'tipIcon',
            name: 'ComponentButtonTipIcon',
            component: () => import('@/views/button/tipIcon/CodeExample.vue')
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
            path: 'vertical',
            name: 'ComponentButtonVertical',
            component: () => import('@/views/button/vertical/CodeExample.vue')
          },
          {
            path: 'dropdown',
            component: RouteLayout,
            children: [
              { path: 'options', name: 'ComponentButtonDropdownOptions', component: () => import('@/views/button/dropdown/options/CodeExample.vue') },
              { path: 'status', name: 'ComponentButtonDropdownStatus', component: () => import('@/views/button/dropdown/status/CodeExample.vue') },
              { path: 'trigger', name: 'ComponentButtonDropdownTrigger', component: () => import('@/views/button/dropdown/trigger/CodeExample.vue') },
              { path: 'tipIcon', name: 'ComponentButtonDropdownTipIcon', component: () => import('@/views/button/dropdown/tipIcon/CodeExample.vue') },
              { path: 'placement', name: 'ComponentButtonDropdownPlacement', component: () => import('@/views/button/dropdown/placement/CodeExample.vue') },
              { path: 'teleportTo', name: 'ComponentButtonDropdownTeleportTo', component: () => import('@/views/button/dropdown/teleportTo/CodeExample.vue') },
              { path: 'template', name: 'ComponentButtonDropdownTemplate', component: () => import('@/views/button/dropdown/template/CodeExample.vue') },
              { path: 'permissionCode', name: 'ComponentButtonDropdownPermissionCode', component: () => import('@/views/button/dropdown/permissionCode/CodeExample.vue') }
            ]
          },
          {
            path: 'disabled',
            name: 'ComponentButtonDisabled',
            component: () => import('@/views/button/disabled/CodeExample.vue')
          },
          { path: 'menu', name: 'ComponentButtonMenu', component: () => import('@/views/button/menu/CodeExample.vue') },
          {
            path: 'permissionCode',
            name: 'ComponentButtonPermissionCode',
            component: () => import('@/views/button/permissionCode/CodeExample.vue')
          }
        ]
      },
      {
        path: 'segmented',
        component: RouteLayout,
        children: [
          { path: 'size', name: 'ComponentSegmentedSize', component: () => import('@/views/segmented/size/CodeExample.vue') },
          { path: 'status', name: 'ComponentSegmentedStatus', component: () => import('@/views/segmented/status/CodeExample.vue') },
          { path: 'icon', name: 'ComponentSegmentedIcon', component: () => import('@/views/segmented/icon/CodeExample.vue') },
          { path: 'disabled', name: 'ComponentSegmentedDisabled', component: () => import('@/views/segmented/disabled/CodeExample.vue') },
          { path: 'type', name: 'ComponentSegmentedType', component: () => import('@/views/segmented/type/CodeExample.vue') },
          { path: 'width', name: 'ComponentSegmentedWidth', component: () => import('@/views/segmented/width/CodeExample.vue') },
          {
            path: 'template',
            component: RouteLayout,
            children: [
              { path: 'default', name: 'ComponentSegmentedTemplateDefault', component: () => import('@/views/segmented/template/default/CodeExample.vue') }
            ]
          }
        ]
      },
      {
        path: 'rate',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentRateSize',
            component: () => import('@/views/rate/size/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentRateStatus',
            component: () => import('@/views/rate/status/CodeExample.vue')
          },
          {
            path: 'disabled',
            name: 'ComponentRateDisabled',
            component: () => import('@/views/rate/disabled/CodeExample.vue')
          }
        ]
      },
      {
        path: 'radio',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentRadioSize',
            component: () => import('@/views/radio/size/CodeExample.vue')
          },
          { path: 'value', name: 'ComponentRadioValue', component: () => import('@/views/radio/value/CodeExample.vue') },
          {
            path: 'disabled',
            name: 'ComponentRadioDisabled',
            component: () => import('@/views/radio/disabled/CodeExample.vue')
          },
          {
            path: 'strict',
            name: 'ComponentRadioStrict',
            component: () => import('@/views/radio/strict/CodeExample.vue')
          },
          {
            path: 'group',
            name: 'ComponentRadioGroup',
            component: () => import('@/views/radio/group/CodeExample.vue')
          },
          {
            path: 'button',
            name: 'ComponentRadioButton',
            component: () => import('@/views/radio/button/CodeExample.vue')
          },
          { path: 'buttonStatus', name: 'ComponentRadioButtonStatus', component: () => import('@/views/radio/buttonStatus/CodeExample.vue') },
          { path: 'buttonDisabled', name: 'ComponentRadioButtonDisabled', component: () => import('@/views/radio/buttonDisabled/CodeExample.vue') },
          { path: 'buttonIcon', name: 'ComponentRadioButtonIcon', component: () => import('@/views/radio/buttonIcon/CodeExample.vue') },
          { path: 'options', name: 'ComponentRadioOptions', component: () => import('@/views/radio/options/CodeExample.vue') },
          { path: 'defaultValue', name: 'ComponentRadioDefaultValue', component: () => import('@/views/radio/defaultValue/CodeExample.vue') }
        ]
      },
      {
        path: 'checkbox',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentCheckboxSize',
            component: () => import('@/views/checkbox/size/CodeExample.vue')
          },
          {
            path: 'indeterminate',
            name: 'ComponentCheckboxIndeterminate',
            component: () => import('@/views/checkbox/indeterminate/CodeExample.vue')
          },
          {
            path: 'disabled',
            name: 'ComponentCheckboxDisabled',
            component: () => import('@/views/checkbox/disabled/CodeExample.vue')
          },
          {
            path: 'value',
            name: 'ComponentCheckboxValue',
            component: () => import('@/views/checkbox/value/CodeExample.vue')
          },
          {
            path: 'group',
            name: 'ComponentCheckboxGroup',
            component: () => import('@/views/checkbox/group/CodeExample.vue')
          },
          {
            path: 'button',
            name: 'ComponentCheckboxButton',
            component: () => import('@/views/checkbox/button/CodeExample.vue')
          },
          { path: 'buttonStatus', name: 'ComponentCheckboxButtonStatus', component: () => import('@/views/checkbox/buttonStatus/CodeExample.vue') },
          { path: 'buttonDisabled', name: 'ComponentCheckboxButtonDisabled', component: () => import('@/views/checkbox/buttonDisabled/CodeExample.vue') },
          { path: 'buttonIcon', name: 'ComponentCheckboxButtonIcon', component: () => import('@/views/checkbox/buttonIcon/CodeExample.vue') },
          {
            path: 'max',
            name: 'ComponentCheckboxMax',
            component: () => import('@/views/checkbox/max/CodeExample.vue')
          },
          { path: 'options', name: 'ComponentCheckboxOptions', component: () => import('@/views/checkbox/options/CodeExample.vue') },
          { path: 'defaultValue', name: 'ComponentCheckboxDefaultValue', component: () => import('@/views/checkbox/defaultValue/CodeExample.vue') }
        ]
      },
      {
        path: 'slider',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentSliderSize',
            component: () => import('@/views/slider/size/CodeExample.vue')
          },
          {
            path: 'base',
            name: 'ComponentSliderBase',
            component: () => import('@/views/slider/base/CodeExample.vue')
          },
          {
            path: 'range',
            name: 'ComponentSliderRange',
            component: () => import('@/views/slider/range/CodeExample.vue')
          },
          {
            path: 'readonly',
            name: 'ComponentSliderReadonly',
            component: () => import('@/views/slider/readonly/CodeExample.vue')
          },
          {
            path: 'disabled',
            name: 'ComponentSliderDisabled',
            component: () => import('@/views/slider/disabled/CodeExample.vue')
          }
        ]
      },
      {
        path: 'splitter',
        component: RouteLayout,
        children: [
          {
            path: 'basics',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentSplitterBasicsBase',
                component: () => import('@/views/splitter/basics/base/CodeExample.vue')
              },
              {
                path: 'height',
                name: 'ComponentSplitterBasicsHeight',
                component: () => import('@/views/splitter/basics/height/CodeExample.vue')
              },
              {
                path: 'border',
                name: 'ComponentSplitterBasicsBorder',
                component: () => import('@/views/splitter/basics/border/CodeExample.vue')
              },
              {
                path: 'padding',
                name: 'ComponentSplitterBasicsPadding',
                component: () => import('@/views/splitter/basics/padding/CodeExample.vue')
              },
              {
                path: 'vertical',
                name: 'ComponentSplitterBasicsVertical',
                component: () => import('@/views/splitter/basics/vertical/CodeExample.vue')
              },
              {
                path: 'resize',
                name: 'ComponentSplitterBasicsResize',
                component: () => import('@/views/splitter/basics/resize/CodeExample.vue')
              },
              {
                path: 'action',
                name: 'ComponentSplitterBasicsAction',
                component: () => import('@/views/splitter/basics/action/CodeExample.vue')
              },
              {
                path: 'actionConfig',
                name: 'ComponentSplitterBasicsActionConfig',
                component: () => import('@/views/splitter/basics/actionConfig/CodeExample.vue')
              },
              { path: 'style', name: 'ComponentSplitterBasicsStyle', component: () => import('@/views/splitter/basics/style/CodeExample.vue') },
              {
                path: 'layout',
                name: 'ComponentSplitterBasicsLayout',
                component: () => import('@/views/splitter/basics/layout/CodeExample.vue')
              }
            ]
          },
          {
            path: 'config',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentSplitterConfigBase',
                component: () => import('@/views/splitter/config/base/CodeExample.vue')
              },
              {
                path: 'height',
                name: 'ComponentSplitterConfigHeight',
                component: () => import('@/views/splitter/config/height/CodeExample.vue')
              },
              {
                path: 'border',
                name: 'ComponentSplitterConfigBorder',
                component: () => import('@/views/splitter/config/border/CodeExample.vue')
              },
              {
                path: 'padding',
                name: 'ComponentSplitterConfigPadding',
                component: () => import('@/views/splitter/config/padding/CodeExample.vue')
              },
              {
                path: 'vertical',
                name: 'ComponentSplitterConfigVertical',
                component: () => import('@/views/splitter/config/vertical/CodeExample.vue')
              },
              {
                path: 'resize',
                name: 'ComponentSplitterConfigResize',
                component: () => import('@/views/splitter/config/resize/CodeExample.vue')
              },
              {
                path: 'action',
                name: 'ComponentSplitterConfigAction',
                component: () => import('@/views/splitter/config/action/CodeExample.vue')
              },
              {
                path: 'actionConfig',
                name: 'ComponentSplitterConfigActionConfig',
                component: () => import('@/views/splitter/config/actionConfig/CodeExample.vue')
              },
              { path: 'style', name: 'ComponentSplitterConfigStyle', component: () => import('@/views/splitter/config/style/CodeExample.vue') },
              {
                path: 'layout',
                name: 'ComponentSplitterConfigLayout',
                component: () => import('@/views/splitter/config/layout/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'input',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentInputSize',
            component: () => import('@/views/input/size/CodeExample.vue')
          },
          { path: 'type', name: 'ComponentInputType', component: () => import('@/views/input/type/CodeExample.vue') },
          { path: 'readonly', name: 'ComponentInputReadonly', component: () => import('@/views/input/readonly/CodeExample.vue') },
          { path: 'editable', name: 'ComponentInputEditable', component: () => import('@/views/input/editable/CodeExample.vue') },
          { path: 'disabled', name: 'ComponentInputDisabled', component: () => import('@/views/input/disabled/CodeExample.vue') },
          { path: 'trim', name: 'ComponentInputTrim', component: () => import('@/views/input/trim/CodeExample.vue') },
          // {
          //   path: 'password',
          //   name: 'ComponentInputPassword',
          //   component: () => import('@/views/input/password/CodeExample.vue')
          // },
          // {
          //   path: 'date',
          //   name: 'ComponentInputDate',
          //   component: () => import('@/views/input/date/CodeExample.vue')
          // },
          // {
          //   path: 'week',
          //   name: 'ComponentInputWeek',
          //   component: () => import('@/views/input/week/CodeExample.vue')
          // },
          // {
          //   path: 'month',
          //   name: 'ComponentInputMonth',
          //   component: () => import('@/views/input/month/CodeExample.vue')
          // },
          // {
          //   path: 'quarter',
          //   name: 'ComponentInputQuarter',
          //   component: () => import('@/views/input/quarter/CodeExample.vue')
          // },
          // {
          //   path: 'year',
          //   name: 'ComponentInputYear',
          //   component: () => import('@/views/input/year/CodeExample.vue')
          // },
          // {
          //   path: 'time',
          //   name: 'ComponentInputTime',
          //   component: () => import('@/views/input/time/CodeExample.vue')
          // },
          // {
          //   path: 'datetime',
          //   name: 'ComponentInputDatetime',
          //   component: () => import('@/views/input/datetime/CodeExample.vue')
          // },
          // {
          //   path: 'number',
          //   name: 'ComponentInputNumber',
          //   component: () => import('@/views/input/number/CodeExample.vue')
          // },
          // {
          //   path: 'integer',
          //   name: 'ComponentInputInteger',
          //   component: () => import('@/views/input/integer/CodeExample.vue')
          // },
          // {
          //   path: 'float',
          //   name: 'ComponentInputFloat',
          //   component: () => import('@/views/input/float/CodeExample.vue')
          // },
          {
            path: 'count',
            name: 'ComponentInputCount',
            component: () => import('@/views/input/count/CodeExample.vue')
          },
          {
            path: 'prefix',
            name: 'ComponentInputPrefix',
            component: () => import('@/views/input/prefix/CodeExample.vue')
          },
          {
            path: 'suffix',
            name: 'ComponentInputSuffix',
            component: () => import('@/views/input/suffix/CodeExample.vue')
          },
          {
            path: 'template',
            component: RouteLayout,
            children: [
              {
                path: 'prefix',
                name: 'ComponentInputTemplatePrefix',
                component: () => import('@/views/input/template/prefix/CodeExample.vue')
              },
              {
                path: 'suffix',
                name: 'ComponentInputTemplateSuffix',
                component: () => import('@/views/input/template/suffix/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'password-input',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentPasswordInputSize',
            component: () => import('@/views/password-input/size/CodeExample.vue')
          },
          {
            path: 'clearable',
            name: 'ComponentPasswordInputClearable',
            component: () => import('@/views/password-input/clearable/CodeExample.vue')
          },
          {
            path: 'controls',
            name: 'ComponentPasswordInputControls',
            component: () => import('@/views/password-input/controls/CodeExample.vue')
          }
        ]
      },
      {
        path: 'number-input',
        component: RouteLayout,
        children: [
          {
            path: 'number',
            component: RouteLayout,
            children: [
              { path: 'size', name: 'ComponentNumberInputNumberSize', component: () => import('@/views/number-input/number/size/CodeExample.vue') },
              {
                path: 'base',
                name: 'ComponentNumberInputNumberBase',
                component: () => import('@/views/number-input/number/base/CodeExample.vue')
              },
              {
                path: 'clearable',
                name: 'ComponentNumberInputNumberClearable',
                component: () => import('@/views/number-input/number/clearable/CodeExample.vue')
              },
              {
                path: 'readonly',
                name: 'ComponentNumberInputNumberReadonly',
                component: () => import('@/views/number-input/number/readonly/CodeExample.vue')
              },
              {
                path: 'step',
                name: 'ComponentNumberInputNumberStep',
                component: () => import('@/views/number-input/number/step/CodeExample.vue')
              },
              {
                path: 'range',
                name: 'ComponentNumberInputNumberRange',
                component: () => import('@/views/number-input/number/range/CodeExample.vue')
              },
              {
                path: 'controls',
                name: 'ComponentNumberInputNumberControls',
                component: () => import('@/views/number-input/number/controls/CodeExample.vue')
              },
              {
                path: 'layout',
                name: 'ComponentNumberInputNumberLayout',
                component: () => import('@/views/number-input/number/layout/CodeExample.vue')
              },
              {
                path: 'controlIcon',
                name: 'ComponentNumberInputNumberControlIcon',
                component: () => import('@/views/number-input/number/controlIcon/CodeExample.vue')
              },
              {
                path: 'icon',
                name: 'ComponentNumberInputNumberIcon',
                component: () => import('@/views/number-input/number/icon/CodeExample.vue')
              },
              {
                path: 'template',
                name: 'ComponentNumberInputNumberTemplate',
                component: () => import('@/views/number-input/number/template/CodeExample.vue')
              }
            ]
          },
          {
            path: 'integer',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentNumberInputIntegerBase',
                component: () => import('@/views/number-input/integer/base/CodeExample.vue')
              },
              {
                path: 'clearable',
                name: 'ComponentNumberInputIntegerClearable',
                component: () => import('@/views/number-input/integer/clearable/CodeExample.vue')
              },
              {
                path: 'readonly',
                name: 'ComponentNumberInputIntegerReadonly',
                component: () => import('@/views/number-input/integer/readonly/CodeExample.vue')
              },
              {
                path: 'step',
                name: 'ComponentNumberInputIntegerStep',
                component: () => import('@/views/number-input/integer/step/CodeExample.vue')
              },
              {
                path: 'range',
                name: 'ComponentNumberInputIntegerRange',
                component: () => import('@/views/number-input/integer/range/CodeExample.vue')
              },
              {
                path: 'controls',
                name: 'ComponentNumberInputIntegerControls',
                component: () => import('@/views/number-input/integer/controls/CodeExample.vue')
              }
            ]
          },
          {
            path: 'float',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentNumberInputFloatBase',
                component: () => import('@/views/number-input/float/base/CodeExample.vue')
              },
              {
                path: 'clearable',
                name: 'ComponentNumberInputFloatClearable',
                component: () => import('@/views/number-input/float/clearable/CodeExample.vue')
              },
              {
                path: 'readonly',
                name: 'ComponentNumberInputFloatReadonly',
                component: () => import('@/views/number-input/float/readonly/CodeExample.vue')
              },
              {
                path: 'digits',
                name: 'ComponentNumberInputFloatDigits',
                component: () => import('@/views/number-input/float/digits/CodeExample.vue')
              },
              { path: 'mode', name: 'ComponentNumberInputFloatMode', component: () => import('@/views/number-input/float/mode/CodeExample.vue') },
              {
                path: 'step',
                name: 'ComponentNumberInputFloatStep',
                component: () => import('@/views/number-input/float/step/CodeExample.vue')
              },
              {
                path: 'range',
                name: 'ComponentNumberInputFloatRange',
                component: () => import('@/views/number-input/float/range/CodeExample.vue')
              },
              {
                path: 'autoFill',
                name: 'ComponentNumberInputFloatAutoFill',
                component: () => import('@/views/number-input/float/autoFill/CodeExample.vue')
              },
              {
                path: 'controls',
                name: 'ComponentNumberInputFloatControls',
                component: () => import('@/views/number-input/float/controls/CodeExample.vue')
              }
            ]
          },
          {
            path: 'amount',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentNumberInputAmountBase',
                component: () => import('@/views/number-input/amount/base/CodeExample.vue')
              },
              {
                path: 'align',
                name: 'ComponentNumberInputAmountAlign',
                component: () => import('@/views/number-input/amount/align/CodeExample.vue')
              },
              {
                path: 'clearable',
                name: 'ComponentNumberInputAmountClearable',
                component: () => import('@/views/number-input/amount/clearable/CodeExample.vue')
              },
              {
                path: 'readonly',
                name: 'ComponentNumberInputAmountReadonly',
                component: () => import('@/views/number-input/amount/readonly/CodeExample.vue')
              },
              {
                path: 'digits',
                name: 'ComponentNumberInputAmountDigits',
                component: () => import('@/views/number-input/amount/digits/CodeExample.vue')
              },
              { path: 'mode', name: 'ComponentNumberInputAmountMode', component: () => import('@/views/number-input/amount/mode/CodeExample.vue') },
              {
                path: 'showCurrency',
                name: 'ComponentNumberInputAmountShowCurrency',
                component: () => import('@/views/number-input/amount/showCurrency/CodeExample.vue')
              },
              {
                path: 'step',
                name: 'ComponentNumberInputAmountStep',
                component: () => import('@/views/number-input/amount/step/CodeExample.vue')
              },
              {
                path: 'range',
                name: 'ComponentNumberInputAmountRange',
                component: () => import('@/views/number-input/amount/range/CodeExample.vue')
              },
              {
                path: 'autoFill',
                name: 'ComponentNumberInputAmountAutoFill',
                component: () => import('@/views/number-input/amount/autoFill/CodeExample.vue')
              },
              {
                path: 'controls',
                name: 'ComponentNumberInputAmountControls',
                component: () => import('@/views/number-input/amount/controls/CodeExample.vue')
              },
              {
                path: 'layout',
                name: 'ComponentNumberInputAmountLayout',
                component: () => import('@/views/number-input/amount/layout/CodeExample.vue')
              },
              {
                path: 'controlIcon',
                name: 'ComponentNumberInputAmountControlIcon',
                component: () => import('@/views/number-input/amount/controlIcon/CodeExample.vue')
              },
              {
                path: 'icon',
                name: 'ComponentNumberInputAmountIcon',
                component: () => import('@/views/number-input/amount/icon/CodeExample.vue')
              },
              {
                path: 'template',
                name: 'ComponentNumberInputAmountTemplate',
                component: () => import('@/views/number-input/amount/template/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'textarea',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentTextareaSize',
            component: () => import('@/views/textarea/size/CodeExample.vue')
          },
          { path: 'disabled', name: 'ComponentTextareaDisabled', component: () => import('@/views/textarea/disabled/CodeExample.vue') },
          { path: 'readonly', name: 'ComponentTextareaReadonly', component: () => import('@/views/textarea/readonly/CodeExample.vue') },
          { path: 'editable', name: 'ComponentTextareaEditable', component: () => import('@/views/textarea/editable/CodeExample.vue') },
          { path: 'trim', name: 'ComponentTextareaTrim', component: () => import('@/views/textarea/trim/CodeExample.vue') },
          {
            path: 'count',
            name: 'ComponentTextareaCount',
            component: () => import('@/views/textarea/count/CodeExample.vue')
          },
          {
            path: 'autosize',
            name: 'ComponentTextareaAutosize',
            component: () => import('@/views/textarea/autosize/CodeExample.vue')
          },
          {
            path: 'resize',
            name: 'ComponentTextareaResize',
            component: () => import('@/views/textarea/resize/CodeExample.vue')
          }
        ]
      },
      {
        path: 'color-picker',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentColorPickerSize',
            component: () => import('@/views/color-picker/size/CodeExample.vue')
          },
          {
            path: 'clearable',
            name: 'ComponentColorPickerClearable',
            component: () => import('@/views/color-picker/clearable/CodeExample.vue')
          },
          {
            path: 'colors',
            name: 'ComponentColorPickerColors',
            component: () => import('@/views/color-picker/colors/CodeExample.vue')
          },
          { path: 'rgb', name: 'ComponentColorPickerRgb', component: () => import('@/views/color-picker/rgb/CodeExample.vue') },
          { path: 'hex', name: 'ComponentColorPickerHex', component: () => import('@/views/color-picker/hex/CodeExample.vue') },
          {
            path: 'showEyeDropper',
            name: 'ComponentColorPickerShowEyeDropper',
            component: () => import('@/views/color-picker/showEyeDropper/CodeExample.vue')
          }
        ]
      },
      {
        path: 'icon-picker',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            component: RouteLayout,
            children: [
              {
                path: 'size',
                name: 'ComponentIconPickerBaseSize',
                component: () => import('@/views/icon-picker/base/size/CodeExample.vue')
              },
              {
                path: 'clearable',
                name: 'ComponentIconPickerBaseClearable',
                component: () => import('@/views/icon-picker/base/clearable/CodeExample.vue')
              },
              { path: 'readonly', name: 'ComponentIconPickerBaseReadonly', component: () => import('@/views/icon-picker/base/readonly/CodeExample.vue') },
              { path: 'disabled', name: 'ComponentIconPickerBaseDisabled', component: () => import('@/views/icon-picker/base/disabled/CodeExample.vue') },
              {
                path: 'icons',
                name: 'ComponentIconPickerBaseIcons',
                component: () => import('@/views/icon-picker/base/icons/CodeExample.vue')
              },
              {
                path: 'customIcon',
                name: 'ComponentIconPickerBaseCustomIcon',
                component: () => import('@/views/icon-picker/base/customIcon/CodeExample.vue')
              },
              { path: 'title', name: 'ComponentIconPickerBaseTitle', component: () => import('@/views/icon-picker/base/title/CodeExample.vue') },
              {
                path: 'color',
                name: 'ComponentIconPickerBaseColor',
                component: () => import('@/views/icon-picker/base/color/CodeExample.vue')
              }
            ]
          },
          {
            path: 'search',
            component: RouteLayout,
            children: [
              { path: 'filterable', name: 'ComponentIconPickerSearchFilterable', component: () => import('@/views/icon-picker/search/filterable/CodeExample.vue') },
              { path: 'filterMethod', name: 'ComponentIconPickerSearchFilterMethod', component: () => import('@/views/icon-picker/search/filterMethod/CodeExample.vue') }
            ]
          },
          {
            path: 'popup',
            component: RouteLayout,
            children: [
              { path: 'wh', name: 'ComponentIconPickerPopupWh', component: () => import('@/views/icon-picker/popup/wh/CodeExample.vue') },
              { path: 'chunkSize', name: 'ComponentIconPickerPopupChunkSize', component: () => import('@/views/icon-picker/popup/chunkSize/CodeExample.vue') }
            ]
          }
        ]
      },
      datePickerRouteConfig,
      {
        path: 'date-range-picker',
        component: RouteLayout,
        children: [
          {
            path: 'date',
            component: RouteLayout,
            children: [
              { path: 'size', name: 'ComponentDateRangePickerDateSize', component: () => import('@/views/date-range-picker/date/size/CodeExample.vue') },
              {
                path: 'base',
                name: 'ComponentDateRangePickerDateBase',
                component: () => import('@/views/date-range-picker/date/base/CodeExample.vue')
              },
              { path: 'valueType', name: 'ComponentDateRangePickerDateValueType', component: () => import('@/views/date-range-picker/date/valueType/CodeExample.vue') },
              { path: 'clearable', name: 'ComponentDateRangePickerDateClearable', component: () => import('@/views/date-range-picker/date/clearable/CodeExample.vue') },
              {
                path: 'disabled',
                name: 'ComponentDateRangePickerDateDisabled',
                component: () => import('@/views/date-range-picker/date/disabled/CodeExample.vue')
              },
              { path: 'readonly', name: 'ComponentDateRangePickerDateReadonly', component: () => import('@/views/date-range-picker/date/readonly/CodeExample.vue') },
              {
                path: 'autoClose',
                name: 'ComponentDateRangePickerDateAutoClose',
                component: () => import('@/views/date-range-picker/date/autoClose/CodeExample.vue')
              },
              {
                path: 'shortcut',
                component: RouteLayout,
                children: [
                  {
                    path: 'code',
                    name: 'ComponentDateRangePickerDateShortcutCode',
                    component: () => import('@/views/date-range-picker/date/shortcut/code/CodeExample.vue')
                  },
                  {
                    path: 'status',
                    name: 'ComponentDateRangePickerDateShortcutStatus',
                    component: () => import('@/views/date-range-picker/date/shortcut/status/CodeExample.vue')
                  },
                  {
                    path: 'position',
                    name: 'ComponentDateRangePickerDateShortcutPosition',
                    component: () => import('@/views/date-range-picker/date/shortcut/position/CodeExample.vue')
                  },
                  {
                    path: 'custom',
                    name: 'ComponentDateRangePickerDateShortcutCustom',
                    component: () => import('@/views/date-range-picker/date/shortcut/custom/CodeExample.vue')
                  }
                ]
              },
              { path: 'disabledMethod', name: 'ComponentDateRangePickerDateDisabledMethod', component: () => import('@/views/date-range-picker/date/disabledMethod/CodeExample.vue') },
              { path: 'prefixIcon', name: 'ComponentDateRangePickerDatePrefixIcon', component: () => import('@/views/date-range-picker/date/prefixIcon/CodeExample.vue') },
              { path: 'suffixIcon', name: 'ComponentDateRangePickerDateSuffixIcon', component: () => import('@/views/date-range-picker/date/suffixIcon/CodeExample.vue') },
              { path: 'defVal', name: 'ComponentDateRangePickerDateDefVal', component: () => import('@/views/date-range-picker/date/defVal/CodeExample.vue') },
              { path: 'trigger', name: 'ComponentDateRangePickerDateTrigger', component: () => import('@/views/date-range-picker/date/trigger/CodeExample.vue') },
              { path: 'linkedPanels', name: 'ComponentDateRangePickerDateLinkedPanels', component: () => import('@/views/date-range-picker/date/linkedPanels/CodeExample.vue') },
              {
                path: 'template',
                component: RouteLayout,
                children: [
                  {
                    path: 'top',
                    name: 'ComponentDateRangePickerDateTemplateTop',
                    component: () => import('@/views/date-range-picker/date/template/top/CodeExample.vue')
                  },
                  {
                    path: 'bottom',
                    name: 'ComponentDateRangePickerDateTemplateBottom',
                    component: () => import('@/views/date-range-picker/date/template/bottom/CodeExample.vue')
                  },
                  {
                    path: 'left',
                    name: 'ComponentDateRangePickerDateTemplateLeft',
                    component: () => import('@/views/date-range-picker/date/template/left/CodeExample.vue')
                  },
                  {
                    path: 'right',
                    name: 'ComponentDateRangePickerDateTemplateRight',
                    component: () => import('@/views/date-range-picker/date/template/right/CodeExample.vue')
                  }
                ]
              }
            ]
          },
          {
            path: 'week',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentDateRangePickerWeekBase',
                component: () => import('@/views/date-range-picker/week/base/CodeExample.vue')
              },
              { path: 'clearable', name: 'ComponentDateRangePickerWeekClearable', component: () => import('@/views/date-range-picker/week/clearable/CodeExample.vue') },
              {
                path: 'disabled',
                name: 'ComponentDateRangePickerWeekDisabled',
                component: () => import('@/views/date-range-picker/week/disabled/CodeExample.vue')
              },
              {
                path: 'startDay',
                name: 'ComponentDateRangePickerWeekStartDay',
                component: () => import('@/views/date-range-picker/week/startDay/CodeExample.vue')
              },
              {
                path: 'selectDay',
                name: 'ComponentDateRangePickerWeekSelectDay',
                component: () => import('@/views/date-range-picker/week/selectDay/CodeExample.vue')
              },
              {
                path: 'shortcut',
                component: RouteLayout,
                children: [
                  {
                    path: 'code',
                    name: 'ComponentDateRangePickerWeekShortcutCode',
                    component: () => import('@/views/date-range-picker/week/shortcut/code/CodeExample.vue')
                  },
                  {
                    path: 'status',
                    name: 'ComponentDateRangePickerWeekShortcutStatus',
                    component: () => import('@/views/date-range-picker/week/shortcut/status/CodeExample.vue')
                  },
                  {
                    path: 'position',
                    name: 'ComponentDateRangePickerWeekShortcutPosition',
                    component: () => import('@/views/date-range-picker/week/shortcut/position/CodeExample.vue')
                  },
                  {
                    path: 'custom',
                    name: 'ComponentDateRangePickerWeekShortcutCustom',
                    component: () => import('@/views/date-range-picker/week/shortcut/custom/CodeExample.vue')
                  }
                ]
              },
              { path: 'linkedPanels', name: 'ComponentDateRangePickerWeekLinkedPanels', component: () => import('@/views/date-range-picker/week/linkedPanels/CodeExample.vue') },
              {
                path: 'template',
                component: RouteLayout,
                children: [
                  {
                    path: 'top',
                    name: 'ComponentDateRangePickerWeekTemplateTop',
                    component: () => import('@/views/date-range-picker/week/template/top/CodeExample.vue')
                  },
                  {
                    path: 'bottom',
                    name: 'ComponentDateRangePickerWeekTemplateBottom',
                    component: () => import('@/views/date-range-picker/week/template/bottom/CodeExample.vue')
                  },
                  {
                    path: 'left',
                    name: 'ComponentDateRangePickerWeekTemplateLeft',
                    component: () => import('@/views/date-range-picker/week/template/left/CodeExample.vue')
                  },
                  {
                    path: 'right',
                    name: 'ComponentDateRangePickerWeekTemplateRight',
                    component: () => import('@/views/date-range-picker/week/template/right/CodeExample.vue')
                  }
                ]
              }
            ]
          },
          {
            path: 'month',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentDateRangePickerMonthBase',
                component: () => import('@/views/date-range-picker/month/base/CodeExample.vue')
              },
              { path: 'clearable', name: 'ComponentDateRangePickerMonthClearable', component: () => import('@/views/date-range-picker/month/clearable/CodeExample.vue') },
              {
                path: 'shortcut',
                component: RouteLayout,
                children: [
                  {
                    path: 'code',
                    name: 'ComponentDateRangePickerMonthShortcutCode',
                    component: () => import('@/views/date-range-picker/month/shortcut/code/CodeExample.vue')
                  },
                  {
                    path: 'status',
                    name: 'ComponentDateRangePickerMonthShortcutStatus',
                    component: () => import('@/views/date-range-picker/month/shortcut/status/CodeExample.vue')
                  },
                  {
                    path: 'position',
                    name: 'ComponentDateRangePickerMonthShortcutPosition',
                    component: () => import('@/views/date-range-picker/month/shortcut/position/CodeExample.vue')
                  },
                  {
                    path: 'custom',
                    name: 'ComponentDateRangePickerMonthShortcutCustom',
                    component: () => import('@/views/date-range-picker/month/shortcut/custom/CodeExample.vue')
                  }
                ]
              }
            ]
          },
          {
            path: 'quarter',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentDateRangePickerQuarterBase',
                component: () => import('@/views/date-range-picker/quarter/base/CodeExample.vue')
              },
              { path: 'clearable', name: 'ComponentDateRangePickerQuarterClearable', component: () => import('@/views/date-range-picker/quarter/clearable/CodeExample.vue') },
              {
                path: 'shortcut',
                component: RouteLayout,
                children: [
                  {
                    path: 'code',
                    name: 'ComponentDateRangePickerQuarterShortcutCode',
                    component: () => import('@/views/date-range-picker/quarter/shortcut/code/CodeExample.vue')
                  },
                  {
                    path: 'status',
                    name: 'ComponentDateRangePickerQuarterShortcutStatus',
                    component: () => import('@/views/date-range-picker/quarter/shortcut/status/CodeExample.vue')
                  },
                  {
                    path: 'position',
                    name: 'ComponentDateRangePickerQuarterShortcutPosition',
                    component: () => import('@/views/date-range-picker/quarter/shortcut/position/CodeExample.vue')
                  },
                  {
                    path: 'custom',
                    name: 'ComponentDateRangePickerQuarterShortcutCustom',
                    component: () => import('@/views/date-range-picker/quarter/shortcut/custom/CodeExample.vue')
                  }
                ]
              }
            ]
          },
          {
            path: 'year',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentDateRangePickerYearBase',
                component: () => import('@/views/date-range-picker/year/base/CodeExample.vue')
              },
              { path: 'clearable', name: 'ComponentDateRangePickerYearClearable', component: () => import('@/views/date-range-picker/year/clearable/CodeExample.vue') },
              {
                path: 'shortcut',
                component: RouteLayout,
                children: [
                  {
                    path: 'code',
                    name: 'ComponentDateRangePickerYearShortcutCode',
                    component: () => import('@/views/date-range-picker/year/shortcut/code/CodeExample.vue')
                  },
                  {
                    path: 'status',
                    name: 'ComponentDateRangePickerYearShortcutStatus',
                    component: () => import('@/views/date-range-picker/year/shortcut/status/CodeExample.vue')
                  },
                  {
                    path: 'position',
                    name: 'ComponentDateRangePickerYearShortcutPosition',
                    component: () => import('@/views/date-range-picker/year/shortcut/position/CodeExample.vue')
                  },
                  {
                    path: 'custom',
                    name: 'ComponentDateRangePickerYearShortcutCustom',
                    component: () => import('@/views/date-range-picker/year/shortcut/custom/CodeExample.vue')
                  }
                ]
              }
            ]
          },
          {
            path: 'time',
            component: RouteLayout,
            children: [
              { path: 'size', name: 'ComponentDateRangePickerTimeSize', component: () => import('@/views/date-range-picker/time/size/CodeExample.vue') },
              {
                path: 'base',
                name: 'ComponentDateRangePickerTimeBase',
                component: () => import('@/views/date-range-picker/time/base/CodeExample.vue')
              },
              { path: 'clearable', name: 'ComponentDateRangePickerTimeClearable', component: () => import('@/views/date-range-picker/time/clearable/CodeExample.vue') },
              {
                path: 'disabled',
                name: 'ComponentDateRangePickerTimeDisabled',
                component: () => import('@/views/date-range-picker/time/disabled/CodeExample.vue')
              },
              {
                path: 'valueFormat',
                name: 'ComponentDateRangePickerTimeValueFormat',
                component: () => import('@/views/date-range-picker/time/valueFormat/CodeExample.vue')
              },
              {
                path: 'shortcut',
                component: RouteLayout,
                children: [
                  // {
                  //   path: 'code',
                  //   name: 'ComponentDateRangePickerTimeShortcutCode',
                  //   component: () => import('@/views/date-range-picker/time/shortcut/code/CodeExample.vue')
                  // },
                  // {
                  //   path: 'status',
                  //   name: 'ComponentDateRangePickerTimeShortcutStatus',
                  //   component: () => import('@/views/date-range-picker/time/shortcut/status/CodeExample.vue')
                  // },
                  // {
                  //   path: 'position',
                  //   name: 'ComponentDateRangePickerTimeShortcutPosition',
                  //   component: () => import('@/views/date-range-picker/time/shortcut/position/CodeExample.vue')
                  // },
                  {
                    path: 'custom',
                    name: 'ComponentDateRangePickerTimeShortcutCustom',
                    component: () => import('@/views/date-range-picker/time/shortcut/custom/CodeExample.vue')
                  }
                ]
              },
              { path: 'defVal', name: 'ComponentDateRangePickerTimeDefVal', component: () => import('@/views/date-range-picker/time/defVal/CodeExample.vue') },
              { path: 'disabledOpt', name: 'ComponentDateRangePickerTimeDisabledOpt', component: () => import('@/views/date-range-picker/time/disabledOpt/CodeExample.vue') },
              { path: 'opts', name: 'ComponentDateRangePickerTimeOpts', component: () => import('@/views/date-range-picker/time/opts/CodeExample.vue') },
              {
                path: 'template',
                component: RouteLayout,
                children: [
                  {
                    path: 'top',
                    name: 'ComponentDateRangePickerTimeTemplateTop',
                    component: () => import('@/views/date-range-picker/time/template/top/CodeExample.vue')
                  },
                  {
                    path: 'bottom',
                    name: 'ComponentDateRangePickerTimeTemplateBottom',
                    component: () => import('@/views/date-range-picker/time/template/bottom/CodeExample.vue')
                  },
                  {
                    path: 'left',
                    name: 'ComponentDateRangePickerTimeTemplateLeft',
                    component: () => import('@/views/date-range-picker/time/template/left/CodeExample.vue')
                  },
                  {
                    path: 'right',
                    name: 'ComponentDateRangePickerTimeTemplateRight',
                    component: () => import('@/views/date-range-picker/time/template/right/CodeExample.vue')
                  }
                ]
              }
            ]
          },
          {
            path: 'datetime',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentDateRangePickerDatetimeBase',
                component: () => import('@/views/date-range-picker/datetime/base/CodeExample.vue')
              },
              { path: 'clearable', name: 'ComponentDateRangePickerDatetimeClearable', component: () => import('@/views/date-range-picker/datetime/clearable/CodeExample.vue') },
              {
                path: 'disabled',
                name: 'ComponentDateRangePickerDatetimeDisabled',
                component: () => import('@/views/date-range-picker/datetime/disabled/CodeExample.vue')
              },
              {
                path: 'valueFormat',
                name: 'ComponentDateRangePickerDatetimeValueFormat',
                component: () => import('@/views/date-range-picker/datetime/valueFormat/CodeExample.vue')
              },
              { path: 'defVal', name: 'ComponentDateRangePickerDatetimeDefVal', component: () => import('@/views/date-range-picker/datetime/defVal/CodeExample.vue') },
              { path: 'disabledOpt', name: 'ComponentDateRangePickerDatetimeDisabledOpt', component: () => import('@/views/date-range-picker/datetime/disabledOpt/CodeExample.vue') },
              { path: 'opts', name: 'ComponentDateRangePickerDatetimeOpts', component: () => import('@/views/date-range-picker/datetime/opts/CodeExample.vue') },
              {
                path: 'shortcut',
                component: RouteLayout,
                children: [
                  {
                    path: 'code',
                    name: 'ComponentDateRangePickerDatetimeShortcutCode',
                    component: () => import('@/views/date-range-picker/datetime/shortcut/code/CodeExample.vue')
                  },
                  {
                    path: 'status',
                    name: 'ComponentDateRangePickerDatetimeShortcutStatus',
                    component: () => import('@/views/date-range-picker/datetime/shortcut/status/CodeExample.vue')
                  },
                  {
                    path: 'position',
                    name: 'ComponentDateRangePickerDatetimeShortcutPosition',
                    component: () => import('@/views/date-range-picker/datetime/shortcut/position/CodeExample.vue')
                  },
                  {
                    path: 'custom',
                    name: 'ComponentDateRangePickerDatetimeShortcutCustom',
                    component: () => import('@/views/date-range-picker/datetime/shortcut/custom/CodeExample.vue')
                  }
                ]
              },
              { path: 'linkedPanels', name: 'ComponentDateRangePickerDatetimeLinkedPanels', component: () => import('@/views/date-range-picker/datetime/linkedPanels/CodeExample.vue') },
              {
                path: 'template',
                component: RouteLayout,
                children: [
                  {
                    path: 'top',
                    name: 'ComponentDateRangePickerDatetimeTemplateTop',
                    component: () => import('@/views/date-range-picker/datetime/template/top/CodeExample.vue')
                  },
                  {
                    path: 'bottom',
                    name: 'ComponentDateRangePickerDatetimeTemplateBottom',
                    component: () => import('@/views/date-range-picker/datetime/template/bottom/CodeExample.vue')
                  },
                  {
                    path: 'left',
                    name: 'ComponentDateRangePickerDatetimeTemplateLeft',
                    component: () => import('@/views/date-range-picker/datetime/template/left/CodeExample.vue')
                  },
                  {
                    path: 'right',
                    name: 'ComponentDateRangePickerDatetimeTemplateRight',
                    component: () => import('@/views/date-range-picker/datetime/template/right/CodeExample.vue')
                  }
                ]
              }
            ]
          },
          {
            path: 'festivalMethod',
            name: 'ComponentDateRangePickerFestivalMethod',
            component: () => import('@/views/date-range-picker/festivalMethod/CodeExample.vue')
          },
          {
            path: 'holidays',
            name: 'ComponentDateRangePickerHolidays',
            component: () => import('@/views/date-range-picker/holidays/CodeExample.vue')
          }
        ]
      },
      {
        path: 'select',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            component: RouteLayout,
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
                path: 'icon',
                name: 'ComponentSelectBaseIcon',
                component: () => import('@/views/select/base/icon/CodeExample.vue')
              },
              {
                path: 'loading',
                name: 'ComponentSelectBaseLoading',
                component: () => import('@/views/select/base/loading/CodeExample.vue')
              },
              {
                path: 'filterable',
                name: 'ComponentSelectBaseFilterable',
                component: () => import('@/views/select/base/filterable/CodeExample.vue')
              },
              {
                path: 'remote',
                name: 'ComponentSelectBaseRemote',
                component: () => import('@/views/select/base/remote/CodeExample.vue')
              },
              {
                path: 'group',
                name: 'ComponentSelectBaseGroup',
                component: () => import('@/views/select/base/group/CodeExample.vue')
              },
              {
                path: 'defaultValue',
                name: 'ComponentSelectBaseDefaultValue',
                component: () => import('@/views/select/base/defaultValue/CodeExample.vue')
              },
              {
                path: 'multiple',
                name: 'ComponentSelectBaseMultiple',
                component: () => import('@/views/select/base/multiple/CodeExample.vue')
              },
              {
                path: 'max',
                name: 'ComponentSelectBaseMax',
                component: () => import('@/views/select/base/max/CodeExample.vue')
              },
              {
                path: 'popupWH',
                name: 'ComponentSelectBasePopupWH',
                component: () => import('@/views/select/base/popupWH/CodeExample.vue')
              },
              {
                path: 'allowCreate',
                name: 'ComponentSelectBaseAllowCreate',
                component: () => import('@/views/select/base/allowCreate/CodeExample.vue')
              },
              {
                path: 'operBtn',
                name: 'ComponentSelectBaseOperBtn',
                component: () => import('@/views/select/base/operBtn/CodeExample.vue')
              },
              { path: 'trigger', name: 'ComponentSelectBaseTrigger', component: () => import('@/views/select/base/trigger/CodeExample.vue') },
              {
                path: 'template',
                name: 'ComponentSelectBaseTemplate',
                component: () => import('@/views/select/base/template/CodeExample.vue')
              },
              {
                path: 'scroll',
                name: 'ComponentSelectBaseScroll',
                component: () => import('@/views/select/base/scroll/CodeExample.vue')
              }
            ]
          },
          {
            path: 'config',
            component: RouteLayout,
            children: [
              {
                path: 'clearable',
                name: 'ComponentSelectConfigClearable',
                component: () => import('@/views/select/config/clearable/CodeExample.vue')
              },
              {
                path: 'disabled',
                name: 'ComponentSelectConfigDisabled',
                component: () => import('@/views/select/config/disabled/CodeExample.vue')
              },
              {
                path: 'loading',
                name: 'ComponentSelectConfigLoading',
                component: () => import('@/views/select/config/loading/CodeExample.vue')
              },
              {
                path: 'filterable',
                name: 'ComponentSelectConfigFilterable',
                component: () => import('@/views/select/config/filterable/CodeExample.vue')
              },
              {
                path: 'remote',
                name: 'ComponentSelectConfigRemote',
                component: () => import('@/views/select/config/remote/CodeExample.vue')
              },
              {
                path: 'group',
                name: 'ComponentSelectConfigGroup',
                component: () => import('@/views/select/config/group/CodeExample.vue')
              },
              {
                path: 'defaultValue',
                name: 'ComponentSelectConfigDefaultValue',
                component: () => import('@/views/select/config/defaultValue/CodeExample.vue')
              },
              {
                path: 'multiple',
                name: 'ComponentSelectConfigMultiple',
                component: () => import('@/views/select/config/multiple/CodeExample.vue')
              },
              {
                path: 'max',
                name: 'ComponentSelectConfigMax',
                component: () => import('@/views/select/config/max/CodeExample.vue')
              },
              {
                path: 'popupWH',
                name: 'ComponentSelectConfigPopupWH',
                component: () => import('@/views/select/config/popupWH/CodeExample.vue')
              },
              {
                path: 'allowCreate',
                name: 'ComponentSelectConfigAllowCreate',
                component: () => import('@/views/select/config/allowCreate/CodeExample.vue')
              },
              {
                path: 'operBtn',
                name: 'ComponentSelectConfigOperBtn',
                component: () => import('@/views/select/config/operBtn/CodeExample.vue')
              },
              { path: 'trigger', name: 'ComponentSelectConfigTrigger', component: () => import('@/views/select/config/trigger/CodeExample.vue') },
              {
                path: 'template',
                name: 'ComponentSelectConfigTemplate',
                component: () => import('@/views/select/config/template/CodeExample.vue')
              },
              {
                path: 'scroll',
                name: 'ComponentSelectConfigScroll',
                component: () => import('@/views/select/config/scroll/CodeExample.vue')
              },
              { path: 'userSelect', name: 'ComponentSelectConfigUserSelect', component: () => import('@/views/select/config/userSelect/CodeExample.vue') }
            ]
          }
        ]
      },
      {
        path: 'cascader',
        component: RouteLayout,
        children: [
          {
            path: 'basics',
            component: RouteLayout,
            children: [
              { path: 'size', name: 'ComponentCascaderBaseSize', component: () => import('@/views/cascader/base/size/CodeExample.vue') },
              { path: 'hierarchy', name: 'ComponentCascaderBaseHierarchy', component: () => import('@/views/cascader/base/hierarchy/CodeExample.vue') },
              { path: 'leveling', name: 'ComponentCascaderBaseLeveling', component: () => import('@/views/cascader/base/leveling/CodeExample.vue') },
              { path: 'multiple', name: 'ComponentCascaderBaseMultiple', component: () => import('@/views/cascader/base/multiple/CodeExample.vue') },
              { path: 'icon', name: 'ComponentCascaderBaseIcon', component: () => import('@/views/cascader/base/icon/CodeExample.vue') },
              { path: 'optionProps', name: 'ComponentCascaderBaseOptionProps', component: () => import('@/views/cascader/base/optionProps/CodeExample.vue') },
              { path: 'fullLabel', name: 'ComponentCascaderBaseFullLabel', component: () => import('@/views/cascader/base/fullLabel/CodeExample.vue') }
            ]
          },
          {
            path: 'radio',
            component: RouteLayout,
            children: [
              { path: 'base', name: 'ComponentCascaderRadioBase', component: () => import('@/views/cascader/radio/base/CodeExample.vue') },
              { path: 'trigger', name: 'ComponentCascaderRadioTrigger', component: () => import('@/views/cascader/radio/trigger/CodeExample.vue') }
            ]
          },
          {
            path: 'checkbox',
            component: RouteLayout,
            children: [
              { path: 'base', name: 'ComponentCascaderCheckboxBase', component: () => import('@/views/cascader/checkbox/base/CodeExample.vue') },
              { path: 'checkStrictly', name: 'ComponentCascaderCheckboxCheckStrictly', component: () => import('@/views/cascader/checkbox/checkStrictly/CodeExample.vue') },
              { path: 'trigger', name: 'ComponentCascaderCheckboxTrigger', component: () => import('@/views/cascader/checkbox/trigger/CodeExample.vue') }
            ]
          },
          {
            path: 'search',
            component: RouteLayout,
            children: [
              { path: 'filterValue', name: 'ComponentCascaderSearchFilterValue', component: () => import('@/views/cascader/search/filterValue/CodeExample.vue') },
              { path: 'filterMethod', name: 'ComponentCascaderSearchFilterMethod', component: () => import('@/views/cascader/search/filterMethod/CodeExample.vue') }
            ]
          },
          {
            path: 'operBtn',
            component: RouteLayout,
            children: [
              { path: 'close', name: 'ComponentCascaderOperBtnClose', component: () => import('@/views/cascader/operBtn/close/CodeExample.vue') },
              { path: 'checked', name: 'ComponentCascaderOperBtnChecked', component: () => import('@/views/cascader/operBtn/checked/CodeExample.vue') }
            ]
          },
          {
            path: 'other',
            component: RouteLayout,
            children: [
              { path: 'region', name: 'ComponentCascaderOtherRegion', component: () => import('@/views/cascader/other/region/CodeExample.vue') }
            ]
          }
        ]
      },
      {
        path: 'pager',
        component: RouteLayout,
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
            component: RouteLayout,
            children: [
              {
                path: 'left',
                name: 'ComponentPagerTemplateLeft',
                component: () => import('@/views/pager/template/left/CodeExample.vue')
              },
              {
                path: 'right',
                name: 'ComponentPagerTemplateRight',
                component: () => import('@/views/pager/template/right/CodeExample.vue')
              },
              {
                path: 'func',
                name: 'ComponentPagerTemplateFunc',
                component: () => import('@/views/pager/template/func/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'empty',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentEmptyBase',
            component: () => import('@/views/empty/base/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentEmptyIcon',
            component: () => import('@/views/empty/icon/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentEmptyStatus',
            component: () => import('@/views/empty/status/CodeExample.vue')
          },
          {
            path: 'imageUrl',
            name: 'ComponentEmptyImageUrl',
            component: () => import('@/views/empty/imageUrl/CodeExample.vue')
          }
        ]
      },
      {
        path: 'result',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentResultBase',
            component: () => import('@/views/result/base/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentResultIcon',
            component: () => import('@/views/result/icon/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentResultStatus',
            component: () => import('@/views/result/status/CodeExample.vue')
          },
          {
            path: 'imageUrl',
            name: 'ComponentResultImageUrl',
            component: () => import('@/views/result/imageUrl/CodeExample.vue')
          },
          {
            path: 'extra',
            name: 'ComponentResultExtra',
            component: () => import('@/views/result/extra/CodeExample.vue')
          }
        ]
      },
      {
        path: 'notice-bar',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentNoticeBarSize',
            component: () => import('@/views/notice-bar/size/CodeExample.vue')
          },
          {
            path: 'horizontal',
            name: 'ComponentNoticeBarHorizontal',
            component: () => import('@/views/notice-bar/horizontal/CodeExample.vue')
          },
          {
            path: 'direction',
            name: 'ComponentNoticeBarDirection',
            component: () => import('@/views/notice-bar/direction/CodeExample.vue')
          },
          { path: 'speed', name: 'ComponentNoticeBarSpeed', component: () => import('@/views/notice-bar/speed/CodeExample.vue') },
          { path: 'duration', name: 'ComponentNoticeBarDuration', component: () => import('@/views/notice-bar/duration/CodeExample.vue') },
          { path: 'loop', name: 'ComponentNoticeBarLoop', component: () => import('@/views/notice-bar/loop/CodeExample.vue') },
          {
            path: 'template',
            component: RouteLayout,
            children: [
              {
                path: 'default',
                name: 'ComponentNoticeBarTemplateDefault',
                component: () => import('@/views/notice-bar/template/default/CodeExample.vue')
              },
              {
                path: 'prefix',
                name: 'ComponentNoticeBarTemplatePrefix',
                component: () => import('@/views/notice-bar/template/prefix/CodeExample.vue')
              },
              {
                path: 'suffix',
                name: 'ComponentNoticeBarTemplateSuffix',
                component: () => import('@/views/notice-bar/template/suffix/CodeExample.vue')
              }
            ]
          }
        ]
      },
      modalRouteConfig,
      {
        path: 'tooltip',
        component: RouteLayout,
        children: [
          {
            path: 'trigger',
            name: 'ComponentTooltipTrigger',
            component: () => import('@/views/tooltip/trigger/CodeExample.vue')
          },
          {
            path: 'enterable',
            name: 'ComponentTooltipEnterable',
            component: () => import('@/views/tooltip/enterable/CodeExample.vue')
          },
          {
            path: 'style',
            name: 'ComponentTooltipStyle',
            component: () => import('@/views/tooltip/style/CodeExample.vue')
          },
          { path: 'html', name: 'ComponentTooltipHtml', component: () => import('@/views/tooltip/html/CodeExample.vue') },
          {
            path: 'manual',
            name: 'ComponentTooltipManual',
            component: () => import('@/views/tooltip/manual/CodeExample.vue')
          },
          {
            path: 'single',
            name: 'ComponentTooltipSingle',
            component: () => import('@/views/tooltip/single/CodeExample.vue')
          },
          {
            path: 'table',
            name: 'ComponentTooltipTable',
            component: () => import('@/views/tooltip/table/CodeExample.vue')
          }
        ]
      },
      {
        path: 'switch',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentSwitchSize',
            component: () => import('@/views/switch/size/CodeExample.vue')
          },
          {
            path: 'disabled',
            name: 'ComponentSwitchDisabled',
            component: () => import('@/views/switch/disabled/CodeExample.vue')
          },
          {
            path: 'label',
            name: 'ComponentSwitchLabel',
            component: () => import('@/views/switch/label/CodeExample.vue')
          },
          {
            path: 'value',
            name: 'ComponentSwitchValue',
            component: () => import('@/views/switch/value/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentSwitchIcon',
            component: () => import('@/views/switch/icon/CodeExample.vue')
          }
        ]
      },
      listRouteConfig,
      {
        path: 'pulldown',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentPulldownBase',
            component: () => import('@/views/pulldown/base/CodeExample.vue')
          },
          {
            path: 'options',
            name: 'ComponentPulldownOptions',
            component: () => import('@/views/pulldown/options/CodeExample.vue')
          },
          {
            path: 'template',
            children: [
              { path: 'header', name: 'ComponentPulldownTemplateHeader', component: () => import('@/views/pulldown/template/header/CodeExample.vue') },
              { path: 'footer', name: 'ComponentPulldownTemplateFooter', component: () => import('@/views/pulldown/template/footer/CodeExample.vue') },
              { path: 'dropdown', name: 'ComponentPulldownTemplateDropdown', component: () => import('@/views/pulldown/template/dropdown/CodeExample.vue') }
            ]
          },
          { path: 'select', name: 'ComponentPulldownSelect', component: () => import('@/views/pulldown/select/CodeExample.vue') },
          { path: 'selectUser', name: 'ComponentPulldownSelectUser', component: () => import('@/views/pulldown/selectUser/CodeExample.vue') },
          { path: 'table', name: 'ComponentPulldownTable', component: () => import('@/views/pulldown/table/CodeExample.vue') }
        ]
      },
      {
        path: 'collapse',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentCollapseBase',
            component: () => import('@/views/collapse/base/CodeExample.vue')
          },
          { path: 'model', name: 'ComponentCollapseModel', component: () => import('@/views/collapse/model/CodeExample.vue') },
          { path: 'padding', name: 'ComponentCollapsePadding', component: () => import('@/views/collapse/padding/CodeExample.vue') },
          { path: 'border', name: 'ComponentCollapseBorder', component: () => import('@/views/collapse/border/CodeExample.vue') },
          {
            path: 'icon',
            name: 'ComponentCollapseIon',
            component: () => import('@/views/collapse/icon/CodeExample.vue')
          },
          { path: 'preload', name: 'ComponentCollapsePreload', component: () => import('@/views/collapse/preload/CodeExample.vue') },
          {
            path: 'options',
            name: 'ComponentCollapseOptions',
            component: () => import('@/views/collapse/options/CodeExample.vue')
          },
          {
            path: 'template',
            component: RouteLayout,
            children: [
              {
                path: 'default',
                name: 'ComponentCollapseTemplateDefault',
                component: () => import('@/views/collapse/template/default/CodeExample.vue')
              },
              {
                path: 'title',
                name: 'ComponentCollapseTemplateTitle',
                component: () => import('@/views/collapse/template/title/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'tabs',
        component: RouteLayout,
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
          },
          {
            path: 'options',
            name: 'ComponentTabsOptions',
            component: () => import('@/views/tabs/options/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentTabsIcon',
            component: () => import('@/views/tabs/icon/CodeExample.vue')
          },
          {
            path: 'trigger',
            name: 'ComponentTabsRoundTrigger',
            component: () => import('@/views/tabs/trigger/CodeExample.vue')
          },
          {
            path: 'position',
            name: 'ComponentTabsRoundPosition',
            component: () => import('@/views/tabs/position/CodeExample.vue')
          },
          {
            path: 'showContent',
            name: 'ComponentTabsRoundShowContent',
            component: () => import('@/views/tabs/showContent/CodeExample.vue')
          },
          {
            path: 'preload',
            name: 'ComponentTabsRoundPreload',
            component: () => import('@/views/tabs/preload/CodeExample.vue')
          },
          {
            path: 'over',
            name: 'ComponentTabsOver',
            component: () => import('@/views/tabs/over/CodeExample.vue')
          },
          {
            path: 'beforeChangeMethod',
            name: 'ComponentTabsBeforeChangeMethod',
            component: () => import('@/views/tabs/beforeChangeMethod/CodeExample.vue')
          },
          {
            path: 'closeConfig',
            name: 'ComponentTabsCloseConfig',
            component: () => import('@/views/tabs/closeConfig/CodeExample.vue')
          },
          {
            path: 'beforeClose',
            name: 'ComponentTabsBeforeClose',
            component: () => import('@/views/tabs/beforeClose/CodeExample.vue')
          },
          {
            path: 'refreshConfig',
            name: 'ComponentTabsRefreshConfig',
            component: () => import('@/views/tabs/refreshConfig/CodeExample.vue')
          },
          {
            path: 'template',
            component: RouteLayout,
            children: [
              {
                path: 'title',
                name: 'ComponentTabsTemplateTitle',
                component: () => import('@/views/tabs/template/title/CodeExample.vue')
              },
              {
                path: 'titlePrefix',
                name: 'ComponentTabsTemplateTitlePrefix',
                component: () => import('@/views/tabs/template/titlePrefix/CodeExample.vue')
              },
              {
                path: 'titleSuffix',
                name: 'ComponentTabsTemplateTitleSuffix',
                component: () => import('@/views/tabs/template/titleSuffix/CodeExample.vue')
              },
              {
                path: 'prefix',
                name: 'ComponentTabsTemplatePrefix',
                component: () => import('@/views/tabs/template/prefix/CodeExample.vue')
              },
              {
                path: 'suffix',
                name: 'ComponentTabsTemplateSuffix',
                component: () => import('@/views/tabs/template/suffix/CodeExample.vue')
              },
              {
                path: 'header',
                name: 'ComponentTabsTemplateHeader',
                component: () => import('@/views/tabs/template/header/CodeExample.vue')
              },
              {
                path: 'footer',
                name: 'ComponentTabsTemplateFooter',
                component: () => import('@/views/tabs/template/footer/CodeExample.vue')
              }
            ]
          },
          {
            path: 'permissionCode',
            name: 'ComponentTabsPermissionCode',
            component: () => import('@/views/tabs/permissionCode/CodeExample.vue')
          }
        ]
      },
      {
        path: 'drawer',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentDrawerSize',
            component: () => import('@/views/drawer/size/CodeExample.vue')
          },
          {
            path: 'base',
            name: 'ComponentDrawerBase',
            component: () => import('@/views/drawer/base/CodeExample.vue')
          },
          { path: 'html', name: 'ComponentDrawerHtml', component: () => import('@/views/drawer/html/CodeExample.vue') },
          {
            path: 'wh',
            name: 'ComponentDrawerWH',
            component: () => import('@/views/drawer/wh/CodeExample.vue')
          },
          {
            path: 'maskClosable',
            name: 'ComponentDrawerMaskClosable',
            component: () => import('@/views/drawer/maskClosable/CodeExample.vue')
          },
          {
            path: 'padding',
            name: 'ComponentDrawerPadding',
            component: () => import('@/views/drawer/padding/CodeExample.vue')
          },
          {
            path: 'loading',
            name: 'ComponentDrawerLoading',
            component: () => import('@/views/drawer/loading/CodeExample.vue')
          },
          { path: 'preload', name: 'ComponentDrawerDreload', component: () => import('@/views/drawer/preload/CodeExample.vue') },
          {
            path: 'button',
            name: 'ComponentDrawerButton',
            component: () => import('@/views/drawer/button/CodeExample.vue')
          },
          {
            path: 'confirmClosable',
            name: 'ComponentDrawerConfirmClosable',
            component: () => import('@/views/drawer/confirmClosable/CodeExample.vue')
          },
          {
            path: 'cancelClosable',
            name: 'ComponentDrawerCancelClosable',
            component: () => import('@/views/drawer/cancelClosable/CodeExample.vue')
          },
          {
            path: 'multiple',
            name: 'ComponentDrawerMultiple',
            component: () => import('@/views/drawer/multiple/CodeExample.vue')
          },
          {
            path: 'resize',
            name: 'ComponentDrawerEscResize',
            component: () => import('@/views/drawer/resize/CodeExample.vue')
          },
          {
            path: 'escClosable',
            name: 'ComponentDrawerEscClosable',
            component: () => import('@/views/drawer/escClosable/CodeExample.vue')
          },
          {
            path: 'beforeHide',
            name: 'ComponentDrawerBeforeHide',
            component: () => import('@/views/drawer/beforeHide/CodeExample.vue')
          },
          {
            path: 'template',
            component: RouteLayout,
            children: [
              {
                path: 'layout',
                name: 'ComponentDrawerTemplateLayout',
                component: () => import('@/views/drawer/template/layout/CodeExample.vue')
              },
              {
                path: 'footer',
                name: 'ComponentDrawerTemplateFooter',
                component: () => import('@/views/drawer/template/footer/CodeExample.vue')
              }
            ]
          },
          {
            path: 'iframe',
            name: 'ComponentDrawerIframe',
            component: () => import('@/views/drawer/iframe/CodeExample.vue')
          }
        ]
      },
      {
        path: 'loading',
        component: RouteLayout,
        children: [
          {
            path: 'global',
            name: 'ComponentLoadingGlobalLoading',
            component: () => import('@/views/loading/global/loading/CodeExample.vue')
          },
          {
            path: 'base',
            name: 'ComponentLoadingBase',
            component: () => import('@/views/loading/base/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentLoadingStatus',
            component: () => import('@/views/loading/status/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentLoadingIcon',
            component: () => import('@/views/loading/icon/CodeExample.vue')
          },
          {
            path: 'text',
            name: 'ComponentLoadingText',
            component: () => import('@/views/loading/text/CodeExample.vue')
          },
          {
            path: 'template',
            name: 'ComponentLoadingTemplate',
            component: () => import('@/views/loading/template/CodeExample.vue')
          }
        ]
      },
      {
        path: 'tip',
        component: RouteLayout,
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
        component: RouteLayout,
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
        component: RouteLayout,
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
            path: 'loading',
            name: 'ComponentCardLoading',
            component: () => import('@/views/card/loading/CodeExample.vue')
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
          },
          {
            path: 'refresh',
            name: 'ComponentCardRefresh',
            component: () => import('@/views/card/refresh/CodeExample.vue')
          }
        ]
      },
      {
        path: 'carousel',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentCarouselBase',
            component: () => import('@/views/carousel/base/CodeExample.vue')
          },
          {
            path: 'height',
            name: 'ComponentCarouselHeight',
            component: () => import('@/views/carousel/height/CodeExample.vue')
          },
          {
            path: 'autoPlay',
            name: 'ComponentCarouselAutoPlay',
            component: () => import('@/views/carousel/autoPlay/CodeExample.vue')
          },
          {
            path: 'showIndicators',
            name: 'ComponentCarouselShowIndicators',
            component: () => import('@/views/carousel/showIndicators/CodeExample.vue')
          },
          {
            path: 'vertical',
            name: 'ComponentCarouselVertical',
            component: () => import('@/views/carousel/vertical/CodeExample.vue')
          },
          {
            path: 'options',
            name: 'ComponentCarouselOptions',
            component: () => import('@/views/carousel/options/CodeExample.vue')
          },
          {
            path: 'template',
            name: 'ComponentCarouselTemplate',
            component: () => import('@/views/carousel/template/CodeExample.vue')
          }
        ]
      },
      {
        path: 'calendar',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentCalendarSize',
            component: () => import('@/views/calendar/size/CodeExample.vue')
          },
          {
            path: 'height',
            name: 'ComponentCalendarHeight',
            component: () => import('@/views/calendar/height/CodeExample.vue')
          },
          {
            path: 'date',
            name: 'ComponentCalendarDate',
            component: () => import('@/views/calendar/date/CodeExample.vue')
          },
          {
            path: 'week',
            name: 'ComponentCalendarWeek',
            component: () => import('@/views/calendar/week/CodeExample.vue')
          },
          {
            path: 'month',
            name: 'ComponentCalendarMonth',
            component: () => import('@/views/calendar/month/CodeExample.vue')
          },
          {
            path: 'quarter',
            name: 'ComponentCalendarQuarter',
            component: () => import('@/views/calendar/quarter/CodeExample.vue')
          },
          {
            path: 'year',
            name: 'ComponentCalendarYear',
            component: () => import('@/views/calendar/year/CodeExample.vue')
          },
          {
            path: 'cellStyle',
            name: 'ComponentCalendarCellStyle',
            component: () => import('@/views/calendar/cellStyle/CodeExample.vue')
          },
          {
            path: 'festivalMethod',
            name: 'ComponentCalendarFestivalMethod',
            component: () => import('@/views/calendar/festivalMethod/CodeExample.vue')
          },
          {
            path: 'events',
            name: 'ComponentCalendarFestivalEvents',
            component: () => import('@/views/calendar/events/CodeExample.vue')
          },
          {
            path: 'menu',
            component: RouteLayout,
            children: [
              { path: 'basics', name: 'ComponentCalendarMenuBasics', component: () => import('@/views/calendar/menu/basics/CodeExample.vue') },
              { path: 'icon', name: 'ComponentCalendarMenuIcon', component: () => import('@/views/calendar/menu/icon/CodeExample.vue') },
              { path: 'disabled', name: 'ComponentCalendarMenuDisabled', component: () => import('@/views/calendar/menu/disabled/CodeExample.vue') },
              { path: 'visible', name: 'ComponentCalendarMenuVisible', component: () => import('@/views/calendar/menu/visible/CodeExample.vue') },
              { path: 'loading', name: 'ComponentCalendarMenuLoading', component: () => import('@/views/calendar/menu/loading/CodeExample.vue') },
              { path: 'visibleMethod', name: 'ComponentCalendarMenuVisibleMethod', component: () => import('@/views/calendar/menu/visibleMethod/CodeExample.vue') }
            ]
          }
        ]
      },
      {
        path: 'print',
        component: RouteLayout,
        children: [
          {
            path: 'global',
            name: 'ComponentPrintGlobalPrint',
            component: () => import('@/views/print/global/print/CodeExample.vue')
          },
          {
            path: 'base',
            component: RouteLayout,
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
            component: RouteLayout,
            children: [
              { path: 'basics', name: 'ComponentPrintPageBasics', component: () => import('@/views/print/page/basics/CodeExample.vue') },
              { path: 'style', name: 'ComponentPrintPageStyle', component: () => import('@/views/print/page/style/CodeExample.vue') },
              { path: 'styleUrls', name: 'ComponentPrintPageStyleUrls', component: () => import('@/views/print/page/styleUrls/CodeExample.vue') },
              { path: 'header', name: 'ComponentPrintPageHeader', component: () => import('@/views/print/page/header/CodeExample.vue') },
              { path: 'footer', name: 'ComponentPrintPageFooter', component: () => import('@/views/print/page/footer/CodeExample.vue') },
              { path: 'margin', name: 'ComponentPrintPageMargin', component: () => import('@/views/print/page/margin/CodeExample.vue') },
              {
                path: 'image',
                name: 'ComponentPrintPageImage',
                component: () => import('@/views/print/page/image/CodeExample.vue')
              },
              {
                path: 'table',
                name: 'ComponentPrintPageTable',
                component: () => import('@/views/print/page/table/CodeExample.vue')
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
        path: 'watermark',
        component: RouteLayout,
        children: [
          {
            path: 'global',
            name: 'ComponentWatermarkGlobal',
            component: () => import('@/views/watermark/global/watermark/CodeExample.vue')
          },
          {
            path: 'base',
            name: 'ComponentWatermarkBase',
            component: () => import('@/views/watermark/base/CodeExample.vue')
          },
          {
            path: 'color',
            name: 'ComponentWatermarkColor',
            component: () => import('@/views/watermark/color/CodeExample.vue')
          },
          {
            path: 'fontSize',
            name: 'ComponentWatermarkFontSize',
            component: () => import('@/views/watermark/fontSize/CodeExample.vue')
          },
          { path: 'gap', name: 'ComponentWatermarkGap', component: () => import('@/views/watermark/gap/CodeExample.vue') },
          {
            path: 'table',
            name: 'ComponentWatermarkTable',
            component: () => import('@/views/watermark/table/CodeExample.vue')
          },
          {
            path: 'form',
            name: 'ComponentWatermarkForm',
            component: () => import('@/views/watermark/form/CodeExample.vue')
          }
        ]
      },
      {
        path: 'context-menu',
        component: RouteLayout,
        children: [
          {
            path: 'global',
            component: RouteLayout,
            children: [
              { path: 'contextMenu', name: 'ComponentContextMenuGlobalContextMenu', component: () => import('@/views/context-menu/global/contextMenu/CodeExample.vue') }
            ]
          },
          { path: 'base', name: 'ComponentContextMenuBase', component: () => import('@/views/context-menu/base/CodeExample.vue') },
          { path: 'icon', name: 'ComponentContextMenuIcon', component: () => import('@/views/context-menu/icon/CodeExample.vue') },
          { path: 'disabled', name: 'ComponentContextMenuDisabled', component: () => import('@/views/context-menu/disabled/CodeExample.vue') },
          { path: 'visible', name: 'ComponentContextMenuVisible', component: () => import('@/views/context-menu/visible/CodeExample.vue') },
          { path: 'loading', name: 'ComponentContextMenuLoading', component: () => import('@/views/context-menu/loading/CodeExample.vue') },
          { path: 'style', name: 'ComponentContextMenuStyle', component: () => import('@/views/context-menu/style/CodeExample.vue') }
        ]
      },
      {
        path: 'countdown',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentCountdownSize',
            component: () => import('@/views/countdown/size/CodeExample.vue')
          },
          {
            path: 'base',
            name: 'ComponentCountdownBase',
            component: () => import('@/views/countdown/base/CodeExample.vue')
          },
          {
            path: 'format',
            name: 'ComponentCountdownFormat',
            component: () => import('@/views/countdown/format/CodeExample.vue')
          },
          {
            path: 'template',
            name: 'ComponentCountdownTemplate',
            component: () => import('@/views/countdown/template/CodeExample.vue')
          }
        ]
      },
      treeRouteConfig,
      {
        path: 'tree-select',
        component: RouteLayout,
        children: [
          {
            path: 'basics',
            component: RouteLayout,
            children: [
              {
                path: 'size',
                name: 'ComponentTreeSelectBaseSize',
                component: () => import('@/views/tree-select/base/size/CodeExample.vue')
              },
              {
                path: 'hierarchy',
                name: 'ComponentTreeSelectBaseHierarchy',
                component: () => import('@/views/tree-select/base/hierarchy/CodeExample.vue')
              },
              {
                path: 'leveling',
                name: 'ComponentTreeSelectBaseLeveling',
                component: () => import('@/views/tree-select/base/leveling/CodeExample.vue')
              },
              {
                path: 'multiple',
                name: 'ComponentTreeSelectBaseMultiple',
                component: () => import('@/views/tree-select/base/multiple/CodeExample.vue')
              },
              {
                path: 'icon',
                name: 'ComponentTreeSelectBaseIcon',
                component: () => import('@/views/tree-select/base/icon/CodeExample.vue')
              },
              {
                path: 'optionProps',
                name: 'ComponentTreeSelectBaseOptionProps',
                component: () => import('@/views/tree-select/base/optionProps/CodeExample.vue')
              },
              { path: 'fullLabel', name: 'ComponentTreeSelectBaseFullLabel', component: () => import('@/views/tree-select/base/fullLabel/CodeExample.vue') },
              {
                path: 'popupWH',
                name: 'ComponentTreeSelectBasePopupWH',
                component: () => import('@/views/tree-select/base/popupWH/CodeExample.vue')
              },
              {
                path: 'showLine',
                name: 'ComponentTreeSelectBaseShowLine',
                component: () => import('@/views/tree-select/base/showLine/CodeExample.vue')
              },
              {
                path: 'expandAll',
                name: 'ComponentTreeSelectBaseExpandAll',
                component: () => import('@/views/tree-select/base/expandAll/CodeExample.vue')
              },
              {
                path: 'trigger',
                name: 'ComponentTreeSelectBaseTrigger',
                component: () => import('@/views/tree-select/base/trigger/CodeExample.vue')
              }
            ]
          },
          {
            path: 'radio',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentTreeSelectRadioBase',
                component: () => import('@/views/tree-select/radio/base/CodeExample.vue')
              },
              {
                path: 'trigger',
                name: 'ComponentTreeSelectRadioTrigger',
                component: () => import('@/views/tree-select/radio/trigger/CodeExample.vue')
              }
            ]
          },
          {
            path: 'checkbox',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentTreeSelectCheckboxBase',
                component: () => import('@/views/tree-select/checkbox/base/CodeExample.vue')
              },
              {
                path: 'checkStrictly',
                name: 'ComponentTreeSelectCheckboxCheckStrictly',
                component: () => import('@/views/tree-select/checkbox/checkStrictly/CodeExample.vue')
              },
              {
                path: 'trigger',
                name: 'ComponentTreeSelectCheckboxTrigger',
                component: () => import('@/views/tree-select/checkbox/trigger/CodeExample.vue')
              },
              { path: 'color', name: 'ComponentTreeSelectCheckboxColor', component: () => import('@/views/tree-select/checkbox/color/CodeExample.vue') }
            ]
          },
          {
            path: 'search',
            component: RouteLayout,
            children: [
              {
                path: 'filterValue',
                name: 'ComponentTreeSelectSearchFilterValue',
                component: () => import('@/views/tree-select/search/filterValue/CodeExample.vue')
              },
              {
                path: 'filterMethod',
                name: 'ComponentTreeSelectSearchFilterMethod',
                component: () => import('@/views/tree-select/search/filterMethod/CodeExample.vue')
              }
            ]
          },
          {
            path: 'operBtn',
            component: RouteLayout,
            children: [
              {
                path: 'checked',
                name: 'ComponentTreeSelectOperBtnChecked',
                component: () => import('@/views/tree-select/operBtn/checked/CodeExample.vue')
              },
              {
                path: 'all',
                name: 'ComponentTreeSelectOperBtnAll',
                component: () => import('@/views/tree-select/operBtn/all/CodeExample.vue')
              }
            ]
          },
          {
            path: 'lazy',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentTreeSelectLazyBase',
                component: () => import('@/views/tree-select/lazy/base/CodeExample.vue')
              },
              {
                path: 'multiple',
                name: 'ComponentTreeSelectLazyMultiple',
                component: () => import('@/views/tree-select/lazy/multiple/CodeExample.vue')
              },
              { path: 'lazyOptions', name: 'ComponentTreeSelectLazyLazyOptions', component: () => import('@/views/tree-select/lazy/lazyOptions/CodeExample.vue') }
            ]
          },
          {
            path: 'menu',
            component: RouteLayout,
            children: [
              { path: 'basics', name: 'ComponentTreeSelectMenuBasics', component: () => import('@/views/tree-select/menu/basics/CodeExample.vue') },
              { path: 'visibleMethod', name: 'ComponentTreeSelectMenuVisibleMethod', component: () => import('@/views/tree-select/menu/visibleMethod/CodeExample.vue') }
            ]
          },
          {
            path: 'scroll',
            component: RouteLayout,
            children: [
              {
                path: 'basics',
                name: 'ComponentTreeSelectScrollBasics',
                component: () => import('@/views/tree-select/scroll/basics/CodeExample.vue')
              },
              {
                path: 'filter',
                name: 'ComponentTreeSelectScrollFilter',
                component: () => import('@/views/tree-select/scroll/filter/CodeExample.vue')
              }
            ]
          },
          {
            path: 'template',
            component: RouteLayout,
            children: [
              { path: 'header', name: 'ComponentTreeSelectTemplateHeader', component: () => import('@/views/tree-select/template/header/CodeExample.vue') },
              { path: 'footer', name: 'ComponentTreeSelectTemplateFooter', component: () => import('@/views/tree-select/template/footer/CodeExample.vue') },
              { path: 'treeTitle', name: 'ComponentTreeSelectTemplateTreeTitle', component: () => import('@/views/tree-select/template/title/CodeExample.vue') },
              { path: 'treeIcon', name: 'ComponentTreeSelectTemplateTreeIcon', component: () => import('@/views/tree-select/template/icon/CodeExample.vue') },
              { path: 'treeExtra', name: 'ComponentTreeSelectTemplateTreeExtra', component: () => import('@/views/tree-select/template/extra/CodeExample.vue') }
            ]
          },
          {
            path: 'other',
            component: RouteLayout,
            children: [
              { path: 'region', name: 'ComponentTreeSelectOtherRegion', component: () => import('@/views/tree-select/other/region/CodeExample.vue') }
            ]
          }
        ]
      },
      {
        path: 'table-select',
        component: RouteLayout,
        children: [
          {
            path: 'basics',
            component: RouteLayout,
            children: [
              {
                path: 'size',
                name: 'ComponentTableSelectBaseSize',
                component: () => import('@/views/table-select/base/size/CodeExample.vue')
              },
              {
                path: 'columns',
                name: 'ComponentTableSelectBaseColumns',
                component: () => import('@/views/table-select/base/columns/CodeExample.vue')
              },
              {
                path: 'loading',
                name: 'ComponentTableSelectBaseLoading',
                component: () => import('@/views/table-select/base/loading/CodeExample.vue')
              },
              {
                path: 'border',
                name: 'ComponentTableSelectBaseBorder',
                component: () => import('@/views/table-select/base/border/CodeExample.vue')
              },
              {
                path: 'clearable',
                name: 'ComponentTableSelectBaseClearable',
                component: () => import('@/views/table-select/base/clearable/CodeExample.vue')
              },
              {
                path: 'optionProps',
                name: 'ComponentTableSelectBaseOptionProps',
                component: () => import('@/views/table-select/base/optionProps/CodeExample.vue')
              },
              {
                path: 'radioTrigger',
                name: 'ComponentTableSelectBaseRadioTrigger',
                component: () => import('@/views/table-select/base/radioTrigger/CodeExample.vue')
              },
              {
                path: 'popupWH',
                name: 'ComponentTableSelectBasePopupWH',
                component: () => import('@/views/table-select/base/popupWH/CodeExample.vue')
              },
              {
                path: 'footer',
                name: 'ComponentTableSelectBaseFooter',
                component: () => import('@/views/table-select/base/footer/CodeExample.vue')
              }
            ]
          },
          {
            path: 'radio',
            component: RouteLayout,
            children: [
              { path: 'base', name: 'ComponentTableSelectRadioBase', component: () => import('@/views/table-select/radio/base/CodeExample.vue') },
              { path: 'clearable', name: 'ComponentTableSelectRadioClearable', component: () => import('@/views/table-select/radio/clearable/CodeExample.vue') },
              { path: 'trigger', name: 'ComponentTableSelectRadioTrigger', component: () => import('@/views/table-select/radio/trigger/CodeExample.vue') }
            ]
          },
          {
            path: 'checkbox',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentTableSelectCheckboxBase',
                component: () => import('@/views/table-select/checkbox/base/CodeExample.vue')
              },
              {
                path: 'clearable',
                name: 'ComponentTableSelectCheckboxClearable',
                component: () => import('@/views/table-select/checkbox/clearable/CodeExample.vue')
              },
              {
                path: 'trigger',
                name: 'ComponentTableSelectCheckboxTrigger',
                component: () => import('@/views/table-select/checkbox/trigger/CodeExample.vue')
              }
            ]
          },
          {
            path: 'form',
            component: RouteLayout,
            children: [
              {
                path: 'search',
                name: 'ComponentTableSelectFormSearch',
                component: () => import('@/views/table-select/form/search/CodeExample.vue')
              },
              {
                path: 'collapse',
                name: 'ComponentTableSelectFormCollapse',
                component: () => import('@/views/table-select/form/collapse/CodeExample.vue')
              }
            ]
          },
          {
            path: 'pager',
            component: RouteLayout,
            children: [
              {
                path: 'page',
                name: 'ComponentTableSelectPagerPage',
                component: () => import('@/views/table-select/pager/page/CodeExample.vue')
              }
            ]
          },
          {
            path: 'proxy',
            component: RouteLayout,
            children: [
              { path: 'query', name: 'ComponentTableSelectProxyQuery', component: () => import('@/views/table-select/proxy/query/CodeExample.vue') },
              { path: 'pager', name: 'ComponentTableSelectProxyPager', component: () => import('@/views/table-select/proxy/pager/CodeExample.vue') },
              { path: 'form', name: 'ComponentTableSelectProxyForm', component: () => import('@/views/table-select/proxy/form/CodeExample.vue') }
            ]
          },
          {
            path: 'scroll',
            component: RouteLayout,
            children: [
              {
                path: 'vertical',
                name: 'ComponentTableSelectScrollVertical',
                component: () => import('@/views/table-select/scroll/vertical/CodeExample.vue')
              },
              {
                path: 'horizontal',
                name: 'ComponentTableSelectScrollHorizontal',
                component: () => import('@/views/table-select/scroll/horizontal/CodeExample.vue')
              },
              {
                path: 'hv',
                name: 'ComponentTableSelectScrollHV',
                component: () => import('@/views/table-select/scroll/hv/CodeExample.vue')
              },
              {
                path: 'group',
                name: 'ComponentTableSelectScrollGroup',
                component: () => import('@/views/table-select/scroll/group/CodeExample.vue')
              }
            ]
          }
        ]
      },
      formRouteConfig,
      uploadRouteConfig,
      formDesignRouteConfig,
      listDesignRouteConfig,
      tableRouteConfig,
      gridRouteConfig,
      ganttRouteConfig
    ]
  },
  {
    path: '/',
    component: PageLayout,
    children: [
      {
        path: ':name/api',
        name: 'DocsApi',
        component: () => import('@/views/api/DocsApi.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
