import { RouteRecordRaw } from 'vue-router'

import RouteLayout from '@/components/RouteLayout.vue'

export const modalRouteConfig: RouteRecordRaw = {
  path: 'modal',
  component: RouteLayout,
  children: [
    {
      path: 'alert',
      component: RouteLayout,
      children: [
        {
          path: 'global',
          name: 'ComponentModalAlertGlobal',
          component: () => import('@/views/modal/alert/global/CodeExample.vue')
        },
        { path: 'html', name: 'ComponentModalAlertHtml', component: () => import('@/views/modal/alert/html/CodeExample.vue') },
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
      component: RouteLayout,
      children: [
        {
          path: 'global',
          name: 'ComponentModalConfirmGlobal',
          component: () => import('@/views/modal/confirm/global/CodeExample.vue')
        },
        { path: 'loading', name: 'ComponentModalConfirmLoading', component: () => import('@/views/modal/confirm/loading/CodeExample.vue') },
        { path: 'html', name: 'ComponentModalConfirmHtml', component: () => import('@/views/modal/confirm/html/CodeExample.vue') },
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
      component: RouteLayout,
      children: [
        {
          path: 'global',
          name: 'ComponentModalMessageGlobal',
          component: () => import('@/views/modal/message/global/CodeExample.vue')
        },
        { path: 'html', name: 'ComponentModalMessageHtml', component: () => import('@/views/modal/message/html/CodeExample.vue') },
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
      component: RouteLayout,
      children: [
        {
          path: 'global',
          name: 'ComponentModalNotificationGlobal',
          component: () => import('@/views/modal/notification/global/CodeExample.vue')
        },
        { path: 'html', name: 'ComponentModalNotificationHtml', component: () => import('@/views/modal/notification/html/CodeExample.vue') },
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
          path: 'footer',
          name: 'ComponentModalNotificationFooter',
          component: () => import('@/views/modal/notification/footer/CodeExample.vue')
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
      component: RouteLayout,
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
          path: 'loading',
          name: 'ComponentModalModalLoading',
          component: () => import('@/views/modal/modal/loading/CodeExample.vue')
        },
        { path: 'preload', name: 'ComponentModalModalPreload', component: () => import('@/views/modal/modal/preload/CodeExample.vue') },
        { path: 'html', name: 'ComponentModalModalHtml', component: () => import('@/views/modal/modal/html/CodeExample.vue') },
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
          path: 'lockScroll',
          name: 'ComponentModalModalLockScroll',
          component: () => import('@/views/modal/modal/lockScroll/CodeExample.vue')
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
          path: 'manual',
          name: 'ComponentModalModalManual',
          component: () => import('@/views/modal/modal/manual/CodeExample.vue')
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
          component: RouteLayout,
          children: [
            {
              path: 'layout',
              name: 'ComponentModalModalTemplateLayout',
              component: () => import('@/views/modal/modal/template/layout/CodeExample.vue')
            },
            {
              path: 'footer',
              name: 'ComponentModalModalTemplateFooter',
              component: () => import('@/views/modal/modal/template/footer/CodeExample.vue')
            }
          ]
        },
        {
          path: 'button',
          name: 'ComponentModalModalButton',
          component: () => import('@/views/modal/modal/button/CodeExample.vue')
        },
        {
          path: 'confirmClosable',
          name: 'ComponentModalModalConfirmClosable',
          component: () => import('@/views/modal/modal/confirmClosable/CodeExample.vue')
        },
        {
          path: 'cancelClosable',
          name: 'ComponentModalModalCancelClosable',
          component: () => import('@/views/modal/modal/cancelClosable/CodeExample.vue')
        },
        {
          path: 'maximize',
          name: 'ComponentModalModalMaximize',
          component: () => import('@/views/modal/modal/maximize/CodeExample.vue')
        },
        {
          path: 'minimize',
          name: 'ComponentModalModalMinimize',
          component: () => import('@/views/modal/modal/minimize/CodeExample.vue')
        },
        {
          path: 'zoom',
          name: 'ComponentModalModalZoom',
          component: () => import('@/views/modal/modal/zoom/CodeExample.vue')
        },
        {
          path: 'minimizeLayout',
          name: 'ComponentModalModalMinimizeLayout',
          component: () => import('@/views/modal/modal/minimizeLayout/CodeExample.vue')
        },
        {
          path: 'fullscreen',
          name: 'ComponentModalModalFullscreen',
          component: () => import('@/views/modal/modal/fullscreen/CodeExample.vue')
        },
        {
          path: 'remember',
          name: 'ComponentModalModalRemember',
          component: () => import('@/views/modal/modal/remember/CodeExample.vue')
        },
        {
          path: 'storage',
          name: 'ComponentModalModalStorage',
          component: () => import('@/views/modal/modal/storage/CodeExample.vue')
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
        },
        {
          path: 'other',
          component: RouteLayout,
          children: [
            { path: 'form', name: 'ComponentModalModalOtherForm', component: () => import('@/views/modal/other/form/CodeExample.vue') },
            { path: 'table', name: 'ComponentModalModalOtherTable', component: () => import('@/views/modal/other/table/CodeExample.vue') },
            { path: 'leftRight', name: 'ComponentModalModalOtherLeftRight', component: () => import('@/views/modal/other/leftRight/CodeExample.vue') },
            { path: 'splitTable', name: 'ComponentModalModalOtherSplitTable', component: () => import('@/views/modal/other/splitTable/CodeExample.vue') }
          ]
        }
      ]
    }
  ]
}
