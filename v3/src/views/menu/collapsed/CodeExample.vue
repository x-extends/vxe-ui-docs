<template>
  <div>
    <CodeLight path="menu/collapsed/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="可折叠">
          通过 <ApiLink name="vxe-layout-aside" prop="collapsed"/> 设置单未折叠状态，左侧栏会自动联动菜单样式
        </vxe-tip>
        <vxe-tip status="error">
          折叠功能必须配合 <ApiLink name="layout-aside" /> 组件使用
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="menu/collapsed/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="menu" prop="collapse-fixed"/> 设置鼠标移上去自动展开
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
