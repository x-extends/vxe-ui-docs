<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="安装插件 @vxe-ui/plugin-render-element">
          <vxe-link icon="vxe-icon-github-fill" href="https://github.com/x-extends/vxe-ui-plugins/tree/v3/plugin-render-element" target="_blank"></vxe-link> 该插件提供了在表格中渲染第三方组件，用于兼容 <vxe-link href="https://www.npmjs.com/package/element-ui" target="_blank">element-ui</vxe-link> 组件库
        </vxe-tip>
        <vxe-tip status="success" title="兼容性提示">
          适配插件用于解决使用第三方组件时无法选中的问题，比如下拉框等无法选中被自动关闭的问题
        </vxe-tip>
        <vxe-tip status="error">
          对应的第三方组件库 <vxe-link href="https://www.npmjs.com/package/element-ui" target="_blank">element-ui</vxe-link> 需自行去安装，安装完成对应的组件库后就可以在表格中使用了
        </vxe-tip>
      </template>

      <template #use>
        <vxe-tip status="primary" title="使用 CDN 安装"></vxe-tip>
        <vxe-tip status="error" title="">
          <div>不建议将不受信任的第三方 CDN 用于正式环境，如确实需要使用第三方 CDN 链接记得锁定版本号，锁定版本的方法请查看第三方的说明。</div>
        </vxe-tip>

        <pre>
          <iframe :src="cdnUrl" style="display: block;width: 100%;height: 480px;border: 1px solid #000;"></iframe>
          <code-render language="html" :code="cdnCode"></code-render>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  data () {
    return {
      cdnCode: ''
    }
  },
  computed: {
    ...mapState([
      'packName',
      'docsVersion'
    ]) as {
      packName(): string
      docsVersion(): string
    },
    cdnUrl (): string {
      return `/resource/cdn/plugin-render-element-v${this.docsVersion}.html?v=${process.env.VUE_APP_DATE_NOW}`
    }
  },
  created () {
    fetch(this.cdnUrl as string).then(res => res.text()).then(html => {
      this.cdnCode = html
    })
  }
})
</script>
