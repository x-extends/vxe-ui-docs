<template>
  <div>
    <CodeLight path="form/basics/base/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="基础使用">
          启用 <ApiLink name="form-item" prop="item-render"/> 之后，才能启用自动重置功能，否则可以在 <ApiLink name="form" prop="reset"/> 事件中自行去重置数据，同时还需要调用 <ApiLink name="form" prop="updateStatus"/> 方法更新表单状态
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
