<template>
  <div>
    <CodeLight path="tree/scroll/basics/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="虚拟滚动">
          通过 <ApiLink name="tree" prop="virtual-y-config"/>.<ApiLink name="tree" prop="enabled"/> 与 <ApiLink name="tree" prop="virtual-y-config"/>.<ApiLink name="tree" prop="gt"/> 组合开启，其中 <ApiLink name="tree" prop="enabled"/> 为总开关，<ApiLink name="tree" prop="gt"/> 是指当总行数大于指定节点数时自动开启。
        </vxe-tip>
        <vxe-tip status="success">
          <div>理论上限：最大可以支持 80w 个节点，当 gt 为 0 时为总是启用。</div>
        </vxe-tip>
        <vxe-tip status="error" title="小提示">
          <div>启用纵向虚拟滚动必须要有 <ApiLink name="tree" prop="height"/> 或 <ApiLink name="tree" prop="max-height"/></div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
