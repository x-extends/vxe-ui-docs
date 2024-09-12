<template>
  <div>
    <CodeLight path="upload/image/base/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="图片上传">
          默认单选模式下，新选择的图片将会替换旧的图片。
        </vxe-tip>
        <vxe-tip status="success">
          <div>全局函数对象： </div>
          <div>读取本地文件：VxeUI.readFile({}) </div>
          <div>保存文件到本地：VxeUI.saveFile({}) </div>
        </vxe-tip>
        <vxe-tip status="error">建议将上传方法配置成全局的，这样就可以实现全配置化</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
