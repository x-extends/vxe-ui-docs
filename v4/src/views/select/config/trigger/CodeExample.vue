<template>
  <div>
    <CodeLight path="select/config/trigger/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="触发方式">
          通过 <ApiLink name="select" prop="popup-config"/>.<ApiLink name="select" prop="trigger"/> 来设置下拉面板的触发方式
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="select/config/trigger/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          设置为点击图标触发
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="select/config/trigger/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          设置为手动触发
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
