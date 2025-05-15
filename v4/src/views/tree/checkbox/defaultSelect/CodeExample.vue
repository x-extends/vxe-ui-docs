<template>
  <div>
    <CodeLight path="tree/checkbox/defaultSelect/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="默认选中"></vxe-tip>
        <vxe-tip status="error">
          需要注意默认行为只会触发一次，如果需要每次选中，可以配合 <ApiLink name="tree" prop="getCheckboxNodes"/>、<ApiLink name="tree" prop="setCheckboxByNodeId"/> 使用
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
