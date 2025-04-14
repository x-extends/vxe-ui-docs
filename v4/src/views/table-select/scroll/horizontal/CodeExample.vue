<template>
  <div>
    <CodeLight path="table-select/scroll/horizontal/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="横向虚拟滚动">
          通过 <ApiLink name="table-select" prop="grid-config"/>.virtual-x-config.enabled 与 <ApiLink name="table-select" prop="grid-config"/>.virtual-x-config.gt 组合开启，其中 enabled 为总开关，gt 是指当总列数大于指定列数时自动开启。
        </vxe-tip>
        <vxe-tip status="error">
          虚拟滚动必须设置容器宽高 <ApiLink name="table-select" prop="popup-config"/>.width 和 <ApiLink name="table-select" prop="popup-config"/>.height
        </vxe-tip>
        <vxe-tip status="success">
          虚拟滚动默认是开启的
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
