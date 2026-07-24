<template>
  <div>
    <CodeLight path="color-picker/global/effect/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="效果处理">
          调用 VxeUI.color.lighten(color, ratio) 方法给颜色高亮
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="color-picker/global/effect/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          调用 VxeUI.color.darken(color, ratio) 方法给颜色加深
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
