<template>
  <div>
    <CodeLight path="list/scroll/basics/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="纵向虚拟滚动">
          <div>通过 <ApiLink name="list" prop="virtual-y-config"/>.<ApiLink name="list" prop="enabled"/> 和 <ApiLink name="list" prop="virtual-y-config"/>.<ApiLink name="list" prop="gt"/> 启用虚拟滚动</div>
        </vxe-tip>
        <vxe-tip status="error">
          <div>最大可以支持 80w 行，不同浏览器不同版本理论上限行数不一样</div>
        </vxe-tip>
        <vxe-tip status="error">
          <div>需要固定容器高度和每行的高度，渲染性能达到极致流畅</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
