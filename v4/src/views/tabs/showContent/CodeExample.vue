<template>
  <div>
    <CodeLight path="tabs/showContent/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="是否显示面板内容">
          通过 <ApiLink name="tabs" prop="show-body"/>=false 来关闭面板内容
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="tabs/showContent/Demo2">
      <template #tip>
        <vxe-tip status="primary">卡片风格的页签</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="tabs/showContent/Demo3">
      <template #tip>
        <vxe-tip status="primary">带有边框背景的卡片风格页签</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="tabs/showContent/Demo4">
      <template #tip>
        <vxe-tip status="primary">带有圆角边框背景的卡片风格页签</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
