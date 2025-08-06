<template>
  <div>
    <CodeLight path="select/config/scroll/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="虚拟滚动">
          默认情况下，当数据量过大时会自动启用，启用规则由 <ApiLink name="select" prop="virtual-y-config"/> 决定
        </vxe-tip>
        <vxe-tip status="success">
          <div>理论上限：最大可以支持 80w 行。</div>
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="select/config/scroll/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          也可以通过方法 <ApiLink name="select" prop="loadData"/> 或 <ApiLink name="select" prop="reloadData"/> 来加载数据，阻断数据双向绑定，渲染性能可再提升 5 ~ 20 倍。
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
