<template>
  <div>
    <CodeLight path="split/config/action/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="可折叠">
          通过 <ApiLink name="split" prop="action-config"/>.<ApiLink name="split" prop="show-prev-button"/> 或 <ApiLink name="split" prop="action-config"/>.<ApiLink name="split" prop="show-next-button"/> 设置指定面板是否显示折叠按钮
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="split/config/action/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          上下布局
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
