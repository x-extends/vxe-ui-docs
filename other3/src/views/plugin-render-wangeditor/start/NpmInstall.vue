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

        <vxe-tip status="primary" title="方式一（推荐）">在 html 引入插件库，使用第三方 CDN 方式记得锁定版本号，避免受到非兼容性更新的影响</vxe-tip>
        <vxe-tip status="error">不建议将第三方的 CDN 地址用于正式环境，因为该连接随时都可能会失效，建议将对应的包下载到本地后在引入</vxe-tip>

        <pre>
          <div>文件 index.html</div>
          <pre-code
            language="html"
            content="
            <!--引入 css-->
            %3Clink%20rel%3D%22stylesheet%22%20href%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40wangeditor%2Feditor%405.1.23%2Fdist%2Fcss%2Fstyle.css%22%3E
            <!--引入 js-->
            %3Cscript%20type%3D%22text%2Fjavascript%22%20src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40wangeditor%2Feditor%405.1.23%2Fdist%2Findex.js%22%3E%3C%2Fscript%3E
            ">
          </pre-code>
          <div>文件 src/main </div>
          <pre-code language="javascript">
            // ...
            import VxeUIBase, { VxeUI } from 'vxe-pc-ui'
            import 'vxe-pc-ui/lib/style.css'
            import VxeUITable from 'vxe-table'
            import 'vxe-table/lib/style.css'
            import VxeUIPluginRenderWangEditor, { WangEditor } from '@vxe-ui/plugin-render-wangeditor'
            import '@vxe-ui/plugin-render-wangeditor/dist/style.css'
            // ...

            // 确保 window.wangEditor 变量存在即表示安装完成
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

            // （可选组件）安装后可以独立使用
            Vue.use(WangEditor)
            // Vue.component('CustomWangEditor', WangEditor)

            Vue.use(VxeUIBase)
            Vue.use(VxeUITable)
            //...
          </pre-code>
        </pre>

        <vxe-tip status="primary" title="方式二">使用 NPM 安装</vxe-tip>

        <pre>
          <div>文件 src/main </div>
          <pre-code language="javascript">
            // ...
            import VxeUIBase, { VxeUI } from 'vxe-pc-ui'
            import 'vxe-pc-ui/lib/style.css'
            import VxeUITable from 'vxe-table'
            import 'vxe-table/lib/style.css'
            import VxeUIPluginRenderWangEditor, { WangEditor } from '@vxe-ui/plugin-render-wangeditor'
            import '@vxe-ui/plugin-render-wangeditor/dist/style.css'
            import * as wangEditor from '@wangeditor/editor'
            // ...

            VxeUI.use(VxeUIPluginRenderWangEditor, {
              wangEditor,
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

            // （可选组件）安装后可以独立使用
            Vue.use(WangEditor)
            // Vue.component('CustomWangEditor', WangEditor)

            Vue.use(VxeUIBase)
            Vue.use(VxeUITable)
            //...
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters([
      'uiCDNLib',
      'tableCDNLib',
      'pluginRenderWangEditorCDNLib'
    ])
  }
})
</script>
