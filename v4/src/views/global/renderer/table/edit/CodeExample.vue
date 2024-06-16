<template>
  <div>
    <CodeLight path="global/renderer/table/edit/Demo1" :extraImports="[{type:'jsx', path: 'global/renderer/table/edit/demo1.table.renderer'}]">
      <template #tip>
        <vxe-tip status="primary" title="Table 使用方"></vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/renderer/table/edit/Demo2" :extraImports="[{type:'jsx', path: 'global/renderer/table/edit/demo1.table.renderer'}]">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用方"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
