import { defineStore } from 'pinia'
import { VxeUI, VxeGlobalI18nLocale } from 'vxe-pc-ui'
import axios from 'axios'
import i18n from '@/i18n'
import XEUtils from 'xe-utils'

const currTheme = (localStorage.getItem('VXE_DOCS_THEME') || 'light') as 'dark' | 'light'
const currLanguage = (localStorage.getItem('VXE_DOCS_LANGUAGE') || 'zh-CN') as VxeGlobalI18nLocale

VxeUI.setLanguage(currLanguage)
setTimeout(() => {
  VxeUI.setTheme(currTheme)
})

document.documentElement.setAttribute('vxe-docs-theme', currTheme)

let apiPromise: Promise<any> | null = null
const i18nPromise: Record<string, Promise<any> | null> = {}
const i18nStatus: Record<string, boolean> = {
  [currLanguage]: true
}

function handleLibVersion (libName: string) {
  return function (status: any) {
    const uiConf = status.versionConfig[libName]
    return `${libName}@${(uiConf ? uiConf[`v${status.docsVersion}-latest`] : '') || status.docsVersion}`
  }
}

export const useAppStore = defineStore('app', {
  state () {
    return {
      pageLoading: false,
      pageTitle: process.env.VUE_APP_PAGE_TITLE,
      packName: process.env.VUE_APP_PACKAGE_NAME,
      isExtendDocs: process.env.VUE_APP_IS_EXTEND_DOCS === 'true',
      isPluginDocs: process.env.VUE_APP_IS_PLUGIN_DOCS === 'true',
      theme: currTheme,
      docsVersion: '4',
      serveTY: new Date().getFullYear(),
      language: currLanguage,
      siteBaseUrl: process.env.VUE_APP_SITE_BASE_URL,
      pluginBuyUrl: process.env.VUE_APP_PLUGIN_BUY_URL,
      pluginDocsUrl: process.env.VUE_APP_PLUGIN_DOCS_URL,
      compApiMaps: null as any,
      showAuthMsgFlag: localStorage.getItem('SHOW_AUTH_MSG_FLAG') !== XEUtils.toDateString(new Date(), 'yyyy-MM-dd'),
      showTopMenuMsgFlag: localStorage.getItem('SHOW_TOP_MENU_MSG_FLAG') !== XEUtils.toDateString(new Date(), 'yyyy-MM-dd'),
      versionConfig: {}
    }
  },
  getters: {
    uiCDNLib: handleLibVersion('vxe-pc-ui'),
    tableCDNLib: handleLibVersion('vxe-table'),
    pluginExportPdfCDNLib: handleLibVersion('@vxe-ui/plugin-export-pdf'),
    pluginExportXlsxCDNLib: handleLibVersion('@vxe-ui/plugin-export-xlsx'),
    pluginMenuCDNLib: handleLibVersion('@vxe-ui/plugin-menu'),
    pluginRenderAntdCDNLib: handleLibVersion('@vxe-ui/plugin-render-antd'),
    pluginRenderChartCDNLib: handleLibVersion('@vxe-ui/plugin-render-chart'),
    pluginRenderEchartsCDNLib: handleLibVersion('@vxe-ui/plugin-render-echarts'),
    pluginRenderElementCDNLib: handleLibVersion('@vxe-ui/plugin-render-element'),
    pluginRenderWangEditorCDNLib: handleLibVersion('@vxe-ui/plugin-render-wangeditor'),
    pluginValidatorCDNLib: handleLibVersion('@vxe-ui/plugin-validator'),
    pluginShortcutKeyCDNLib: handleLibVersion('@vxe-ui/plugin-shortcut-key')
  },
  actions: {
    setPageLoading (status: boolean) {
      this.pageLoading = status
    },
    setTheme (name: 'dark' | 'light') {
      this.theme = name || 'light'
      VxeUI.setTheme(name)
      document.documentElement.setAttribute('vxe-docs-theme', name)
      localStorage.setItem('VXE_DOCS_THEME', name)
    },
    setLanguage (language: VxeGlobalI18nLocale) {
      if (i18nStatus[language]) {
        this.language = language || 'zh-CN'
        VxeUI.setLanguage(language)
        i18n.global.locale = language
        localStorage.setItem('VXE_DOCS_LANGUAGE', language)
      } else {
        if (!i18nPromise[language]) {
          this.pageLoading = true
          i18nPromise[language] = axios.get(`${process.env.VUE_APP_SITE_BASE_URL}/i18n/${language}.json?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
            i18n.global.setLocaleMessage(language, res.data)
            this.language = language || 'zh-CN'
            VxeUI.setLanguage(language)
            i18n.global.locale = language
            localStorage.setItem('VXE_DOCS_LANGUAGE', language)
            i18nStatus[language] = true
            this.pageLoading = false
          }).catch(() => {
            i18nPromise[language] = null
            this.pageLoading = false
          })
        }
      }
    },
    updateComponentApiJSON () {
      if (!apiPromise) {
        apiPromise = fetch(`${this.siteBaseUrl}/component-api/${process.env.VUE_APP_PACKAGE_NAME}-v${process.env.VUE_APP_VXE_VERSION}/apiMaps.json?v=?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
          return res.json().then(data => {
            if (data) {
              this.compApiMaps = data
            }
          })
        }).then(() => {
          apiPromise = null
        })
      }
      return apiPromise
    },
    readAuthMsgFlagVisible () {
      this.showAuthMsgFlag = false
      localStorage.setItem('SHOW_AUTH_MSG_FLAG', XEUtils.toDateString(new Date(), 'yyyy-MM-dd'))
    },
    readTopMenuMsgFlagVisible () {
      this.showTopMenuMsgFlag = false
      localStorage.setItem('SHOW_TOP_MENU_MSG_FLAG', XEUtils.toDateString(new Date(), 'yyyy-MM-dd'))
    },
    setVersionConfig (conf: any) {
      this.versionConfig = conf
    }
  }
})
