<template>
  <div>
    <CodeLight path="upload/file/size/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="尺寸大小">
        </vxe-tip>
        <vxe-tip status="success">
          <div>全局函数对象： </div>
          <div>读取本地文件：VxeUI.readFile({}) </div>
          <div>保存文件到本地：VxeUI.saveFile({}) </div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
