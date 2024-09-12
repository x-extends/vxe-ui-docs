<template>
  <div>
    <CodeLight path="tabs/permissionCode/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="权限码">会根据权限自动隐藏</vxe-tip>
        <vxe-tip status="success">
          查看<vxe-link status="primary" :router-link="{name: 'StartPermission'}">全局权限控制</vxe-link>
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="tabs/permissionCode/Demo2">
      <template #tip>
        <vxe-tip status="primary">配置式</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
