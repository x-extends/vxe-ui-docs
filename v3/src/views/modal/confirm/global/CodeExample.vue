<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="全局调用"></vxe-tip>
        <vxe-tip status="success">
          <div>弹出确认框：VxeUI.modal.confirm({})</div>
          <div>根据ID获取指定弹框：VxeUI.modal.get(id)</div>
          <div>根据ID关闭指定弹框：VxeUI.modal.close(id)</div>
          <div>关闭全部弹框：VxeUI.modal.close()</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
