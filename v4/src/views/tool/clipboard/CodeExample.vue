<template>
  <div>
    <CodeLight path="tool/clipboard/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="剪贴板">
          通过调用 VxeUI.clipboard.copy('xxx') 方法将字符串复制到剪贴板
        </vxe-tip>
        <vxe-tip status="error" title="">
          权限说明：需要注意该方法只会在事件中调用才能触发生效，其他方式调用无效
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="tool/clipboard/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          读取已复制的内容，通过调用 VxeUI.clipboard.getText() 方法读取剪贴板已复制的内容
        </vxe-tip>
        <vxe-tip status="error">
          权限说明：该方法仅用于当前站点且手动调用 VxeUI.clipboard.copy 复制的内容的有效，其他方式复制的行为无权限获取
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
