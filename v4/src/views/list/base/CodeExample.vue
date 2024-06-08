<template>
  <div>
    <CodeLight path="list/base/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="实现大量数据虚拟列表">
          <div>最大可以支持 80w 行，将大数组按需切割成可视区 items 条数进行渲染，拥有最高性能的虚拟列表渲染能力，使渲染性能大幅提升。</div>
        </vxe-tip>
        <vxe-tip status="error">
          <div>需要固定容器高度和每行的高度，渲染性能达到极致流畅）</div>
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
