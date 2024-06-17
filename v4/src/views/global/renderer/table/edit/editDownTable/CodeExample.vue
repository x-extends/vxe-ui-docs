<template>
  <div>
    <CodeLight
      path="global/renderer/table/edit/editDownTable/Demo1"
      :extraImports="['global/renderer/table/edit/editDownTable/DemoDownTable.vue', 'global/renderer/table/edit/editDownTable/demo1.table.renderer.jsx']">
      <template #tip>
        <vxe-tip status="primary" title="实现一个下拉表格">Table 使用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight
      path="global/renderer/table/edit/editDownTable/Demo2"
      :extraImports="['global/renderer/table/edit/editDownTable/DemoDownTable.vue', 'global/renderer/table/edit/editDownTable/demo1.table.renderer.jsx']">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
