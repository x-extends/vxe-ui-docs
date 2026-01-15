<template>
  <div>
    <CodeLight path="calendar/menu/disabled/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="是否禁用">
          通过 <ApiLink name="calendar" prop="menu-config"/>.<ApiLink name="calendar" prop="options"/>.<ApiLink name="calendar" prop="disabled"/> 来配置是否禁用
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
