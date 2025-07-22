<template>
  <div>
    <CodeLight path="form/basics/template/prefix/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义标题前缀模板">
          通过插槽 <ApiLink name="form-item" prop="prefix"/> 来自定义标题前缀模板
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="form/basics/template/prefix/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          上下布局
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
