import { RouteRecordRaw } from 'vue-router'

import RouteLayout from '@/components/RouteLayout.vue'

export const formDesignRouteConfig: RouteRecordRaw = {
  path: 'form-design',
  component: RouteLayout,
  children: [
    {
      path: 'base',
      component: RouteLayout,
      children: [
        { path: 'basics', name: 'ComponentFormDesignBasicsBase', component: () => import('@/views/form-design/base/basics/CodeExample.vue') },
        { path: 'customGroup', name: 'ComponentFormDesignBasicsCustomGroup', component: () => import('@/views/form-design/base/customGroup/CodeExample.vue') },
        { path: 'styleSetting', name: 'ComponentFormDesignBasicsStyleSetting', component: () => import('@/views/form-design/base/styleSetting/CodeExample.vue') }
      ]
    },
    {
      path: 'menu',
      component: RouteLayout,
      children: [
        { path: 'basics', name: 'ComponentFormDesignMenuBasics', component: () => import('@/views/form-design/menu/basics/CodeExample.vue') }
      ]
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
    },
    {
      path: 'template',
      component: RouteLayout,
      children: [
        {
          path: 'title',
          name: 'ComponentFormDesignTemplateTitle',
          component: () => import('@/views/form-design/template/title/CodeExample.vue')
        },
        {
          path: 'titlePrefix',
          name: 'ComponentFormDesignTemplateTitlePrefix',
          component: () => import('@/views/form-design/template/titlePrefix/CodeExample.vue')
        },
        {
          path: 'titleSuffix',
          name: 'ComponentFormDesignTemplateTitleSuffix',
          component: () => import('@/views/form-design/template/titleSuffix/CodeExample.vue')
        },
        {
          path: 'header',
          name: 'ComponentFormDesignTemplateHeader',
          component: () => import('@/views/form-design/template/header/CodeExample.vue')
        }
      ]
    }
  ]
}
