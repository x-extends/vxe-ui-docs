<template>
  <div>
    <CodeLight path="select/base/scroll/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="虚拟滚动">
          默认情况下，当数据量过大时会自动启用，启用规则由 <ApiLink name="select" prop="virtual-y-config"/> 决定
        </vxe-tip>
        <vxe-tip status="error">
          <div>注：大数据量需请使用 <ApiLink name="select" prop="options"/> 配置数据源</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
