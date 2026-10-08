<template>
  <div>
    <CodeLight path="scrollbar/base/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="滚动条">
          通过 <ApiLink name="scrollbar" prop="height" />, <ApiLink name="scrollbar" prop="width" /> 设置容器宽高
        </vxe-tip>
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | Arrow Up ↑ | 匀速向上滚动数据 |
            | Arrow Down ↓ | 匀速向下滚动数据 |
            | Arrow Left ← | 匀速向左滚动数据 |
            | Arrow Right → | 匀速向右滚动数据 |
            | Page Up | 向上翻页滚动 |
            | Page Down | 向下翻页滚动 |
            | Spacebar | 翻页滚动 |
            | Home | 滚动到顶部 |
            | End | 滚动到底部 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>

    <CodeLight path="scrollbar/base/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          纵向滚动条
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="scrollbar/base/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          横向滚动条
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
