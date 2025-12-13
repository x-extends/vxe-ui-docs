<template>
  <div>
    <CodeLight path="tree/drag/peerDrag/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="同层级拖拽">
          通过 <ApiLink name="tree" prop="drag-config"/>.<ApiLink name="tree" prop="isPeerDrag"/> 启用同层级拖拽
        </vxe-tip>
        <vxe-tip status="error">
          拖拽功能仅支持 <ApiLink name="tree" prop="transform"/> 模式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
