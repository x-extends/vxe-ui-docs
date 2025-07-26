<template>
  <div>
    <CodeLight path="number-input/float/readonly/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="只读模式">
          通过 <ApiLink name="number-input" prop="readonly"/> 设置查看模式
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="number-input/float/readonly/Demo2">
      <template #tip>
        <vxe-tip status="primary" title="编辑模式">
          通过 <ApiLink name="number-input" prop="editable"/> 设置禁止输入
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
