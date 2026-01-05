<template>
  <div>
    <CodeLight path="context-menu/global/contextMenu/Demo1" previewPath="/resource/docsImg/context_menu_global_open.gif">
      <template #tip>
        <vxe-tip status="primary" title="全局调用"></vxe-tip>
        <vxe-tip status="success">
          <div>打开右键菜单：VxeUI.contextMenu.open({ options })</div>
          <div>事件触发右键菜单：VxeUI.contextMenu.openByEvent(event, { options })</div>
          <div>关闭右键菜单：VxeUI.contextMenu.close()</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
