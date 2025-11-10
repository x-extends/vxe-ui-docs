<template>
  <div>
    <CodeLight path="upload/file/urlMode/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="URL模式">
          默认情况下绑定的值是对象数组，可以通过设置 <ApiLink name="upload" prop="url-mode"/> 设置 URL 模式
        </vxe-tip>
        <vxe-tip status="error">
          URL 模式的 name 是以路径末端或者参数形式读取的，可以通过参数参数 <ApiLink name="upload" prop="url-args"/> 设置自动拼接
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
