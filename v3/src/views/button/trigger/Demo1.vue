<template>
  <div>
    <vxe-button trigger="hover">
      <template #default>鼠标移触发</template>
      <template #dropdowns>
        <vxe-button mode="text" content="下拉按钮1"></vxe-button>
        <vxe-button mode="text" content="下拉按钮2"></vxe-button>
        <vxe-button mode="text" content="下拉按钮3"></vxe-button>
      </template>
    </vxe-button>
  </div>
</template>
