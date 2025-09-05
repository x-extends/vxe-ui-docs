<template>
  <div>
    <CodeLight path="text/clickToCopy/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="点击复制内容">
          通过 <ApiLink name="text" prop="click-to-copy"/> 启用点击图标后可以将内容复制到剪贴板
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="text/clickToCopy/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="text" prop="copy-icon"/> 自定义复制功能的图标
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="text/clickToCopy/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="text" prop="copy-layout"/> 设置复制图标位置显示在右边
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
