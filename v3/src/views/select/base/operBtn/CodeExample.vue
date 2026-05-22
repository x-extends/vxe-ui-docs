<template>
  <div>
    <CodeLight path="select/base/operBtn/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="操作按钮">
          通过 <ApiLink name="select" prop="show-checked-button"/> 启用全选按钮、<ApiLink name="select" prop="show-clear-button"/> 清除按钮、<ApiLink name="select" prop="show-close-button"/> 关闭按钮等
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="select/base/operBtn/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="select" prop="checked-closable"/>, <ApiLink name="select" prop="clear-closable"/> 设置点击操作按钮后自动关闭
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
