<template>
  <div>
    <CodeLight path="list/menu/visibleMethod/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="权限控制">
          通过 <ApiLink name="list" prop="menu-config"/>.<ApiLink name="list" prop="visibleMethod"/> | <ApiLink name="list" prop="visible"/> | <ApiLink name="list" prop="disabled"/> 属性来控制菜单选项的操作权限，可以精确到每一个行的显示隐藏与禁用控制
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
