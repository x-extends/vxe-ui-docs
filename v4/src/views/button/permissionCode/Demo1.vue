<template>
  <div>
    <p>
      <vxe-button mode="text" permission-code="xxx">文本按钮</vxe-button>
    </p>
    <p>
      <vxe-button permission-code="xxx">普通按钮</vxe-button>
    </p>
    <p>
      <vxe-button-group mode="text" permission-code="xxx">
        <vxe-button content="文本按钮1" permission-code="xxx"></vxe-button>
        <vxe-button content="文本按钮2" permission-code="xxx"></vxe-button>
        <vxe-button content="文本按钮3" permission-code="xxx"></vxe-button>
      </vxe-button-group>
    </p>
    <p>
      <vxe-button permission-code="xxx">
        <template #default>下拉按钮</template>
        <template #dropdowns>
          <vxe-button mode="text" content="" permission-code="xxx">下拉按钮1</vxe-button>
          <vxe-button mode="text" permission-code="xxx">下拉按钮2</vxe-button>
          <vxe-button mode="text" permission-code="xxx">下拉按钮3</vxe-button>
        </template>
      </vxe-button>
    </p>
  </div>
</template>
