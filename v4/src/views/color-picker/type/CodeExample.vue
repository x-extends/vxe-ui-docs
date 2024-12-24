<template>
  <div>
    <CodeLight path="color-picker/type/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="绑定值类型">
          支持 HEX、RGB、RGBA 类型，默认是 HEX 格式
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="color-picker/type/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          设置为 RGB 类型，当指定为 rgb 类型时，如果色值有透明度，则返回 rgba 格式，如果色值没有透明度，则返回 rgb 格式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
