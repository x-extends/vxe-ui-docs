<template>
  <div>
    <CodeLight path="tabs/Demo1">
      <template #tip>
        <VxeTips status="primary" title="页签"></VxeTips>
      </template>
    </CodeLight>

    <CodeLight path="tabs/Demo2">
      <template #tip>
        <VxeTips status="primary">卡片风格的页签</VxeTips>
      </template>
    </CodeLight>

    <CodeLight path="tabs/Demo3">
      <template #tip>
        <VxeTips status="primary">带有边框背景的卡片风格页签</VxeTips>
      </template>
    </CodeLight>

    <CodeLight path="tabs/Demo4">
      <template #tip>
        <VxeTips status="primary">默认是不带间距的，可以通过 padding 参数加边距</VxeTips>
      </template>
    </CodeLight>

    <CodeLight path="tabs/Demo5">
      <template #tip>
        <VxeTips status="primary">固定头部，通过设置高来固定头部</VxeTips>
      </template>
    </CodeLight>

    <CodeLight path="tabs/Demo6">
      <template #tip>
        <VxeTips status="primary">带有圆角边框背景的卡片风格页签</VxeTips>
      </template>
    </CodeLight>
  </div>
</template>
