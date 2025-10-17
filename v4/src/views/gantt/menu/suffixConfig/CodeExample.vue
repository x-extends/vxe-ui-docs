<template>
  <div>
    <CodeLight path="gantt/menu/suffixConfig/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义后缀">
          通过 <ApiLink name="gantt" prop="suffix-config"/> 参数来配置
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/menu/suffixConfig/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          使用 svg 图标
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
