<template>
  <div>
    <CodeLight path="context-menu/icon/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="前缀与后缀图标">
          通过 <ApiLink name="context-menu" prop="options"/>.<ApiLink name="context-menu" prop="prefixConfig"/> | <ApiLink name="context-menu" prop="options"/>.<ApiLink name="context-menu" prop="suffixConfig"/> 配置菜前缀和后缀
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="context-menu/icon/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          配置后缀
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
