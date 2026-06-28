<template>
  <div>
    <CodeLight path="list/drag/sort/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="拖拽">
          通过 <ApiLink name="list" prop="drag-config"/> 和设置 <ApiLink name="list" prop="row-config"/>.<ApiLink name="list" prop="keyField"/> 与 <ApiLink name="list" prop="row-config"/>.<ApiLink name="list" prop="useKey"/> 启用行拖拽排序功能
        </vxe-tip>
        <vxe-tip status="error">
          启用拖拽排序必须要设置唯一主键
        </vxe-tip>
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | MouseLeft | 移动到指定行的上面或者下面 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
