<template>
  <div>
    <CodeLight path="form/config/validate/changeToSubmit/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="值改变时自动提交">
          通过设置 <ApiLink name="form" prop="valid-config"/>.<ApiLink name="form-item" prop="changeToSubmit"/> 是否在 change 时自动提交,该参数对于下拉选项类型的控件就非常有用了
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
