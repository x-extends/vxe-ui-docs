<template>
  <div>
    <CodeLight path="textarea/editable/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="不可编辑模式">
          通过 <ApiLink name="textarea" prop="editable"/>=false 设置为不可编辑，该模式下会保持输入框当不可输入
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
