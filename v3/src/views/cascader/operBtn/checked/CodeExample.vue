<template>
  <div>
    <CodeLight path="cascader/operBtn/checked/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="多选按钮">
          通过 <ApiLink name="cascader" prop="show-checked-button"/> 启用全选按钮、<ApiLink name="cascader" prop="show-clear-button"/> 清除按钮钮等
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="cascader/operBtn/checked/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="cascader" prop="checked-closable"/>, <ApiLink name="cascader" prop="clear-closable"/> 设置点击操作按钮后自动关闭
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
