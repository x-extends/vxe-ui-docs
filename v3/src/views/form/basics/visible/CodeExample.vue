<template>
  <div>
    <CodeLight path="form/basics/visible/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="显示与隐藏项">
          通过修改 <ApiLink name="form-item" prop="visible"/> 属性来设置是否显示，自动相应
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="form/basics/visible/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过调用 <ApiLink name="form" prop="showItem"/>, <ApiLink name="form" prop="hideItem"/> 方法来设置是否显示
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
