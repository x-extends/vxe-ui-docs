<template>
  <div>
    <CodeLight path="split/basics/resize/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="拖拽调整宽度">
          通过 <ApiLink name="split" prop="resize"/> 设置是否允许手动拖拽调整宽度
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="split/basics/resize/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="split" prop="resize-config"/>.<ApiLink name="split" prop="immediate"/> 设置是否实时更新
        </vxe-tip>
        <vxe-tip status="error">
          当渲染内容比较复杂时，实时更新可能会导致卡顿
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
