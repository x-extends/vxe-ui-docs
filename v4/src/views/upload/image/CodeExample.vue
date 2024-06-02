<template>
  <div>
    <CodeLight path="upload/image/Demo1">
      <template #tip>
        <vxe-tips status="primary" title="图片上传"></vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="upload/image/Demo2">
      <template #tip>
        <vxe-tips status="primary">允许上传多张图片</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="upload/image/Demo3">
      <template #tip>
        <vxe-tips status="primary">自定义提示语</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="upload/image/Demo4">
      <template #tip>
        <vxe-tips status="primary">自定义图片格式，默认支持 jpg, jpeg, png, gif 图片格式</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="upload/image/Demo5">
      <template #tip>
        <vxe-tips status="primary">支持限制上传文件的大小，单位是 M</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="upload/image/Demo6">
      <template #tip>
        <vxe-tips status="primary">限制图片大小</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="upload/image/Demo7">
      <template #tip>
        <vxe-tips status="primary">自动隐藏按钮，通过参数 auto-hidden-button 启用，当达到最大数量时，自动隐藏上传按钮</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="upload/image/Demo8">
      <template #tip>
        <vxe-tips status="primary">自定义重新上传，通过参数 show-error-status 启用，当上传失败时，可以点击重新上传按钮</vxe-tips>
      </template>
    </CodeLight>
  </div>
</template>
