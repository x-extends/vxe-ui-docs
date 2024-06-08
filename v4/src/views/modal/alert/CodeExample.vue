<template>
  <div>
    <CodeLight path="modal/alert/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="提示框">
          提示框，通过全局函数调用 VxeUI.modal.message({}) 可以很灵活的用于各种提示场景。
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="modal/alert/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          自定义模板
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
