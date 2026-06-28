<template>
  <div>
    <CodeLight path="list/base/itemHeight/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="设置列表项高度">
          <div>通过 <ApiLink name="list" prop="row-config"/>.<ApiLink name="list" prop="height"/> 设置列表每一项高度</div>
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="list/base/itemHeight/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          <div>通过 <ApiLink name="list" prop="row-config"/>.<ApiLink name="list" prop="className"/> 来设置每一项高度或者自定义样式</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
