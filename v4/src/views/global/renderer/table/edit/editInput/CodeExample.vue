<template>
  <div>
    <CodeLight path="global/renderer/table/edit/editInput/Demo1" :extraImports="[{type:'jsx', path: 'global/renderer/table/edit/editInput/demo1.table.renderer'}]">
      <template #tip>
        <vxe-tip status="primary" title="实现一个金额输入">Table 使用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/renderer/table/edit/editInput/Demo2" :extraImports="[{type:'jsx', path: 'global/renderer/table/edit/editInput/demo1.table.renderer'}]">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
