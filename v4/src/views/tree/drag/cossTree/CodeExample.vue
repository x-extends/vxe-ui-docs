<template>
  <div>
    <CodeLight path="tree/drag/cossTree/Demo1" previewPath="/resource/docsImg/tree_drag_coss_tree.gif">
      <template #tip>
        <vxe-tip status="primary" title="跨树拖拽">
          <ApiLink name="tree" prop="drag-config"/>.<ApiLink name="tree" prop="isCrossTableDrag"/> 启用跨树组件、多树组件互相拖拽
        </vxe-tip>
        <vxe-tip status="error">
          拖拽功能仅支持 <ApiLink name="tree" prop="transform"/> 模式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
