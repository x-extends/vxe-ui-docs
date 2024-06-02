<template>
  <div>
    <CodeLight path="upload/file/Demo1">
      <template #tip>
        <vxe-tips status="primary" title="文件上传"></vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="upload/file/Demo2">
      <template #tip>
        <vxe-tips status="primary">允许上传多个文件</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="upload/file/Demo3">
      <template #tip>
        <vxe-tips status="primary">自定义提示语</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="upload/file/Demo4">
      <template #tip>
        <vxe-tips status="primary">自定义文件格式</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="upload/file/Demo5">
      <template #tip>
        <vxe-tips status="primary">支持限制上传文件的最大数量</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="upload/file/Demo6">
      <template #tip>
        <vxe-tips status="primary">支持限制上传文件的大小，单位是 M</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="upload/file/Demo7">
      <template #tip>
        <vxe-tips status="primary">自动隐藏按钮，通过参数 auto-hidden-button 启用，当达到最大数量时，自动隐藏上传按钮</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="upload/file/Demo8">
      <template #tip>
        <vxe-tips status="primary">自定义重新上传，通过参数 show-error-status 启用，当上传失败时，可以点击重新上传按钮</vxe-tips>
      </template>
    </CodeLight>
  </div>
</template>
