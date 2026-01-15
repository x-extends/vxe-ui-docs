<template>
  <div>
    <CodeLight path="calendar/menu/visible/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="是否显示">
          通过 <ApiLink name="calendar" prop="menu-config"/>.<ApiLink name="calendar" prop="options"/>.<ApiLink name="calendar" prop="visible"/> 来配置是否显示
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
