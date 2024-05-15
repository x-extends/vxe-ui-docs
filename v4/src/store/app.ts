import { defineStore } from 'pinia'
import { VxeUI } from 'vxe-pc-ui'

const currTheme: any = localStorage.getItem('VXE_THEME') || 'default'

VxeUI.setConfig({
  theme: currTheme
})

document.documentElement.setAttribute('vxe-docs-theme', currTheme)

// 默认情况下，白天和夜间模式自动切换
// if (!localStorage.getItem('VXE_THEME')) {
//   const themeInterval = setInterval(() => {
//     const appStore = useAppStore()
//     if (localStorage.getItem('VXE_THEME')) {
//       clearInterval(themeInterval)
//     } else {
//       appStore.updateAutoTheme()
//     }
//   }, 6000)
// }

export const useAppStore = defineStore('app', {
  state () {
    return {
      theme: currTheme,
      docsVersion: '4',
      serveTY: new Date().getFullYear(),
      baseApiUrl: process.env.VUE_APP_MAIN_URL,
      pluginDocsUrl: `${process.env.VUE_APP_MAIN_URL}pluginDocs/`,
      pluginApiUrl: `${process.env.VUE_APP_MAIN_URL}plugins/`,
      serveApiUrl: 'https://api.VxeUI.cn/demo',
      showSupportQQ: false
    }
  },
  actions: {
    setTheme (name: any) {
      this.theme = name || 'default'
      VxeUI.setConfig({
        theme: name
      })
      document.documentElement.setAttribute('vxe-docs-theme', name)
      localStorage.setItem('VXE_THEME', name)
    },
    // updateAutoTheme () {
    //   if (this.theme !== 'dark' && (new Date().getHours() <= 6 || (new Date().getHours() >= 18 && new Date().getMinutes() >= 30))) {
    //     VxeUI.modal.message({
    //       content: '即将切换为夜间模式'
    //     }).then(() => {
    //       const name = 'dark'
    //       this.theme = name
    //       VxeUI.config({
    //         theme: name
    //       })
    //       document.documentElement.setAttribute('vxe-docs-theme', name)
    //     })
    //   } else if (this.theme !== 'default' && (new Date().getHours() > 6 && new Date().getHours() < 18)) {
    //     VxeUI.modal.message({
    //       content: '即将切换为白天模式'
    //     }).then(() => {
    //       const name = 'dark'
    //       this.theme = name
    //       VxeUI.config({
    //         theme: name
    //       })
    //       document.documentElement.setAttribute('vxe-docs-theme', name)
    //     })
    //   }
    // },
    setSupportQQ (visible: boolean) {
      this.showSupportQQ = !!visible
    }
  }
})
