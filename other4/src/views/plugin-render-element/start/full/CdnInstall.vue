<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="安装插件 @vxe-ui/plugin-render-element">
          <vxe-link icon="vxe-icon-github-fill" href="https://github.com/x-extends/vxe-ui-plugins/tree/main/plugin-render-element" target="_blank"></vxe-link> 该插件提供了在表格中渲染第三方组件，用于兼容 <vxe-link href="https://www.npmjs.com/package/element-plus" target="_blank">element-plus</vxe-link> 组件库
        </vxe-tip>
        <vxe-tip status="success" title="兼容性提示">
          适配插件用于解决使用第三方组件时无法选中的问题，比如下拉框等无法选中被自动关闭的问题
        </vxe-tip>
        <vxe-tip status="error">
          对应的第三方组件库 <vxe-link href="https://www.npmjs.com/package/element-plus" target="_blank">element-plus</vxe-link> 需自行去安装，安装完成对应的组件库后就可以在表格中使用了
        </vxe-tip>
      </template>

      <template #use>
        <vxe-tip status="primary" title="使用 CDN 安装"></vxe-tip>
        <vxe-tip status="error" title="">
          <div>不建议将不受信任的第三方 CDN 用于正式环境，如确实需要使用第三方 CDN 链接记得锁定版本号，锁定版本的方法请查看第三方的说明。</div>
        </vxe-tip>

        <pre>
          <iframe :src="cdnUrl" style="display: block;width: 100%;height: 680px;border: 1px solid #000;"></iframe>
          <code-render language="html" :code="cdnCode"></code-render>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const docsVersion = computed(() => appStore.docsVersion)

const cdnCode = ref('')

const cdnUrl = computed(() => {
  return `/resource/cdn/plugin-render-element-v${docsVersion.value}.html?v=${import.meta.env.VITE_APP_DATE_NOW}`
})

fetch(cdnUrl.value).then(res => res.text()).then(html => {
  cdnCode.value = html
})
</script>
