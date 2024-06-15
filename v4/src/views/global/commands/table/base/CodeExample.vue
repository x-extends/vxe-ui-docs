<template>
  <div>
    <CodeLight path="global/commands/table/base/Demo1" :extraImports="['global/commands/table/base/demo1.table.commands']">
      <template #tip>
        <vxe-tip status="primary" title="Table 使用方"></vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/commands/table/base/Demo2" :extraImports="['global/commands/table/base/demo1.table.commands']">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用方式"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
