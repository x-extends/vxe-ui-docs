<template>
  <div>
    <vxe-button disabled transfer>
      <template #default>禁用状态</template>
      <template #dropdowns>
        <vxe-button mode="text" content="下拉按钮1"></vxe-button>
        <vxe-button mode="text" content="下拉按钮2"></vxe-button>
        <vxe-button mode="text" content="下拉按钮3"></vxe-button>
      </template>
    </vxe-button>

    <vxe-button transfer>
      <template #default>禁用选项</template>
      <template #dropdowns>
        <vxe-button mode="text" content="下拉按钮1"></vxe-button>
        <vxe-button mode="text" content="下拉按钮2" disabled></vxe-button>
        <vxe-button mode="text" content="下拉按钮3"></vxe-button>
      </template>
    </vxe-button>
  </div>
</template>
