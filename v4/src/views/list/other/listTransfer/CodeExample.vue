<template>
  <div>
    <CodeLight path="list/other/listTransfer/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="实现列表穿梭框选择">
          实现列表穿梭框选择，支持点击选择或者跨列表直接拖拽
        </vxe-tip>
        <vxe-tip status="error">
          跨列表拖拽需要确保数据主键不重复，通过 <ApiLink name="list" prop="row-config"/>.<ApiLink name="list" prop="keyField"/> 指定主键字段名
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
