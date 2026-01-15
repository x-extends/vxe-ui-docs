<template>
  <div>
    <CodeLight path="menu/menu/visible/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="是否显示">
          通过 <ApiLink name="menu" prop="menu-config"/>.<ApiLink name="menu" prop="options"/>.<ApiLink name="menu" prop="visible"/> 来配置是否显示
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
