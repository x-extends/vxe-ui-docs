<template>
  <div>
    <CodeLight path="menu/menu/disabled/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="是否禁用">
          通过 <ApiLink name="menu" prop="menu-config"/>.<ApiLink name="menu" prop="options"/>.<ApiLink name="menu" prop="disabled"/> 来配置是否禁用
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
