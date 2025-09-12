<template>
  <div>
    <CodeLight path="table-select/proxy/pager/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="配置分页查询接口">
          分页查询跟列表查询的配置是一模一样的，区别就是多加一个分页配置项 <ApiLink name="table-select" prop="page-config"/>，以及接口响应结果带分页信息
        </vxe-tip>
        <vxe-tip status="error">
          需要注意分页是无法回显的，当选择的数据未被加载时将无法显示，仅支持 <ApiLink name="table-select" prop="option-props"/>.value 和 <ApiLink name="table-select" prop="option-props"/>.label 相同时可以使用
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
