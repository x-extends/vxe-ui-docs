<template>
  <div>
    <CodeLight path="form/config/validate/manual/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="手动调用校验">
          通过调用 <ApiLink name="form" prop="validate"/> 方法手动校验，校验失败会返回错误字段信息，校验成功则不返回值
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="form/config/validate/manual/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          带边框样式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
