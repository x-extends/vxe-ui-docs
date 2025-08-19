<template>
  <div>
    <CodeLight path="gantt/template/edit/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          可编辑模板，使用插槽 <ApiLink name="column" prop="edit"/> 来自定义模板
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/template/edit/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          使用 JSX <ApiLink name="column" prop="edit"/> 来自定义模板
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
