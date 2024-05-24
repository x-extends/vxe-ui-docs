import { defineStore } from 'pinia'
import { VxeUI } from 'vxe-pc-ui'

const currTheme: any = localStorage.getItem('VXE_THEME') || 'light'

VxeUI.setTheme(currTheme)

document.documentElement.setAttribute('vxe-docs-theme', currTheme)

export const useAppStore = defineStore('app', {
  state () {
    return {
      theme: currTheme,
      docsVersion: '4',
      serveTY: new Date().getFullYear(),
      siteBaseUrl: process.env.VUE_APP_MAIN_URL,
      pluginDocsUrl: `${process.env.VUE_APP_MAIN_URL}pluginDocs/`,
      pluginApiUrl: `${process.env.VUE_APP_MAIN_URL}plugins/`,
      docsGithubUrl: 'https://github.com/x-extends/vxe-ui-docs/tree/main/v4',
      serveApiUrl: 'https://api.vxeui.com/demo'
    }
  },
  actions: {
    setTheme (name: any) {
      this.theme = name || 'light'
      VxeUI.setTheme(name)
      document.documentElement.setAttribute('vxe-docs-theme', name)
      localStorage.setItem('VXE_THEME', name)
    }
  }
})
