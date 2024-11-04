<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="安装插件 @vxe-ui/plugin-render-wangeditor">
          <vxe-link icon="vxe-icon-github-fill" href="https://github.com/x-extends/vxe-ui-plugins/tree/main/plugin-render-wangeditor" target="_blank"></vxe-link> 该插件提供了在 Vxe 组件中适配渲染第三方组件，用于兼容 <vxe-link href="https://www.npmjs.com/package/@wangeditor/editor" target="_blank">wangEditor</vxe-link> 富文本编辑器
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code
            language="shell"
            :content="`
            npm install ${ uiCDNLib } ${ tableCDNLib } ${pluginRenderWangEditorCDNLib} @wangeditor/editor
            # 或者
            yarn add ${ uiCDNLib } ${ tableCDNLib } ${pluginRenderWangEditorCDNLib} @wangeditor/editor
            # 或者
            pnpm add ${ uiCDNLib } ${ tableCDNLib } ${pluginRenderWangEditorCDNLib} @wangeditor/editor
            `">
          </pre-code>
        </pre>

        <pre>
          <pre-code class="javascript">
            // main.js
            // ...
            // 如果完整使用
            import { VxeUI } from 'vxe-pc-ui'
            // 如果只使用表格
            // import { VxeUI } from 'vxe-table'
            import VxeUIPluginRenderWangEditor, { WangEditor } from '@vxe-ui/plugin-render-wangeditor'
            import '@vxe-ui/plugin-render-wangeditor/dist/style.css'
            import * as wangEditor from '@wangeditor/editor'
            // ...

            // （推荐）方式2：CDN 安装，只要确保 window.wangEditor 存在即可
            VxeUI.use(VxeUIPluginRenderWangEditor, {
              // 自定义上传图片方法
              uploadImageMethod ({ file }) {
                const formData = new FormData()
                formData.append('file', file)
                return axios.post('/api/pub/upload/single', formData).then((res) => {
                  // { url: '' }
                  return {
                    ...res.data
                  }
                })
              },
              // 自定义上传视频方法
              uploadVideoMethod ({ file }) {
                const formData = new FormData()
                formData.append('file', file)
                return axios.post('/api/pub/upload/single', formData).then((res) => {
                  // { url: '' }
                  return {
                    ...res.data
                  }
                })
              }
            })

            // 方式1：NPM 安装，注入 wangEditor 对象
            // VxeUI.use(VxeUIPluginRenderWangEditor, {
            //   wangEditor,
            //   // 自定义上传图片方法
            //   uploadImageMethod ({ file }) {
            //     return { url: '' }
            //   },
            //   // 自定义上传视频方法
            //   uploadVideoMethod ({ file }) {
            //     return { url: '' }
            //   }
            // })

            // 可选组件
            app.use(WangEditor)
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const uiCDNLib = computed(() => appStore.uiCDNLib)
const tableCDNLib = computed(() => appStore.tableCDNLib)
const pluginRenderWangEditorCDNLib = computed(() => appStore.pluginRenderWangEditorCDNLib)
</script>
