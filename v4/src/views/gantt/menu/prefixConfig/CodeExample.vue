<template>
  <div>
    <CodeLight path="gantt/menu/prefixConfig/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义前缀">
          通过 <ApiLink name="gantt" prop="prefix-config"/> 参数来配置
        </vxe-tip>
        <vxe-tip status="error" title="小提示">
          当表格被放置在滚动条的容器中，可能会导致菜单面板被遮挡，可以通过设置 <ApiLink name="gantt" prop="menu-config"/>.<ApiLink name="gantt" prop="transfer"/> 参数解决
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/menu/prefixConfig/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          使用 svg 图标
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
