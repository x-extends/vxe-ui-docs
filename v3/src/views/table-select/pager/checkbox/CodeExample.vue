<template>
  <div>
    <CodeLight path="table-select/pager/checkbox/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="多选">
          多选的使用用
        </vxe-tip>
        <vxe-tip status="error">
          需要注意分页是无法回显的，当选择的数据未被加载时将无法显示，仅支持 <ApiLink name="table-select" prop="option-props" />.value 和 <ApiLink name="table-select" prop="option-props" />.label 相同时可以使用
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
