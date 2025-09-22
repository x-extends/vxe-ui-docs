<template>
  <div>
    <CodeLight path="table-select/proxy/form/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="配置表单查询">
         <div>只需要通过 <ApiLink name="table-select" prop="form-config"/>.items 配置表单项并通过 <ApiLink name="table-select" prop="proxy-config"/>.form 启用表单数据代理，就可以非常简单的渲染一个查询表单。</div>
         <div>如果需要默认值，还可以通过 <ApiLink name="form-item" prop="itemRender"/>.<ApiLink name="form-item" prop="defaultValue"/> 设置</div>
        </vxe-tip>
        <vxe-tip status="error">
          需要注意分页是无法回显的，当选择的数据未被加载时将无法显示，仅支持 <ApiLink name="table-select" prop="option-props"/>.value 和 <ApiLink name="table-select" prop="option-props"/>.label 相同时可以使用
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
