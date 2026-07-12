<template>
  <div>
    <CodeLight path="tree/other/treeTransfer/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="实现树穿梭框选择">
          实现树穿梭框选择，支持点击选择或者跨树直接拖拽
        </vxe-tip>
        <vxe-tip status="error">
          跨树拖拽需要确保数据主键不重复，通过 <ApiLink name="tree" prop="node-config"/>.<ApiLink name="tree" prop="keyField"/> 指定主键字段名
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
