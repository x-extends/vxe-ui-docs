<template>
  <div>
    <CodeLight path="global/renderer/table/toolbar/button/Demo1" :extraImports="[{type:'jsx', path: 'global/renderer/table/toolbar/button/demo1.table.renderer'}]">
      <template #tip>
        <vxe-tip status="primary" title="实现一个左侧操作按钮">Table 使用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/renderer/table/toolbar/button/Demo2" :extraImports="[{type:'jsx', path: 'global/renderer/table/toolbar/button/demo1.table.renderer'}]">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
