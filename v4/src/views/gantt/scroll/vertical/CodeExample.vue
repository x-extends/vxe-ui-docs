<template>
  <div>
    <CodeLight path="gantt/scroll/vertical/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="纵向虚拟滚动">
          通过 virtual-y-config.enabled 与 virtual-y-config.gt 组合开启，其中 enabled 为总开关，gt 是指当总行数大于指定行数时自动开启。
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
  </div>
</template>
