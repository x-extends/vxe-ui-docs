<template>
  <div>
    <CodeLight path="table-select/base/columns/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="列配置">
          列配置有两种方式：可以通过 <ApiLink name="table-select" prop="columns"/> 来定义列
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table-select/base/columns/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          还可以通过 <ApiLink name="table-select" prop="grid-config"/>.<ApiLink name="table-select" prop="columns"/> 来定义列
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
