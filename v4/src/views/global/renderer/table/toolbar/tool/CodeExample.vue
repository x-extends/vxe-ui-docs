<template>
  <div>
    <CodeLight path="global/renderer/table/toolbar/tool/Demo1" :extraImports="[{type:'jsx', path: 'global/renderer/table/toolbar/tool/demo1.table.renderer'}]">
      <template #tip>
        <vxe-tip status="primary" title="实现一个右侧工具按钮">Table 使用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/renderer/table/toolbar/tool/Demo2" :extraImports="[{type:'jsx', path: 'global/renderer/table/toolbar/tool/demo1.table.renderer'}]">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
