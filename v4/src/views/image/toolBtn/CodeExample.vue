<template>
  <div>
    <CodeLight path="image/toolBtn/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义工具栏按钮">
          通过设置 <ApiLink name="image" prop="toolbar-config"/> 来自定义
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="image/toolBtn/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          下载按钮
        </vxe-tip>
        <vxe-tip status="error">
          如果启用下载功能，则需要注意图片路径是否允许跨域请求，如果不支持跨域则无法下载
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
