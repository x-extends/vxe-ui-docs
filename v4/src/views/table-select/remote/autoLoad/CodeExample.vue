<template>
  <div>
    <CodeLight path="table-select/remote/autoLoad/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="远程搜索">
          通过设置 <ApiLink name="table-select" prop="filterable" /> 和 <ApiLink name="table-select" prop="remote" /> 和 <ApiLink name="table-select" prop="remote-config" />.<ApiLink name="table-select" prop="queryMethod" /> 配置从服务端自动加载数据源
        </vxe-tip>
        <vxe-tip status="error">
          需要注意远程搜索是无法回显的，当选择的数据未被加载时将无法显示，仅支持 <ApiLink name="table-select" prop="option-props" />.value 和 <ApiLink name="table-select" prop="option-props" />.label 相同时可以使用
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
