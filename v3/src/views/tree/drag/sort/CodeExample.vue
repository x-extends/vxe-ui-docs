<template>
  <div>
    <CodeLight path="tree/drag/sort/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="拖拽调整顺序">
          通过 <ApiLink name="tree" prop="drag"/> 启用行拖拽排序功能
        </vxe-tip>
        <vxe-tip status="error">
          拖拽排序树的数据是不会改变数据源的，如果需要改变数据可以放弃内置拖拽功能自行去实现排序功能
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
