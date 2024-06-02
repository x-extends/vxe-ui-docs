<template>
  <div>
    <CodeLight path="modal/message/Demo1">
      <template #tip>
        <vxe-tips status="primary" title="轻提示框">
          轻提示，通过全局函数调用 VxeUI.modal.message({}) 可以很灵活的用于各种提示场景。
        </vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="modal/message/Demo2">
      <template #tip>
        <vxe-tips status="primary">
          自定义模板
        </vxe-tips>
      </template>
    </CodeLight>
  </div>
</template>
