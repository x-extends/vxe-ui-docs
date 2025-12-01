<template>
  <div>
    <CodeLight path="upload/file/customReview/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义预览">
          默认可以通过参数 <ApiLink name="upload" prop="show-preview"/> 启用或关闭预览，也可以通过 <ApiLink name="upload" prop="preview-method"/> 来自定义预览
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
