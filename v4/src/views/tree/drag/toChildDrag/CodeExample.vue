<template>
  <div>
    <CodeLight path="tree/drag/toChildDrag/Demo1" previewPath="/resource/docsImg/tree_drag_to_child_drag.gif">
      <template #tip>
        <vxe-tip status="primary" title="拖拽转成子节点">
          通过 <ApiLink name="tree" prop="drag-config"/>.<ApiLink name="tree" prop="isToChildDrag"/> 启用便捷拖拽成子节点，拖拽的同时按住 Ctrl 键可以自动拖放到该节点的子级
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
