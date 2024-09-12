<template>
  <div>
    <CodeLight path="upload/file/urlMode/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="URL模式">
          默认情况下绑定的值是对象数组，可以通过设置 url-mode 设置 URL 模式
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="upload/file/urlMode/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          多选模式
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="upload/file/urlMode/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          唯一值模式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
