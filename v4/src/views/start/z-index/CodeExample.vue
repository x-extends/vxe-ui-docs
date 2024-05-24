<template>
  <div>
    <CodeLight path="start/z-index/Demo1">
      <template #tip>
        <VxeTips status="primary">
          全局 z-index 默认起始是 999，如果项目的的 z-index 样式值过大时就需要跟随设置更大，避免被遮挡。可以通过以下全局设置，也可以去 <vxe-link status="primary" :router-link="{name: 'StartConfig'}">全局参数</vxe-link> 设置<br>
          使用 <vxe-link href="https://www.npmjs.com/package/dom-zindex" target="_blank" status="primary">dom-zindex</vxe-link> 来设置，更加方便快捷
        </VxeTips>
      </template>
    </CodeLight>
  </div>
</template>
