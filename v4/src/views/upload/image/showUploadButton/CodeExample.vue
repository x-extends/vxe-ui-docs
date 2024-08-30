<template>
  <div>
    <CodeLight path="upload/image/showUploadButton/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义上传按钮">
          默认是显示的，可以通过设置 <ApiLink name="upload" prop="show-upload-button"/> 隐藏上传按钮，配合 <ApiLink name="upload" prop="choose"/> 方法选择图片
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
