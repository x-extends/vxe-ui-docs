<template>
  <div>
    <CodeLight path="color-picker/global/parse/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="解析格式">
          调用 VxeUI.color.parseColor(color) 方法解析当前颜色格式
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="color-picker/global/parse/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          调用 VxeUI.color.toHex(color) 方法将值解析为 HEX 格式
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="color-picker/global/parse/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          调用 VxeUI.color.toRgb(color) 方法将值解析为 RGB 格式
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="color-picker/global/parse/Demo4">
      <template #tip>
        <vxe-tip status="primary">
          调用 VxeUI.color.toHsl(color) 方法将值解析为 HSL 格式
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="color-picker/global/parse/Demo5">
      <template #tip>
        <vxe-tip status="primary">
          调用 VxeUI.color.toHsv(color) 方法将值解析为 HSV 格式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
