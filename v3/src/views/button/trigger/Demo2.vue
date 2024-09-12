<template>
  <div>
    <vxe-button trigger="click">
      <template #default>点击触发</template>
      <template #dropdowns>
        <vxe-button mode="text" content="下拉按钮1"></vxe-button>
        <vxe-button mode="text" content="下拉按钮2"></vxe-button>
        <vxe-button mode="text" content="下拉按钮3"></vxe-button>
      </template>
    </vxe-button>
  </div>
</template>
