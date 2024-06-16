<template>
  <div>
    <CodeLight path="global/renderer/table/default/myLink/Demo1" :extraImports="[{type:'jsx', path: 'global/renderer/table/default/myLink/demo1.table.renderer'}]">
      <template #tip>
        <vxe-tip status="primary" title="实现一个超链接">Table 使用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/renderer/table/default/myLink/Demo2" :extraImports="[{type:'jsx', path: 'global/renderer/table/default/myLink/demo1.table.renderer'}]">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
