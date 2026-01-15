<template>
  <div>
    <CodeLight path="menu/menu/visibleMethod/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="权限控制">
          通过 <ApiLink name="menu" prop="menu-config"/>.<ApiLink name="menu" prop="visibleMethod"/> | <ApiLink name="menu" prop="visible"/> | <ApiLink name="menu" prop="disabled"/> 属性来控制菜单选项的操作权限，可以精确到每一个日期的显示隐藏与禁用控制
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
