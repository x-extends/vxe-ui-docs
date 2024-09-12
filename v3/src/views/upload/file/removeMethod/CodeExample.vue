<template>
  <div>
    <CodeLight path="upload/file/removeMethod/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="删除附件">
          当文件上传到服务器时，在前端点击删除除了本地删除之外，服务端也需要一起删除，这时候可以用 <ApiLink name="upload" prop="remove-method"/> 自定义删除方法来处理
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
