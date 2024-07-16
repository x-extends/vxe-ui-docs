<template>
  <div>
    <CodeLight path="upload/global/readFile/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="读取本地文件"></vxe-tip>
        <vxe-tip status="success">
          调用读取文件：VxeUI.readFile({
            multiple?: boolean
            types?: string[]
          })
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
