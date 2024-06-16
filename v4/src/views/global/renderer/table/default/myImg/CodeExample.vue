<template>
  <div>
    <CodeLight path="global/renderer/table/default/myImg/Demo1" :extraImports="[{type:'jsx', path: 'global/renderer/table/default/myImg/demo1.table.renderer'}]">
      <template #tip>
        <vxe-tip status="primary" title="实现一个图片预览">Table 使用</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="global/renderer/table/default/myImg/Demo2" :extraImports="[{type:'jsx', path: 'global/renderer/table/default/myImg/demo1.table.renderer'}]">
      <template #tip>
        <vxe-tip status="primary" title="Grid 使用"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
