<template>
  <div>
    <CodeLight path="color-picker/global/type/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="类型转换">
          调用 VxeUI.color.toHexString(color) 方法 RGB 转换 HEX
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="color-picker/global/type/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          调用 VxeUI.color.toRgbString(color) 方法 HEX 转换 RGB
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
