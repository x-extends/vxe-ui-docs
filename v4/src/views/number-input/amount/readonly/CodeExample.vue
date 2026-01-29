<template>
  <div>
    <CodeLight path="number-input/amount/readonly/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="只读模式">
          通过 <ApiLink name="number-input" prop="readonly"/> 设置查看模式
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="number-input/amount/readonly/Demo2">
      <template #tip>
        <vxe-tip status="primary" title="编辑模式">
          通过 <ApiLink name="number-input" prop="editable"/> 设置禁止输入，但是依然可以通过点击控制按钮调整数值
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
