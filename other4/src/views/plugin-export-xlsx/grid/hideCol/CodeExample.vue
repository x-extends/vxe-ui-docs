<template>
  <div>
    <CodeLight path="plugin-export-xlsx/grid/hideCol/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="导出隐藏列">
          当导出表格数据时时，需要额外导出隐藏列时可以使用 <ApiLink name="grid" prop="export-config"/>.<ApiLink name="grid" prop="extraFields"/> 额外设置导出隐藏的列，如果同时设置 <ApiLink name="grid" prop="export-config"/>.<ApiLink name="grid" prop="columns"/> 或 <ApiLink name="grid" prop="export-config"/>.<ApiLink name="grid" prop="includeFields"/> 则会被覆盖；哈还可以同时设置 <ApiLink name="grid" prop="export-config"/>.<ApiLink name="grid" prop="excludeFields"/> 来排除指定列
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="plugin-export-xlsx/grid/hideCol/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="grid" prop="export-config"/>.<ApiLink name="grid" prop="columns"/> 导出指定列
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
