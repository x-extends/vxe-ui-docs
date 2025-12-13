<template>
  <div>
    <CodeLight path="tree/drag/cossDrag/Demo1" previewPath="/resource/pluginImg/tree_drag_coss_drag.gif">
      <template #tip>
        <vxe-tip status="primary" title="跨层级拖拽">
          通过 <ApiLink name="tree" prop="drag-config"/>.<ApiLink name="tree" prop="isCrossDrag"/> 启用跨层级拖拽
        </vxe-tip>
        <vxe-tip status="error">
          拖拽功能仅支持 <ApiLink name="tree" prop="transform"/> 模式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
