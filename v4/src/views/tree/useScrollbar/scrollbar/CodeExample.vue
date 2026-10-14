<template>
  <div>
    <CodeLight path="tree/useScrollbar/scrollbar/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="虚拟滚动条">
          默认是使用原生滚动条，可以通过 <ApiLink name="tree" prop="use-scrollbar" /> 使用虚拟滚动条
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="tree/useScrollbar/scrollbar/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="tree" prop="scrollbar-config" />.<ApiLink name="tree" prop="visible" /> 来禁用滚动条
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
