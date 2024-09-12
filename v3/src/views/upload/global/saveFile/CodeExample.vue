<template>
  <div>
    <CodeLight path="upload/global/saveFile/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="下载文件"></vxe-tip>
        <vxe-tip status="success">
          调用下载文件：VxeUI.saveFile({
            filename: string
            type?: string
            content: string | blob
          })
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
