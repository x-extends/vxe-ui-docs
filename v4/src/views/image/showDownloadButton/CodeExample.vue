<template>
  <div>
    <CodeLight path="image/showDownloadButton/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="显示下载按钮">
          通过设置 <ApiLink name="image" prop="show-preview"/> 和 <ApiLink name="image" prop="show-download-button"/> 显示下载按钮
        </vxe-tip>
        <vxe-tip status="error">
          需要注意图片路径是否允许跨域请求，如果不支持则无法下载
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
