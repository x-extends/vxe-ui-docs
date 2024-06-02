<template>
  <div>
    <CodeLight path="layout/Demo1">
      <template #tip>
        <vxe-tips status="primary" title="页面布局">
          整个页面不固定，随滚动条而滚动
        </vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="layout/Demo2">
      <template #tip>
        <vxe-tips status="primary">固定头部和尾部，内容区显示滚动条</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="layout/Demo3">
      <template #tip>
        <vxe-tips status="primary">左侧区显示滚动条、内容区滚动条</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="layout/Demo4">
      <template #tip>
        <vxe-tips status="primary">固定头部，左侧区显示滚动条、内容区滚动条</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="layout/Demo5">
      <template #tip>
        <vxe-tips status="primary">固定头部，左侧区显示滚动条、尾部显示在内容区，内容区滚动条</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="layout/Demo6">
      <template #tip>
        <vxe-tips status="primary">固定左侧和头部和尾部，内容区显示滚动条</vxe-tips>
      </template>
    </CodeLight>
  </div>
</template>
