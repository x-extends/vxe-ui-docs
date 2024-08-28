<template>
  <div>
    <CodeLight path="upload/image/downloadMethod/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="显示下载按钮">
          通过 <ApiLink name="upload" prop="show-download-button"/> 设置显示下载按钮，配合 <ApiLink name="upload" prop="download-method"/> 来自定义实现下载方法
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
