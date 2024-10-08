<template>
  <div>
    <CodeLight path="plugin-export-xlsx/table/export/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="导出 XLSX 文件">
          通过手动调用 exportData 方法可以直接导出文件，导出时单元格类型默认是自动转换的，如果是需要字符串类型，可以通过 column.cell-type 设置
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
